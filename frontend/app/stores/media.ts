import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '~/composables/useApi';
import type { PhotoResponse } from '~/types/photo.types';

export const useMediaStore = defineStore('media', () => {
    const { api } = useApi()
    const isLoading = ref(false)

    async function createMedia(file: File) {
        isLoading.value = true;
        try {
            const fd = new FormData()
            fd.append('file', file)
            const response = await api<PhotoResponse>('/api/media', {method: 'POST', body: fd})
            return response.doc.id
        } catch (error) {
            console.error('Ошибка загрузки медиа:', error);
        }
        finally {
            isLoading.value = false;
        }
    }

    return { createMedia, isLoading };
});