<template>
  <section class="py-24">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard v-for="stat in PressStats" :key="stat.value" v-bind="stat" />
    </div>
  </section>
</template>

<script setup lang="ts">

import { PressStats } from '~/data/data';

</script>