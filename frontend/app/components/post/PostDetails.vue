<template>
    <div v-if="!post" class="p-10 text-center">Загрузка...</div>

    <AdaptiveContainer v-else class="dark:bg-surface-base bg-stone-50 rounded-md">
        <div>
            <div class="flex gap-4 mb-6 items-center">
                <NuxtLink :to="pages.sidebar.news.url" class="flex items-center gap-3">
                    <AppIcon name="arrowUp" class="rotate-270 size-6" />
                    <span class="text-xl font-semibold">Назад</span>
                </NuxtLink>
            </div>
        </div>
        
        <div class="mb-4 flex gap-2 items-center">
            <Avatar v-if="post.admin_panel.author?.avatar" size="md" :avatar="post.admin_panel.author?.avatar"/>
            <span class="font-semibold text-md">{{ post.admin_panel.author?.name }}</span>
            <span> - </span>
            <span class="text-sm">{{ formatDate(post.updatedAt) }}</span>
        </div>

        <div v-if="post.rubrics && post.rubrics.length > 0" class="flex flex-col gap-3">
            <p class="dark:text-gray-200 text-gray-700 text-sm md:text-lg">Рубрики</p>
            <RubricList :rubrics="post.rubrics"/>
        </div>
        
        <div>
            <h1 class="text-2xl mt-4 font-bold">{{ post.title }}</h1>
            <img v-if="post.cover" :src="buildApiUrl(post.cover.url)" :alt="post.cover.alt ? post.cover.alt : 'обложка'"
                class="rounded-lg shadow-xl mt-4 w-full object-cover max-h-125" />
        </div>

        <LexicalRender v-if="post.body?.root" class="mt-2" :node="post.body.root" />
    </AdaptiveContainer>
</template>

<script lang="ts" setup>
import LexicalRender from '../shared/LexicalRender.vue';
import { pages } from '~/data/pages.js';
import type { PostDoc } from '~/types/post.types';

const route = useRoute();
const { buildApiUrl } = useApiBuilder();
const id = route.params.id as string;

const { data: post, refresh } = await useFetch<PostDoc>(`/api/posts/${id}`, {
    key: `post-${id}`
});

if (!post.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Пост не найден',
        fatal: true 
    });
}

onMounted(refresh())

useSeoMeta({
    title: post.value?.title,
    description: `Статья ${post.value?.title} на сайте FreshCheck`,
    ogTitle: post.value?.title,
    ogDescription: `Статья ${post.value?.title} на сайте FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>