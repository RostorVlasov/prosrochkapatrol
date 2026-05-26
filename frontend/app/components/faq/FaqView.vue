<template>
    <div class="min-h-screen bg-beige-50 dark:bg-gray-900 text-slate dark:text-beige-100 font-sans">

        <section class="min-h-[40vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
            <BlobsBg />
            <div class="max-w-4xl mx-auto text-center relative z-10">
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

        <section class="max-w-4xl mx-auto px-6 py-16">
            <div class="space-y-12">
                <FaqCategory v-for="(category, key) in faqData" :key="key" v-bind="category" />
            </div>

            <div class="mt-16">
                <GradientCta icon="chatBubble" title="Не нашли ответ?"
                    subtitle="Свяжитесь с основателем проекта напрямую — он ответит быстро и по существу.">
                    <a :href="TELEGRAM_FOUNDER"
                        class="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition-colors">
                        <AppIcon name="telegram" class="w-5 h-5" />
                        Telegram
                    </a>
                    <a :href="PHONE"
                        class="inline-flex items-center gap-2 px-6 py-3 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold hover:bg-gray-500 dark:hover:bg-beige-100 transition-colors">
                        <AppIcon name="phone" class="w-5 h-5" />
                        +7 (917) 176-67-46
                    </a>
                    <a :href="EMAIL"
                        class="inline-flex items-center gap-2 px-6 py-3 bg-beige-500 text-white rounded-xl font-bold hover:bg-beige-600 transition-colors">
                        <AppIcon name="envelope" class="w-5 h-5" />
                        Email
                    </a>
                </GradientCta>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">
import { faqData } from '~/data/faq'
import { EMAIL, PHONE, TELEGRAM_FOUNDER } from '~/data/social';
</script>