<template>
    <div class="p-10">
        <h1>магазины</h1>
        <div v-if="isLoading">Загрузка данных...</div>
        <div v-else>
            <p>Данные о магазинах:</p>
            {{ data }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useShopStore } from '~/stores/shops';

const shopStore = useShopStore()
const { fetchShopData } = shopStore
const { isLoading } = storeToRefs(shopStore)
const data = ref<unknown | null>(null)

onMounted(async () => {
    data.value = await fetchShopData();
})

</script>