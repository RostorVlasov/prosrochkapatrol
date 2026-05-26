import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { PostDoc, PostsResponse } from '~/types/post.types';

export const usePostsStore = defineStore('post', () => {
    const allPosts = ref<PostDoc[]>([]);
    const pending = ref(false);

    const currentPost = ref<PostDoc | null>(null);

    async function fetchPostsData(limit: number = 200 ) {
        const { data, pending: isPending } = await useFetch<PostsResponse>('/api/posts', {
            key: 'posts-list-isr',
            query: { limit }
        });

        if (data.value && data.value.docs) {
            allPosts.value = data.value.docs;
        }
        pending.value = isPending.value;
    }

    async function fetchPost(id: string) {
        const { data, pending } = await useFetch<PostDoc>(`/api/posts/${id}`, {
            key: `post-${id}` 
        });

        if (data.value) {
            currentPost.value = data.value;
        } else {
            currentPost.value = null;
        }
        
        return {data, pending}
    }

    return { fetchPostsData, fetchPost, pending, allPosts, currentPost };
});