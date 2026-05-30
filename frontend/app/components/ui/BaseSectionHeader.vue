<template>
  <div :class="['mb-16', 'text-center']">
    <SectionPill>{{ pill }}</SectionPill>
    <h2 class="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
      {{ titleBefore }}
      <span v-if="titleItalic" class="italic text-beige-500">{{ titleItalic }}</span>
      <template v-if="titleAfter"> {{ titleAfter }}</template>
    </h2>
    <p
      v-if="subtitle"
      :class="['text-lg sm:text-xl text-gray-500 dark:text-beige-100/70', 'max-w-3xl mx-auto']">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pill: string
  titleBefore: string
  titleItalic?: string
  titleAfter?: string
  subtitle?: string
}>()
</script>