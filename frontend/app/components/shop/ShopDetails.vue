<template>
  <AdaptiveContainer class="dark:bg-surface-base bg-stone-100 rounded-md">
    <div class="flex gap-4 items-center">
      <NuxtLink to="/shops" class="flex items-center">
        <AppIcon name="arrowUp" class="rotate-270 size-6" />
      </NuxtLink>
      <span class="text-xl font-semibold">Детали инспекции</span>
    </div>

    <div>
      <div class="mt-4">
        <MediaGallery v-if="shop.photos?.length" :images="shop.photos" />
      </div>

      <div>
        <div class="border-b pb-4 mt-5">
          <div class="flex items-center gap-3">
            <h4 class="font-semibold text-3xl">{{ shop.store_name }}</h4>
            <span class="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
              :class="reasonTypeMapping.class">
              {{ reasonTypeMapping.text }}
            </span>
          </div>
          <div class="flex gap-2 mt-1 items-center text-sm dark:text-gray-200 text-gray-800">
            <AppIcon class="size-4" name="location" />
            <span>{{ shop.address }}</span>
          </div>
        </div>

        <div v-if="shop.complaint_text" class="mt-4 dark:bg-red-900/20 bg-red-100 rounded-3xl p-4">
          <h5 class="font-semibold text-red-600 dark:text-red-400">Текст жалобы</h5>
          <p class="text-sm mt-1 dark:text-gray-300 text-gray-700 whitespace-pre-line">{{ shop.complaint_text }}</p>
        </div>

        <div class="dark:bg-gray-100/20 bg-gray-100 rounded-3xl p-4 mt-5">
          <div class="flex justify-between items-center">
            <div>
              <span class="text-2xl">Итоговая оценка</span>
              <p class="text-sm dark:text-gray-300 text-gray-700">От 1 до 5</p>
            </div>
            <div
              class="size-20 text-white rounded-[50%] flex justify-center items-center text-3xl font-bold bg-surface-brown">
              {{ shop.total_score }}
            </div>
          </div>
        </div>

        <div class="flex justify-between gap-5">
          <div class="w-full dark:bg-gray-700 bg-gray-100 rounded-3xl p-4 mt-5 flex flex-col gap-1">
            <span class="text-sm dark:text-gray-300">Качество продукции</span>
            <span class="font-bold text-xl">{{ shop.quality_final_score.toFixed(1) }} / 5.0</span>
          </div>
          <div class="w-full dark:bg-gray-700 bg-gray-100 rounded-3xl p-4 mt-5 flex flex-col gap-1">
            <span class="text-sm dark:text-gray-300">Условия хранения</span>
            <span class="font-bold text-xl">{{ shop.storage_final_score.toFixed(1) }} / 5.0</span>
          </div>
        </div>

        <div class="dark:bg-gray-700 bg-gray-100 rounded-3xl p-4 mt-5">
          <h5 class="font-bold text-lg mb-3">Качество продукции</h5>

          <div class="flex justify-between text-sm mb-2 dark:text-gray-300">
            <span>Списание (штраф)</span>
            <span class="font-bold">{{ shop.quality_total_deduction }}</span>
          </div>

          <div v-if="shop.quality_violated_articles?.length" class="mt-3">
            <span class="text-sm font-semibold dark:text-gray-300">Нарушенные статьи:</span>
            <div class="flex flex-wrap gap-2 mt-2">
              <span v-for="(article, idx) in shop.quality_violated_articles" :key="idx"
                class="px-2 py-1 bg-red-200 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded-lg text-xs font-medium">
                {{ article }}
              </span>
            </div>
          </div>

          <div v-if="shop.quality_facts?.length" class="mt-3">
            <span class="text-sm font-semibold dark:text-gray-300">Факты:</span>
            <ul class="mt-2 space-y-1">
              <li v-for="(fact, idx) in shop.quality_facts" :key="idx"
                class="text-sm dark:text-gray-400 flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-gray-300 shrink-0"></span>
                {{ fact }}
              </li>
            </ul>
          </div>

          <div v-if="shop.quality_free_text" class="mt-3 pt-3 border-t dark:border-gray-600">
            <p class="text-sm dark:text-gray-300 whitespace-pre-line">{{ shop.quality_free_text }}</p>
          </div>
        </div>

        <div class="dark:bg-gray-700 bg-gray-100 rounded-3xl p-4 mt-5">
          <div class="flex items-center justify-between mb-3">
            <h5 class="font-bold text-lg">Условия хранения</h5>
            <span class="px-2 py-1 rounded-full text-xs font-semibold"
              :class="shop.storage_has_violations ? 'bg-red-200 dark:bg-red-900/40 text-red-800 dark:text-red-300' : 'bg-green-200 dark:bg-green-900/40 text-green-800 dark:text-green-300'">
              {{ shop.storage_has_violations ? 'Есть нарушения' : 'Без нарушений' }}
            </span>
          </div>

          <div class="flex justify-between text-sm mb-2 dark:text-gray-300">
            <span>Списание (штраф)</span>
            <span class="font-bold">{{ shop.storage_total_deduction }}</span>
          </div>

          <div v-if="shop.storage_violated_articles?.length" class="mt-3">
            <span class="text-sm font-semibold dark:text-gray-300">Нарушенные статьи:</span>
            <div class="flex flex-wrap gap-2 mt-2">
              <span v-for="(article, idx) in shop.storage_violated_articles" :key="idx"
                class="px-2 py-1 bg-red-200 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded-lg text-xs font-medium">
                {{ article }}
              </span>
            </div>
          </div>

          <div v-if="shop.storage_facts?.length" class="mt-3">
            <span class="text-sm font-semibold dark:text-gray-300">Факты:</span>
            <ul class="mt-2 space-y-1">
              <li v-for="(fact, idx) in shop.storage_facts" :key="idx"
                class="text-sm dark:text-gray-400 flex items-start gap-2">
                <span class="mt-1.5 size-1.5 rounded-full bg-gray-500 shrink-0"></span>
                {{ fact }}
              </li>
            </ul>
          </div>

          <div v-if="shop.storage_free_text" class="mt-3 pt-3 border-t dark:border-gray-600">
            <p class="text-sm dark:text-gray-300 whitespace-pre-line">{{ shop.storage_free_text }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div class="dark:bg-green-900/20 bg-green-100 rounded-3xl p-4">
            <h5 class="font-bold text-green-700 dark:text-green-400 mb-2">Преимущества</h5>
            <ul v-if="shop.advantages?.length" class="space-y-2">
              <li v-for="(adv, idx) in shop.advantages" :key="idx"
                class="text-sm dark:text-gray-300 flex items-start gap-2">
                <AppIcon name="checkMark" class="size-4 text-green-500 mt-0.5 shrink-0" />
                <span>{{ adv }}</span>
              </li>
            </ul>
            <p v-else class="text-sm dark:text-gray-500">Не указаны</p>
          </div>

          <div class="dark:bg-red-900/20 bg-red-100 rounded-3xl p-4">
            <h5 class="font-bold text-red-700 dark:text-red-400 mb-2">Недостатки</h5>
            <ul v-if="shop.disadvantages?.length" class="space-y-2">
              <li v-for="(dis, idx) in shop.disadvantages" :key="idx"
                class="text-sm dark:text-gray-300 flex items-start gap-2">
                <AppIcon name="cross" class="size-4 text-red-500 mt-0.5 shrink-0" />
                <span>{{ dis }}</span>
              </li>
            </ul>
            <p v-else class="text-sm dark:text-gray-500">Не указаны</p>
          </div>
        </div>

        <div v-if="shop.inspector_comment" class="dark:bg-gray-700 bg-gray-100 rounded-3xl p-4 mt-5">
          <h5 class="font-bold text-lg mb-2">Комментарий инспектора</h5>
          <p class="text-sm dark:text-gray-300 whitespace-pre-line">{{ shop.inspector_comment }}</p>
        </div>

        <div class="flex items-center mt-5 gap-2 dark:text-gray-300 pb-10">
          <AppIcon name="calendarMonth" />
          <span>{{ formatDate(shop.date_checked) }}</span>
        </div>
      </div>
    </div>
  </AdaptiveContainer>
</template>

<script lang="ts" setup>
import type { ShopDoc } from '~/types/shops.types';

const props = defineProps<{
  shop: ShopDoc
}>()

const reasonTypeMapping = computed(() => {
  if (props.shop.reason_type === 'planned') {
    return {
      text: 'Плановая',
      class: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
    }
  }
  return {
    text: 'По жалобе',
    class: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300'
  }
})

</script>