<template>
    <NuxtLink :to="to" draggable="false">
        <div
            class="p-2 select-none bg-gray-50 hover:bg-white active:bg-white text-black dark:bg-gray-600 transition-colors cursor-pointer dark:hover:bg-gray-500 dark:active:bg-gray-500 text-center font-semibold dark:text-white rounded-xl">
            <slot></slot>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>

defineProps<{
    to: string
}>()

</script>