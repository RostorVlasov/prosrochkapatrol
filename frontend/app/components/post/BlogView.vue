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
            <div class="text-sm text-zinc-600 dark:text-zinc-300 space-y-3 leading-relaxed">
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

        <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 mb-8 shadow-sm">
            <input 
                v-model="searchInput" 
                placeholder="Поиск по статьям и новостям..." 
                type="text" 
                :class="input() + ' w-full'"
            >
        </div>
        
        <div v-if="filteredPosts.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PostItem v-for="post in filteredPosts" :key="post.id" :post="post" />
        </div>

        <div v-else class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-16 text-center shadow-sm">
            <p class="text-zinc-500 dark:text-zinc-400">
                {{ searchInput ? 'Поиск не дал результатов.' : 'Материалов пока нет.' }}
            </p>
        </div>
    </AdaptiveContainer>
</template>

<script lang="ts" setup>
import type { PostDoc, PostsResponse } from '~/types/post.types';

const searchInput = ref<string>('')
const debouncedSearch = refDebounced(searchInput, 300)

const { data: postsResponse } = await useApiFetch<PostsResponse>('/api/posts', {
    key: 'posts-list',
    query: { limit: 200 },
})

const allPosts = computed<PostDoc[]>(() => {
    return postsResponse.value?.docs || []
})

const filteredPosts = computed(() => {
    const posts = allPosts.value
    const query = debouncedSearch.value.toLowerCase().trim()

    if (!query) return posts

    return posts.filter((post: PostDoc) => {
        const title = (post.title || '').toLowerCase()
        const author = (post.admin_panel?.author?.name || '').toLowerCase()

        const rubrics = (post.rubrics || [])
        const hasRubricMatch = rubrics.some((r: any) => 
            (r.name || '').toLowerCase().includes(query)
        )

        return title.includes(query) || author.includes(query) || hasRubricMatch
    })
})
</script>