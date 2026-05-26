<template>
    <div
        class="group p-8 bg-white dark:bg-gray-700 rounded-3xl border border-beige-100 dark:border-gray-500 hover:border-beige-500 transition-all duration-500 text-center">
        <div
            class="w-20 h-20 bg-beige-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <span class="text-4xl font-black text-white">{{ number }}</span>
        </div>
        <h3 class="font-bold text-xl mb-3">{{ title }}</h3>
        <p class="text-gray-500 dark:text-beige-100/70">{{ desc }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    number: number
    title: string
    desc: string
}>()
</script>