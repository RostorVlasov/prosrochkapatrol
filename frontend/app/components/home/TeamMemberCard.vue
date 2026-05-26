<template>
    <div
        :class="['group p-8 rounded-3xl border hover:border-beige-500/40 transition-colors duration-500', bgClass, borderClass]">
        <div class="flex items-start gap-4 mb-4">
            <div
                :class="['w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300', avatarBgClass]">
                <span :class="['text-lg font-bold', avatarTextClass]">{{ initials }}</span>
            </div>
            <div>
                <h3 class="font-bold text-xl text-slate dark:text-white">{{ name }}</h3>
                <p class="text-beige-500 font-medium">{{ role }}</p>
            </div>
        </div>
        <blockquote
            class="text-gray-500 dark:text-beige-100/80 italic text-sm leading-relaxed border-l-2 border-beige-500/30 pl-4">
            «{{ quote }}»
        </blockquote>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    initials: string
    name: string
    role: string
    quote: string
    bgClass: string
    borderClass: string
    avatarBgClass: string
    avatarTextClass: string
}>()
</script>