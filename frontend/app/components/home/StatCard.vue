<template>
    <div
        class="group p-8 bg-white dark:bg-gray-700 rounded-3xl border border-beige-100 dark:border-gray-500 hover:shadow-2xl hover:border-beige-500 transition-all duration-500">
        <div
            class="mb-6 w-14 h-14 bg-beige-100 dark:bg-gray-500 rounded-2xl flex items-center justify-center group-hover:bg-beige-500 transition-colors duration-500">
            <AppIcon :name="icon" class="w-7 h-7 text-beige-500 group-hover:text-white transition-colors duration-500" />
        </div>
        <div class="text-5xl font-black text-beige-500 mb-3 tracking-tight">{{ value }}</div>
        <div class="font-bold text-lg mb-2">{{ title }}</div>
        <p class="text-sm text-gray-500 dark:text-beige-100/60">{{ desc }}</p>
        <p class="mt-6 text-gray-400">{{ disclaimer }}</p>
    </div>
</template>

<script setup lang="ts">
import type { IconName } from '../ui/AppIcon.vue';
import type { StatCardProps } from '../../types/props.types.js';

defineProps<StatCardProps>()
</script>