<template>
    <div class="p-6 mx-auto mt-5">
        <h1 class="text-2xl font-bold mb-4">Проверенные магазины</h1>

        <input v-model="searchInput" placeholder="Поиск" type="text" :class="input() + ' mb-4'">
            <div class="flex justify-between gap-5 mb-6">
                <select v-model="sortField" @change="loadShops" :class="select()">
                    <option value="store_name">По названию</option>
                    <option value="total_score">По рейтингу</option>
                    <option value="updatedAt">По дате добавления</option>
                </select>

                <select v-model="sortOrder" @change="loadShops" :class="select()">
                    <option value="-">По возрастанию</option>
                    <option value="">По убыванию</option>
                </select>
            </div>

            <div v-if="isLoading" class="text-gray-500">Тут будет скелетон загрузка когда-то....</div>
            <div v-if="!isLoading">
                <div class="flex flex-col gap-3">
                    <ShopItem v-for="shop in shops?.docs || []" :key="shop.id" :shop="shop" />
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import { useShopStore } from '~/stores/shops';
import { refDebounced } from '@vueuse/core'
import { input } from '~/utils/atoms'

const shopStore = useShopStore()
const { fetchShopData } = shopStore
const { isLoading, shops } = storeToRefs(shopStore)
const sortField = ref<string>('store_name')
const sortOrder = ref<string>('-')
const searchInput = ref<string>('')
const debouncedValue = refDebounced<string>(searchInput, 300)

watch(debouncedValue, () => {
    loadShops()
})

const loadShops = async () => {
    await fetchShopData({
        sort: sortOrder.value + sortField.value,
    }, searchInput.value)
}

onMounted(async () => {
    await loadShops()
})

</script>