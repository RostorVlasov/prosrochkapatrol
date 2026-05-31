<template>
    <LandingContainer>
        <PartnersHero />

        <div class="mb-12">
            <MainPartner v-bind="mainPartnerBase" :logo="logo"/>
        </div>
        <section class="max-w-7xl mx-auto pb-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <PartnerCard v-for="(partner, index) in partners" :key="index" v-bind="partner" />
            </div>
        </section>

        <PartnersCTA link="https://t.me/FreshCheckAstraAdmin" />

    </LandingContainer>
</template>

<script setup lang="ts">
import { mainPartnerBase, partners } from '~/data/data'

const mode = useColorMode()
const isDark = ref(false)

onMounted(() => {
  isDark.value = mode.value === 'dark'

  watch(() => mode.value, (val) => {
    isDark.value = val === 'dark'
  })
})

const logo = computed(() => isDark.value ? '/news_people_white.png' : '/news_people_black.png')

useSeoMeta({
    title: 'Партнеры FreshCheck',
    description: `Раздел о наших партнерах на сайте FreshCheck`,
    ogTitle: 'Для магазинов на FreshCheck',
    ogDescription: `Раздел о наших партнерах на сайте FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>