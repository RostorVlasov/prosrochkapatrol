<template>
    <a :href="href" target="_blank"
        :class="['inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-lg rounded-2xl transition-colors duration-300 shadow-xl', bgClass, textClass]">
        <AppIcon :name="icon" class="w-6 h-6" />
        {{ label }}
    </a>
</template>

<script setup lang="ts">
import type { IconName } from '../ui/AppIcon.vue';

defineProps<{
    href: string
    icon: IconName
    label: string
    bgClass: string
    textClass: string
}>()
</script>