<template>
    <section id="documents-list" class="mx-auto py-24 scroll-mt-6">
        <div class="text-center mb-20">
            <div class="mb-6">
                <SectionPill>Реестр документов</SectionPill>
            </div>
            <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Документы <span class="italic text-beige-500">проекта</span>
            </h2>
            <p class="text-lg text-gray-500 dark:text-off-white/80 max-w-2xl mx-auto mb-8">
                Все документы приняты основателем проекта, открыты для ознакомления и опубликованы в публичном
                доступе.
            </p>
            <div
                class="max-w-3xl mx-auto p-4 bg-yellow-50 dark:bg-gray-500/30 rounded-xl border border-yellow-500/30 text-left">
                <div class="flex items-start gap-3">
                    <AppIcon name="exclamationTriangle" class="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <p class="text-xs sm:text-sm text-yellow-800 dark:text-yellow-200">
                        <span class="font-bold">Важно:</span> эти документы являются внутренними регламентами
                        гражданской инициативы, принятыми на добровольной основе. Они не имеют статуса нормативных
                        правовых актов и не налагают обязательств на торговые организации, государственные органы
                        или иных третьих лиц.
                    </p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DocsDetailCard v-for="(doc, index) in projectDocs" :key="index" v-bind="doc" />
        </div>
    </section>
</template>


<script lang="ts" setup>

import type { IconName } from '~/components/ui/AppIcon.vue'
import { PUBLIC_POLICY_DOC_URL, BADGES_DOC_URL, DECLARATION_DOC_URL, REGULATION_DOC_URL } from '~/data/docs';

PUBLIC_POLICY_DOC_URL

interface ProjectDoc {
    code: string,
    title: string,
    date: string,
    icon: IconName,
    description: string,
    link: string
}


const projectDocs: ProjectDoc[]= [
    {
        code: 'FC-PP-2026-01',
        title: 'Публичная политика',
        date: '02 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
        icon: 'documentText',
        description: 'Правовой статус, цели, правовые основания, порядок мониторинга, рейтинговая система, ответственность. Документ носит открытый характер и может быть предъявлен в споре как доказательство прозрачности и законности работы проекта.',
        link: PUBLIC_POLICY_DOC_URL
    },
    {
        code: 'FC-PD-2026-02',
        title: 'Положение о деятельности',
        date: '02 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
        icon: 'clipboardDocumentCheck',
        description: 'Основной внутренний регламент: права и обязанности участников, этапы визита, публикация материалов, хранение записей, взаимодействие с надзорными органами, использование материалов СМИ.',
        link: REGULATION_DOC_URL
    },
    {
        code: 'FC-DP-2026-03',
        title: 'Декларация принципов',
        date: '02 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
        icon: 'starHero',
        description: '10 ценностей и нравственных обязательств: законность, честность, прозрачность, партнёрство, безопасность, соразмерность, уважение, независимость, диалог, общественная польза. Идеологическая основа проекта.',
        link: DECLARATION_DOC_URL
    },
    {
        code: 'FC-BB-2026-04',
        title: 'Положение о системе бейджей',
        date: '28 апреля 2026 г. (Редакция от 01 июня 2026 г.)',
        icon: 'identification',
        description: 'Формат кодов #[ТИП][НОМЕР]-AST[БУКВА], правила проверки подлинности, реестр на сайте, признаки поддельного бейджа. Защита жителей и бизнеса от самозванцев.',
        link: BADGES_DOC_URL
    }
]
</script>