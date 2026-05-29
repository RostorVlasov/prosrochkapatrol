<template>
    <section class="py-24">
        <BaseSectionHeader pill="Ценности" title-before="На чём мы" title-italic="стоим"
            subtitle="Десять принципов, которые определяют каждый шаг нашей работы" centered />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            <PrincipleCard v-for="(p, i) in principles" :key="i" v-bind="p" />
        </div>
        <div
            class="mt-16 p-10 bg-linear-to-r from-beige-100 to-beige-50 dark:from-gray-700 dark:to-gray-500 rounded-3xl border border-beige-500/20 text-center">
            <AppIcon name="handRaised" class="w-12 h-12 text-beige-500 mx-auto mb-4" />
            <p class="text-2xl font-bold mb-2">Мы — это вы</p>
            <p class="text-gray-500 dark:text-beige-100/70">
                <span class="font-semibold">FreshCheck</span> — это все мы вместе. За качество, свежесть и безопасность
                продуктов в Астрахани.
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { principles } from '~/data/data';

</script>
