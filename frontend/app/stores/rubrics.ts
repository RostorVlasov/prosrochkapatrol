import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '~/composables/useApi';
import type { RubricsResponse } from '~/types/rubrics.types';

export const useRubricsStore = defineStore('rubric', () => {
    const { api } = useApi()
    const isLoading = ref(false)
    const rubrics = ref<RubricsResponse | null>(null)

    async function fetchRubrics(params?: Record<string, any>, search?: string) {
        isLoading.value = true;
        try {
            const response = await api<RubricsResponse>('/api/rubrics', {
                params,
                query: {
                    where: JSON.stringify({
                        or: [
                            { name: { like: search } },
                            { slug: { like: search } },
                        ]
                    })
                }
            });
            rubrics.value = response;
        } catch (error) {
            console.error('Ошибка получение данных :', error);
        }
        finally {
            isLoading.value = false;
        }
    }


    return { fetchRubrics, isLoading, rubrics };
});