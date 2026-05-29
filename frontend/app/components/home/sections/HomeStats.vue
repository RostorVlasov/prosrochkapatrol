<template>
    <section class="py-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard v-for="stat in stats" :key="stat.value" v-bind="stat" />
        </div>
    </section>

    <section class="py-24">
        <BaseSectionHeader pill="Инструкция" title-before="Как" title-italic="сообщить" title-after=" о проблеме?"
            subtitle="Три простых шага — и мы проверим магазин, о котором вы рассказали" centered />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <StepCard v-for="step in reportSteps" :key="step.number" v-bind="step" />
        </div>
        <div class="mt-12 text-center">
            <a :href="TELEGRAM_CHANNEL" target="_blank"
                class="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg">
                <AppIcon name="telegram" class="w-6 h-6" />
                Написать в канал проекта
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reportSteps, stats } from '~/data/data';
import { TELEGRAM_CHANNEL } from '~/data/social';

</script>