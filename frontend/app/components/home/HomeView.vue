<template>
  <div class="bg-beige-50 dark:bg-gray-900 text-slate dark:text-beige-100 overflow-x-hidden">
    <AdaptiveContainer class="p-0!">

      <section class="flex items-center justify-center relative overflow-hidden py-12">
        <div class="w-full px-6 text-center relative z-10">
          <div class="mb-8">
            <SectionPill>Общественный мониторинг • Астрахань</SectionPill>
          </div>

          <h1
            class="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-slate dark:text-white wrap-break-word">
            Видим то,
            <span class="text-beige-500 italic block">что на полках</span>
          </h1>

          <p class="text-base md:text-xl text-gray-500 dark:text-beige-100/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Мы — <span class="font-bold text-slate dark:text-white">независимая гражданская инициатива жителей
              Астрахани</span>.
            Проводим общественный мониторинг, информируем администрацию о недочётах и помогаем защищать права
            потребителей.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="scrollToWhat"
              class="group px-8 py-4 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold text-lg hover:bg-gray-500 dark:hover:bg-beige-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate/20">
              <AppIcon name="arrowDown" class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              Как это работает
            </button>
            <a href="/contact"
              class="px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg shadow-beige-500/30 flex items-center justify-center gap-2">
              <AppIcon name="paperAirplane" class="w-5 h-5" />
              Предложить магазин
            </a>
          </div>
        </div>
      </section>

      <main class="px-6">

        <!-- Статистика -->
        <section class="py-24">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard v-for="stat in stats" :key="stat.value" v-bind="stat" />
          </div>
        </section>

        <!-- Как сообщить -->
        <section class="py-24">
          <BaseSectionHeader pill="Инструкция" title-before="Как" title-italic="сообщить" title-after=" о проблеме?"
            subtitle="Три простых шага — и мы проверим магазин, о котором вы рассказали" centered />
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <StepCard v-for="step in reportSteps" :key="step.number" v-bind="step" />
          </div>
          <div class="mt-12 text-center">
            <a :href="TELEGRAM_CHANNEL" target="_blank"
              class="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg">
              <AppIcon name="telegram" class="w-6 h-6" />
              Написать в канал проекта
            </a>
          </div>
        </section>

        <!-- Как мы наблюдаем -->
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

        <!-- Четыре шага -->
        <section class="py-24">
          <BaseSectionHeader pill="Процесс" title-before="Четыре шага к" title-italic="результату"
            subtitle="От визита в магазин до публикации обзора — всё прозрачно и по чётким правилам" centered />
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative mt-12">
            <div
              class="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-linear-to-r from-beige-100 via-beige-500 to-beige-100 dark:from-gray-500 dark:via-beige-500 dark:to-gray-500" />
            <ProcessStep v-for="(step, i) in processSteps" :key="i" :index="i" v-bind="step" />
          </div>
        </section>

        <!-- Команда -->
        <section class="py-24">
          <BaseSectionHeader pill="Люди проекта" title-before="Кто" title-italic="мы такие"
            subtitle="Мы — не контролирующий орган и не журналисты. Мы обычные жители Астрахани, которым не всё равно"
            centered />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMemberCard v-for="member in teamMembers" :key="member.name" v-bind="member" />
          </div>
          <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="info in teamInfo" :key="info.title"
              class="p-6 bg-white dark:bg-gray-700 rounded-2xl border border-beige-100 dark:border-gray-500">
              <div class="flex gap-4 items-start">
                <div
                  class="w-12 h-12 bg-beige-100 dark:bg-gray-500 rounded-xl flex items-center justify-center shrink-0">
                  <AppIcon :name="info.icon" class="w-6 h-6 text-beige-500" />
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-2">{{ info.title }}</h3>
                  <p class="text-gray-500 dark:text-beige-100/70 text-sm leading-relaxed">{{ info.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Новости -->
        <section class="py-24">
          <BaseSectionHeader pill="Новости" title-before="Последние" title-italic="обновления"
            subtitle="Читайте новости проекта, изучайте законы о защите прав потребителей и будьте в курсе изменений"
            centered />
          <div v-if="newsUpdates.length" class="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-6">
            <PostItem v-for="post in newsUpdates" :key="post.id" :post="post" />
          </div>
          <div v-else class="text-center py-12">
            <AppIcon name="exclamationCircle" class="w-16 h-16 text-beige-500 mx-auto mb-4" />
            <p class="text-xl font-bold text-slate dark:text-white mb-2">Ошибка подключения к API</p>
            <p class="text-gray-500 dark:text-beige-100/70">Не удалось загрузить новости. Попробуйте позже.</p>
          </div>
        </section>

        <!-- Польза -->
        <section class="py-24">
          <BaseSectionHeader pill="Для вас" title-before="Что это даёт" title-italic="именно вам"
            subtitle="FreshCheck приносит пользу каждому участнику торговой цепочки" centered />
          <div class="space-y-6 mt-12">
            <BenefitRow v-for="row in benefitRows" :key="row.title" v-bind="row" />
          </div>
        </section>

        <!-- Ценности -->
        <section class="py-24">
          <BaseSectionHeader pill="Ценности" title-before="На чём мы" title-italic="стоим"
            subtitle="Десять принципов, которые определяют каждый шаг нашей работы" centered />
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            <PrincipleCard v-for="(p, i) in principles" :key="i" v-bind="p" />
          </div>
          <div
            class="mt-16 p-10 bg-linear-to-r from-beige-100 to-beige-50 dark:from-gray-700 dark:to-gray-500 rounded-3xl border border-beige-500/20 text-center">
            <AppIcon name="handRaised" class="w-12 h-12 text-beige-500 mx-auto mb-4" />
            <p class="text-2xl font-bold mb-2">Мы — это вы</p>
            <p class="text-gray-500 dark:text-beige-100/70">
              <span class="font-semibold">FreshCheck</span> — это все мы вместе. За качество, свежесть и безопасность
              продуктов в Астрахани.
            </p>
          </div>
        </section>

        <!-- Отзывы -->
        <section class="py-24 bg-beige-100/30 dark:bg-gray-900">
          <BaseSectionHeader pill="Отзывы" title-before="Голоса" title-italic="Астрахани"
            subtitle="Слова жителей, которым помогли наши наблюдения" centered />
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <TestimonialCard v-for="t in testimonials" :key="t.author" v-bind="t" />
          </div>
        </section>

        <!-- Знак качества -->
        <section class="py-24">
          <div
            class="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate via-gray-500 to-slate p-10 sm:p-16 text-white">
            <div class="absolute top-0 right-0 w-96 h-96 bg-beige-500/20 rounded-full blur-3xl pointer-events-none" />
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-beige-100/10 rounded-full blur-3xl pointer-events-none" />
            <div class="relative z-10">
              <div
                class="inline-block px-4 py-2 bg-beige-500 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6">
                Знак качества
              </div>
              <h2 class="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[0.9]">
                «Одобрено
                <span class="italic text-beige-100 drop-shadow-md block">FreshCheck»</span>
              </h2>
              <p class="text-sm sm:text-lg text-beige-100/80 mb-8 leading-relaxed">
                Магазины с рейтингом <strong class="text-white">5/5</strong> получают право использовать
                видимый знак качества на входе. Это не государственный сертификат — это мнение жителей,
                основанное на реальных наблюдениях.
              </p>
              <div class="space-y-3 mb-10">
                <div v-for="item in badgePerks" :key="item" class="flex items-center gap-3">
                  <AppIcon name="checkCircle" class="w-6 h-6 text-beige-500 shrink-0" />
                  <span class="text-beige-100/90 text-xs sm:text-base">{{ item }}</span>
                </div>
              </div>
              <NuxtLink to="/badges"
                class="inline-flex items-center gap-2 px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold shadow-xl transition-colors duration-300">
                Как получить наклейку
                <AppIcon name="arrowRight" class="w-5 h-5" />
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- Недавние визиты -->
        <section class="py-24">
          <div class="flex flex-col sm:flex-row justify-between sm:items-end mb-16 gap-6">
            <div>
              <SectionPill>Актуально</SectionPill>
              <h2 class="text-5xl md:text-6xl font-black mb-4 tracking-tight">
                Недавние <span class="italic text-beige-500">визиты</span>
              </h2>
              <p class="text-xl text-gray-500 dark:text-beige-100/70">Свежие обзоры магазинов Астрахани</p>
            </div>
            <NuxtLink to="/product-review"
              class="inline-flex items-center gap-2 text-beige-500 font-bold hover:text-beige-600 transition-colors duration-300">
              Все магазины
              <AppIcon name="arrowRight" class="w-5 h-5" />
            </NuxtLink>
          </div>
          <ShopsSkeleton v-if="loadingShops" />
          <div v-else-if="latestShops?.docs.length" class="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-6">
            <ShopItem v-for="shop in latestShops.docs" :key="shop.id" :shop="shop" />
          </div>
          <div v-else class="text-center py-12">
            <AppIcon name="exclamationCircle" class="w-16 h-16 text-beige-500 mx-auto mb-4" />
            <p class="text-xl font-bold text-slate dark:text-white mb-2">Ошибка подключения к API</p>
            <p class="text-gray-500 dark:text-beige-100/70">Не удалось загрузить магазины. Попробуйте позже.</p>
          </div>
        </section>

        <!-- FAQ -->
        <section class="py-24 dark:bg-gray-900">
          <FaqSection pill="FAQ" title-before="Частые" title-italic="вопросы"
            subtitle="Всё, что стоит знать о FreshCheck" :items="homeFaqSlice" all-link="/faq"
            all-link-text="Смотреть все вопросы" />
        </section>

        <!-- Соцсети -->
        <section class="py-24">
          <BaseSectionHeader pill="Контакты проекта" title-before="Наши" title-italic="каналы"
            subtitle="Подписывайтесь, чтобы быть в курсе всех новостей и обзоров" centered />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <SocialLink v-for="link in socialLinks" :key="link.name" v-bind="link" />
          </div>
        </section>

        <!-- CTA -->
        <section class="py-24 text-center">
          <div class="p-6 pb-12 rounded-3xl overflow-hidden relative bg-beige-100/50 dark:bg-slate">
            <div class="relative z-10">
              <AppIcon name="chatBubble" class="w-12 h-12 mx-auto mb-4 text-beige-500" />
              <h3 class="text-2xl font-bold mb-2 text-slate dark:text-white">Заметили что-то не то?</h3>
              <p class="text-gray-500 dark:text-beige-100/70 max-w-xl mx-auto mb-8">
                Поделитесь наблюдением — мы заглянем в магазин, поговорим с администрацией и опубликуем честный обзор.
              </p>
              <div class="flex flex-col gap-4 justify-center items-center">
                <Contacts />
                <NuxtLink to="/contact"
                  class="inline-flex items-center gap-2 font-bold transition-colors dark:hover:text-beige-300 hover:text-gray-500 duration-300 text-lg">
                  <AppIcon name="documentText" class="w-5 h-5" />
                  Отправить жалобу с сайта
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>

      </main>
    </AdaptiveContainer>
  </div>
</template>

<script setup lang="ts">
import {
  processSteps,
  principles,
  testimonials,
  socialLinks,
  badgePerks,
  teamMembers,
  benefitRows,
  reportSteps,
  stats,
  teamInfo,
} from '~/data/data'
import { getFaqSlice } from '~/data/faq'
import { TELEGRAM_CHANNEL } from '~/data/social'
import { useShopStore } from '~/stores/shops'
import type { IconName } from '~/components/ui/AppIcon.vue'
import type { PostDoc, PostsResponse } from '~/types/post.types'


const homeFaqSlice = getFaqSlice({ about: 3, monitoring: 3 })
const shopsStore = useShopStore()
await shopsStore.fetchShopData({ sort: '-date_checked', limit: 4 })
const { shops: latestShops, isLoading: loadingShops } = storeToRefs(shopsStore)

const { data: postsResponse, refresh } = await useApiFetch<PostsResponse>('/api/posts', {
  key: 'home-posts',
  query: { limit: 4 },
})
onMounted(refresh)

const newsUpdates = computed<PostDoc[]>(() => postsResponse.value?.docs ?? [])

const scrollToWhat = () => {
  if (import.meta.client) {
    document.getElementById('what')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

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