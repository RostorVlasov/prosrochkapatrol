<template>
    <AdaptiveContainer class="dark:bg-surface-base mt-5 bg-stone-50 rounded-md">
        <div>
            <div class="flex gap-4 mb-6 items-center">
                <NuxtLink :to="pages.sidebar.news.url" class="flex items-center gap-3">
                    <AppIcon name="arrowUp" class="rotate-270 size-6" />
                    <span class="text-xl font-semibold">Назад</span>
                </NuxtLink>
            </div>
        </div>
        <div class="mb-4 flex gap-2 items-center">
            <Avatar v-if="post.admin_panel.author?.avatar" size="md" :avatar="post.admin_panel.author?.avatar" />
            <span class="font-semibold text-md">{{ post.admin_panel.author?.name }}</span>
            <span> - </span>
            <span class="text-sm">{{ formatDate(post.admin_panel.published_at) }}</span>
        </div>

        <div v-if="post.rubrics && post.rubrics.length > 0" class="flex flex-col gap-3">
            <p class="dark:text-gray-200 text-gray-700 text-sm md:text-lg">Рубрики</p>
            <RubricList :rubrics="post.rubrics" />
        </div>

        <div>
            <h1 class="text-2xl mt-4 font-bold">{{ post.title }}</h1>
            <NuxtImg v-if="post.cover" quality="80" format="webp" loading="lazy" :src="buildApiUrl(post.cover.url)" :alt="post.cover.alt ? post.cover.alt : 'обложка статьи ' + post.title"
                class="rounded-lg shadow-xl aspect-video mt-4 w-full" />
        </div>

        <LexicalRender v-if="post.body?.root" class="mt-2" :node="post.body.root" />
    </AdaptiveContainer>
</template>

<script lang="ts" setup>
import LexicalRender from '../shared/LexicalRender.vue';
import { pages } from '~/data/pages.js';
import type { PostDoc } from '~/types/post.types';

const { buildApiUrl } = useApiBuilder();

const props = defineProps<{
    post: PostDoc
}>()

useHead({
    title: props.post?.title,
    meta: [
        { property: 'og:title', content: 'FreshCheck', tagPriority: 0  },
        { property: 'og:description', content: `Статья '${props.post.title}' на сайте FreshCheck`, tagPriority: 0 },
        { property: 'og:image', content: buildApiUrl(props.post.cover?.url) || '/logo.png', tagPriority: 0 },
        { property: 'og:type', content: 'article', tagPriority: 0 },
    ]
})


</script>