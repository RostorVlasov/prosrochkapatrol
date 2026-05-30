<template>
  <section id="partners" class="max-w-7xl mx-auto py-24">
    <div class="text-center mb-20">
      <div class="mb-6">
        <SectionPill>Партнёрство</SectionPill>
      </div>
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
        Сотрудничество <span class="italic text-beige-500">с проектом</span>
      </h2>
      <p class="text-xl text-gray-500 dark:text-off-white/70 max-w-3xl mx-auto">
        Мы открыты к диалогу с любыми организациями и сообществами
      </p>
    </div>

    <div class="grid grid-cols-1 text-base sm:text-lg lg:grid-cols-2 gap-12 mb-16">
      <div class="space-y-6">
        <p class="text-gray-500 dark:text-off-white/80 leading-relaxed">
          <span class="font-bold text-slate dark:text-white">FreshCheck</span> сотрудничает с историческими пабликами,
          городскими сообществами, местными СМИ, коммерческими структурами и политическими партиями.
        </p>
        <p class="text-gray-500 dark:text-off-white/80 leading-relaxed">
          Упоминание партнёров осуществляется в любом формате: сквозные баннеры на сайте, репосты, отдельные подразделы
          <span class="italic">«Наши друзья и партнёры»</span>, совместные материалы, публикации в социальных сетях.
        </p>
        <div class="bg-off-white/20 dark:bg-gray-500/20 rounded-2xl p-6 border border-beige-500/20">
          <h3 class="font-bold text-xl mb-3 flex items-center gap-2">
            <AppIcon name="shieldCheck" class="w-6 h-6 text-beige-500" />
            Главное условие
          </h3>
          <p class="text-gray-500 text-sm sm:text-base dark:text-off-white/80 leading-relaxed">
            Партнёрство <span class="font-bold">не влияет на объективность</span> наших оценок и публикаций. Проект
            оставляет за собой право публиковать любые материалы, включая критические отчёты, независимо от наличия
            партнёрских отношений.
          </p>
        </div>
      </div>

      <div class="bg-white dark:bg-slate rounded-3xl p-6 sm:p-8 border border-off-white dark:border-gray-500">
        <h3 class="font-bold text-xl mb-6 flex items-center gap-2">
          <AppIcon name="listBullet" class="w-6 h-6 text-beige-500" />
          Форматы взаимодействия
        </h3>
        <ul class="space-y-4">
          <li v-for="(item, i) in formatsList" :key="i" class="flex gap-3">
            <AppIcon name="check" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
            <span class="text-gray-500 text-sm sm:text-base dark:text-off-white/80">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(card, i) in principlesCards" :key="i"
        class="p-6 bg-white dark:bg-slate rounded-2xl border border-off-white dark:border-gray-500">
        <div class="flex gap-4 items-start">
          <div
            class="w-12 h-12 bg-off-white dark:bg-gray-500 rounded-xl flex items-center justify-center shrink-0">
            <AppIcon :name="card.icon" class="w-6 h-6 text-beige-500" />
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2">{{ card.title }}</h3>
            <p class="text-gray-500 dark:text-off-white/70 text-sm leading-relaxed">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/ui/AppIcon.vue'

const formatsList = [
  'Совместные информационные и просветительские материалы',
  'Публикации в наших каналах (Telegram, VK, Instagram*, TikTok)',
  'Размещение в разделе «Наши друзья и партнёры» на сайте',
  'Сквозные баннеры и репосты в социальных сетях',
  'Помощь в распространении материалов о правах потребителей',
  'Гостевые подарки и пожертвования (не влияют на объективность оценок)'
]

interface principleType {
  icon: IconName
  title: string
  description: string
}

const principlesCards: principleType[] = [
  {
    icon: 'bolt',
    title: 'Независимость',
    description: 'Мы независимы от политических структур, коммерческих интересов и конкурентов магазинов. Сотрудничество не меняет этого.'
  },
  {
    icon: 'chatBubbleLeft', // Ключ соответствует mdi:message в вашем AppIcon
    title: 'Открытость к диалогу',
    description: 'Готовы обсуждать формат взаимодействия с каждым партнёром индивидуально. Упоминание может быть в любом формате.'
  },
  {
    icon: 'globeAlt',
    title: 'Общественная польза',
    description: 'Вся деятельность направлена на формирование среды, где свежие и безопасные продукты — норма для Астрахани.'
  }
]
</script>