<template>
    <section class="py-24">
        <div class="max-w-4xl mx-auto">
            <FaqSection pill="FAQ" title-before="Всё, что спрашивают" title-italic="пресса и партнёры"
                subtitle="Ответы на основании внутренних документов проекта" :items="mediaFaqItems" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faqData, type FaqItem } from '~/data/faq'


const mediaFaqItems = ref<FaqItem[]>([
    faqData['about']!.items.find(i => i.q.includes('юридическое лицо'))!,
    faqData['documents']!.items.find(i => i.q.includes('СМИ'))!,
    faqData['about']!.items.find(i => i.q.includes('партнёрство'))!,
    faqData['ratings']!.items.find(i => i.q.includes('подлинность'))!,
].filter(Boolean)
)
</script>