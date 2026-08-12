<template>
  <LandingContainer class="px-6 py-12 sm:py-18">
    <section class="relative flex min-h-[calc(100vh-8rem)] items-center py-12 sm:py-20">
      <div class="absolute inset-0 -z-0">
        <div class="absolute left-1/2 top-12 h-56 w-56 -translate-x-[130%] rounded-full bg-beige-500/10 blur-3xl" />
        <div class="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-slate/8 blur-3xl dark:bg-white/8" />
      </div>

      <div class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div class="min-w-0 text-center lg:text-left">
          <div class="mb-8">
            <SectionPill>СМИ • Репортажи • Публикации</SectionPill>
          </div>

          <h1 class="mb-6 break-words text-5xl font-black leading-[0.9] tracking-tighter text-slate dark:text-white sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            FreshCheck<br>
            <span class="text-beige-500 italic">в повестке региона</span>
          </h1>

          <p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-beige-100/80 md:mx-0 md:text-xl">
            Здесь собраны публикации и сюжеты о проверках FreshCheck. Показываем не просто упоминания, а реальные кейсы, где общественный контроль довёл историю до реакции надзорных органов и результата.
          </p>

          <div class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#publications"
              class="group px-8 py-4 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold text-base sm:text-lg hover:bg-gray-500 dark:hover:bg-beige-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate/20"
            >
              <AppIcon
                name="arrowDown"
                class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Смотреть публикации
            </a>

            <NuxtLink
              to="/press"
              class="px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-base sm:text-lg transition-colors duration-300 shadow-lg shadow-beige-500/30 flex items-center justify-center gap-2"
            >
              <AppIcon name="paperAirplane" class="w-5 h-5" />
              Пресс-кит и контакты
            </NuxtLink>
          </div>
        </div>

        <div class="min-w-0 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div
            v-for="metric in heroMetrics"
            :key="metric.label"
            class="rounded-[28px] border border-beige-100 bg-white/90 p-6 shadow-xl shadow-slate/5 backdrop-blur dark:border-gray-500 dark:bg-gray-700/80"
          >
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-beige-100 dark:bg-gray-600">
              <AppIcon :name="metric.icon" class="w-6 h-6 text-beige-500" />
            </div>
            <p class="mb-2 text-3xl font-black text-slate dark:text-white">{{ metric.value }}</p>
            <p class="text-sm leading-relaxed text-gray-500 dark:text-beige-100/70">{{ metric.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="case" class="py-10 sm:py-16">
      <BaseSectionHeader
        pill="Главный кейс"
        title-before="История, которая"
        title-italic="привела к штрафу"
        subtitle="Один из самых заметных сюжетов: просрочка на полках, подтверждённые факты и итоговое привлечение крупной сети к ответственности."
      />

      <div class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
        <article class="rounded-[32px] border border-beige-100 bg-white/95 p-8 shadow-xl shadow-slate/5 dark:border-gray-500 dark:bg-gray-700/85 sm:p-10">
          <div class="mb-6 flex flex-wrap items-center gap-3">
            <span class="rounded-full bg-beige-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-beige-500 dark:bg-gray-600">
              Кейс #1
            </span>
            <span class="text-sm text-gray-400 dark:text-beige-100/60">
              Магнит · ТЦ «Три Кота» · Астрахань
            </span>
          </div>

          <h2 class="mb-6 text-3xl font-black leading-tight text-slate dark:text-white sm:text-4xl">
            Материалы FreshCheck стали основанием для публичного резонанса и итогового штрафа 300 000 ₽
          </h2>

          <p class="mb-8 text-base leading-relaxed text-gray-600 dark:text-beige-100/80 sm:text-lg">
            Во время проверки* команда FreshCheck зафиксировала многочисленные нарушения по срокам годности и хранению товаров. Фото- и видеофиксация, обращения и переданные материалы запустили цепочку проверки, которая закончилась официальным подтверждением нарушений и штрафом для торговой сети.
          </p>

          <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-2xl bg-beige-100/60 p-5 dark:bg-gray-600/60">
              <p class="mb-1 text-2xl font-black text-beige-500">17</p>
              <p class="text-xs leading-relaxed text-gray-500 dark:text-beige-100/70">
                видов просроченной продукции выявлено в одном выезде
              </p>
            </div>
            <div class="rounded-2xl bg-beige-100/60 p-5 dark:bg-gray-600/60">
              <p class="mb-1 text-2xl font-black text-beige-500">146 дней</p>
              <p class="text-xs leading-relaxed text-gray-500 dark:text-beige-100/70">
                максимальная просрочка, обнаруженная на полке
              </p>
            </div>
            <div class="rounded-2xl bg-beige-100/60 p-5 dark:bg-gray-600/60">
              <p class="mb-1 text-2xl font-black text-beige-500">45+ ед.</p>
              <p class="text-xs leading-relaxed text-gray-500 dark:text-beige-100/70">
                товаров с нарушениями было снято и зафиксировано
              </p>
            </div>
          </div>
        </article>

        <aside class="rounded-[32px] bg-slate p-8 text-white shadow-2xl shadow-slate/20 dark:bg-gray-700 sm:p-10">
          <div class="mb-8">
            <SectionPill>Почему об этом написали</SectionPill>
          </div>

          <div class="space-y-5">
            <div
              v-for="point in caseHighlights"
              :key="point.title"
              class="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-beige-500/20">
                <AppIcon :name="point.icon" class="w-5 h-5 text-beige-500" />
              </div>
              <h3 class="mb-2 text-lg font-bold">{{ point.title }}</h3>
              <p class="text-sm leading-relaxed text-off-white/75 dark:text-beige-100/75">
                {{ point.text }}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section id="publications" class="py-10 sm:py-16">
      <BaseSectionHeader
        pill="Публикации"
        title-before="Как FreshCheck"
        title-italic="выглядит в медиа"
        subtitle="Использовали реальные материалы страницы, чтобы блок выглядел цельно и убедительно, а не как временный черновик."
      />

      <div class="mx-auto grid max-w-6xl gap-6 xl:grid-cols-2">
        <article
          v-for="publication in publications"
          :key="publication.title"
          class="group overflow-hidden rounded-[32px] border border-beige-100 bg-white/95 shadow-xl shadow-slate/5 transition-colors duration-300 hover:border-beige-500 dark:border-gray-500 dark:bg-gray-700/85"
        >
          <div
            class="relative flex aspect-[16/10] cursor-zoom-in items-center justify-center overflow-hidden bg-beige-100 dark:bg-gray-600"
            role="button"
            tabindex="0"
            @click="openLightbox(publication)"
            @keydown.enter="openLightbox(publication)"
          >
            <img
              :src="publication.image"
              :alt="publication.imageAlt"
              class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            >
            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate/60 to-transparent" />
            <div class="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate backdrop-blur dark:bg-gray-700/90 dark:text-white">
              <AppIcon :name="publication.badgeIcon" class="w-4 h-4 text-beige-500" />
              {{ publication.badge }}
            </div>
            <div class="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-700/90 dark:text-white">
              <AppIcon name="magnifyingGlass" class="w-4 h-4" />
              Увеличить
            </div>
          </div>

          <div class="p-6 sm:p-8">
            <div class="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-400 dark:text-beige-100/60">
              <span class="font-bold text-slate dark:text-white">{{ publication.source }}</span>
              <span>•</span>
              <span>{{ publication.date }}</span>
            </div>

            <h3 class="mb-4 text-2xl font-black leading-tight text-slate dark:text-white">
              {{ publication.title }}
            </h3>

            <p class="mb-6 text-base leading-relaxed text-gray-500 dark:text-beige-100/75">
              {{ publication.description }}
            </p>

            <ul class="mb-6 space-y-3">
              <li
                v-for="fact in publication.facts"
                :key="fact"
                class="flex items-start gap-3 text-sm leading-relaxed text-gray-500 dark:text-beige-100/75"
              >
                <AppIcon name="checkCircle" class="mt-0.5 w-5 h-5 shrink-0 text-beige-500" />
                <span>{{ fact }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap items-center gap-4">
              <a
                v-if="publication.href"
                :href="publication.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm font-bold text-beige-500 transition-colors duration-300 hover:text-beige-600"
              >
                <span>{{ publication.cta }}</span>
                <AppIcon name="arrowTopRight" class="w-4 h-4" />
              </a>

              <span
                v-else
                class="inline-flex items-center gap-2 rounded-full bg-beige-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-beige-500 dark:bg-gray-600"
              >
                <AppIcon name="tv" class="w-4 h-4" />
                {{ publication.cta }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="py-10 sm:py-16">
      <div class="mx-auto grid max-w-6xl gap-6">
        <div class="rounded-[32px] border border-beige-100 bg-white/95 p-8 shadow-xl shadow-slate/5 dark:border-gray-500 dark:bg-gray-700/85 sm:p-10">
          <div class="mb-6">
            <SectionPill>Что получает редакция</SectionPill>
          </div>

          <h2 class="mb-5 text-3xl font-black leading-tight text-slate dark:text-white sm:text-4xl">
            Готовые факты, визуалы и понятный сюжет без лишней воды
          </h2>

          <p class="mb-8 text-base leading-relaxed text-gray-500 dark:text-beige-100/75 sm:text-lg">
            Мы собираем материалы так, чтобы журналисту было удобно быстро разобраться в кейсе: где произошло нарушение, чем оно подтверждено и какой общественный эффект история уже дала.
          </p>

          <div class="space-y-4">
            <div
              v-for="item in newsroomBenefits"
              :key="item.title"
              class="flex items-start gap-4 rounded-2xl bg-beige-100/50 p-4 dark:bg-gray-600/50"
            >
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-gray-700">
                <AppIcon :name="item.icon" class="w-5 h-5 text-beige-500" />
              </div>
              <div>
                <h3 class="mb-1 text-base font-bold text-slate dark:text-white">{{ item.title }}</h3>
                <p class="text-sm leading-relaxed text-gray-500 dark:text-beige-100/70">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-[32px] bg-slate p-8 text-center text-white shadow-2xl shadow-slate/20 dark:bg-gray-700 sm:p-10">
          <div class="mb-6">
            <SectionPill>Для СМИ и партнёров</SectionPill>
          </div>

          <h2 class="mb-6 text-3xl font-black leading-tight sm:text-5xl">
            Нужен комментарий,<br>
            <span class="text-beige-500 italic">фактура или кейс?</span>
          </h2>

          <p class="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-off-white/80 dark:text-beige-100/80 sm:text-lg">
            Поделимся подтверждёнными материалами, визуалами с проверок* и дадим быстрый комментарий по теме общественного контроля, прав потребителей и нарушений в магазинах.
          </p>

          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <NuxtLink
              to="/press"
              class="group px-8 py-4 bg-white text-slate rounded-xl font-bold text-base sm:text-lg hover:bg-beige-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-black/10"
            >
              <AppIcon
                name="newspaper"
                class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
              />
              Для журналистов
            </NuxtLink>

            <NuxtLink
              to="/press"
              class="px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-base sm:text-lg transition-colors duration-300 shadow-lg shadow-beige-500/30 flex items-center justify-center gap-2"
            >
              <AppIcon name="paperAirplane" class="w-5 h-5" />
              Связаться с нами
            </NuxtLink>
          </div>
        </div>

        <p class="mx-auto max-w-3xl text-center text-xs leading-relaxed text-gray-400 dark:text-beige-100/50">
          * Общественный мониторинг силами волонтёров FreshCheck — не является государственной проверкой в понимании законодательства РФ.
        </p>
      </div>
    </section>
  </LandingContainer>

  <Teleport to="body">
    <div
      v-if="lightboxImage"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-slate/90 p-4 backdrop-blur-sm sm:p-8"
      @click.self="closeLightbox"
    >
      <button
        type="button"
        class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20"
        @click="closeLightbox"
      >
        <AppIcon name="xMark" class="h-6 w-6" />
      </button>
      <img
        :src="lightboxImage.src"
        :alt="lightboxImage.alt"
        class="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
      >
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'

type HeroMetric = {
  value: string
  label: string
  icon: string
}

type CaseHighlight = {
  title: string
  text: string
  icon: string
}

type PublicationCard = {
  source: string
  date: string
  badge: string
  badgeIcon: string
  title: string
  description: string
  image: string
  imageAlt: string
  cta: string
  href?: string
  facts: string[]
}

type NewsroomBenefit = {
  title: string
  text: string
  icon: string
}

const heroMetrics: HeroMetric[] = [
  {
    value: '2',
    label: 'заметные публикации уже вынесли тему нарушений из общественного мониторинга в публичную повестку',
    icon: 'newspaper',
  },
  {
    value: '300 000 ₽',
    label: 'штраф получил магазин после проверки по материалам, где были использованы данные FreshCheck',
    icon: 'scale',
  },
  {
    value: '100%',
    label: 'упор на подтверждённые факты: фото, видео, адрес, даты и понятный контекст для редакций',
    icon: 'shieldCheck',
  },
]

const caseHighlights: CaseHighlight[] = [
  {
    title: 'Понятный конфликт',
    text: 'История легко считывается: общественный контроль, обнаруженная просрочка, реакция надзора и итоговое наказание.',
    icon: 'megaphone',
  },
  {
    title: 'Сильная доказательная база',
    text: 'Редакции получают не абстрактное заявление, а зафиксированные факты с конкретным местом, датой и перечнем нарушений.',
    icon: 'documentText',
  },
  {
    title: 'Социальная значимость',
    text: 'Материал напрямую касается безопасности покупателей, поэтому быстро находит отклик у аудитории и журналистов.',
    icon: 'buildingStorefront',
  },
]

const publications: PublicationCard[] = [
  {
    source: 'ГТРК «Лотос»',
    date: '27.07.2026',
    badge: 'MAX',
    badgeIcon: 'tv',
    title: 'Сюжет о том, как общественный мониторинг стал причиной официальной проверки',
    description: 'Материал визуально и эмоционально показывает сам кейс: обнаруженные нарушения, реакцию участников и то, как история вышла за рамки одной публикации.',
    image: '/maxlotos.png',
    imageAlt: 'Скриншот публикации ГТРК Лотос в MAX',
    cta: 'Материал размещён в канале ГТРК «Лотос»',
    facts: [
      'Фокус на реальном кейсе, а не на абстрактной проблеме.',
      'Показывает, что материалы FreshCheck становятся инфоповодом для регионального медиа.',
      'Усиливает доверие через понятный визуальный контент и медиабренд.',
    ],
  },
  {
    source: 'Лента новостей Астрахани',
    date: '27.07.2026',
    badge: 'Сайт',
    badgeIcon: 'globeAlt',
    title: 'Онлайн-публикация закрепила кейс и расширила охват истории',
    description: 'Второй источник помог закрепить резонанс: тема получила дополнительное распространение в новостной выдаче и стала более заметной для городской аудитории.',
    image: '/lentasite.png',
    imageAlt: 'Скриншот публикации Ленты новостей Астрахани',
    href: 'https://astrakhan-news.ru',
    cta: 'Перейти к публикации',
    facts: [
      'Подтверждает, что кейс живёт не в одном канале, а расходится дальше.',
      'Делает историю более цитируемой и удобной для повторного использования.',
      'Добавляет проекту медийный вес за счёт внешнего независимого упоминания.',
    ],
  },
]

const newsroomBenefits: NewsroomBenefit[] = [
  {
    title: 'Факты без догадок',
    text: 'Даём редакциям чёткую картину: кто, где, когда и что именно было зафиксировано.',
    icon: 'checkCircle',
  },
  {
    title: 'Фото и видео из проверок*',
    text: 'Можно быстро собрать карточку новости, пост или сюжет без поиска дополнительных визуалов.',
    icon: 'cameraHero',
  },
  {
    title: 'Быстрый контакт по теме',
    text: 'Если нужен комментарий, дополнительная хронология или контекст — отвечаем без долгих согласований.',
    icon: 'paperAirplane',
  },
]

const lightboxImage = ref<{ src: string; alt: string } | null>(null)

function openLightbox(publication: PublicationCard) {
  lightboxImage.value = { src: publication.image, alt: publication.imageAlt }
}

function closeLightbox() {
  lightboxImage.value = null
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeLightbox()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>
