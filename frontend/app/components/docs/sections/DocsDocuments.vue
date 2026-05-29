<template>
  <section class="bg-off-white/30 dark:bg-gray-900 py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <div class="mb-6">
          <SectionPill>Документы проекта</SectionPill>
        </div>
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Открытые <span class="italic text-beige-500">стандарты</span>
        </h2>
        <p class="text-xl text-gray-500 dark:text-off-white/70 max-w-3xl mx-auto mb-8">
          Внутренние регламенты, принятые основателем на добровольной основе
        </p>

        <div
          class="max-w-3xl mx-auto p-4 bg-yellow-50 dark:bg-gray-500/30 rounded-xl border border-yellow-500/30 text-left">
          <div class="flex items-start gap-3">
            <AppIcon name="exclamationTriangle" class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <p class="text-sm text-yellow-800 dark:text-yellow-200">
              <span class="font-bold">Важно:</span> эти документы не являются нормативными правовыми актами и не
              налагают обязательств на торговые организации, государственные органы или иных третьих лиц. Они описывают
              методику и принципы деятельности проекта, обязательны для участников исключительно на добровольной основе.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a v-for="doc in documents" :key="doc.id" :href="doc.url" target="_blank" rel="noopener noreferrer"
          class="group bg-white dark:bg-slate rounded-3xl p-8 border border-off-white dark:border-gray-500 hover:border-beige-500 hover:shadow-xl transition-all duration-500 flex items-start gap-5">
          <div
            class="w-14 h-14 bg-off-white dark:bg-gray-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-beige-500 transition-colors duration-500">
            <AppIcon :name="doc.icon"
              class="w-7 h-7 text-beige-500 group-hover:text-white transition-colors duration-500" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-1 group-hover:text-beige-500 transition-colors">{{ doc.title }}</h3>
            <p class="text-sm text-beige-500 font-mono mb-2">{{ doc.code }}</p>
            <p class="text-sm text-gray-500 dark:text-off-white/70">{{ doc.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/ui/AppIcon.vue'
import { BADGES_DOC_URL, DECLARATION_DOC_URL, PUBLIC_POLICY_DOC_URL, REGULATION_DOC_URL } from '~/data/docs';

interface DocumentType {
  id: string,
  title: string,
  code: string,
  description: string,
  icon: IconName
  url: string
}

const documents: DocumentType[] = [
  {
    id: 'policy',
    title: 'Публичная политика',
    code: 'FC-PP-2026-01',
    description: 'Правовой статус, цели, правовые основания, порядок мониторинга, рейтинговая система, ответственность. Версия 2.0 от 1 июня 2026 г.',
    icon: 'documentText',
    url: PUBLIC_POLICY_DOC_URL
  },
  {
    id: 'regulation',
    title: 'Положение о деятельности',
    code: 'FC-PD-2026-02',
    description: 'Внутренний регламент: права и обязанности участников, этапы визита, публикация материалов, хранение записей. Версия 2.0.',
    icon: 'clipboardDocumentList',
    url: REGULATION_DOC_URL
  },
  {
    id: 'declaration',
    title: 'Декларация принципов',
    code: 'FC-DP-2026-03',
    description: '10 ценностей и нравственных обязательств: законность, честность, прозрачность, партнёрство, безопасность, соразмерность, уважение, независимость, диалог, общественная польза.',
    icon: 'heart',
    url: DECLARATION_DOC_URL
  },
  {
    id: 'badges',
    title: 'Положение о системе бейджей',
    code: 'FC-BB-2026-04',
    description: 'Формат кодов #P[НОМЕР]-AST[БУКВА], правила проверки подлинности, реестр на сайте. Версия 2.0.',
    icon: 'identification',
    url: BADGES_DOC_URL
  }
]

</script>