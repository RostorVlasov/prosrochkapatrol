<template>
    <AdaptiveContainer class="mt-5">
        <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 mb-8 shadow-sm">
            <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Новости и статьи</h1>
            <p class="text-zinc-600 dark:text-zinc-400">
                Просветительские материалы проекта FreshCheck
            </p>
        </div>

        <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 mb-8 shadow-sm">
            <h2 class="font-semibold text-zinc-900 dark:text-white mb-3">О разделе</h2>
            <div class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 space-y-3 leading-relaxed">
                <p>
                    Этот раздел посвящен просветительской работе проекта FreshCheck. Здесь публикуются обзоры законодательства в сфере пищевой безопасности, 
                    полезные советы по защите прав потребителей и актуальные новости нашего движения.
                </p>
                <p class="text-zinc-500 dark:text-zinc-400 italic text-xs border-t border-zinc-100 dark:border-zinc-800 pt-3">
                    Материалы основаны на открытых источниках и актуальны на момент публикации. Данная информация носит ознакомительный характер, 
                    не является официальной юридической консультацией и не заменяет её.
                </p>
            </div>
        </div>

        <!-- Поиск -->
        <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 mb-6 shadow-sm">
            <input 
                v-model="searchInput" 
                placeholder="Поиск по статьям и новостям..." 
                type="text" 
                :class="input() + ' w-full'"
            >
        </div>
        
        <!-- Фильтр по рубрикам -->
        <div v-if="uniqueRubrics.length > 0" class="mb-6 flex flex-wrap gap-2 items-center">
            <button
                @click="blogStore.clearRubrics()"
                :class="[
                    'sm:px-4 sm:py-2 p-1 rounded-full cursor-pointer text-xs sm:text-sm font-medium transition-colors border',
                    blogStore.selectedRubricIds.length === 0 
                        ? 'bg-surface-brown text-white border-surface-brown' 
                        : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700'
                ]"
            >
                Все рубрики
            </button>

            <!-- Список рубрик -->
            <button
                v-for="rubric in displayedRubrics"
                :key="rubric.id"
                @click="blogStore.toggleRubric(rubric.id)"
                :class="[
                    'sm:px-4 sm:py-2 p-1.5 rounded-full capitalize cursor-pointer text-xs sm:text-sm font-medium transition-colors border',
                    blogStore.selectedRubricIds.includes(rubric.id) 
                        ? 'bg-surface-brown text-white border-surface-brown' 
                        : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700'
                ]"
            >
                {{ rubric.name }}
            </button>

            <!-- Кнопка Показать/Скрыть -->
            <button
                v-if="uniqueRubrics.length > INITIAL_RUBRICS_LIMIT"
                @click="isExpanded = !isExpanded"
                class="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-surface-brown dark:hover:text-surface-brown underline transition-colors cursor-pointer px-2"
            >
                {{ isExpanded ? 'Свернуть' : `+ Ещё ${uniqueRubrics.length - INITIAL_RUBRICS_LIMIT}` }}
            </button>
        </div>
        
        <div v-if="filteredPosts.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PostItem v-for="post in filteredPosts" :key="post.id" :post="post" />
        </div>

        <div v-else class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-16 text-center shadow-sm">
            <p class="text-zinc-500 dark:text-zinc-400">
                {{ searchInput || blogStore.selectedRubricIds.length > 0 ? 'Поиск не дал результатов.' : 'Материалов пока нет.' }}
            </p>
        </div>
    </AdaptiveContainer>
</template>

<script lang="ts" setup>
import { useBlogStore } from '~/stores/blog';
import type { PostDoc, PostsResponse } from '~/types/post.types';

const blogStore = useBlogStore()
const searchInput = ref<string>('')
const debouncedSearch = refDebounced(searchInput, 300)

const isExpanded = ref(false)
const INITIAL_RUBRICS_LIMIT = 6

const { data: postsResponse } = await useApiFetch<PostsResponse>('/api/posts', {
    key: 'posts-list',
    query: { limit: 200 },
})

const allPosts = computed<PostDoc[]>(() => {
    return postsResponse.value?.docs || []
})

const uniqueRubrics = computed(() => {
    const rubricsMap = new Map()
    allPosts.value.forEach(post => {
        if (post.rubrics && post.rubrics.length) {
            post.rubrics.forEach(rubric => {
                if (!rubricsMap.has(rubric.id)) {
                    rubricsMap.set(rubric.id, rubric)
                }
            })
        }
    })

    let rubrics = Array.from(rubricsMap.values())
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.name.length - b.name.length)

    rubrics.sort((a, b) => {
        const aSelected = blogStore.selectedRubricIds.includes(a.id)
        const bSelected = blogStore.selectedRubricIds.includes(b.id)
        if (aSelected && !bSelected) return -1
        if (!aSelected && bSelected) return 1
        return 0
    })

    return rubrics
})

const displayedRubrics = computed(() => {
    if (isExpanded.value) {
        return uniqueRubrics.value
    }
    return uniqueRubrics.value.slice(0, INITIAL_RUBRICS_LIMIT)
})

const filteredPosts = computed(() => {
    let posts = [...allPosts.value].sort((a, b) => {
        return new Date(b.admin_panel.published_at).getTime() - new Date(a.admin_panel.published_at).getTime()
    })
    
    const query = debouncedSearch.value.toLowerCase().trim()
    if (query) {
        posts = posts.filter((post: PostDoc) => {
            const title = (post.title || '').toLowerCase()
            const author = (post.admin_panel?.author?.name || '').toLowerCase()
            const rubrics = (post.rubrics || [])
            const hasRubricMatch = rubrics.some((r: any) => 
                (r.name || '').toLowerCase().includes(query)
            )
            return title.includes(query) || author.includes(query) || hasRubricMatch
        })
    }

    if (blogStore.selectedRubricIds.length > 0) {
        posts = posts.filter((post: PostDoc) => {
            return post.rubrics && post.rubrics.some((r: any) => blogStore.selectedRubricIds.includes(r.id))
        })
    }

    return posts
})

useSeoMeta({
    title: 'Новости и статьи',
    description: `Новости и статьи на сайте FreshCheck`,
    ogTitle: 'Новости и статьи',
    ogDescription: `Новости и статьи на сайте FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});
</script>