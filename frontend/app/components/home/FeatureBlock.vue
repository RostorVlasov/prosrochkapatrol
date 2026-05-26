<template>
  <div
    :class="['group lg:col-span-1 p-12 rounded-3xl relative hover:shadow-2xl transition-shadow duration-500', bgClass]">
    <div class="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none" :class="glowClass" />
    <div class="relative z-10">
      <div
        :class="['w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500',
                 iconBgClass, iconBgHoverClass]">
        <AppIcon :name="icon" :class="`w-8 h-8 ${iconClass}`" />
      </div>
      <h3 class="text-3xl font-bold mb-4">{{ title }}</h3>
      <p :class="['text-lg leading-relaxed', bodyClass]">
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IconName } from '../ui/AppIcon.vue'

defineProps<{
  icon: IconName
  title: string
  bgClass: string
  glowClass: string
  iconBgClass: string
  iconBgHoverClass: string
  iconClass: string
  bodyClass: string
}>()
</script>