<template>
    <section class="py-24">
        <div
            class="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate via-gray-500 to-slate p-10 sm:p-16 text-white">
            <div class="absolute top-0 right-0 w-96 h-96 bg-beige-500/20 rounded-full blur-3xl pointer-events-none" />
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-beige-100/10 rounded-full blur-3xl pointer-events-none" />
            <div class="relative z-10">
                <div
                    class="inline-block px-4 py-2 bg-beige-500 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6">
                    Знак качества
                </div>
                <h2 class="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[0.9]">
                    «Одобрено
                    <span class="italic text-beige-100 drop-shadow-md block">FreshCheck»</span>
                </h2>
                <p class="text-sm sm:text-lg text-beige-100/80 mb-8 leading-relaxed">
                    Магазины с рейтингом <strong class="text-white">5/5</strong> получают право использовать
                    видимый знак качества на входе. Это не государственный сертификат — это мнение жителей,
                    основанное на реальных наблюдениях.
                </p>
                <div class="space-y-3 mb-10">
                    <div v-for="item in badgePerks" :key="item" class="flex items-center gap-3">
                        <AppIcon name="checkCircle" class="w-6 h-6 text-beige-500 shrink-0" />
                        <span class="text-beige-100/90 text-xs sm:text-base">{{ item }}</span>
                    </div>
                </div>
                <NuxtLink to="/badges"
                    class="inline-flex items-center gap-2 px-8 py-4 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold shadow-xl transition-colors duration-300">
                    Как получить наклейку
                    <AppIcon name="arrowRight" class="w-5 h-5" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { badgePerks } from '~/data/data';

</script>
