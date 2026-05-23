import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '~/composables/useApi';
import type { BadgeDoc, BadgesResponse } from '~/types/badges.types';

export const useBadgesStore = defineStore('badge', () => {
    const { api } = useApi()
    const isLoading = ref(false)
    const badges = ref<BadgesResponse | null>(null)

    async function fetchBadgesData(search: string, params?: Record<string, any>) {
        isLoading.value = true;
        try {
            const response = await api<BadgesResponse>('/api/badges', {
                params,
                query: {
                    where: JSON.stringify({
                        or: [
                            { code: { like: search } },
                            { type: { like: search } },
                            { "ownerName.name": { like: search } },
                        ]
                    })
                }
            });
            badges.value = response;
        } catch (error) {
            console.error('Ошибка получение данных :', error);
        }
        finally {
            isLoading.value = false;
        }
    }

    async function fetchBadge(id: string) {
        isLoading.value = true;
        try {
            const response = await api<BadgeDoc>('/api/badges/' + id);
            return response
        } catch (error) {
            console.error('Ошибка получение данных :', error);
        }
        finally {
            isLoading.value = false;
        }
    }

    return { fetchBadgesData, fetchBadge, isLoading, badges };
});