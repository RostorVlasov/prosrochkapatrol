<template>
    <AdaptiveContainer>
        
        <h1 class="text-4xl font-bold mb-4">Новости и статьи</h1>
        <input v-model="searchInput" placeholder="Поиск" type="text" :class="input() + ' mb-4'">

        <PostsSkeleton v-if="isLoading"/>
        <div v-else class="flex flex-col gap-6" v-if="posts">
            <PostItem v-for="post in posts.docs" :post="post"></PostItem>
        </div>
    </AdaptiveContainer>
</template>

<script lang="ts" setup>
import { usePostsStore } from '~/stores/posts';
const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)
const isLoading = ref<boolean>(true)
const searchInput = ref<string>('')
const debouncedValue = refDebounced<string>(searchInput, 300)

watch(debouncedValue, () => {
    loadPosts()
})

async function loadPosts() {
    isLoading.value = true
    await postsStore.fetchPostsData(searchInput.value)
    isLoading.value = false
}

onMounted(loadPosts)

</script>