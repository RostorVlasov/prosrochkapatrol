<template>
    <div class="relative group">
        <div class="p-6 pt-8 bg-white dark:bg-gray-700 rounded-2xl border border-beige-100 dark:border-gray-500
             hover:border-beige-500 hover:shadow-xl transition-all duration-500 h-full">
            <div class="absolute -top-4 left-6 w-10 h-10 bg-beige-500 text-white rounded-full
               flex items-center justify-center font-black text-lg shadow-lg z-10">
                {{ index + 1 }}
            </div>
            <div class="w-12 h-12 bg-beige-100 dark:bg-gray-500 rounded-xl flex items-center justify-center
               mb-4 group-hover:bg-beige-500 transition-colors duration-500">
                <AppIcon :name="icon"
                    class="w-6 h-6 text-beige-500 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 class="font-bold text-xl mb-2">{{ title }}</h3>
            <p class="text-sm text-gray-500 dark:text-beige-100/70 leading-relaxed">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IconName } from '../ui/AppIcon.vue'

defineProps<{
    index: number
    icon: IconName
    title: string
    desc: string
}>()
</script>