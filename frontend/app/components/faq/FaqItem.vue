<template>
    <div
        class="faq-item bg-white dark:bg-gray-700 rounded-2xl border border-beige-100 dark:border-gray-500 overflow-hidden hover:border-beige-500 transition-colors duration-300">
        <button @click="$emit('toggle')"
            class="w-full p-6 flex justify-between items-center gap-4 text-left cursor-pointer">
            <span class="font-bold text-sm sm:text-lg text-slate dark:text-white">{{ question }}</span>
            <AppIcon :name="isOpen ? 'isOpen' : 'noOpen'"
                class="w-6 h-6 text-beige-500 shrink-0 transition-transform duration-500" />
        </button>

        <div class="faq-content" :class="{ 'faq-open': isOpen }">
            <div class="faq-inner">
                <div class="px-6 pb-6 text-xs">
                    <div class="pt-4 border-t border-beige-100 dark:border-gray-500">
                        <p v-if="!useHtml" class="text-gray-500 dark:text-beige-100/80 leading-relaxed">
                            {{ answer }}
                        </p>
                        <div v-else class="text-gray-500 dark:text-beige-100/80 leading-relaxed faq-html-content"
                            v-html="answer" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    question: string
    answer: string
    isOpen: boolean
    useHtml?: boolean
}

withDefaults(defineProps<Props>(), {
    useHtml: false
})

defineEmits<{
    toggle: []
}>()
</script>

<style scoped>
.faq-content {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.35s ease;
}

.faq-content.faq-open {
    grid-template-rows: 1fr;
    opacity: 1;
}

.faq-inner {
    overflow: hidden;
}

.faq-html-content :deep(a) {
    color: #a0876e;
    text-decoration: none;
    border-bottom: 1px dashed #a0876e;
    transition: all 0.2s ease;
}

.faq-html-content :deep(a:hover) {
    color: #8a7358;
    border-bottom-style: solid;
}
</style>