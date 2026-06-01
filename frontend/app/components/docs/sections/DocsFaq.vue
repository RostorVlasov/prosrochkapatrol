<template>
    <section id="faq" class="py-24">
        <div class="max-w-4xl mx-auto">
            <FaqSection pill="Правовые вопросы" title-before="Юридическая" title-italic="чистота"
                subtitle="Ответы на ключевые вопросы о законности общественного мониторинга" :items="legalFaq" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { legalFaq } from '~/data/faq';

</script>