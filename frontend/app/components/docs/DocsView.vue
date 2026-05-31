<template>
    <LandingContainer class="px-6">

        <!-- Заголовок -->
        <DocsHero />

        <!-- Список документов -->
        <DocsList />

        <!-- Правовая оговорка -->
        <LegalDisclaimer />

        <!-- Юридический FAQ -->
        <DocsFaq />

        <!-- Контакты -->
        <AdminContacts />

    </LandingContainer>
</template>

<script lang="ts" setup>

useSeoMeta({
    title: 'Документы FreshCheck',
    description: `Документы FreshCheck`,
    ogTitle: 'Документы FreshCheck',
    ogDescription: `Документы FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>
