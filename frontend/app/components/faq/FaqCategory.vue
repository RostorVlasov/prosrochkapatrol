<template>
    <div>
        <div class="flex items-center gap-3 mb-6">
            <div class="size-8 sm:size-10 bg-transparent sm:bg-beige-300 rounded-xl flex items-center justify-center">
                <AppIcon :name="icon" class="w-8 h-8 sm:w-6 sm:h-6 text-beige-400 sm:text-white dark:text-white" />
            </div>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-slate dark:text-white">{{ title }}</h2>
        </div>
        <FaqList :items="items" />
    </div>
</template>

<script setup lang="ts">
import type { FaqCategory } from '~/data/faq'
defineProps<FaqCategory>()
</script>