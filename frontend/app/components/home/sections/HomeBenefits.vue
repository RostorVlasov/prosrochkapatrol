<template>
    <section class="py-24">
        <BaseSectionHeader pill="Для вас" title-before="Что это даёт" title-italic="именно вам"
            subtitle="FreshCheck приносит пользу каждому участнику торговой цепочки" centered />
        <div class="space-y-6 mt-12">
            <BenefitRow v-for="row in benefitRows" :key="row.title" v-bind="row" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { benefitRows } from '~/data/data';

</script>