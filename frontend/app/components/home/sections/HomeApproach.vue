<template>
    <section id="what" class="py-24">
        <BaseSectionHeader pill="Наш подход" title-before="Как мы" title-italic="наблюдаем"
            subtitle="Каждую неделю мы осматриваем полки, делимся наблюдениями с администрацией и помогаем жителям Астрахани делать осознанный выбор." />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mt-12">
            <FeatureBlock v-for="feature in featureBlocksTop" :key="feature.title" v-bind="feature">
                <span v-html="feature.body" />
            </FeatureBlock>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FeatureBlock v-for="feature in featureBlocksBottom" :key="feature.title" v-bind="feature">
                <span v-html="feature.body" />
            </FeatureBlock>
        </div>
    </section>
</template>

<script lang="ts" setup>

import type { IconName } from '~/components/ui/AppIcon.vue'

interface FeatureBlockData {
    icon: IconName
    title: string
    bgClass: string
    glowClass: string
    iconBgClass: string
    iconBgHoverClass: string
    iconClass: string
    bodyClass: string
    body: string
}

const featureBlocksTop: FeatureBlockData[] = [
    {
        icon: 'magnifyingGlass',
        title: 'Открытый мониторинг',
        bgClass: 'bg-gray-500 text-white',
        glowClass: 'bg-beige-500/20',
        iconBgClass: 'bg-beige-500/20',
        iconBgHoverClass: 'group-hover:bg-beige-500/40',
        iconClass: 'text-beige-100',
        bodyClass: 'text-beige-100/80',
        body: 'Мы заходим в магазины как <span class="italic">обычные покупатели</span>, обращаем внимание на сроки годности, условия хранения и чистоту. Каждый визит сопровождается фотофиксацией.',
    },
    {
        icon: 'chatBubble',
        title: 'Диалог прежде всего',
        bgClass: 'bg-beige-500 text-white',
        glowClass: 'bg-white/10',
        iconBgClass: 'bg-white/15',
        iconBgHoverClass: 'group-hover:bg-white/25',
        iconClass: 'text-white',
        bodyClass: 'text-white/90',
        body: 'Замечаем недочёт? Сначала спокойно обсуждаем его с администрацией и даём рекомендации. В 98% случаев проблема решается на месте — без конфликтов и жалоб.',
    },
]

const featureBlocksBottom: FeatureBlockData[] = [
    {
        icon: 'documentText',
        title: 'Объективные обзоры',
        bgClass: 'bg-slate text-white',
        glowClass: 'bg-beige-500/20',
        iconBgClass: 'bg-beige-500/20',
        iconBgHoverClass: 'group-hover:bg-beige-500/40',
        iconClass: 'text-beige-100',
        bodyClass: 'text-beige-100/80',
        body: 'Все визиты мы описываем <span class="font-semibold">открыто, с фотофиксацией</span> и честным рейтингом. Жители Астрахани видят реальную картину и делают осознанный выбор магазина.',
    },
    {
        icon: 'scale',
        title: 'В рамках закона',
        bgClass: 'bg-beige-100 text-slate border border-beige-500/20',
        glowClass: 'bg-beige-500/10',
        iconBgClass: 'bg-beige-500/15',
        iconBgHoverClass: 'group-hover:bg-beige-500/30',
        iconClass: 'text-beige-500',
        bodyClass: 'text-gray-500',
        body: 'Каждый наш шаг опирается на <span class="italic">Конституцию РФ</span>, закон о защите прав потребителей и правила продажи товаров. Мы действуем как обычные граждане — без претензий на властные полномочия.',
    },
]

</script>