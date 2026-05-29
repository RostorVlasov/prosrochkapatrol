<template>
    <section class="flex items-center justify-center relative overflow-hidden sm:py-12">
        <div class="w-full px-6 text-center relative z-10">
            <div class="mb-8">
                <SectionPill>Общественный мониторинг • Астрахань</SectionPill>
            </div>

            <h1
                class="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 text-slate dark:text-white wrap-break-word">
                Видим то,
                <span class="text-beige-500 italic block">что на<br/> полках</span>
            </h1>

            <p
                class="text-base md:text-xl text-gray-500 dark:text-beige-100/80 leading-relaxed mb-12 max-w-2xl mx-auto">
                Мы — <span class="font-bold text-slate dark:text-white">независимая гражданская инициатива жителей
                    Астрахани</span>.
                Проводим общественный мониторинг, информируем администрацию о недочётах и помогаем защищать права
                потребителей.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button @click="scrollTo('what')"
                    class="group px-8 py-4 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold text-lg hover:bg-gray-500 dark:hover:bg-beige-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate/20">
                    <AppIcon name="arrowDown"
                        class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                    Как это работает
                </button>
                <a href="/contact"
                    class="px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg shadow-beige-500/30 flex items-center justify-center gap-2">
                    <AppIcon name="paperAirplane" class="w-5 h-5" />
                    Предложить магазин
                </a>
            </div>
        </div>
    </section>
</template>
