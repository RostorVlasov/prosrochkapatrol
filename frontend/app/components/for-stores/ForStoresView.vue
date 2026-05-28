<template>
    <div class="bg-beige-50 dark:bg-gray-900 min-h-screen text-slate dark:text-beige-100 overflow-x-hidden">
        <AdaptiveContainer class="p-0!">
            <main>
                <section class="flex items-center justify-center py-20 px-6 relative">
                    <div class="w-full text-center relative z-10">
                        <div class="mb-8">
                            <SectionPill>Для руководителей и сотрудников магазинов</SectionPill>
                        </div>

                        <h1
                            class="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 wrap-break-words">
                            Общественный мониторинг
                            <span class="text-beige-500 italic block">для магазинов Астрахани</span>
                        </h1>

                        <p
                            class="text-base md:text-xl text-gray-500 dark:text-beige-100/80 leading-relaxed mb-12 max-w-2xl mx-auto">
                            Почему это законно и выгодно вам. Общественный мониторинг без штрафов — только диалог и
                            помощь.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#how-visit"
                                class="group px-6 py-4 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold text-lg hover:bg-gray-500 dark:hover:bg-beige-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate/20">
                                <AppIcon name="arrowDown"
                                    class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                                Как проходит визит
                            </a>
                            <a href="#contacts"
                                class="px-6 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg shadow-beige-500/30 flex items-center justify-center gap-2">
                                <AppIcon name="chatBubble" class="w-5 h-5" />
                                Связаться с нами
                            </a>
                        </div>
                    </div>
                </section>

                <section class="px-6 py-24">
                    <BaseSectionHeader pill="О проекте" title-before="Кто мы и" title-italic="зачем приходим"
                        centered />

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
                            <div
                                class="bg-beige-100/20 dark:bg-gray-500/20 p-8 rounded-2xl px-6 border border-beige-500/20">
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

                <section class="bg-beige-100/30 dark:bg-gray-900 py-24">
                    <div class="px-6">
                        <BaseSectionHeader pill="Правовые основания" title-before="Почему наша работа"
                            title-italic="полностью законна" centered />

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div v-for="block in legalBlocks" :key="block.title"
                                class="bg-white dark:bg-gray-700 rounded-3xl p-8 border border-beige-100 dark:border-gray-500 min-w-0">
                                <div
                                    class="w-14 h-14 bg-beige-100 dark:bg-gray-500 rounded-2xl flex items-center justify-center mb-6">
                                    <AppIcon :name="block.icon" class="w-7 h-7 text-beige-500" />
                                </div>
                                <h3 class="sm:text-2xl text-lg font-bold mb-4">{{ block.title }}</h3>
                                <ul class="space-y-4 text-gray-500 dark:text-beige-100/80 text-sm sm:text-base">
                                    <li v-for="item in block.items" :key="item.text" class="flex gap-3">
                                        <AppIcon name="checkCircle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <span>
                                            <span v-if="item.label" class="font-bold">{{ item.label }}</span>{{
                                                item.text }}
                                        </span>
                                    </li>
                                </ul>
                                <p class="mt-6 text-sm text-beige-500">{{ block.note }}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="how-visit" class="px-6 py-24">
                    <BaseSectionHeader pill="Процесс" title-before="Как проходит" title-italic="наш визит" centered />
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        <div v-for="(step, idx) in processSteps" :key="step.title" class="text-center group min-w-0">
                            <div
                                class="w-20 h-20 bg-beige-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span class="text-4xl font-black text-white">{{ idx + 1 }}</span>
                            </div>
                            <h3 class="font-bold text-xl mb-2">{{ step.title }}</h3>
                            <p class="text-gray-500 dark:text-beige-100/70">{{ step.desc }}</p>
                        </div>
                    </div>
                </section>

                <section class="py-24 bg-beige-100/30 dark:bg-gray-900">
                    <div class="px-6">
                        <FaqSection pill="Частые вопросы" title-before="Всё, что вы хотели" title-italic="спросить"
                            subtitle="Отвечаем честно и на основании законов" :items="adminFaqSlice" all-link="/faq"
                            all-link-text="Все вопросы и правовые основания" />
                    </div>
                </section>

                <section id="contacts" class="bg-beige-100/30 dark:bg-gray-900 py-24">
                    <div class="px-6 text-center">
                        <BaseSectionHeader pill="Связь" title-before="Остались вопросы?" title-italic="Пишите"
                            subtitle="Основатель проекта отвечает быстро и по-честному" centered />
                        <Contacts />
                    </div>
                </section>

            </main>
        </AdaptiveContainer>
    </div>
</template>

<script setup lang="ts">
import { goals, legalBlocks, notDoing, processSteps } from '~/data/data'
import { getFaqSlice } from '~/data/faq'

const adminFaqSlice = getFaqSlice({ monitoring: 4, photo: 2, participation: 3 })



</script>