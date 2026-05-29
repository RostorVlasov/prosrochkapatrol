<template>
    <section class="py-24">
        <BaseSectionHeader pill="Процесс" title-before="Четыре шага к" title-italic="результату"
            subtitle="От визита в магазин до публикации обзора — всё прозрачно и по чётким правилам" centered />
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative mt-12">
            <div
                class="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-linear-to-r from-beige-100 via-beige-500 to-beige-100 dark:from-gray-500 dark:via-beige-500 dark:to-gray-500" />
            <ProcessStep v-for="(step, i) in processSteps" :key="i" :index="i" v-bind="step" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { processSteps } from '~/data/data';

</script>
