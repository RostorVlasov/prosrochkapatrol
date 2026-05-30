<template>
    <section id="how-visit" class="py-24">
        <BaseSectionHeader pill="Процесс" title-before="Как проходит" title-italic="наш визит" centered />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div v-for="(step, idx) in processSteps" :key="step.title" class="text-center group min-w-0">
                <div
                    class="w-20 h-20 bg-beige-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-4xl font-black text-white">{{ idx + 1 }}</span>
                </div>
                <h3 class="font-bold text-xl mb-2">{{ step.title }}</h3>
                <p class="text-gray-500 dark:text-beige-100/70">{{ step.desc }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { processSteps } from '~/data/data';

</script>