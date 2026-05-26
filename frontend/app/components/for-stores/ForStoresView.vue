<template>
    <div class="min-h-screen bg-beige-50 dark:bg-gray-900 text-slate dark:text-beige-100 font-sans">
        <section class="min-h-[60vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
            <BlobsBg />
            <div class="max-w-5xl mx-auto text-center relative z-10">
                <div class="mb-8">
                    <SectionPill>Для руководителей и сотрудников магазинов</SectionPill>
                </div>

                <h1
                    class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 max-w-4xl mx-auto">
                    Общественный мониторинг<br />
                    <span class="text-beige-500 italic">для магазинов Астрахани</span>
                </h1>

                <p
                    class="text-lg md:text-xl text-gray-500 dark:text-beige-100/80 max-w-2xl mx-auto leading-relaxed mb-12">
                    Почему это законно и выгодно вам. Общественный мониторинг без штрафов — только диалог и помощь.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#how-visit"
                        class="group px-8 py-4 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold text-lg hover:bg-gray-500 dark:hover:bg-beige-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate/20">
                        <AppIcon name="arrowDown"
                            class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                        Как проходит визит
                    </a>
                    <a href="#contacts"
                        class="px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg shadow-beige-500/30 flex items-center justify-center gap-2">
                        <AppIcon name="chatBubble" class="w-5 h-5" />
                        Связаться с нами
                    </a>
                </div>
            </div>
        </section>

        <section class="max-w-7xl mx-auto px-6 py-24">
            <BaseSectionHeader pill="О проекте" title-before="Кто мы и" title-italic="зачем приходим" centered />

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="space-y-6">
                    <p class="text-lg text-gray-500 dark:text-beige-100/80 leading-relaxed">
                        <span class="font-bold text-slate dark:text-white">FreshCheck</span> — независимая гражданская
                        инициатива жителей Астрахани, действующая с августа 2025 года.
                    </p>
                    <p class="text-lg text-gray-500 dark:text-beige-100/80 leading-relaxed">
                        Мы обращаем внимание на <span class="font-bold">качество товаров</span>: просрочка, помятые
                        консервы, продукты с плесенью, вскрытые упаковки, повреждённые этикетки и другие дефекты.
                        Оперативно информируем администрацию магазина.
                    </p>
                    <div class="bg-beige-100/20 dark:bg-gray-500/20 rounded-2xl p-6 border border-beige-500/20">
                        <h3 class="font-bold text-xl mb-3 flex items-center gap-2">
                            <AppIcon name="checkCircle" class="w-6 h-6 text-beige-500" /> Наши цели
                        </h3>
                        <ul class="space-y-2 text-gray-500 dark:text-beige-100/80">
                            <li class="flex gap-2">
                                <AppIcon name="arrowRight" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" /> Защитить
                                покупателей от
                                некачественных товаров
                            </li>
                            <li class="flex gap-2">
                                <AppIcon name="arrowRight" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" /> Помочь
                                магазину оперативно выявить
                                и устранить любые дефекты
                            </li>
                            <li class="flex gap-2">
                                <AppIcon name="arrowRight" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
                                Способствовать формированию
                                культуры качества
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    class="bg-white dark:bg-gray-700 rounded-3xl p-8 border border-beige-100 dark:border-gray-500 shadow-sm">
                    <h3 class="font-bold text-xl mb-4 flex items-center gap-2">
                        <AppIcon name="xCircle" class="w-6 h-6 text-beige-500" /> Мы НЕ делаем
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex gap-2">
                            <AppIcon name="minus" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
                            Не выписываем штрафы
                        </li>
                        <li class="flex gap-2">
                            <AppIcon name="minus" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
                            Не составляем официальные протоколы и акты
                        </li>
                        <li class="flex gap-2">
                            <AppIcon name="minus" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
                            Не имеем права закрывать магазин
                        </li>
                        <li class="flex gap-2">
                            <AppIcon name="minus" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
                            Не являемся представителями госорганов
                        </li>
                        <li class="flex gap-2">
                            <AppIcon name="minus" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
                            Не передаём материалы в Роспотребнадзор без диалога
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="bg-beige-100/30 dark:bg-gray-900 py-24">
            <div class="max-w-7xl mx-auto px-6">
                <BaseSectionHeader pill="Правовые основания" title-before="Почему наша работа"
                    title-italic="полностью законна" centered />

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-white dark:bg-gray-700 rounded-3xl p-8 border border-beige-100 dark:border-gray-500">
                        <div
                            class="w-14 h-14 bg-beige-100 dark:bg-gray-500 rounded-2xl flex items-center justify-center mb-6">
                            <AppIcon name="camera" class="w-7 h-7 text-beige-500" />
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Что мы можем фиксировать (фото/видео)</h3>
                        <ul class="space-y-4 text-gray-500 dark:text-beige-100/80">
                            <li class="flex gap-3">
                                <AppIcon name="checkCircle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <span><span class="font-bold">Статья 29 Конституции РФ</span> — право искать
                                    информацию.</span>
                            </li>
                            <li class="flex gap-3">
                                <AppIcon name="checkCircle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <span><span class="font-bold">Постановление № 2463 (п. 2)</span> — запрет ограничивать
                                    фотосъёмку товара.</span>
                            </li>
                            <li class="flex gap-3">
                                <AppIcon name="checkCircle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <span><span class="font-bold">Статья 152.1 ГК РФ</span> — съёмка в местах открытого
                                    доступа.</span>
                            </li>
                        </ul>
                        <p class="mt-6 text-sm text-beige-500">Мы всегда замазываем лица людей, случайно попавших в
                            кадр.</p>
                    </div>

                    <div class="bg-white dark:bg-gray-700 rounded-3xl p-8 border border-beige-100 dark:border-gray-500">
                        <div
                            class="w-14 h-14 bg-beige-100 dark:bg-gray-500 rounded-2xl flex items-center justify-center mb-6">
                            <AppIcon name="scale" class="w-7 h-7 text-beige-500" />
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Почему общественный мониторинг законен</h3>
                        <ul class="space-y-4 text-gray-500 dark:text-beige-100/80">
                            <li class="flex gap-3">
                                <AppIcon name="checkCircle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <span><span class="font-bold">Ст.
                                        29 Конституции РФ</span> — право распространять информацию.</span>
                            </li>
                            <li class="flex gap-3">
                                <AppIcon name="checkCircle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <span><span class="font-bold">Закон о защите прав потребителей</span> (ст. 7, 8–10,
                                    18).</span>
                            </li>
                            <li class="flex gap-3">
                                <AppIcon name="checkCircle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Никакого специального
                                    разрешения не требуется.</span>
                            </li>
                        </ul>
                        <p class="mt-6 text-sm text-beige-500">Наши внутренние документы открыты и не налагают на вас
                            обязательств.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="how-visit" class="max-w-7xl mx-auto px-6 py-24">
            <BaseSectionHeader pill="Процесс" title-before="Как проходит" title-italic="наш визит" centered />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <div class="bg-beige-500 text-white p-6 rounded-2xl">Шаг 1</div>
                <div class="bg-beige-500 text-white p-6 rounded-2xl">Шаг 2</div>
                <div class="bg-beige-500 text-white p-6 rounded-2xl">Шаг 3</div>
                <div class="bg-beige-500 text-white p-6 rounded-2xl">Шаг 4</div>
            </div>
        </section>

        <section class="py-24 bg-beige-100/30 dark:bg-gray-900">
            <div class="max-w-4xl mx-auto px-6">
                <FaqSection pill="Частые вопросы" title-before="Всё, что вы хотели" title-italic="спросить"
                    subtitle="Отвечаем честно и на основании законов" :items="adminFaqSlice" all-link="/faq"
                    all-link-text="Все вопросы и правовые основания" />
            </div>
        </section>

        <section id="contacts" class="bg-beige-100/30 dark:bg-gray-900 py-24">
            <div class="max-w-7xl mx-auto px-6 text-center">
                <BaseSectionHeader pill="Связь" title-before="Остались вопросы?" title-italic="Пишите"
                    subtitle="Основатель проекта отвечает быстро и по-честному" centered />

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
                    <ContactCard icon="envelope" title="Email" value="none@prosrochkapatrol.ru" :href="EMAIL" />
                    <ContactCard icon="telegram" title="Telegram" value="@RomanTroshinRF" :href="TELEGRAM_FOUNDER" />
                    <ContactCard icon="phone" title="Телефон" value="+7 (917) 176-67-46" :href="PHONE" />
                </div>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">
import { getFaqSlice } from '~/data/faq'
import { EMAIL, PHONE, TELEGRAM_FOUNDER } from '~/data/social'

const adminFaqSlice = getFaqSlice({
    monitoring: 4,
    photo: 2,
    participation: 3
})
</script>