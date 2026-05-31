<template>
    <PostDetails v-if="post" :post="post" />
    <NotFound v-else />
</template>

<script setup lang="ts">
import type { PostDoc } from '~/types/post.types'

const route = useRoute()
const id = route.params.id as string

const { data: post } = await useApiFetch<PostDoc>(`/api/posts/${id}`, {
    key: `post-${id}`,
})

</script>