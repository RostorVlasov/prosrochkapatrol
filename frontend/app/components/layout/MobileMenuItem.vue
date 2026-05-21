<template>
    <div
        class="p-2 select-none bg-gray-600 transition-colors cursor-pointer hover:bg-gray-500 active:bg-gray-500 text-center font-semibold text-white rounded-xl">
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