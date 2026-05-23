<template>
    <div
        class="p-2 select-none bg-gray-50 hover:bg-white active:bg-white text-black dark:bg-gray-600 transition-colors cursor-pointer dark:hover:bg-gray-500 dark:active:bg-gray-500 text-center font-semibold dark:text-white rounded-xl">
        <NuxtLink :to="to" draggable="false">
            <slot></slot>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>

defineProps<{
    to: string
}>()

</script>