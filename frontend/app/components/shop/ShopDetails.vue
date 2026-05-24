<template>
  <AdaptiveContainer class="dark:bg-surface-base bg-stone-100 rounded-md pb-10">

    <div class="flex items-center gap-3 py-4">
      <NuxtLink :to="pages.sidebar.productReview.url"
        class="size-9 rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700
               flex items-center justify-center">
        <AppIcon name="left" class="size-5" />
      </NuxtLink>
      <span class="text-base font-semibold">Детали инспекции</span>
    </div>

    <div class="w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-700">
      <MediaGallery v-if="shop.photos?.length" :images="shop.photos"></MediaGallery>
    </div>

    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 mt-3 flex gap-3 items-start">
       <img src="/logo.png" alt="logo" class="size-5 shrink-0 mt-0.5">
      <p class="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
        Проверка проведена в рамках общественной инициативы
        <strong>FreshCheck</strong>.
        Цель — объективная оценка качества товаров, условий хранения, чистоты и работы персонала.
        <strong>Не является проверкой официального органа!</strong>
      </p>
    </div>

    <div class="bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl p-4 mt-3">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h4 class="text-lg font-semibold leading-snug">{{ shop.store_name }}</h4>
          <div class="flex items-center gap-1.5 mt-1.5 text-sm text-gray-500 dark:text-gray-50">
            <AppIcon name="location" class="size-4 shrink-0" />
            <span>{{ shop.address }}</span>
          </div>
          <div class="flex items-center gap-1.5 mt-1 text-sm text-gray-500 dark:text-gray-50">
            <AppIcon name="calendarMonth" class="size-4 shrink-0" />
            <span>{{ formatDate(shop.date_checked) }}</span>
          </div>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shrink-0"
          :class="reasonTypeMapping.class">
          {{ reasonTypeMapping.text }}
        </span>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl p-4 mt-3">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-50 mb-1">Итоговая оценка</p>
          <p class="text-4xl font-semibold leading-none">
            {{ shop.total_score }}
            <span class="text-base font-normal text-gray-50">/ 5</span>
          </p>
          <StarRating :score="shop.total_score" class="mt-2" />
        </div>
        <div class="grid grid-cols-2 gap-2 text-center">
          <div class="bg-gray-50 dark:bg-gray-600 rounded-xl px-3 py-2">
            <p class="text-xs text-gray-500 dark:text-gray-50">Качество</p>
            <p class="text-base font-semibold mt-0.5">{{ shop.quality_final_score.toFixed(1) }}</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-600 rounded-xl px-3 py-2">
            <p class="text-xs text-gray-500 dark:text-gray-50">Хранение</p>
            <p class="text-base font-semibold mt-0.5">{{ shop.storage_final_score.toFixed(1) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="shop.complaint_text"
      class="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 rounded-2xl p-4 mt-3">
      <div class="flex items-center gap-2 mb-2">
        <AppIcon name="square" class="size-4 text-red-500" />
        <p class="text-sm font-semibold text-red-700 dark:text-red-400">Текст жалобы</p>
      </div>
      <p class="text-sm text-red-800 dark:text-red-300 whitespace-pre-line leading-relaxed">
        {{ shop.complaint_text }}
      </p>
    </div>

    <div class="bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl p-4 mt-3">
      <div class="flex items-center justify-between mb-3">
        <p class="font-semibold text-base">Качество продукции</p>
        <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400">
          −{{ shop.quality_total_deduction }}
        </span>
      </div>

      <template v-if="shop.quality_violated_articles?.length">
        <p class="text-xs text-gray-500 dark:text-gray-50 mb-2">Нарушенные статьи</p>
        <div class="flex flex-wrap gap-1.5 mb-3">
          <span v-for="(article, idx) in shop.quality_violated_articles" :key="idx"
            class="px-2 py-1 rounded-lg text-xs bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400">
            {{ article }}
          </span>
        </div>
      </template>

      <template v-if="shop.quality_facts?.length">
        <p class="text-xs text-gray-500 dark:text-gray-50 mb-2">Факты</p>
        <ul class="space-y-1.5">
          <li v-for="(fact, idx) in shop.quality_facts" :key="idx"
            class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-100">
            <span class="mt-2 size-1 rounded-full bg-gray-300 dark:bg-gray-500 shrink-0"></span>
            {{ fact }}
          </li>
        </ul>
      </template>

      <p v-if="shop.quality_free_text"
        class="text-sm text-gray-600 dark:text-gray-100 mt-3 pt-3 border-t border-gray-100 dark:border-gray-600 whitespace-pre-line leading-relaxed">
        {{ shop.quality_free_text }}
      </p>
    </div>

    <div class="bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl p-4 mt-3">
      <div class="flex items-center justify-between mb-3">
        <p class="font-semibold text-base">Условия хранения</p>
        <span class="px-2.5 py-1 rounded-full text-xs font-semibold"
          :class="shop.storage_has_violations
            ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            : 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400'">
          {{ shop.storage_has_violations ? 'Есть нарушения' : 'Без нарушений' }}
        </span>
      </div>

      <template v-if="shop.storage_violated_articles?.length">
        <p class="text-xs text-gray-500 dark:text-gray-50 mb-2">Нарушенные статьи</p>
        <div class="flex flex-wrap gap-1.5 mb-3">
          <span v-for="(article, idx) in shop.storage_violated_articles" :key="idx"
            class="px-2 py-1 rounded-lg text-xs bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400">
            {{ article }}
          </span>
        </div>
      </template>

      <template v-if="shop.storage_facts?.length">
        <p class="text-xs text-gray-500 dark:text-gray-50 mb-2">Факты</p>
        <ul class="space-y-1.5">
          <li v-for="(fact, idx) in shop.storage_facts" :key="idx"
            class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-100">
            <span class="mt-2 size-1 rounded-full bg-gray-300 dark:bg-gray-500 shrink-0"></span>
            {{ fact }}
          </li>
        </ul>
      </template>

      <p v-if="shop.storage_free_text"
        class="text-sm text-gray-600 dark:text-gray-100 mt-3 pt-3 border-t border-gray-100 dark:border-gray-600 whitespace-pre-line leading-relaxed">
        {{ shop.storage_free_text }}
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-3 mt-3">
      <div class="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 rounded-2xl p-4">
        <p class="text-sm font-semibold text-green-800 dark:text-green-400 mb-2">Преимущества</p>
        <ul v-if="shop.advantages?.length" class="space-y-1.5">
          <li v-for="(adv, idx) in shop.advantages" :key="idx"
            class="flex items-start gap-1.5 text-sm text-green-900 dark:text-green-300">
            <AppIcon name="checkMark" class="size-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
            {{ adv }}
          </li>
        </ul>
        <p v-else class="text-sm text-green-700 dark:text-green-500">Не указаны</p>
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 rounded-2xl p-4">
        <p class="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Недостатки</p>
        <ul v-if="shop.disadvantages?.length" class="space-y-1.5">
          <li v-for="(dis, idx) in shop.disadvantages" :key="idx"
            class="flex items-start gap-1.5 text-sm text-red-900 dark:text-red-300">
            <AppIcon name="cross" class="size-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            {{ dis }}
          </li>
        </ul>
        <p v-else class="text-sm text-red-700 dark:text-red-500">Не указаны</p>
      </div>
    </div>

    <div v-if="shop.inspector_comment"
      class="bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl p-4 mt-3 flex gap-3 items-start">
      <div class="size-9 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center shrink-0">
        <AppIcon name="user" class="size-5 text-gray-500 dark:text-gray-50" />
      </div>
      <div>
        <p class="text-sm font-semibold mb-1">Комментарий инспектора</p>
        <p class="text-sm text-gray-600 dark:text-gray-100 whitespace-pre-line leading-relaxed">
          {{ shop.inspector_comment }}
        </p>
      </div>
    </div>

  </AdaptiveContainer>
</template>

<script lang="ts" setup>
import type { ShopDoc } from '~/types/shops.types'

const props = defineProps<{ shop: ShopDoc }>()

const reasonTypeMapping = computed(() => {
  if (props.shop.reason_type === 'planned') {
    return {
      text: 'Плановая',
      class: 'bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
    }
  }
  return {
    text: 'По жалобе',
    class: 'bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300'
  }
})
</script>