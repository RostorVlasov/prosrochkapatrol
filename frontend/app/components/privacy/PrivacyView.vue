<template>
  <div class="min-h-screen bg-white text-slate dark:text-off-white font-sans transition-colors duration-300">
    <LandingContainer>
      <PrivacyHeader />

      <div class="max-w-5xl mx-auto px-6 py-16">
        <main class="space-y-12 text-gray-500 dark:text-off-white/90 leading-relaxed text-base md:text-lg">
          
          <section v-for="(section, idx) in textSections" :key="idx" :id="section.id" class="space-y-4">
            <div class="flex items-baseline gap-3 border-b border-off-white dark:border-gray-500 pb-2">
              <span class="font-mono text-sm text-beige-500 font-bold">0{{ idx + 1 }}.</span>
              <h2 class="text-lg sm:text-2xl font-black text-slate dark:text-white tracking-tight">
                {{ section.title }}
              </h2>
            </div>

            <div class="space-y-6 text-sm sm:text-base text-justify">
              <template v-if="section.id === 'collected-data'">
                <div v-html="section.content"></div>
                <DataDeAnonBox />
              </template>

              <template v-else>
                <div class="whitespace-pre-line">{{ section.content }}</div>
              </template>
            </div>
          </section>

          <PrivacyFooter />
        </main>
      </div>
    </LandingContainer>
  </div>
</template>

<script setup lang="ts">
import { textSections } from '~/data/privacy';

useSeoMeta({
    title: 'Политика конфиденциальности FreshCheck',
    description: `Раздел о политике конфиденциальности на сайте FreshCheck`,
    ogTitle: 'Политика конфиденциальности FreshCheck',
    ogDescription: `Раздел о политике конфиденциальности на сайте FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>

<style scoped>
section h2,
p,
span {
  transition: color 0.2s ease;
}
</style>