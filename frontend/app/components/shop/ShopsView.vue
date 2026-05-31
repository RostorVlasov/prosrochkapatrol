<template>
    <AdaptiveContainer class="mt-5">
        <div
            class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 mb-8 shadow-sm">
            <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Проверенные магазины</h1>
            <p class="text-zinc-600 dark:text-zinc-400">
                Результаты независимого мониторинга торговых точек Астрахани
            </p>
        </div>

        <div
            class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 mb-8 shadow-sm">
            <div class="flex gap-4 items-start">
                <img src="/logo.png" alt="logo" class="size-6 shrink-0 mt-0.5">
                <div class="space-y-2">
                    <h2 class="font-semibold text-zinc-900 dark:text-white">О странице</h2>
                    <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Здесь публикуются результаты независимых проверок торговых точек Астрахани, проведённых
                        участниками проекта FreshCheck.
                        Все данные являются личными наблюдениями и носят ознакомительный характер. FreshCheck не
                        является государственным органом, информация не заменяет официальные акты и не является
                        юридически значимой для торговых организаций.
                    </p>
                </div>
            </div>
        </div>

        <div class="space-y-4 mb-8">
            <!-- Поиск -->
            <input v-model="searchInput" placeholder="Поиск по названию или улице..." type="text" :class="input()">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <!-- Выбор Района -->
                    <div class="relative">
                        <select v-model="selectedDistrict" :class="select()" @change="onDistrictChange">
                            <option value="">Все районы</option>
                            <option v-for="dist in availableDistricts" :key="dist" :value="dist">
                                {{ dist }}
                            </option>
                        </select>
                    </div>

                    <!-- Выбор Микрорайона (зависит от района) -->
                    <div class="relative">
                        <select v-model="selectedMicrodistrict" :class="select()" :disabled="!selectedDistrict">
                            <option value="">
                                {{ selectedDistrict ? 'Все микрорайоны' : 'Сначала выберите район' }}
                            </option>
                            <option v-for="micro in availableMicrodistricts" :key="micro" :value="micro">
                                {{ micro }}
                            </option>
                        </select>
                    </div>

                    <!-- Сортировка -->
                    <select v-model="sortField" :class="select()">
                        <option value="store_name">Сортировка: по названию</option>
                        <option value="total_score">Сортировка: по уровню свежести</option>
                        <option value="date_checked">Сортировка: по дате проверки</option>
                    </select>

                    <!-- Порядок -->
                    <select v-model="sortOrder" :class="select()">
                        <option value="-">Порядок: от худших к лучшим</option>
                        <option value="">Порядок: от лучших к худшим</option>
                    </select>
                </div>
        </div>

        <ShopsSkeleton v-if="status === 'pending'" />

        <div v-else-if="filteredShops.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ShopItem v-for="shop in filteredShops" :key="shop.id" :shop="shop" />
        </div>

        <div v-else
            class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-16 text-center shadow-sm">
            <p class="text-zinc-500 dark:text-zinc-400">
                {{ searchInput || selectedDistrict || selectedMicrodistrict ? 'Поиск не дал результатов.' : 'Магазинов пока нет.' }}
            </p>
        </div>
    </AdaptiveContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { refDebounced } from '@vueuse/core'
import { input, select } from '~/utils/atoms'
import type { ShopsResponse, ShopDoc } from '~/types/shops.types'

const searchInput = ref<string>('')
const debouncedSearch = refDebounced(searchInput, 300)
const sortField = ref<string>('store_name')
const sortOrder = ref<string>('-')
const selectedDistrict = ref<string>('')
const selectedMicrodistrict = ref<string>('')

const { data: shopsResponse, status } = await useApiFetch<ShopsResponse>('/api/shops', {
    key: 'shops-list',
    query: { limit: 200 },
})

const allShops = computed<ShopDoc[]>(() => shopsResponse.value?.docs ?? [])

const availableDistricts = computed(() => {
    const districts = new Set(allShops.value.map(shop => shop.district).filter(Boolean))
    return Array.from(districts).sort()
})

const availableMicrodistricts = computed(() => {
    if (!selectedDistrict.value) return []
    
    const microdistricts = new Set(
        allShops.value
            .filter(shop => shop.district === selectedDistrict.value)
            .map(shop => shop.microdistrict)
            .filter(Boolean)
    )
    return Array.from(microdistricts).sort()
})

const onDistrictChange = () => {
    selectedMicrodistrict.value = ''
}

const filteredShops = computed(() => {
    const query = debouncedSearch.value.toLowerCase().trim()
    const field = sortField.value
    const order = sortOrder.value
    const district = selectedDistrict.value
    const microdistrict = selectedMicrodistrict.value

    let result = allShops.value

    // 1. Фильтрация по текстовому поиску
    if (query) {
        result = result.filter(shop => {
            const name = (shop.store_name || '').toLowerCase()
            const address = (shop.address || '').toLowerCase()
            // Добавляем поля район и микрорайон в поиск
            const districtName = (shop.district || '').toLowerCase()
            const microdistrictName = (shop.microdistrict || '').toLowerCase()

            return (
                name.includes(query) ||
                address.includes(query) ||
                districtName.includes(query) ||
                microdistrictName.includes(query)
            )
        })
    }

    // 2. Фильтрация по району
    if (district) {
        result = result.filter(shop => shop.district === district)
    }

    // 3. Фильтрация по микрорайону
    if (microdistrict) {
        result = result.filter(shop => shop.microdistrict === microdistrict)
    }

    // 4. Сортировка
    const sorted = [...result]
    sorted.sort((a, b) => {
        const aVal = a[field as keyof ShopDoc] ?? ''
        const bVal = b[field as keyof ShopDoc] ?? ''
        
        if (typeof aVal === 'number' && typeof bVal === 'number') {
            return order === '-' ? aVal - bVal : bVal - aVal
        }

        if (aVal < bVal) return order === '-' ? 1 : -1
        if (aVal > bVal) return order === '-' ? -1 : 1
        return 0
    })

    return sorted
})

useSeoMeta({
    title: 'Проверенные магазины',
    description: `Проверенные магазины на сайте FreshCheck`,
    ogTitle: 'Проверенные магазины',
    ogDescription: `Проверенные магазины на сайте FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>