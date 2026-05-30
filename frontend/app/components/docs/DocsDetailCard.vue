<template>
    <div
        class="bg-white dark:bg-slate rounded-3xl p-8 border border-off-white dark:border-gray-500 shadow-sm flex flex-col justify-between hover:border-beige-500 transition-colors duration-300">
        <div>
            <div class="flex justify-between items-start mb-6">
                <div class="w-14 h-14 bg-off-white dark:bg-gray-500 rounded-2xl flex items-center justify-center">
                    <AppIcon :name="icon" class="w-7 h-7 text-beige-500" />
                </div>
                <span
                    class="font-mono text-sm px-3 py-1 bg-off-white/50 dark:bg-gray-500/50 rounded-md text-beige-500 font-bold">
                    {{ code }}
                </span>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-slate dark:text-white">{{ title }}</h3>
            <p class="text-xs sm:text-sm text-beige-500 mb-4">Дата принятия: {{ date }}</p>
            <p class="text-gray-500 text-sm sm:text-base dark:text-off-white/80 mb-6 leading-relaxed">{{ description }}</p>
        </div>

        <div
            class="pt-6 border-t border-off-white dark:border-gray-500 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <span class="text-xs text-gray-500/60 dark:text-off-white/40">Статус: Действует</span>
            <a :href="link" download
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-beige-500 hover:bg-beige-600 text-white rounded-xl text-sm font-bold transition-colors duration-300 shadow-md">
                <AppIcon name="arrowDown" class="w-4 h-4" />
                Скачать PDF
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/ui/AppIcon.vue'

defineProps<{
    code: string
    title: string
    date: string
    icon: IconName
    description: string
    link: string
}>()
</script>