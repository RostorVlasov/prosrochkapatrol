<template>
  <LandingContainer class="py-12 sm:py-18 px-6">

    <!-- Заголовок -->
    <HomeHero />

    <!-- Статистика -->
    <HomeStats />

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
    <HomeRecentVisits />

    <!-- FAQ -->
    <section class="py-24 dark:bg-gray-900">
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

const homeFaqSlice = getFaqSlice({ about: 3, monitoring: 3 })

useSeoMeta({
    title: 'FreshCheck - Главная',
    description: `FreshCheck - Главная`,
    ogTitle: 'FreshCheck - Главная',
    ogDescription: `FreshCheck - Главная`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>