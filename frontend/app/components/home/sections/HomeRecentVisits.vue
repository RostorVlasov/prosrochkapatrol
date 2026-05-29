<template>
    <section class="py-24">
        <div class="flex flex-col sm:flex-row justify-between sm:items-end mb-16 gap-6">
            <div>
                <SectionPill>Актуально</SectionPill>
                <h2 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">
                    Недавние <span class="italic text-beige-500">визиты</span>
                </h2>
                <p class="text-xl text-gray-500 dark:text-beige-100/70">Свежие обзоры магазинов Астрахани</p>
            </div>
            <NuxtLink to="/product-review"
                class="inline-flex items-center gap-2 text-beige-500 font-bold hover:text-beige-600 transition-colors duration-300">
                Все магазины
                <AppIcon name="arrowRight" class="w-5 h-5" />
            </NuxtLink>
        </div>
        <ShopsSkeleton v-if="loadingShops" />
        <div v-else-if="latestShops?.docs.length" class="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-6">
            <ShopItem v-for="shop in latestShops.docs" :key="shop.id" :shop="shop" />
        </div>
        <div v-else class="text-center py-12">
            <AppIcon name="exclamationCircle" class="w-16 h-16 text-beige-500 mx-auto mb-4" />
            <p class="text-xl font-bold text-slate dark:text-white mb-2">Ошибка подключения к API</p>
            <p class="text-gray-500 dark:text-beige-100/70">Не удалось загрузить магазины. Попробуйте позже.</p>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useShopStore } from '~/stores/shops';

const shopsStore = useShopStore()

await shopsStore.fetchShopData({ sort: '-date_checked', limit: 4 })
const { shops: latestShops, isLoading: loadingShops } = storeToRefs(shopsStore)

</script>