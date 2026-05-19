<template>
  <div class="max-w-2xl w-full mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden font-sans">
    
    <!-- ШАПКА: Название, адрес и общий балл -->
    <div class="bg-slate-50 p-6 border-b border-gray-100 flex justify-between items-start gap-4">
      <div>
        <h2 class="text-xl font-bold text-slate-800">{{ shop.store_name }}</h2>
        <p class="text-sm text-slate-500 mt-1">📍 {{ shop.address }}</p>
        <div class="flex items-center gap-2 mt-3 flex-wrap">
          <span class="px-2.5 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
            {{ shop.reason_type === 'planned' ? 'Плановая' : 'Внеплановая' }}
          </span>
          <span class="px-2.5 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium capitalize">
            {{ shop.admin_panel?.status }}
          </span>
        </div>
      </div>
      
      <!-- Общий балл -->
      <div class="flex flex-col items-center justify-center bg-slate-800 text-white rounded-xl p-4 min-w-[90px] shadow-md">
        <span class="text-[10px] uppercase tracking-wider opacity-60">Балл</span>
        <span class="text-3xl font-extrabold leading-none mt-1">{{ shop.total_score }}</span>
      </div>
    </div>

    <!-- БЛОКИ ПРОВЕРОК: Качество и Хранение -->
    <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <!-- Качество -->
      <div class="bg-red-50/50 border border-red-100 rounded-xl p-4">
        <div class="flex justify-between items-center mb-3">
          <h3 class="font-semibold text-red-900">Качество</h3>
          <span class="bg-red-600 text-white px-2 py-0.5 rounded-md text-sm font-bold shadow-sm">
            {{ shop.quality_final_score }} / 5
          </span>
        </div>
        <p class="text-xs text-red-700 mb-3">Списано баллов: <span class="font-bold">-{{ shop.quality_total_deduction }}</span></p>
        
        <div v-if="shop.quality_facts?.length" class="mb-3">
          <p class="text-[10px] text-red-400 uppercase tracking-wider mb-1">Факты:</p>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="fact in shop.quality_facts" :key="fact" class="bg-red-200/60 text-red-800 px-2 py-0.5 rounded text-xs">{{ fact }}</span>
          </div>
        </div>

        <div v-if="shop.quality_violated_articles?.length">
          <p class="text-[10px] text-red-400 uppercase tracking-wider mb-1">Нарушенные статьи:</p>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="article in shop.quality_violated_articles" :key="article" class="border border-red-200 text-red-700 px-2 py-0.5 rounded text-xs">{{ article }}</span>
          </div>
        </div>

        <p v-if="shop.quality_free_text" class="mt-3 text-xs text-slate-600 italic before:content-['«'] after:content-['»']">{{ shop.quality_free_text }}</p>
      </div>

      <!-- Хранение -->
      <div class="bg-amber-50/50 border border-amber-100 rounded-xl p-4">
        <div class="flex justify-between items-center mb-3">
          <h3 class="font-semibold text-amber-900 flex items-center gap-2">
            Хранение
            <span v-if="shop.storage_has_violations" class="w-2 h-2 bg-red-500 rounded-full animate-pulse" title="Есть нарушения"></span>
          </h3>
          <span class="bg-amber-600 text-white px-2 py-0.5 rounded-md text-sm font-bold shadow-sm">
            {{ shop.storage_final_score }} / 5
          </span>
        </div>
        <p class="text-xs text-amber-700 mb-3">Списано баллов: <span class="font-bold">-{{ shop.storage_total_deduction }}</span></p>
        
        <div v-if="shop.storage_facts?.length" class="mb-3">
          <p class="text-[10px] text-amber-400 uppercase tracking-wider mb-1">Факты:</p>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="fact in shop.storage_facts" :key="fact" class="bg-amber-200/60 text-amber-800 px-2 py-0.5 rounded text-xs">{{ fact }}</span>
          </div>
        </div>

        <div v-if="shop.storage_violated_articles?.length">
          <p class="text-[10px] text-amber-400 uppercase tracking-wider mb-1">Нарушенные статьи:</p>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="article in shop.storage_violated_articles" :key="article" class="border border-amber-200 text-amber-700 px-2 py-0.5 rounded text-xs">{{ article }}</span>
          </div>
        </div>

        <p v-if="shop.storage_free_text" class="mt-3 text-xs text-slate-600 italic before:content-['«'] after:content-['»']">{{ shop.storage_free_text }}</p>
      </div>

    </div>

    <!-- ВЫВОДЫ И КОММЕНТАРИЙ -->
    <div class="px-6 pb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 class="text-sm font-semibold text-green-700 mb-2 flex items-center gap-1">👍 Преимущества</h4>
          <ul class="list-disc list-inside text-sm text-slate-600 space-y-1 bg-green-50 p-3 rounded-lg border border-green-100 min-h-[40px]">
            <li v-for="adv in shop.advantages" :key="adv">{{ adv }}</li>
            <li v-if="!shop.advantages?.length" class="text-slate-400 italic list-none">Не указаны</li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-red-700 mb-2 flex items-center gap-1">👎 Недостатки</h4>
          <ul class="list-disc list-inside text-sm text-slate-600 space-y-1 bg-red-50 p-3 rounded-lg border border-red-100 min-h-[40px]">
            <li v-for="dis in shop.disadvantages" :key="dis">{{ dis }}</li>
            <li v-if="!shop.disadvantages?.length" class="text-slate-400 italic list-none">Не указаны</li>
          </ul>
        </div>
      </div>

      <div v-if="shop.inspector_comment" class="bg-slate-100 rounded-xl p-4 border border-slate-200">
        <h4 class="text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">Комментарий инспектора</h4>
        <p class="text-sm text-slate-700 leading-relaxed">{{ shop.inspector_comment }}</p>
      </div>
    </div>

    <!-- ФОТО И ДАТЫ (Подвал) -->
    <div class="bg-slate-50 border-t border-slate-100 p-5 flex justify-between items-end">
      <div class="flex gap-3">
        <div v-for="photo in shop.photos" :key="photo.id" class="group relative w-20 h-20 rounded-lg overflow-hidden border-2 border-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <!-- Заметь: для корректной работы :src, возможно потребуется добавить baseURL вашего API перед photo.photo.url -->
          <img :src="buildApiUrl(photo.photo.url)" :alt="photo.caption || 'Фото проверки'" class="w-full h-full object-cover">
        </div>
        <div v-if="!shop.photos?.length" class="text-xs text-slate-400 italic">Нет прикрепленных фото</div>
      </div>
      
      <div class="text-right text-[11px] text-slate-400 space-y-0.5">
        <p>Проверка: {{ formatDate(shop.date_checked) }}</p>
        <p>Обновлено: {{ formatDate(shop.updatedAt) }}</p>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import type { ShopDoc } from '~/types/shops.types';

const props = defineProps<{
  shop: ShopDoc
}>()

const { buildApiUrl } = useApiBuilder()

// Вспомогательная функция для красивого отображения дат
const formatDate = (dateString: string | undefined) => {
  if (!dateString) return '—'
  return new Date(dateString).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>