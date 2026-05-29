<template>
    <section class="px-6 py-24">
        <BaseSectionHeader pill="О проекте" title-before="Кто мы и" title-italic="зачем приходим" centered />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="space-y-6 min-w-0 text-base sm:text-lg">
                <p class="text-gray-500 dark:text-beige-100/80 leading-relaxed">
                    <span class="font-bold text-slate dark:text-white">FreshCheck</span> — независимая
                    гражданская инициатива жителей Астрахани, действующая с августа 2025 года.
                </p>
                <p class="text-gray-500 dark:text-beige-100/80 leading-relaxed">
                    Мы обращаем внимание на <span class="font-bold">качество товаров</span>: просрочка,
                    помятые консервы, продукты с плесенью, вскрытые упаковки, повреждённые этикетки и
                    другие дефекты. Оперативно информируем администрацию магазина.
                </p>
                <div class="bg-beige-100/20 dark:bg-gray-500/20 p-8 rounded-2xl px-6 border border-beige-500/20">
                    <h3 class="font-bold text-lg sm:text-xl mb-3 flex items-center gap-2">
                        <AppIcon name="checkCircle" class="w-6 h-6 text-beige-500" />
                        Наши цели
                    </h3>
                    <ul class="space-y-2 text-sm sm:text-lg text-gray-500 dark:text-beige-100/80">
                        <li v-for="goal in goals" :key="goal" class="flex gap-2">
                            <AppIcon name="arrowRight" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
                            {{ goal }}
                        </li>
                    </ul>
                </div>
            </div>

            <div
                class="bg-white dark:bg-gray-700 rounded-3xl p-8 border border-beige-100 dark:border-gray-500 shadow-sm min-w-0">
                <h3 class="font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
                    <AppIcon name="xCircle" class="w-6 h-6 text-beige-500" />
                    Мы НЕ делаем
                </h3>
                <ul class="space-y-3 text-sm sm:text-lg">
                    <li v-for="item in notDoing" :key="item" class="flex gap-2">
                        <AppIcon name="minus" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { goals, notDoing } from '~/data/data';

</script>