<template>
  <div class="min-h-screen bg-beige-50 dark:bg-gray-900 text-slate dark:text-beige-100 font-sans">

    <section class="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <BlobsBg />

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <div class="mb-8">
          <SectionPill>Общественный мониторинг • Астрахань</SectionPill>
        </div>

        <h1
          class="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 max-w-4xl mx-auto text-slate dark:text-white">
          Видим то,<br />
          <span class="text-beige-500 italic">что на полках</span>
        </h1>

        <p
          class="text-xl md:text-2xl text-gray-500 dark:text-beige-100/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Мы — <span class="font-bold text-slate dark:text-white">независимая гражданская инициатива жителей
            Астрахани</span>.
          Проводим общественный мониторинг, информируем администрацию о недочётах и помогаем защищать права
          потребителей.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="scrollToWhat"
            class="group px-8 py-4 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold text-lg hover:bg-gray-500 dark:hover:bg-beige-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate/20">
            <AppIcon name="arrowDown"
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
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

    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard v-for="stat in stats" :key="stat.value" v-bind="stat" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <BaseSectionHeader pill="Инструкция" title-before="Как" title-italic="сообщить" title-after="о проблеме?"
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

    <section id="what" class="max-w-7xl mx-auto px-6 py-24">
      <BaseSectionHeader pill="Наш подход" title-before="Как мы" title-italic="наблюдаем"
        subtitle="Каждую неделю мы осматриваем полки, делимся наблюдениями с администрацией и помогаем жителям Астрахани делать осознанный выбор." />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mt-12">
        <FeatureBlock icon="magnifyingGlass" title="Открытый мониторинг"
          bg-class="bg-gray-500 text-white" glow-class="bg-beige-500/20" icon-bg-class="bg-beige-500/20"
          icon-bg-hover-class="group-hover:bg-beige-500/40" icon-class="text-beige-100"
          body-class="text-beige-100/80">
          Мы заходим в магазины как <span class="italic">обычные покупатели</span>, обращаем внимание на сроки
          годности, условия хранения и чистоту. Каждый визит сопровождается фотофиксацией.
        </FeatureBlock>

        <FeatureBlock icon="chatBubble" title="Диалог прежде всего"
          bg-class="bg-beige-500 text-white" glow-class="bg-white/10" icon-bg-class="bg-white/15"
          icon-bg-hover-class="group-hover:bg-white/25" icon-class="text-white" body-class="text-white/90">
          Замечаем недочёт? Сначала спокойно обсуждаем его с администрацией и даём рекомендации. В 98% случаев
          проблема решается на месте — без конфликтов и жалоб.
        </FeatureBlock>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FeatureBlock icon="documentText" title="Объективные обзоры"
          bg-class="bg-slate text-white" glow-class="bg-beige-500/20" icon-bg-class="bg-beige-500/20"
          icon-bg-hover-class="group-hover:bg-beige-500/40" icon-class="text-beige-100"
          body-class="text-beige-100/80">
          Все визиты мы описываем <span class="font-semibold">открыто, с фотофиксацией</span> и честным
          рейтингом.
          Жители Астрахани видят реальную картину и делают осознанный выбор магазина.
        </FeatureBlock>

        <FeatureBlock icon="scale" title="В рамках закона"
          bg-class="bg-beige-100 text-slate border border-beige-500/20" glow-class="bg-beige-500/10"
          icon-bg-class="bg-beige-500/15" icon-bg-hover-class="group-hover:bg-beige-500/30"
          icon-class="text-beige-500" body-class="text-gray-500">
          Каждый наш шаг опирается на <span class="italic">Конституцию РФ</span>, закон о защите прав
          потребителей и
          правила продажи товаров. Мы действуем как обычные граждане — без претензий на властные полномочия.
        </FeatureBlock>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <BaseSectionHeader pill="Процесс" title-before="Четыре шага к" title-italic="результату"
        subtitle="От визита в магазин до публикации обзора — всё прозрачно и по чётким правилам" centered />

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative mt-12">
        <div
          class="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-linear-to-r from-beige-100 via-beige-500 to-beige-100 dark:from-gray-500 dark:via-beige-500 dark:to-gray-500">
        </div>
        <ProcessStep v-for="(step, i) in processSteps" :key="i" :index="i" v-bind="step" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
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

    <section class="max-w-7xl mx-auto px-6 py-24">
      <BaseSectionHeader pill="Новости" title-before="Последние" title-italic="обновления"
        subtitle="Читайте новости проекта, изучайте законы о защите прав потребителей и будьте в курсе изменений"
        centered />

      <ShopsSkeleton v-if="loadingNews" />

      <div v-else-if="newsUpdates?.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostItem v-for="post in newsUpdates" :key="post.id" :post="post" />
      </div>

      <div v-else class="text-center py-12">
        <AppIcon name="exclamationCircle" class="w-16 h-16 text-beige-500 mx-auto mb-4" />
        <p class="text-xl font-bold text-slate dark:text-white mb-2">Ошибка подключения к API</p>
        <p class="text-gray-500 dark:text-beige-100/70">Не удалось загрузить новости. Попробуйте позже.</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <BaseSectionHeader pill="Для вас" title-before="Что это даёт" title-italic="именно вам"
        subtitle="FreshCheck приносит пользу каждому участнику торговой цепочки" centered />

      <div class="space-y-6 mt-12">
        <BenefitRow v-for="row in benefitRows" :key="row.title" v-bind="row" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <BaseSectionHeader pill="Ценности" title-before="На чём мы" title-italic="стоим"
        subtitle="Десять принципов, которые определяют каждый шаг нашей работы" centered />
        
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
        <PrincipleCard v-for="(p, i) in principles" :key="i" description="чо тут" v-bind="p" />
      </div>

      <div
        class="mt-16 p-10 bg-linear-to-r from-beige-100 to-beige-50 dark:from-gray-700 dark:to-gray-500 rounded-3xl border border-beige-500/20 text-center">
        <AppIcon name="handRaised" class="w-12 h-12 text-beige-500 mx-auto mb-4" />
        <p class="text-2xl font-bold mb-2">Мы — это вы</p>
        <p class="text-gray-500 dark:text-beige-100/70 max-w-xl mx-auto">
          <span class="font-semibold">FreshCheck</span> — это все мы вместе. За качество, свежесть и
          безопасность продуктов в Астрахани.
        </p>
      </div>
    </section>

    <section class="py-24 bg-beige-100/30 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <BaseSectionHeader pill="Отзывы" title-before="Голоса" title-italic="Астрахани"
          subtitle="Слова жителей, которым помогли наши наблюдения" centered />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <TestimonialCard v-for="t in testimonials" :key="t.author" v-bind="t" />
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <div
        class="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate via-gray-500 to-slate p-10 sm:p-16 text-white">
        <div class="absolute top-0 right-0 w-96 h-96 bg-beige-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-beige-100/10 rounded-full blur-3xl"></div>

        <div class="relative z-10 max-w-3xl">
          <div
            class="inline-block px-4 py-2 bg-beige-500 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6">
            Знак качества
          </div>
          <h2 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[0.9]">
            «Одобрено<br>
            <span class="italic text-beige-100 drop-shadow-md">FreshCheck»</span>
          </h2>
          <p class="text-lg text-beige-100/80 mb-8 leading-relaxed">
            Магазины с рейтингом <strong class="text-white">5/5</strong> получают право использовать видимый
            знак
            качества на входе. Это не государственный сертификат — это мнение жителей, основанное на
            реальных наблюдениях.
          </p>
          <div class="space-y-3 mb-10">
            <div v-for="item in badgePerks" :key="item" class="flex items-center gap-3">
              <AppIcon name="checkCircle" class="w-6 h-6 text-beige-500 shrink-0" />
              <span class="text-beige-100/90">{{ item }}</span>
            </div>
          </div>
          <NuxtLink to="/badges">
            <button
              class="inline-flex items-center gap-2 px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold shadow-xl transition-colors duration-300">
              Как получить наклейку
              <AppIcon name="arrowRight" class="w-5 h-5" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
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

      <div v-else-if="latestShops?.docs.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ShopItem v-for="shop in latestShops.docs" :key="shop.id" :shop="shop" />
      </div>

      <div v-else class="text-center py-12">
        <AppIcon name="exclamationCircle" class="w-16 h-16 text-beige-500 mx-auto mb-4" />
        <p class="text-xl font-bold text-slate dark:text-white mb-2">Ошибка подключения к API</p>
        <p class="text-gray-500 dark:text-beige-100/70">Не удалось загрузить магазины. Попробуйте позже.</p>
      </div>
    </section>

    <section class="py-24 bg-beige-100/30 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-6">
        <FaqSection pill="FAQ" title-before="Частые" title-italic="вопросы"
          subtitle="Всё, что стоит знать о FreshCheck" :items="homeFaqSlice" all-link="/faq"
          all-link-text="Смотреть все вопросы" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-24">
      <BaseSectionHeader pill="Контакты проекта" title-before="Наши" title-italic="каналы"
        subtitle="Подписывайтесь, чтобы быть в курсе всех новостей и обзоров" centered />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
        <SocialLink v-for="link in socialLinks" :key="link.name" v-bind="link" />
      </div>

      <div
        class="mt-12 max-w-4xl mx-auto p-6 bg-yellow-50 dark:bg-gray-500/30 rounded-2xl border border-yellow-400/30">
        <div class="flex items-start gap-3">
          <AppIcon name="exclamationTriangle"
            class="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
          <div class="space-y-2">
            <p class="text-sm text-yellow-800 dark:text-yellow-200 font-semibold">*Meta Platforms Inc.
              признана экстремистской организацией на территории РФ.</p>
            <p class="text-sm text-yellow-800 dark:text-yellow-200 font-semibold">*Instagram заблокирован на
              территории РФ.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-6 py-24 text-center">
      <GradientCta 
        variant="slate"
        icon="chatBubble"
        title="Заметили что-то не то?"
        subtitle="Поделитесь наблюдением — мы заглянем в магазин, поговорим с администрацией и опубликуем честный обзор."
      >
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <ContactButton v-for="btn in contactButtons" :key="btn.label" v-bind="btn" />
        </div>

        <NuxtLink to="/contact"
          class="inline-flex items-center gap-2 text-white font-bold hover:text-beige-100 transition-colors duration-300 text-lg underline decoration-white/40 hover:decoration-white underline-offset-4">
          <AppIcon name="documentText" class="w-5 h-5" />
          Отправить жалобу с сайта
        </NuxtLink>
      </GradientCta>

    </section>
  </div>
</template>

<script setup lang="ts">
import {
    processSteps,
    principles,
    testimonials,
    socialLinks,
    contactButtons,
    badgePerks,
    teamMembers,
    benefitRows,
    reportSteps,
    stats,
    teamInfo
} from '~/data/data'
import { getFaqSlice } from '~/data/faq'
import { TELEGRAM_CHANNEL } from '~/data/social'
import { usePostsStore } from '~/stores/posts'
import { useShopStore } from '~/stores/shops'

const homeFaqSlice = getFaqSlice({ about: 3, monitoring: 3 })

const shopsStore = useShopStore()
const postsStore = usePostsStore()

await Promise.all([
  shopsStore.fetchShopData({ sort: '-date_checked', limit: 4 }),
  postsStore.fetchPostsData(3)
])

const { allPosts: newsUpdates, pending: loadingNews } = storeToRefs(postsStore)
const { shops: latestShops, isLoading: loadingShops } = storeToRefs(shopsStore)

const scrollToWhat = () => {
    if (import.meta.client) {
        document.getElementById('what')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}
</script>