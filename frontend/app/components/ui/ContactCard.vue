<template>
    <a :href="href" :target="target" class="group block">
        <div :class="cardClasses">
            <div :class="iconWrapperClasses">
                <AppIcon :name="icon" class="w-6 h-6" />
            </div>
            <div>
                <div class="font-bold text-slate dark:text-white">{{ title }}</div>
                <div class="text-xs sm:text-sm text-gray-500 dark:text-beige-100/70">{{ value }}</div>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import { tv } from 'tailwind-variants'
import type { IconName } from './AppIcon.vue';

const props = defineProps<{
    icon: IconName
    title: string
    value: string
    href: string
    target?: string
}>()

const cardClasses = tv({
    base: 'bg-white w-full flex gap-4 text-start dark:bg-gray-700 rounded-2xl p-4 sm:p-6 border border-beige-100 dark:border-gray-500 transition-all duration-300',
    variants: {
        hover: {
            true: 'hover:border-beige-500 hover:-translate-y-1 hover:shadow-lg'
        }
    }
})({ hover: true })

const iconWrapperClasses = tv({
    base: 'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mb-3 sm:mb-0 sm:mr-4 transition-colors',
    variants: {
        color: {
            beige: 'bg-beige-100 dark:bg-gray-500 text-beige-500',
            gray: 'bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-300'
        }
    }
})({ color: 'beige' })
</script>