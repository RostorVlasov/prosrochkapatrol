<template>
    <LandingContainer>

        <!-- Заголовок -->
        <AdminHero />

        <!-- Кто мы и зачем приходим -->
        <AdminAbout />

        <!-- Правовые основания -->
        <AdminLegal />

        <!-- Как проходит наш визит -->
        <AdminProcess />

        <!-- FAQ -->
        <section class="py-24 dark:bg-gray-900">
            <div>
                <FaqSection pill="Частые вопросы" title-before="Всё, что вы хотели" title-italic="спросить"
                    subtitle="Отвечаем честно и на основании законов" :items="adminFaqSlice" all-link="/faq"
                    all-link-text="Все вопросы и правовые основания" />
            </div>
        </section>

        <!-- Контакты -->
        <AdminContacts />

    </LandingContainer>
</template>

<script setup lang="ts">

import { getFaqSlice } from '~/data/faq'
const adminFaqSlice = getFaqSlice({ monitoring: 4, photo: 2, participation: 3 })


useSeoMeta({
    title: 'Для магазинов',
    description: `Раздел для администрации и руководителей магазинов на сайте FreshCheck`,
    ogTitle: 'Для магазинов на FreshCheck',
    ogDescription: `Раздел для администрации и руководителей магазинов на сайте FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>