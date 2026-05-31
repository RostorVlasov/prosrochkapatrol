<template>
  <section class="py-24">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <div class="mb-6">
          <SectionPill>Идентификация</SectionPill>
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Система <span class="italic text-beige-500">бейджей</span>
        </h2>
        <p class="text-lg sm:text-xl text-gray-500 dark:text-off-white/70 max-w-3xl mx-auto">
          Каждый участник имеет персональный код. Проверить подлинность можно онлайн.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="bg-white dark:bg-slate rounded-3xl p-8 border border-off-white dark:border-gray-500">
          <h3 class="text-xl sm:text-2xl font-bold mb-4">Формат кода</h3>
          <code
            class="block bg-off-white dark:bg-gray-500 p-4 rounded-xl font-mono text-sm sm:text-lg mb-6 text-center">#[ТИП][НОМЕР]-AST[БУКВА]</code>

          <ul class="space-y-3 text-sm sm:text-base text-gray-500 dark:text-off-white/80">
            <li v-for="item in codeExplanation" :key="item.label">
              <span class="font-bold">{{ item.label }}</span> — {{ item.desc }}
            </li>
          </ul>

          <div class="mt-6 p-4 text-sm sm:text-base bg-off-white/30 dark:bg-gray-500/30 rounded-xl">
            <p class="text-sm font-mono text-gray-500 dark:text-off-white/80">Примеры: #P01-ASTR (Роман Трошин),
              #P04-AST (неперсональный), #YOU1-ASTA (Артём)</p>
          </div>
        </div>

        <div class="bg-white dark:bg-slate rounded-3xl p-8 border border-off-white dark:border-gray-500">
          <h3 class="text-2xl font-bold mb-4">Проверка подлинности</h3>
          <p class="mb-4 text-gray-500 dark:text-off-white/80">Актуальный реестр бейджей публикуется на сайте проекта:
          </p>

          <a href="/badges" target="_blank"
            class="inline-flex items-center gap-2 text-beige-500 font-bold hover:underline break-all mb-6">
            FreshCheckAstra.ru/badges
            <AppIcon name="arrowTopRight" class="w-4 h-4" />
          </a>

          <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <p class="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">Признаки поддельного бейджа:</p>
            <ul class="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-1">
              <li v-for="(sign, i) in fakeBadgeSigns" :key="i">{{ sign }}</li>
            </ul>
          </div>

          <p class="mt-6 text-sm text-gray-500 dark:text-off-white/60">
            Бейдж не является документом государственного образца и не наделяет властными полномочиями.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import AppIcon from '@/components/ui/AppIcon.vue'
import { codeExplanation, fakeBadgeSigns } from '~/data/data';

</script>