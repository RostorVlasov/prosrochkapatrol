<template>
  <div
    class="group bg-white dark:bg-gray-700 rounded-3xl border border-beige-100 dark:border-gray-500
           overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-beige-500">
    <div class="grid lg:grid-cols-5">
      <div :class="['lg:col-span-2 p-6 flex flex-col justify-center min-h-50', panelClass]">
        <div class="w-16 h-16 bg-beige-500 rounded-2xl flex items-center justify-center mb-6 shrink-0">
          <AppIcon :name="icon" class="w-8 h-8 text-white" />
        </div>
        <h3 :class="['text-2xl sm:text-4xl font-black mb-3 tracking-tight', titleClass]">{{ title }}</h3>
        <p :class="['text-base leading-relaxed', subtitleClass]">{{ subtitle }}</p>
      </div>
      <div class="lg:col-span-3 p-6">
        <div class="space-y-6">
          <BenefitItem v-for="item in items" :key="item.title" v-bind="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BenefitItemProps } from '~/types/props.types'
import type { IconName } from '../ui/AppIcon.vue'

defineProps<{
  icon: IconName
  title: string
  subtitle: string
  panelClass: string
  titleClass: string
  subtitleClass: string
  items: BenefitItemProps[]
}>()
</script>