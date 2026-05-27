<template>
    <PostDetails v-if="post" :post="post" />
    <div v-else class="text-center text-3xl flex items-center justify-center">Статья не найдена!</div>
</template>

<script setup lang="ts">

import type { PostDoc } from '~/types/post.types'

const route = useRoute()
const id = route.params.id as string

const { data: post } = await useApiFetch<PostDoc>(`/api/posts/${id}`, {
    key: `post-${id}`,
})

if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Пост не найден', fatal: true })
}

</script>