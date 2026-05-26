<template>
  <div
    class="group p-6 bg-white dark:bg-slate rounded-2xl border border-beige-100 dark:border-gray-500
           hover:border-beige-500 hover:shadow-xl transition-all duration-500 flex flex-col gap-3">
    <div
      class="w-12 h-12 bg-beige-100 dark:bg-gray-500 rounded-xl flex items-center justify-center
             group-hover:bg-beige-500 transition-colors duration-500 shrink-0">
      <AppIcon :name="icon" class="w-6 h-6 text-beige-500 group-hover:text-white transition-colors duration-500" />
    </div>
    <h3 class="font-bold text-sm text-slate dark:text-beige-100 leading-snug">
      {{ title }}
    </h3>
    <p class="text-xs text-gray-500 dark:text-beige-100/60 leading-relaxed">
      {{ desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { IconName } from '../ui/AppIcon.vue'

defineProps<{
  icon: IconName
  title: string
  desc: string
}>()
</script>