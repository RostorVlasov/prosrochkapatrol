<template>
  <div class="bg-beige-50 dark:bg-gray-900 py-18 text-slate dark:text-beige-100 overflow-x-hidden">
    <BlobsBg/>
    <AdaptiveContainer class="p-0!">

      <!-- Заголовок -->
      <HomeHero />

      <main class="px-6">

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

        <!-- Знак качества -->
        <HomeBadge/>

        <!-- Недавние визиты -->
       <HomeRecentVisits/>

        <!-- FAQ -->
        <section class="py-24 dark:bg-gray-900">
          <FaqSection pill="FAQ" title-before="Частые" title-italic="вопросы"
            subtitle="Всё, что стоит знать о FreshCheck" :items="homeFaqSlice" all-link="/faq"
            all-link-text="Смотреть все вопросы" />
        </section>

        <!-- Соцсети -->
        <HomeSocials/>

        <!-- CTA -->
        <HomeCta/>

      </main>
    </AdaptiveContainer>
  </div>
</template>

<script setup lang="ts">

import { getFaqSlice } from '~/data/faq'

const homeFaqSlice = getFaqSlice({ about: 3, monitoring: 3 })

</script>