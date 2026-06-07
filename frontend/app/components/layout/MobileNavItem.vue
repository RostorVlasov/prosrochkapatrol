<template>
    <NuxtLink :aria-label="label" class="flex items-center" :to="to">
        <AppIcon :class="`${to === router.path ? 'dark:text-surface-brown text-white' : 'dark:text-white text-beige-100'} size-7`" :name="icon" />
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { IconName } from '../ui/AppIcon.vue';

const router = useRoute()

defineProps<{
    icon: IconName,
    to: string,
    label: string
}>()

</script>