<template>
    <section class="py-24 dark:bg-gray-900">
        <BaseSectionHeader pill="Отзывы" title-before="Голоса" title-italic="Астрахани"
            subtitle="Слова жителей, которым помогли наши наблюдения" centered />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <TestimonialCard v-for="t in testimonials" :key="t.author" v-bind="t" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { testimonials } from '~/data/data';

</script>