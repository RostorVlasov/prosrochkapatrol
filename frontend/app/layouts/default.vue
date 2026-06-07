<template>
  <div class="app-layout dark:text-white text-black min-h-screen transition-colors">
    <aside class="sidebar hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-56 z-50
                  bg-white dark:bg-black/80 border-r border-gray-200 dark:border-gray-800">

      <div class="px-4 py-5 border-b border-gray-200 dark:border-gray-800">
        <NuxtLink v-if="!isMounted" to="/">
          <NuxtImg format="webp" fetchpriority="high" quality="80" class="h-15 w-auto" :src="'/freshcheck.png'" alt="FreshCheck" />
        </NuxtLink>
        <ClientOnly>
          <NuxtLink to="/">
            <NuxtImg format="webp" fetchpriority="high" quality="80" class="h-15 w-auto" :src="isDark ? '/freshcheck-light.png' : '/freshcheck.png'" alt="FreshCheck" />
          </NuxtLink>
        </ClientOnly>
      </div>

      <nav class="flex-1 px-2 py-3 flex flex-col gap-0.5 overflow-y-auto">
        <SidebarNavItem v-for="page in pages.sidebar" :icon="page.icon" :to="page.url">{{ page.name }}
        </SidebarNavItem>
        <div class="my-2 border-t border-gray-200 dark:border-gray-800" />
        <SidebarNavItem v-for="page in pages.other" :icon="page.icon" :to="page.url">{{ page.name }}
        </SidebarNavItem>
      </nav>

      <div class="px-4 py-3 border-t border-gray-200 dark:border-gray-800">
        <button @click="toggleColorMode"
          class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
          <AppIcon class="size-5" name="theme" />
          <ClientOnly>
            <span>{{ isDark ? 'Светлая тема' : 'Тёмная тема' }}</span>
          </ClientOnly>
        </button>
      </div>
    </aside>

    <header class="lg:hidden px-5 absolute z-50 right-0 left-0 top-0 py-2
                   bg-white dark:bg-black/70 border-b border-gray-200 dark:border-0
                   backdrop-blur-2xl flex justify-between items-center">
      <NuxtLink :to="pages.sidebar.home.url">
        <NuxtImg format="webp" fetchpriority="high" quality="80" v-if="!isMounted" class="w-50 h-auto" :src="'/freshcheck.png'" alt="FreshCheck" />
        <ClientOnly>
          <NuxtImg format="webp" fetchpriority="high" quality="80" class="w-50 h-auto" :src="isDark ? '/freshcheck-light.png' : '/freshcheck.png'" alt="FreshCheck" />
        </ClientOnly>
      </NuxtLink>
      <button @click="toggleColorMode" class="text-gray-800 dark:text-white">
        <AppIcon class="size-8" name="theme" />
      </button>
    </header>

    <main class="transition-colors lg:ml-56" @click="menuActive = false">
      <div class="pt-16 pb-14 lg:pt-0 lg:pb-0 lg:min-h-screen">
        <slot />
      </div>
    </main>

    <MobileNav v-model="menuActive" />
  </div>
</template>

<script lang="ts" setup>
import { pages } from '~/data/pages'

const menuActive = ref(false)
const mode = useColorMode()
const isDark = computed(() => mode.value === 'dark')
const toast = useToast()
const isMounted = ref(false)
const { subscribe } = usePushNotifications()

const { isResolved, isAccepted, accept } = useCookieConsent()
const config = useRuntimeConfig()
const { show: showTelegramNotification } = useAdNotification()

function initMetrika() {
  const id = config.public.yandexMetrikaId
  if (!id || !(window as any).ym) return
    ; (window as any).ym(id, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })
}

onMounted(() => {
  isMounted.value = true

  if (isAccepted.value) {
    initMetrika()
  }

  if (!isResolved.value) {
    toast.add({
      id: 'cookie-consent',
      closeIcon: 'ph:x',
      title: 'Мы используем куки 🍪',
      description: 'Для улучшения работы сайта мы используем файлы cookie.',
      icon: 'ph:cookie',
      color: 'neutral',
      close: false,
      duration: 0,
      onClick: () => { navigateTo('/privacy') },
      class: 'pointerNone',
      actions: [
        {
          class: 'pointerAuto',
          label: 'Хорошо',
          onClick: () => {
            accept()
            initMetrika()
          },
        },
        {
          class: 'pointerAuto',
          label: 'Подробнее',
          variant: 'outline',
          onClick: () => {
            navigateTo('/privacy')
          },
        },
      ],
    })
  }
  
  subscribe()
  showTelegramNotification()
})

function toggleColorMode() {
  mode.preference = isDark.value ? 'light' : 'dark'
}

const themeColor = computed(() => isDark.value ? '#6a7282' : '#A0876E')

useHead({
  meta: [{ name: 'theme-color', content: themeColor }],
})

</script>