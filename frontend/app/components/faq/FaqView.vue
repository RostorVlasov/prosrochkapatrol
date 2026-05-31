<template>
    <LandingContainer class="px-6">

        <section class="min-h-[40vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
            <div class="mx-auto text-center relative z-10">
                <div class="mb-8">
                    <SectionPill>Часто задаваемые вопросы</SectionPill>
                </div>
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6">
                    Всё, что вы хотели <span class="text-beige-500 italic">спросить</span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-500 dark:text-beige-100/80 max-w-3xl mx-auto leading-relaxed">
                    Ответы на вопросы о проекте FreshCheck, общественном мониторинге, правах потребителей и
                    взаимодействии с магазинами.
                </p>
            </div>
        </section>

        <section class="mx-auto py-16">
            <div class="space-y-12">
                <FaqCategory v-for="(category, key) in faqData" :key="key" v-bind="category" />
            </div>
        </section>

        <section class="mt-16">
            <HomeCta />
        </section>

    </LandingContainer>
</template>

<script setup lang="ts">
import { faqData } from '~/data/faq'


useSeoMeta({
    title: 'FAQ FreshCheck',
    description: `FAQ FreshCheck`,
    ogTitle: 'FAQ FreshCheck',
    ogDescription: `FAQ FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});


</script>