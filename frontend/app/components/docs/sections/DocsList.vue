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

import { projectDocs } from '~/data/data';

</script>