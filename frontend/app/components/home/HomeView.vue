<template>
  <LandingContainer class="py-12 sm:py-18 px-6">

    <!-- Заголовок -->
    <HomeHero />

    <!-- Инициатива на РОИ -->
    <HomeInitiative />

    <!-- Статистика -->
    <HomeStats :shops-count="shopsCount" />

    <!-- Инструкция -->
    <HomeManual />

    <!-- Как мы наблюдаем -->
    <LazyHomeApproach />

    <!-- Четыре шага -->
    <LazyHomeProcess />

    <!-- Команда -->
    <LazyHomeTeam />

    <!-- Новости -->
    <LazyHomeNews />

    <!-- Польза -->
    <LazyHomeBenefits />

    <!-- Ценности -->
    <LazyHomeValues />

    <!-- Отзывы -->
    <LazyHomeTestimonials />

    <!-- Недавние визиты -->
    <LazyHomeRecentVisits :latest-shops="latestShops" :status="status" />

    <!-- FAQ -->
    <section class="py-24">
      <LazyFaqSection pill="FAQ" title-before="Частые" title-italic="вопросы" subtitle="Всё, что стоит знать о FreshCheck"
        :items="homeFaqSlice" all-link="/faq" all-link-text="Смотреть все вопросы" />
    </section>

    <!-- Соцсети -->
    <LazyHomeSocials />

    <!-- CTA -->
    <LazyHomeCta />

  </LandingContainer>
</template>

<script setup lang="ts">

import { getFaqSlice } from '~/data/faq'
import type { ShopsResponse } from '~/types/shops.types';

const homeFaqSlice = getFaqSlice({ about: 3, monitoring: 3 })

const { data, status } = await useApiFetch<ShopsResponse>('/api/shops', {
    key: 'home-latest-shops',
    query: { sort: '-date_checked', limit: 3 },
})

const latestShops = computed(() => data.value?.docs ?? [])
const shopsCount = computed(() => data.value?.totalDocs)

useSeoMeta({
    title: 'FreshCheck — общественный мониторинг магазинов Астрахани',
    description: 'Независимая проверка сроков годности и условий хранения в магазинах Астрахани. Честные обзоры, рейтинги и фотоотчёты от жителей города.',
    ogTitle: 'FreshCheck — общественный мониторинг магазинов Астрахани',
    ogDescription: 'Независимая проверка сроков годности и условий хранения в магазинах Астрахани.',
    ogImage: '/freshcheck.png',
    twitterCard: 'summary_large_image',
})

</script>