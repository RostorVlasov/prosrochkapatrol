<template>
    <NuxtLink :to="`shops/${shop.id}`">
    <div class="p-5 active:dark:bg-gray-500 hover:bg-gray-50 dark:border-0 hover:dark:bg-gray-500 bg-white transition-colors dark:bg-gray-600 border-2 border-beige-500">
        <div class="border-b pb-4">
            <div class="p-1 dark:bg-amber-100/20 bg-amber-100/50 flex w-max px-2 items-center mb-4">
                <AppIcon name="star" class="text-amber-300 size-5" />
                <span class="ml-2 font-semibold">{{ shop.total_score.toFixed(1) }}</span>
            </div>
            <h4 class="font-semibold text-xl">{{ shop.store_name }}</h4>
            <div class="flex items-center text-sm mt-2 gap-2 text-gray-600 dark:text-gray-300">
                <AppIcon name="calendarText" class="size-4" />
                <h6>{{ shop.reason_type === 'planned' ? 'Плановая проверка' : 'Проверка по жалобе' }}
                </h6>
            </div>
        </div>
        <div class="flex gap-2 mt-4 items-center text-sm dark:text-gray-200 text-gray-800">
            <AppIcon name="location" />
            <span>{{ shop.address }}</span>
        </div>
        <div class="flex items-center mt-2 gap-2 dark:text-gray-300">
            <AppIcon name="calendarMonth" />
            <span>{{ formatDate(shop.date_checked) }}</span>
        </div>
    </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { ShopDoc } from '~/types/shops.types';

const props = defineProps<{
  shop: ShopDoc
}>()


</script>