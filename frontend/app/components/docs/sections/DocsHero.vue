<template>
    <section class="min-h-[60vh] flex items-center justify-center py-20 relative overflow-hidden">

        <div class="max-w-5xl mx-auto text-center relative z-10">
            <div class="mb-8">
                <SectionPill>Документы проекта FreshCheck</SectionPill>
            </div>

            <h1
                class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-6 max-w-4xl mx-auto text-slate dark:text-white">
                Правовой фундамент<br />
                <span class="text-beige-500 italic">нашей инициативы</span>
            </h1>

            <p class="text-base sm:text-lg md:text-xl text-gray-500 dark:text-off-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
                Мы действуем строго в правовом поле РФ. Здесь собраны внутренние регламенты, публичные стандарты и
                декларации, определяющие принципы нашего мониторинга.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#documents-list"
                    class="group px-8 py-4 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold text-base sm:text-lg hover:bg-gray-600 dark:hover:bg-off-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-slate/20">
                    <AppIcon name="documentText"
                        class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                    Смотреть документы
                </a>
                <a href="#faq"
                    class="px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-base sm:text-lg transition-colors duration-300 shadow-lg shadow-beige-500/30 flex items-center justify-center gap-2">
                    <AppIcon name="question" class="w-5 h-5" />
                    Юридический FAQ
                </a>
            </div>
        </div>
    </section>
</template>
