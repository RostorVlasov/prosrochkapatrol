<template>
    <div
        class="bg-white dark:bg-slate rounded-3xl p-8 md:p-10 border border-off-white dark:border-gray-500 shadow-sm hover:border-beige-500 transition-all duration-300 flex flex-col">
        <div class="flex items-start gap-5 mb-6">
            <img class="size-16 object-contain rounded-full" :src="logo"/>
            <div>
                <h2 class="text-2xl font-bold text-slate dark:text-white">{{ name }}</h2>
                <span
                    class="inline-block mt-2 px-3 py-1 bg-off-white/50 dark:bg-gray-500/50 rounded-full text-xs font-bold text-beige-500 uppercase tracking-wider">
                    {{ type }}
                </span>
            </div>
        </div>

        <p class="text-gray-500 sm:text-base text-sm dark:text-off-white/80 leading-relaxed mb-6 flex-1">
            {{ description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="(tag, i) in tags" :key="i"
                class="px-3 py-1.5 bg-off-white/30 dark:bg-gray-500/30 rounded-lg text-xs font-medium text-gray-500 dark:text-off-white">
                {{ tag }}
            </span>
        </div>

        <div class="pt-6 border-t border-off-white dark:border-gray-500 flex items-center justify-between">
            <span class="text-xs text-gray-500/60 dark:text-off-white/40">Статус: {{ status }}</span>
            <a :href="link" target="_blank"
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-beige-500 hover:bg-beige-600 text-white rounded-xl text-sm font-bold transition-colors shadow-md">
                <AppIcon name="arrowTopRight" class="w-4 h-4" />
                Telegram
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    name: string
    type: string
    logo: string
    description: string
    tags: string[]
    status: string
    link: string
}>()
</script>