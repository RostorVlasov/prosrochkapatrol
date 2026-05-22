import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '~/composables/useApi';
import type { PostDoc, PostsResponse } from '~/types/post.types';

export const usePostsStore = defineStore('post', () => {
    const { api } = useApi()
    const isLoading = ref(false)
    const posts = ref<PostsResponse | null>(null)

    async function fetchPostsData(search: string, params?: Record<string, any>) {
        isLoading.value = true;
        try {
            const response = await api<PostsResponse>('/api/posts', { 
                params,
                query: {
                    where: JSON.stringify({
                        or: [
                            { title: { like: search } },
                            { title: { like: search.toLowerCase() } },
                            { title: { like: search.toUpperCase() } },
                            { 'admin_panel.author.name': { like: search } },
                            { 'admin_panel.author.name': { like: search.toLowerCase() } },
                            { 'admin_panel.author.name': { like: search.toUpperCase() } },
                        ]
                    })
                }
             });
            posts.value = response;
        } catch (error) {
            console.error('Ошибка получение данных :', error);
        }
        finally {
            isLoading.value = false;
        }
    }

    async function fetchPost(id: string) {
        isLoading.value = true;
        try {
            const response = await api<PostDoc>('/api/posts/' + id);
            return response
        } catch (error) {
            console.error('Ошибка получение данных :', error);
        }
        finally {
            isLoading.value = false;
        }
    }

    return { fetchPostsData, fetchPost, isLoading, posts };
});