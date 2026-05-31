<template>
    <section class="max-w-7xl mx-auto px-6 py-24">
        <div class="
      relative overflow-hidden rounded-3xl p-12
      bg-linear-to-br from-[#F5F0EB] via-[#EDE5D8] to-[#F5F0EB]
      text-slate
      dark:from-slate dark:via-gray-500 dark:to-slate
      dark:text-white
    ">
            <div class="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-beige-500/20"></div>

            <div class="relative z-10 text-center max-w-3xl mx-auto">
                <div
                    class="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-beige-500 text-white">
                    Открыты к диалогу
                </div>

                <h2 class="text-4xl md:text-5xl font-black mb-6">
                    Мы готовы учитывать особенности вашего магазина
                </h2>

                <p class="text-lg mb-8 text-[#5C4A35]/80 dark:text-[#E7DDCD]/80">
                    Предварительное уведомление о визитах, фиксированные дни проверок,
                    любые другие предложения — обсуждаемо.
                </p>

                <div class="flex flex-wrap justify-center gap-4">
                    <div
                        class="rounded-full px-6 py-3 backdrop-blur-sm inline-flex items-center gap-2 bg-beige-500/15 text-[#5C4A35] dark:bg-white/10 dark:text-white">
                        <AppIcon name="calendar" class="w-4 h-4" />
                        Предупреждение заранее
                    </div>

                    <div
                        class="rounded-full px-6 py-3 backdrop-blur-sm inline-flex items-center gap-2 bg-beige-500/15 text-[#5C4A35] dark:bg-white/10 dark:text-white">
                        <AppIcon name="users" class="w-4 h-4" />
                        Личное знакомство с администрацией
                    </div>

                    <div
                        class="rounded-full px-6 py-3 backdrop-blur-sm inline-flex items-center gap-2 bg-beige-500/15 text-[#5C4A35] dark:bg-white/10 dark:text-white">
                        <AppIcon name="edit" class="w-4 h-4" />
                        Корректировка формы представления
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>