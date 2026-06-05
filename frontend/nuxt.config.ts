
export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  ssr: true,
  site: {
    url: 'https://FreshCheckAstra.ru',
    name: 'FreshCheck',
    description: 'Общественный мониторинг магазинов Астрахани',
    defaultLocale: 'ru',
  },
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
      API_URL: 'https://api.FreshCheckAstra.ru',
    }
  },

  app: {
    head: {
      title: 'FreshCheck',
      meta: [
        { property: 'og:type', content: 'article' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
      ],
    },
  },

  devtools: { enabled: false },

  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    'nuxt-yandex-metrika',
  ],

  ui: {
    fonts: false
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
    cacheMaxAgeSeconds: 60 * 60,
  },

  yandexMetrika: {
    id: process.env.NUXT_PUBLIC_YM_ID || '104234020',
    options: {
      webvisor: true,
      clickmap: true,
      trackLinks: true,
    },
  },
  icon: {
    serverBundle: {
      collections: ['ph', 'heroicons', 'mdi']
    },
    clientBundle: {
      scan: true,
    },
    fallbackToApi: false
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