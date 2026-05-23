import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '~/composables/useApi';
import type { ComplaintRequest } from '~/types/complaints.types';

export const useComplaintsStore = defineStore('complaint', () => {
    const { api } = useApi()
    const isLoading = ref(false)

    async function createReport(body: ComplaintRequest) {
        isLoading.value = true;
        try {
            const response = await api<unknown>('/api/complaints', { method: 'POST', body })
            console.log(response)
        } catch (error) {
            console.error('Ошибка создания жалобы:', error);
        }
        finally {
            isLoading.value = false;
        }
    }

    return { createReport, isLoading };
});