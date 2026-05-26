<template>
    <div class="p-10 rounded-3xl border text-center overflow-hidden relative" :class="bgClasses">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10">
            <AppIcon :name="icon" class="w-12 h-12 mx-auto mb-4 text-beige-500" />
            <h3 class="text-2xl font-bold mb-2 text-slate dark:text-white">{{ title }}</h3>
            <p class="text-gray-500 dark:text-beige-100/70 max-w-xl mx-auto mb-8">{{ subtitle }}</p>

            <div class="flex flex-wrap justify-center gap-4">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { tv } from 'tailwind-variants'
import type { IconName } from './AppIcon.vue';

const props = defineProps<{
    title: string
    subtitle: string
    icon: IconName
    variant?: 'beige' | 'slate'
}>()

const bgClasses = tv({
    base: 'shadow-lg',
    variants: {
        variant: {
            beige: 'bg-linear-to-r from-beige-100 to-beige-50 dark:from-gray-700 dark:to-gray-500 border-beige-500/20',
            slate: 'bg-linear-to-br from-slate via-gray-500 to-slate text-white border-white/10'
        }
    }
})({ variant: props.variant || 'beige' })

</script>