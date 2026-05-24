<template>
    <PostDetails v-if="post" :post="post" />
    <div v-else>
        Статья не найдена!
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePostsStore } from '~/stores/posts';

const route = useRoute()
const { fetchPost } = usePostsStore()
const post = await fetchPost(route.params.id as string)

</script>
