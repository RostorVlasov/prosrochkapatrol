<template>
    <section class="py-24">
        <BaseSectionHeader pill="Контакты проекта" title-before="Наши" title-italic="каналы"
            subtitle="Подписывайтесь, чтобы быть в курсе всех новостей и обзоров" centered />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <SocialLink v-for="link in socialLinks" :key="link.name" v-bind="link" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { socialLinks } from '~/data/data';

</script>