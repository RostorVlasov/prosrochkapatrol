<template>
     <img v-if="avatarUrl" class="rounded-[50%] size-10" :src="buildApiUrl(avatarUrl)" alt="">
</template>

<script setup lang="ts">
    defineProps<{
        avatarUrl: string | undefined
    }>()

    const {buildApiUrl} = useApiBuilder()
</script>