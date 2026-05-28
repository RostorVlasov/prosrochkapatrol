<template>
    <a :href="href" target="_blank"
        :class="['group p-8 bg-white dark:bg-gray-700 rounded-3xl border border-beige-100 dark:border-gray-500 hover:shadow-2xl transition-all duration-500', hoverBorderClass]">
        <div
            :class="['w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300', iconBgClass]">
            <AppIcon :name="icon" class="w-8 h-8 text-beige-500 dark:text-white" />
        </div>
        <h3 class="font-bold text-xl mb-2">{{ name }}</h3>
        <p class="text-sm text-gray-500 dark:text-beige-100/70 mb-3">{{ handle }}</p>
        <p class="text-xs text-gray-500 dark:text-beige-100/60">{{ desc }}</p>
    </a>
</template>

<script setup lang="ts">
import type { IconName } from '../ui/AppIcon.vue';

defineProps<{
    href: string
    icon: IconName
    name: string
    handle: string
    desc: string
    iconBgClass: string
    hoverBorderClass: string
}>()
</script>