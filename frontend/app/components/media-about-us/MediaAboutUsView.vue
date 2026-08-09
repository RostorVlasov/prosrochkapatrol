<template>
  <LandingContainer class="py-12 sm:py-18 px-6">

    <!-- Заголовок -->
    <section class="py-16 sm:py-24 text-center relative overflow-hidden">
      <div class="max-w-4xl mx-auto relative z-10">
        <div class="mb-6">
          <SectionPill>Медиа • Публикации • Упоминания</SectionPill>
        </div>
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-6 text-slate dark:text-white">
          СМИ<br />
          <span class="text-beige-500 italic">о нашей работе</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-500 dark:text-beige-100/80 max-w-2xl mx-auto leading-relaxed">
          Публикации и репортажи о резонансных кейсах и результатах проверок FreshCheck в региональных средствах массовой информации.
        </p>
      </div>
    </section>

    <!-- Главный кейс в СМИ -->
    <section class="py-12 max-w-5xl mx-auto">
      <div class="text-center mb-12">
        <BaseSectionHeader
          pill="Главный кейс"
          title-before="Штраф 300 000 ₽"
          title-italic="для супермаркета"
          subtitle="Результат общественного контроля FreshCheck, попавший в повестку региональных СМИ"
        />
      </div>

      <!-- Карточка кейса -->
      <div class="bg-white dark:bg-gray-700 rounded-3xl border border-beige-100 dark:border-gray-500 overflow-hidden shadow-xl hover:border-beige-500 transition-all duration-500">
        <!-- Описание рейда/кейса -->
        <div class="p-8 sm:p-12 border-b border-beige-100 dark:border-gray-600">
          <div class="flex flex-wrap items-center gap-3 mb-6">
            <span class="px-3 py-1 bg-beige-100 dark:bg-gray-500 text-beige-500 font-bold text-xs rounded-full uppercase tracking-wider">
              Кейс #1 · Магнит (ТЦ «Три Кота»)
            </span>
            <span class="text-xs text-gray-400 dark:text-beige-100/60">Астрахань · ул. Минусинская, 8</span>
          </div>

          <h2 class="text-2xl sm:text-4xl font-black mb-6 text-slate dark:text-white leading-tight">
            По материалам FreshCheck крупная торговая сеть привлечена к ответственности
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="p-4 bg-beige-100/50 dark:bg-gray-600/50 rounded-2xl">
              <p class="text-2xl font-black text-beige-500 mb-1">17</p>
              <p class="text-xs text-gray-500 dark:text-beige-100/70">наименований просроченных товаров (более 45 ед.)</p>
            </div>
            <div class="p-4 bg-beige-100/50 dark:bg-gray-600/50 rounded-2xl">
              <p class="text-2xl font-black text-beige-500 mb-1">146 дней</p>
              <p class="text-xs text-gray-500 dark:text-beige-100/70">максимальная просрочка на полках</p>
            </div>
            <div class="p-4 bg-beige-100/50 dark:bg-gray-600/50 rounded-2xl">
              <p class="text-2xl font-black text-beige-500 mb-1">300 000 ₽</p>
              <p class="text-xs text-gray-500 dark:text-beige-100/70">итоговый штраф по ч. 2 ст. 14.43 КоАП РФ</p>
            </div>
          </div>

          <p class="text-gray-600 dark:text-beige-100/80 leading-relaxed text-base sm:text-lg">
            3 мая участники проекта зафиксировали многочисленные нарушения и передали доказательства в Управление Роспотребнадзора по Астраханской области. В ходе прокурорской проверки сведения полностью подтвердились, а АО «Тандер» было оштрафовано. Этот случай привлечения к ответственности стал резонансным в регионе.
          </p>
        </div>

        <!-- Источники в СМИ (блок с 2 первоисточниками одной новости) -->
        <div class="p-8 sm:p-12 bg-gray-50/50 dark:bg-gray-800/50">
          <h3 class="text-lg font-bold mb-6 text-slate dark:text-white flex items-center gap-2">
            <AppIcon name="newspaper" class="w-5 h-5 text-beige-500" />
            Публикации этого кейса в СМИ:
          </h3>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <!-- Источник 1: ГТРК Лотос -->
            <div class="bg-white dark:bg-gray-700 rounded-2xl border border-beige-100 dark:border-gray-500 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div class="p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-8 h-8 bg-beige-100 dark:bg-gray-500 rounded-lg flex items-center justify-center shrink-0">
                    <AppIcon name="telegram" class="w-4 h-4 text-beige-500" />
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-slate dark:text-white">ГТРК «Лотос»</h4>
                    <p class="text-xs text-gray-400 dark:text-beige-100/60">Канал в Макс · 30.07.2026</p>
                  </div>
                </div>
                <div class="mb-4 aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src="https://github.com/user-attachments/assets/438bfd07-f5b2-4f1a-a755-7af1faec7af4"
                    alt="Скриншот ГТРК Лотос"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p class="text-xs text-gray-500 dark:text-beige-100/70 leading-relaxed">
                  Опубликовали материал о том, как общественный контроль привёл к внеплановой проверке и штрафу для супермаркета.
                </p>
              </div>
            </div>

            <!-- Источник 2: astrakhan-news.ru -->
            <div class="bg-white dark:bg-gray-700 rounded-2xl border border-beige-100 dark:border-gray-500 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div class="p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-8 h-8 bg-beige-100 dark:bg-gray-500 rounded-lg flex items-center justify-center shrink-0">
                    <AppIcon name="newspaper" class="w-4 h-4 text-beige-500" />
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-slate dark:text-white">Лента новостей Астрахани</h4>
                    <p class="text-xs text-gray-400 dark:text-beige-100/60">astrakhan-news.ru · 27.07.2026</p>
                  </div>
                </div>
                <div class="mb-4 aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src="https://github.com/user-attachments/assets/153016bc-6f29-4405-8271-78a57e9c54fd"
                    alt="Скриншот astrakhan-news.ru"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p class="text-xs text-gray-500 dark:text-beige-100/70 leading-relaxed mb-4">
                  Перепечатка и освещение темы привлечения сетевого магазина к ответственности со ссылкой на материалы ГТРК.
                </p>
              </div>
              <div class="px-6 pb-6 pt-0">
                <a
                  href="https://astrakhan-news.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-xs font-bold text-beige-500 hover:text-beige-600 transition-colors"
                >
                  <span>Перейти к публикации</span>
                  <AppIcon name="arrowTopRight" class="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Готовы к сотрудничеству (CTA) -->
    <section class="py-16 max-w-4xl mx-auto text-center">
      <div class="bg-slate dark:bg-gray-700 rounded-3xl p-8 sm:p-12 border border-beige-100 dark:border-gray-500 shadow-2xl relative overflow-hidden">
        <div class="mb-6">
          <SectionPill>Для СМИ и партнёров</SectionPill>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black mb-6 text-white leading-tight">
          Открыты к диалогу<br />
          <span class="text-beige-500 italic">и сотрудничеству</span>
        </h2>
        <p class="text-off-white/80 dark:text-beige-100/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Предоставляем проверенные факты, фото и видеофиксацию нарушений потребительских прав. Всегда готовы дать комментарии по теме общественного контроля.
        </p>
        <NuxtLink
          to="/press"
          class="inline-flex items-center gap-3 px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-beige-500/30 hover:scale-105"
        >
          <AppIcon name="newspaper" class="w-5 h-5" />
          <span>Пресс-кит и контакты для СМИ</span>
        </NuxtLink>
      </div>
    </section>

  </LandingContainer>
</template>

<script lang="ts" setup>
import AppIcon from '@/components/ui/AppIcon.vue'
import SectionPill from '@/components/ui/SectionPill.vue'
</script>