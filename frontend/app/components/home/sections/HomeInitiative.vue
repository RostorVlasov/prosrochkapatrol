<template>
    <section class="py-24">
        <div
            class="relative rounded-3xl overflow-hidden border border-beige-200 dark:border-gray-700 bg-beige-50 dark:bg-gray-800 p-8 sm:p-12">

            <!-- Фоновый акцент -->
            <div
                class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.beige.100)_0%,transparent_65%)] dark:bg-[radial-gradient(ellipse_at_top_right,theme(colors.gray.700)_0%,transparent_65%)]" />

            <div class="relative z-10">
                <!-- Пилюля -->
                <SectionPill>Наша инициатива на РОИ</SectionPill>

                <!-- Заголовок -->
                <h2
                    class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-tight text-slate dark:text-white mb-4 max-w-3xl">
                    Право на фото- и видеосъёмку
                    <span class="text-beige-500 italic">в магазинах</span>
                </h2>

                <!-- Краткое описание -->
                <p class="text-base sm:text-lg text-gray-600 dark:text-beige-100/70 max-w-2xl mb-8 leading-relaxed">
                    Мы запустили федеральную инициативу на&nbsp;Российской общественной инициативе (РОИ): законодательно
                    закрепить право покупателей снимать просрочку и нарушения прямо на&nbsp;телефон, без угроз со стороны
                    охраны. Жалоба с&nbsp;фото через Госуслуги — и&nbsp;магазин обязан исправить нарушение за&nbsp;10&nbsp;дней.
                </p>

                <!-- Счётчик голосов -->
                <div class="flex flex-wrap gap-6 mb-8">
                    <div v-if="pending" class="flex gap-6">
                        <div v-for="i in 2" :key="i"
                            class="animate-pulse h-20 w-36 rounded-2xl bg-beige-100 dark:bg-gray-700" />
                    </div>
                    <template v-else-if="vote">
                        <div
                            class="flex flex-col items-center justify-center rounded-2xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 px-8 py-4 min-w-[9rem]">
                            <span class="text-3xl sm:text-4xl font-black text-green-600 dark:text-green-400">
                                {{ vote.affirmative.toLocaleString('ru-RU') }}
                            </span>
                            <span class="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-300 mt-1">
                                За
                            </span>
                        </div>
                        <div
                            class="flex flex-col items-center justify-center rounded-2xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 px-8 py-4 min-w-[9rem]">
                            <span class="text-3xl sm:text-4xl font-black text-red-600 dark:text-red-400">
                                {{ vote.negative.toLocaleString('ru-RU') }}
                            </span>
                            <span class="text-xs sm:text-sm font-semibold text-red-700 dark:text-red-300 mt-1">
                                Против
                            </span>
                        </div>
                        <div v-if="vote.threshold"
                            class="flex flex-col justify-center px-6 py-4">
                            <div class="text-xs text-gray-500 dark:text-beige-100/50 mb-2 font-medium uppercase tracking-wide">
                                Прогресс до порога {{ vote.threshold.toLocaleString('ru-RU') }} голосов
                            </div>
                            <div class="w-48 sm:w-64 h-2.5 rounded-full bg-beige-100 dark:bg-gray-700 overflow-hidden">
                                <div
                                    class="h-full rounded-full bg-linear-to-r from-beige-400 to-beige-500 transition-all duration-700"
                                    :style="{ width: Math.min(vote.progress, 100) + '%' }" />
                            </div>
                            <div class="text-xs text-gray-500 dark:text-beige-100/50 mt-1">
                                {{ vote.progress.toFixed(1) }}%
                            </div>
                        </div>
                    </template>
                    <p v-else class="text-sm text-gray-400">Данные о голосах временно недоступны</p>
                </div>

                <!-- Кнопка -->
                <div class="flex flex-wrap gap-4 items-center">
                    <a href="https://www.roi.ru/153114/" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-7 py-4 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold text-base hover:bg-gray-600 dark:hover:bg-beige-100 transition-colors duration-300 shadow-lg shadow-slate/20">
                        <AppIcon name="externalLink" class="w-5 h-5" />
                        Проголосовать на РОИ
                    </a>
                    <span class="text-xs text-gray-400 dark:text-beige-100/40 max-w-xs leading-snug">
                        Голосование через Госуслуги (ЕСИА). Только совершеннолетние граждане РФ.
                    </span>
                </div>
                <p class="text-xs text-gray-400 dark:text-beige-100/40 mt-2">
                    * Данные о голосах обновляются с задержкой и могут не отражать текущий результат на сайте РОИ.
                </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

interface RoiVote {
    progress: number
    threshold: number
    affirmative: number
    negative: number
}

interface RoiPetitionResponse {
    data?: {
        vote?: RoiVote
    }
}

const { data: petition, pending } = await useFetch<RoiPetitionResponse>('/api/roi-petition', {
    key: 'roi-petition',
    server: true,
})

const vote = computed<RoiVote | null>(() => petition.value?.data?.vote ?? null)

</script>
