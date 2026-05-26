<template>
    <div>
        <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-beige-500 rounded-xl flex items-center justify-center">
                <AppIcon :name="icon" class="w-6 h-6 text-white" />
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-slate dark:text-white">{{ title }}</h2>
        </div>
        <FaqList :items="items" />
    </div>
</template>

<script setup lang="ts">
import type { FaqCategory } from '~/data/faq'
defineProps<FaqCategory>()
</script>