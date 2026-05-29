<template>
    <section class="py-24">
        <BaseSectionHeader pill="Новости" title-before="Последние" title-italic="обновления"
            subtitle="Читайте новости проекта, изучайте законы о защите прав потребителей и будьте в курсе изменений"
            centered />
        <div v-if="newsUpdates.length" class="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-6">
            <PostItem v-for="post in newsUpdates" :key="post.id" :post="post" />
        </div>
        <div v-else class="text-center py-12">
            <AppIcon name="exclamationCircle" class="w-16 h-16 text-beige-500 mx-auto mb-4" />
            <p class="text-xl font-bold text-slate dark:text-white mb-2">Новостей пока нет!</p>
            <p class="text-gray-500 dark:text-beige-100/70">Попробуйте позже.</p>
        </div>
    </section>
</template>


<script lang="ts" setup>
import type { PostsResponse } from '~/types/post.types';

const { data: postsResponse } = await useApiFetch<PostsResponse>('/api/posts', {
    key: 'home-posts',
    query: { limit: 4 },
})

const newsUpdates = computed<import('~/types/post.types').PostDoc[]>(() => postsResponse.value?.docs ?? [])

</script>