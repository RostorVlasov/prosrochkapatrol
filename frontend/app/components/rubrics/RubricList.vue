<template>
    <div class="flex select-none gap-y-1.5 gap-1.5 flex-wrap text-sm">
        <span
            class="p-1 py-px text-[10px] md:text-sm w-max wrap-break-word text-white bg-surface-brown uppercase rounded-sm"
            v-for="rubric in sortedRubrics">
            {{ rubric.name }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import type { Rubric } from '~/types/rubrics.types';
const props = defineProps<{
    rubrics: Rubric[]
}>()

const sortedRubrics = props.rubrics.sort((a, b) => a.name.length - b.name.length)
</script>