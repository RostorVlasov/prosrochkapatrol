<template>
    <section class="flex items-center justify-center py-20 relative">
        <div class="w-full text-center relative z-10">
            <div class="mb-8">
                <SectionPill>Для руководителей и сотрудников магазинов</SectionPill>
            </div>

            <h1
                class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 wrap-break-words">
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
</template>