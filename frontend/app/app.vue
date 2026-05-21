<template>
  <UApp>
    <NuxtLayout :name="layoutName">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script lang="ts" setup>
const layoutName = ref<'default' | 'mobile'>('default')

const checkMobile = () => {
  layoutName.value = window.innerWidth < 600 ? 'mobile' : 'default'
}

if (import.meta.client) {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  onUnmounted(() => window.removeEventListener('resize', checkMobile))
}

</script>