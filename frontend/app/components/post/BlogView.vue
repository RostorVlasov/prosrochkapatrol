<template>
    <div class="p-6 mx-auto mt-5">
        <h1 class="text-4xl font-bold mb-4">Новости и статьи</h1>
        <div v-if="isLoading" class="text-gray-500">Тут будет скелетон загрузка когда-то....</div>
        <div v-else class="flex flex-col gap-6" v-if="posts">
            <PostItem v-for="post in posts.docs" :post="post"></PostItem>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { usePostsStore } from '~/stores/posts';

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)
const isLoading = ref<boolean>(true)

onMounted(async() => {
    isLoading.value = true
    await postsStore.fetchPostsData()
    isLoading.value = false
})

</script>