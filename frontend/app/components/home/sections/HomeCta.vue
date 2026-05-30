<template>
    <section class="py-24 text-center">
        <div class="p-6 pb-12 rounded-3xl overflow-hidden relative bg-beige-100/50 dark:bg-slate">
            <div class="relative z-10">
                <AppIcon name="chatBubble" class="size-12 mx-auto mb-4 text-beige-500" />
                <h3 class="text-lg sm:text-2xl font-bold mb-2 text-slate dark:text-white">Заметили что-то не то?</h3>
                <p class="text-gray-500 text-xs sm:text-base dark:text-beige-100/70 max-w-xl mx-auto mb-8">
                    Поделитесь наблюдением — мы заглянем в магазин, поговорим с администрацией и опубликуем честный
                    обзор.
                </p>
                <div class="flex flex-col gap-4 justify-center items-center">
                    <Contacts />
                    <NuxtLink to="/contact"
                        class="px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold text-xs sm:text-lg transition-colors duration-300 shadow-lg shadow-beige-500/30 flex items-center justify-center gap-2">
                        <AppIcon name="paperAirplane" class="w-5 h-5" />
                        Отправить жалобу с сайта
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>