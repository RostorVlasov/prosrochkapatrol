<template>
  <div class="flex gap-4 items-start">
    <div
      class="shrink-0 w-10 h-10 bg-beige-100 dark:bg-gray-500 rounded-lg
             flex items-center justify-center mt-0.5">
      <AppIcon :name="icon" class="w-5 h-5 text-beige-500" />
    </div>
    <div>
      <h4 class="font-bold text-base mb-1 leading-snug">
        {{ title }}
        <span v-if="titleItalic" class="italic"> {{ titleItalic }}</span>
      </h4>
      <p class="text-gray-500 dark:text-beige-100/70 text-sm leading-relaxed">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BenefitItemProps } from '~/types/props.types'
defineProps<BenefitItemProps>()
</script>