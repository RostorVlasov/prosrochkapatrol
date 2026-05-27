export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: true,

  routeRules: {
    '/': { isr: 3600 },
    '/badges/**': { isr: 3600 },
    '/contact/**': { isr: 3600 },
    '/docs/**': { isr: 3600 },
    '/faq/**': { isr: 3600 },
    '/for-stores/**': { isr: 3600 },
    '/news/**': { isr: 3600 },
    '/product-review/**': { isr: 3600 },
    '/report/**': { isr: 3600 },
    '/_error/**': { isr: false },
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    apiUrl: 'http://127.0.0.1:3333',
    public: {
      API_URL: 'https://api.test.prosrochkapatrol.ru',
    }
  },

  app: {
    head: {
      title: 'FreshCheck',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://awesome-lib.css' },
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
      ],
    },
  },

  devtools: { enabled: false },

  modules: ['@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt', '@nuxtjs/color-mode'],
  icon: {
    serverBundle: {
      collections: ['ph', 'heroicons']
    },
    clientBundle: {
      scan: true,
    },
    fallbackToApi: false,
    externalizeIconsJson: true
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  pinia: {
    storesDirs: []
  },
})