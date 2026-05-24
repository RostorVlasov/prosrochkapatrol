<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors
           text-gray-600 dark:text-gray-100
           hover:bg-gray-100 dark:hover:bg-white/10
           [&.router-link-active]:bg-beige-50 dark:[&.router-link-active]:bg-beige-900/20
           [&.router-link-active]:text-beige-800 dark:[&.router-link-active]:text-beige-300
           [&.router-link-active]:font-medium"
  >
    <AppIcon :class="`size-5 shrink-0`" :name="icon" />
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { IconName } from '../ui/AppIcon.vue';

defineProps<{ to: string; icon: IconName }>()
</script>