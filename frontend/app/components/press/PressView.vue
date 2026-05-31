<template>
    <LandingContainer class="px-6">

        <!-- Записка самому себе. Отрефактори заголовки в каждой секции на нужную компоненту -->
        <!-- И вынеси все данные в data -->

        <!-- Заголовок -->
        <PressHero />

        <!-- Факты -->
        <PressFacts />

        <!-- Пресс центр -->
        <PressSection />

        <!-- Сотрудничество -->
        <PressPartners />

        <!-- Документы проекта -->
        <DocsList />

        <!-- Идентификация -->
        <PressBadges />

        <!-- FAQ -->
        <PressFaq />

        <!-- Контакты -->
        <PressContacts />

    </LandingContainer>
</template>

<script lang="ts" setup>

useSeoMeta({
    title: 'Для СМИ и Партнеров',
    description: `Раздел для партнеров и СМИ на сайте FreshCheck`,
    ogTitle: 'Для магазинов на FreshCheck',
    ogDescription: `Раздел для партнеров и СМИ на сайте FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>
