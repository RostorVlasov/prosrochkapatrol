<template>
    <div class="p-6 mx-auto mt-5">
        <h1 class="text-2xl font-bold mb-4">Проверенные магазины</h1>

        <div v-if="!isLoading" class="flex justify-between gap-5 mb-6">

            <select v-model="sortField" @change="loadShops"
                class="border text-sm w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
                <option value="store_name">По названию</option>
                <option value="total_score">По рейтингу</option>
                <option value="updatedAt">По дате добавления</option>
            </select>

            <select v-model="sortOrder" @change="loadShops"
                class="border text-sm w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500">
                <option value="-">По возрастанию</option>
                <option value="">По убыванию</option>
            </select>
        </div>

        <div v-if="isLoading" class="text-gray-500">Загрузка данных...</div>

        <div v-else>
            <div class="flex flex-col gap-3">
                <ShopItem v-for="shop in shops?.docs || []" :key="shop.id" :shop="shop" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useShopStore } from '~/stores/shops';

const shopStore = useShopStore()
const { fetchShopData } = shopStore
const { isLoading, shops } = storeToRefs(shopStore)

const sortField = ref<string>('store_name')
const sortOrder = ref<string>('-')

const loadShops = async () => {
    await fetchShopData({
        sort: sortOrder.value + sortField.value,
    })
}

onMounted(async () => {
    await loadShops()
})
</script>