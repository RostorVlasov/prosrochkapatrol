<template>
    <div
        class="p-8 bg-white dark:bg-gray-700 rounded-3xl border border-beige-100 dark:border-gray-500 hover:border-beige-500 hover:shadow-2xl transition-all duration-500">
        <div class="flex gap-1 mb-6">
            <AppIcon v-for="i in 5" :key="i" name="starFilled" class="w-5 h-5 text-beige-500" />
        </div>
        <p class="sm:text-lg text-md leading-relaxed mb-6 font-medium italic">«{{ text }}»</p>
        <div class="border-t border-beige-100 dark:border-gray-500 pt-6 flex items-center gap-3">
            <div
                class="w-12 h-12 bg-beige-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {{ author.charAt(0) }}
            </div>
            <div>
                <p class="font-bold">{{ author }}</p>
                <p class="text-sm text-gray-500 dark:text-beige-100/60">{{ location }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    text: string
    author: string
    location: string
}>()
</script>