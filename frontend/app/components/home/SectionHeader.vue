<template>
    <div :class="['mb-20', centered && 'text-center']">
        <SectionPill>{{ pill }}</SectionPill>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            {{ titleBefore }}
            <span v-if="titleItalic" class="italic text-beige-500"> {{ titleItalic }}</span>
            {{ titleAfter }}
        </h2>
        <p v-if="subtitle" :class="['text-xl text-gray-500 dark:text-beige-100/70', centered && 'max-w-3xl mx-auto']">
            {{ subtitle }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    pill: string
    titleBefore: string
    titleItalic?: string
    titleAfter?: string
    subtitle?: string
    centered?: boolean
}>()
</script>