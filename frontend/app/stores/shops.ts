import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '~/composables/useApi';
import type { ShopsResponse } from '~/types/shops.types';

export const useShopStore = defineStore('shop', () => {
    const { api } = useApi()
    const isLoading = ref(false)
    const shops = ref<ShopsResponse | null>(null)

    async function fetchShopData(params?: Record<string, any>) {
        isLoading.value = true;
        try {
            const response = await api<ShopsResponse>('/api/shops', { params });
            shops.value = response;
        } catch (error) {
            console.error('Ошибка получение данных :', error);
        }
        finally {
            isLoading.value = false;
        }
    }

    return { fetchShopData, isLoading, shops };
});