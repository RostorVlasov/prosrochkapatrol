<template>
    <section class="max-w-7xl mx-auto pb-24">
        <div
            class="relative overflow-hidden rounded-3xl dark:bg-slate bg-gray-600 p-10 md:p-14 text-white">
            <div class="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div class="w-14 h-14 bg-beige-500 rounded-2xl flex items-center justify-center shrink-0">
                    <AppIcon name="plus" class="w-7 h-7 text-white" />
                </div>
                <div class="flex-1 text-left">
                    <h3 class="text-2xl font-bold mb-2">Хотите здесь оказаться?</h3>
                    <p class="text-md text-off-white/90 leading-relaxed">
                        Мы открыты к сотрудничеству с авторами, сообществами и медиа.
                        Условия — на странице <NuxtLink to="/press" class="underline text-beige-500">Пресса и партнёры
                        </NuxtLink>.
                    </p>
                </div>
                <a :href="link" target="_blank"
                    class="shrink-0 inline-flex items-center gap-2 px-4 py-3 bg-beige-500 hover:bg-beige-600 text-white rounded-xl font-bold transition-colors shadow-lg">
                    <AppIcon name="paperAirplane" class="w-5 h-5" />
                    Написать
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppIcon from '@/components/ui/AppIcon.vue'

defineProps<{
    link: string
}>()
</script>