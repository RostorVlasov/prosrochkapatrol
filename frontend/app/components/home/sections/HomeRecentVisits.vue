<template>
    <section class="py-24">
        <BaseSectionHeader pill="Актуально" title-before="Недавние" title-italic="визиты"
            subtitle="Свежие обзоры магазинов Астрахани" />
        <div class="flex flex-col sm:flex-row justify-between sm:items-end mb-16 gap-6">

            <NuxtLink to="/product-review"
                class="inline-flex items-center gap-2 text-beige-500 font-bold hover:text-beige-600 transition-colors duration-300">
                Все магазины
                <AppIcon name="arrowRight" class="w-5 h-5" />
            </NuxtLink>
        </div>

        <ShopsSkeleton v-if="status === 'pending'" />

        <div v-else-if="latestShops?.length" class="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-6">
            <ShopItem v-for="shop in latestShops" :key="shop.id" :shop="shop" />
        </div>

        <div v-else class="text-center py-12">
            <AppIcon name="exclamationCircle" class="w-16 h-16 text-beige-500 mx-auto mb-4" />
            <p class="text-xl font-bold text-slate dark:text-white mb-2">Ошибка подключения к API</p>
            <p class="text-gray-500 dark:text-beige-100/70">Не удалось загрузить магазины. Попробуйте позже.</p>
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { ShopsResponse } from '~/types/shops.types';

const { data, status } = await useApiFetch<ShopsResponse>('/api/shops', {
    key: 'home-latest-shops',
    query: { sort: '-date_checked', limit: 3 },
})

const latestShops = computed(() => data.value?.docs ?? [])
</script>