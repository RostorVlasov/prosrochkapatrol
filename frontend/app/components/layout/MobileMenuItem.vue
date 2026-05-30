<template>
    <NuxtLink :to="to" draggable="false">
        <div
            class="p-2 flex items-center justify-center gap-2 select-none bg-gray-50 hover:bg-white active:bg-white text-black dark:bg-gray-600 transition-colors cursor-pointer dark:hover:bg-gray-500 dark:active:bg-gray-500 text-center font-semibold dark:text-white rounded-xl">
            <AppIcon :name="icon"/>
            <slot></slot>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { IconName } from '../ui/AppIcon.vue';

defineProps<{
    to: string
    icon: IconName
}>()

</script>