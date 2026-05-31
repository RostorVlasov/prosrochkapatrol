<template>
    <section class="py-24">
        <div class="max-w-7xl mx-auto">
            <BaseSectionHeader pill="Конфиденциальность" title-before="Что мы публикуем, а что" title-italic="никогда"
                centered />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white dark:bg-slate rounded-2xl p-8 border border-green-200 dark:border-green-800">
                    <h3 class="font-bold text-2xl mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
                        <UIcon name="i-heroicons-check-circle-20-solid" class="w-7 h-7" /> Публикуем
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex gap-2">
                            <UIcon name="i-heroicons-check-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            Фото товаров, полок и ценников
                        </li>
                        <li class="flex gap-2">
                            <UIcon name="i-heroicons-check-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            Текстовый отчёт с рейтингом 1–5
                        </li>
                        <li class="flex gap-2">
                            <UIcon name="i-heroicons-check-20-solid" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            Фото нарушений (с замазанными лицами)
                        </li>
                    </ul>
                </div>
                <div class="bg-white dark:bg-slate rounded-2xl p-8 border border-red-200 dark:border-red-800">
                    <h3 class="font-bold text-2xl mb-4 flex items-center gap-2 text-red-700 dark:text-red-400">
                        <UIcon name="i-heroicons-x-circle-20-solid" class="w-7 h-7" /> Никогда не публикуем
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex gap-2">
                            <UIcon name="i-heroicons-x-mark-20-solid" class="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                            Полное видео визита
                        </li>
                        <li class="flex gap-2">
                            <UIcon name="i-heroicons-x-mark-20-solid" class="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                            Голоса и лица сотрудников
                        </li>
                        <li class="flex gap-2">
                            <UIcon name="i-heroicons-x-mark-20-solid" class="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                            Фото с видимыми лицами людей
                        </li>
                    </ul>
                </div>
            </div>
            <p class="text-center text-sm text-gray-500 dark:text-[#E7DDCD]/60 mt-8">Служебная видеозапись хранится в
                зашифрованном виде не более 3 месяцев.</p>
        </div>
    </section>
</template>