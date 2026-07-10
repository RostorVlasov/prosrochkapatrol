<template>
    <LandingContainer>
        <PartnersHero />
        <section class="max-w-7xl mx-auto pb-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <PartnerCard v-for="(partner, index) in partners" :key="index" v-bind="partner" />
            </div>
        </section>

        <PartnersCTA link="https://t.me/FreshCheckAstraAdmin" />

    </LandingContainer>
</template>

<script setup lang="ts">
import { partners } from '~/data/data'

useSeoMeta({
    title: 'Партнеры FreshCheck',
    description: `Раздел о наших партнерах на сайте FreshCheck`,
    ogTitle: 'Для магазинов на FreshCheck',
    ogDescription: `Раздел о наших партнерах на сайте FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>