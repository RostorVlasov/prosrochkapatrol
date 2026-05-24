<template>
    <AdaptiveContainer>
        <h1 class="text-2xl font-bold mb-6">Реестр проверенных торговых точек Астрахани</h1>
        
        <input v-model="searchInput" placeholder="Введите название торговой сети, магазина или улицу..." type="text" :class="input() + ' mb-4'">
            
            <div class="flex justify-between gap-5 mb-6">
                <select v-model="sortField" @change="loadShops" :class="select()">
                    <option value="store_name">Сортировать список по алфавиту</option>
                    <option value="total_score">Сортировать по общему рейтингу свежести</option>
                    <option value="updatedAt">Сортировать по дате последней проверки</option>
                </select>

                <select v-model="sortOrder" @change="loadShops" :class="select()">
                    <option value="-">Отображать по возрастанию (от худших к лучшим)</option>
                    <option value="">Отображать по убыванию (от лучших к худшим)</option>
                </select>
            </div>

            <ShopsSkeleton v-if="isLoading" />
            <div v-if="!isLoading">
                <div class="flex flex-col gap-3">
                    <ShopItem v-for="shop in shops?.docs || []" :key="shop.id" :shop="shop" />
                </div>
            </div>
    </AdaptiveContainer>
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