<template>
  <LandingContainer class="px-6">

    <!-- Заголовок -->
    <section class="min-h-[45vh] flex items-center justify-center py-20 relative overflow-hidden">
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <div class="mb-8">
          <SectionPill>Медиа • Публикации • Упоминания</SectionPill>
        </div>
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 text-slate dark:text-white">
          СМИ<br/>
          <span class="text-beige-500 italic">о нас</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-500 dark:text-off-white/80 max-w-2xl mx-auto leading-relaxed">
          Публикации, упоминания и репортажи о проекте FreshCheck в средствах массовой информации Астрахани и региона.
        </p>
      </div>
    </section>

    <!-- Упоминания в СМИ -->
    <section class="py-16 max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <BaseSectionHeader
          pill="Публикации"
          title-before="Нас упоминают"
          title-italic="в прессе"
          subtitle="Материалы о нашей деятельности в региональных СМИ"
        />
      </div>

      <div class="space-y-16">

        <!-- ГТРК Лотос -->
        <div class="bg-white dark:bg-slate rounded-3xl border border-off-white dark:border-gray-500 overflow-hidden shadow-lg">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div class="p-8 sm:p-10 flex flex-col justify-center order-2 lg:order-1">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 bg-beige-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <AppIcon name="newspaper" class="w-5 h-5 text-beige-500" />
                </div>
                <span class="text-sm font-semibold text-beige-500 uppercase tracking-widest">ГТРК «Лотос»</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-black mb-4 text-slate dark:text-white leading-tight">
                Магазин крупной торговой сети оштрафован на 300 000 рублей
              </h2>
              <p class="text-gray-500 dark:text-off-white/70 leading-relaxed mb-6">
                В ходе мониторинга инициативной группой горожан на полках магазина выявлено 17 наименований товаров с истёкшим сроком годности. Материалы были направлены в региональное отделение Роспотребнадзора. Прокуратура инициировала проверку по данному факту.
              </p>
              <p class="text-gray-500 dark:text-off-white/70 leading-relaxed mb-6">
                По результатам проверки супермаркет привлечён к административной ответственности — назначен штраф в размере 300 тысяч рублей.
              </p>
              <div class="flex items-center gap-2 text-sm text-gray-400 dark:text-off-white/40">
                <AppIcon name="telegram" class="w-4 h-4" />
                <span>Канал в Макс · ГТРК «Лотос» Астрахань · 3 015 подписчиков</span>
              </div>
            </div>
            <div class="order-1 lg:order-2 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden min-h-[280px]">
              <img
                src="https://github.com/user-attachments/assets/438bfd07-f5b2-4f1a-a755-7af1faec7af4"
                alt="Скриншот публикации ГТРК «Лотос» в мессенджере Макс"
                class="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- astrakhan-news.ru -->
        <div class="bg-white dark:bg-slate rounded-3xl border border-off-white dark:border-gray-500 overflow-hidden shadow-lg">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div class="bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden min-h-[280px] order-1">
              <img
                src="https://github.com/user-attachments/assets/153016bc-6f29-4405-8271-78a57e9c54fd"
                alt="Скриншот публикации на сайте astrakhan-news.ru"
                class="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div class="p-8 sm:p-10 flex flex-col justify-center order-2">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 bg-beige-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <AppIcon name="newspaper" class="w-5 h-5 text-beige-500" />
                </div>
                <span class="text-sm font-semibold text-beige-500 uppercase tracking-widest">astrakhan-news.ru</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-black mb-4 text-slate dark:text-white leading-tight">
                В Астрахани магазин крупной торговой сети оштрафован на 300 000 рублей
              </h2>
              <p class="text-gray-500 dark:text-off-white/70 leading-relaxed mb-4">
                27 июля 2026, 19:24 · Раздел «СМИ»
              </p>
              <p class="text-gray-500 dark:text-off-white/70 leading-relaxed mb-6">
                Издание «Лента новостей Астрахани» опубликовало материал о нашей работе. Источник: канал в Макс «ГТРК „Лотос" Астрахань».
              </p>
              <a
                href="https://astrakhan-news.ru"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-beige-500 hover:text-beige-600 font-semibold transition-colors"
              >
                <AppIcon name="arrowTopRight" class="w-4 h-4" />
                astrakhan-news.ru
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Готовы к сотрудничеству -->
    <section class="py-24 max-w-4xl mx-auto text-center">
      <div class="bg-slate dark:bg-white/5 rounded-3xl p-10 sm:p-14">
        <div class="mb-6">
          <SectionPill>Для СМИ и партнёров</SectionPill>
        </div>
        <h2 class="text-4xl sm:text-5xl font-black mb-6 text-white leading-tight">
          Мы всегда рады<br/>
          <span class="text-beige-500 italic">сотрудничеству</span>
        </h2>
        <p class="text-off-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Открыты к диалогу с журналистами, редакциями и партнёрскими организациями.
          Вся информация для СМИ и партнёров — на специальной странице проекта.
        </p>
        <NuxtLink
          to="/press"
          class="inline-flex items-center gap-3 px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-base sm:text-lg transition-colors duration-300 shadow-lg shadow-beige-500/30"
        >
          <AppIcon name="newspaper" class="w-5 h-5" />
          Страница для СМИ и партнёров
        </NuxtLink>
      </div>
    </section>

  </LandingContainer>
</template>

<script lang="ts" setup>
import AppIcon from '@/components/ui/AppIcon.vue'
</script>
