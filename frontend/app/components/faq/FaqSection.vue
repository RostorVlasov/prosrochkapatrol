<template>
    <section class="py-24 bg-beige-100/30 dark:bg-gray-900">
        <div class="max-w-4xl mx-auto px-6">
            <SectionHeader :pill="pill" :title-before="titleBefore" :title-italic="titleItalic" :subtitle="subtitle"
                centered />

            <FaqList :items="items" />

            <div v-if="allLink" class="mt-10 text-center">
                <NuxtLink :to="allLink"
                    class="inline-flex items-center gap-2 text-beige-500 font-bold hover:text-beige-600 transition-colors duration-300 text-lg">
                    {{ allLinkText }}
                    <AppIcon name="arrowRight" class="w-5 h-5" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { FaqItem } from '~/data/faq'

interface Props {
    pill?: string
    titleBefore?: string
    titleItalic?: string
    subtitle?: string
    items: FaqItem[]
    allLink?: string
    allLinkText?: string
}

withDefaults(defineProps<Props>(), {
    pill: 'FAQ',
    titleBefore: 'Частые',
    titleItalic: 'вопросы',
    subtitle: 'Всё, что стоит знать о FreshCheck',
    allLinkText: 'Смотреть все вопросы'
})
</script>