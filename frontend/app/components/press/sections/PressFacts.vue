<template>
  <section class="py-24">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard v-for="stat in stats" :key="stat.value" v-bind="stat" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IconName } from '~/components/ui/AppIcon.vue';

interface StatItem {
  value: string;
  title: string;
  desc: string;
  icon: IconName;
}

const stats: StatItem[] = [
  {
    value: "Авг. 2025",
    title: "Дата запуска",
    desc: "Проект работает с августа 2025 года как инициатива жителей Астрахани",
    icon: "calendar"
  },
  {
    value: "4",
    title: "Документа проекта",
    desc: "Публичная политика, положение о деятельности, декларация принципов, положение о бейджах",
    icon: "documentText"
  },
  {
    value: "10",
    title: "Принципов работы",
    desc: "Законность, честность, прозрачность, партнёрство, безопасность, соразмерность, уважение, независимость, диалог, общественная польза",
    icon: "scale"
  }
]


</script>