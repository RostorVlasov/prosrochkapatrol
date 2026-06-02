<template>
  <LandingContainer class="py-12 sm:py-18 px-6">

    <!-- Заголовок -->
    <HomeHero />

    <!-- Статистика -->
    <HomeStats :shops-count="shopsCount" />

    <!-- Инструкция -->
    <HomeManual />

    <!-- Как мы наблюдаем -->
    <HomeApproach />

    <!-- Четыре шага -->
    <HomeProcess />

    <!-- Команда -->
    <HomeTeam />

    <!-- Новости -->
    <HomeNews />

    <!-- Польза -->
    <HomeBenefits />

    <!-- Ценности -->
    <HomeValues />

    <!-- Отзывы -->
    <HomeTestimonials />

    <!-- Недавние визиты -->
    <HomeRecentVisits :latest-shops="latestShops" :status="status" />

    <!-- FAQ -->
    <section class="py-24">
      <FaqSection pill="FAQ" title-before="Частые" title-italic="вопросы" subtitle="Всё, что стоит знать о FreshCheck"
        :items="homeFaqSlice" all-link="/faq" all-link-text="Смотреть все вопросы" />
    </section>

    <!-- Соцсети -->
    <HomeSocials />

    <!-- CTA -->
    <HomeCta />

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
    title: 'FreshCheck - Главная',
    description: `FreshCheck - Главная`,
    ogTitle: 'FreshCheck - Главная',
    ogDescription: `FreshCheck - Главная`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>