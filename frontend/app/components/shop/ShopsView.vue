<template>
    <AdaptiveContainer>
        <h1 class="text-2xl font-bold mb-6">Проверенные магазины</h1>
        
        <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 mb-8 shadow-sm">
            <div class="flex gap-4 items-start">
                <img src="/logo.png" alt="logo" class="size-6 shrink-0 mt-0.5">
                <div class="space-y-2">
                    <h2 class="font-semibold text-zinc-900 dark:text-white">О странице</h2>
                    <p class="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Здесь публикуются результаты независимых проверок торговых точек Астрахани, проведённых участниками проекта FreshCheck. 
                        Все данные являются личными наблюдениями и носят ознакомительный характер. FreshCheck не является государственным органом, информация не заменяет официальные акты и не является юридически значимой для торговых организаций.
                    </p>
                </div>
            </div>
        </div>

        <div class="space-y-4 mb-8">
            <input 
                v-model="searchInput" 
                placeholder="Поиск по названию или улице..." 
                type="text" 
                :class="input()"
            >
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select v-model="sortField" @change="loadShops" :class="select()">
                    <option value="store_name">Сортировка: по названию</option>
                    <option value="total_score">Сортировка: по уровню свежести</option>
                    <option value="updatedAt">Сортировка: по дате проверки</option>
                </select>
                <select v-model="sortOrder" @change="loadShops" :class="select()">
                    <option value="-">Порядок: от худших к лучшим</option>
                    <option value="">Порядок: от лучших к худшим</option>
                </select>
            </div>
        </div>

        <ShopsSkeleton v-if="isLoading" />
        <div v-else class="flex flex-col gap-3">
            <ShopItem 
                v-for="shop in shops?.docs || []" 
                :key="shop.id" 
                :shop="shop" 
            />
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

#борисмоймуж