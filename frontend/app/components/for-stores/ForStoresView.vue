<template>
    <div class="bg-beige-50 dark:bg-gray-900 min-h-screen text-slate dark:text-beige-100 overflow-x-hidden">
        <BlobsBg />
        <AdaptiveContainer class="p-0!">
            <main>

                <!-- Заголовок -->
                <AdminHero/>

                <!-- Кто мы и зачем приходим -->
                <AdminAbout/>

                <!-- Правовые основания -->
                <AdminLegal/>

                <!-- Как проходит наш визит -->
                <AdminProcess/>

                <!-- FAQ -->
                <section class="py-24 bg-beige-100/30 dark:bg-gray-900">
                    <div class="px-6">
                        <FaqSection pill="Частые вопросы" title-before="Всё, что вы хотели" title-italic="спросить"
                            subtitle="Отвечаем честно и на основании законов" :items="adminFaqSlice" all-link="/faq"
                            all-link-text="Все вопросы и правовые основания" />
                    </div>
                </section>

                <!-- Контакты -->
                <AdminContacts/>

            </main>
        </AdaptiveContainer>
    </div>
</template>

<script setup lang="ts">
    
import { getFaqSlice } from '~/data/faq'
const adminFaqSlice = getFaqSlice({ monitoring: 4, photo: 2, participation: 3 })

</script>