<template>
    <PostDetails v-if="post" :post="post" />
</template>

<script setup lang="ts">
import type { PostDoc } from '~/types/post.types'
import { NotFoundError } from '~/utils/notFoundError'

const route = useRoute()
const id = route.params.id as string

const { data: post } = await useApiFetch<PostDoc>(`/api/posts/${id}`, {
    key: `post-${id}`,
})

if(!post.value) {
    NotFoundError()
}

</script>