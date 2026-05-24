<template>
    <div class="flex items-center gap-0.5">
        <span v-for="i in 5" :key="i" class="relative inline-block w-4.5 h-4.5">
            <AppIcon name="star" class="absolute inset-0 size-4.5 text-gray-300 dark:text-gray-500" />
            <span class="absolute inset-0 overflow-hidden" :style="{ width: fillPercent(i) + '%' }">
                <AppIcon name="starFilled" class="size-4.5 text-amber-400" />
            </span>
        </span>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ score: number }>()

function fillPercent(index: number): number {
    const pct = Math.min(1, Math.max(0, props.score - (index - 1)))
    return Math.round(pct * 100)
}
</script>