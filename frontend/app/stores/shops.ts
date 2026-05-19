import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '~/composables/useApi';

export const useShopStore = defineStore('shop', () => {
    const { api } = useApi()
    const isLoading = ref(false);

    async function fetchShopData() {
        isLoading.value = true;
        try {
            const response = await api<unknown>('/api/shops');
            return response;
        } catch (error) {
            console.error('Ошибка получение данных :', error);
        }
        finally {
            isLoading.value = false;    
        }
  }


    return { fetchShopData, isLoading };
});