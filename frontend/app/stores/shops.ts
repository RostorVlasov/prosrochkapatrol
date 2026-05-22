import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '~/composables/useApi';
import type { ShopDoc, ShopsResponse } from '~/types/shops.types';

export const useShopStore = defineStore('shop', () => {
    const { api } = useApi()
    const isLoading = ref(false)
    const shops = ref<ShopsResponse | null>(null)

    async function fetchShopData(params?: Record<string, any>, search?: string) {
        isLoading.value = true;
        try {
            const response = await api<ShopsResponse>('/api/shops', {
                params,
                query: {
                    where: JSON.stringify({
                        or: [
                            { store_name: { like: search } },
                            { address: { like: search } },
                        ]
                    })
                }
            });
            shops.value = response;
        } catch (error) {
            console.error('Ошибка получение данных :', error);
        }
        finally {
            isLoading.value = false;
        }
    }

    async function fetchShop(id: string) {
        isLoading.value = true;
        try {
            const response = await api<ShopDoc>('/api/shops/' + id);
            return response
        } catch (error) {
            console.error('Ошибка получение данных :', error);
        }
        finally {
            isLoading.value = false;
        }
    }

    return { fetchShopData, fetchShop, isLoading, shops };
});