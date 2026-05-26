<template>
    <NuxtLink :to="`${pages.sidebar.productReview.url}/${shop.id}`">
        <div
            class="rounded-xl overflow-hidden border border-beige-500 dark:border-0 bg-white dark:bg-gray-700
                hover:bg-stone-50 dark:hover:bg-gray-600 active:bg-stone-100 dark:active:bg-gray-500 transition-colors">

            <div v-if="shop.shop_photo?.url" class="w-full mb-4 overflow-hidden">
                <img :src="buildApiUrl(shop.shop_photo?.url as string)" :alt="shop.store_name"
                    class="w-full aspect-video object-cover" />
            </div>

            <div class="p-4">
                <div class="flex items-center justify-between mb-3">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                        :class="reasonTypeMapping.class">
                        <AppIcon :name="reasonTypeMapping.icon" class="size-3.5" />
                        {{ reasonTypeMapping.text }}
                    </span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">{{ formatDate(shop.date_checked) }}</span>
                </div>

                <h4 class="font-semibold text-lg leading-snug">{{ shop.store_name }}</h4>

                <div class="flex items-center gap-2 mt-1.5 text-sm text-gray-500 dark:text-gray-200">
                    <AppIcon name="location" class="size-4 shrink-0" />
                    <span class="truncate">{{ shop.address }}</span>
                </div>

                <div class="flex items-center gap-2.5 mt-3">
                    <StarRating :score="shop.total_score" />
                    <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {{ shop.total_score.toFixed(1) }} / 5
                    </span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { ShopDoc } from '~/types/shops.types'
import type { IconName } from '../ui/AppIcon.vue';
import { pages } from '~/data/pages.js';

const props = defineProps<{ shop: ShopDoc }>()

const { buildApiUrl } = useApiBuilder()

interface ReasonTypeMapping {
    text: string
    icon: IconName
    class: string
}

const reasonTypeMapping = computed<ReasonTypeMapping>(() => {
    if (props.shop.reason_type === 'planned') {
        return {
            text: 'Плановая',
            icon: 'calendarMonth',
            class: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
        }
    }
    return {
        text: 'По жалобе',
        icon: 'error',
        class: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
    }
})

</script>