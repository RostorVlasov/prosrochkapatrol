<template>
  <section class="py-24 text-center">
    <div class="relative overflow-hidden rounded-3xl bg-beige-100/50 p-6 pb-12 dark:bg-slate">
      <div class="relative z-10">
        <AppIcon name="chatBubble" class="mx-auto mb-4 size-12 text-beige-500" />
        <h3 class="mb-2 text-lg font-bold text-slate dark:text-white sm:text-2xl">Нужна помощь с обращением?</h3>
        <p class="mx-auto mb-8 max-w-xl text-xs text-gray-500 dark:text-beige-100/70 sm:text-base">
          Сейчас мониторинг магазинов и приём заявок через сайт приостановлены.
          Однако мы продолжаем помогать с подготовкой обращений в уполномоченные органы.
        </p>
        <a :href="TELEGRAM_FOUNDER" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center justify-center gap-2 rounded-xl bg-beige-500 px-8 py-4 text-xs font-bold text-white shadow-lg shadow-beige-500/30 transition-colors duration-300 hover:bg-beige-600 sm:text-lg">
          <AppIcon name="telegram" class="size-5" />
          Написать нам в Telegram
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TELEGRAM_FOUNDER } from '~/data/social'
</script>
