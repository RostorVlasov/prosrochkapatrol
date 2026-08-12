
export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  ssr: true,
  site: {
    url: 'https://freshcheckastra.ru',
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
    '/_nuxt/builds/**': {
      headers: { 'cache-control': 'no-store, no-cache' }
    },
    '/_nuxt/**': {
      headers: { 'cache-control': 'max-age=31536000, immutable' }
    },
    '/fonts/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' }
    },
    '/leaves.svg': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' }
    },
    '/_ipx/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' }
    },
  },

  nitro: {
    compressPublicAssets: true,
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    apiUrl: 'http://127.0.0.1:3333',
    public: {
      vapidPublicKey: process.env.NUXT_PUBLIC_VAPID_PUBLIC_KEY || 'BMHO-gRixKt-wtUNNCStL1lKUO6GFimvunf6phoDlUwbs98xzTPo-WeN67CUXgEcA8Jag7bn6ZEtvnR94wwQvqg',
      API_URL: 'https://api.freshcheckastra.ru',
    }
  },

  app: {
    head: {
      title: 'FreshCheck',
      meta: [
        { property: 'og:type', content: 'article', tagPriority: 0 },
        { name: 'viewport', content: 'width=device-width, initial-scale=1', tagPriority: 0 }
      ],
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/GolosText-Regular.woff2',
          crossorigin: 'anonymous'
        },
        { rel: 'preload', as: 'image', href: '/leaves.svg' },
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://api.freshcheckastra.ru' },
        { rel: 'dns-prefetch', href: 'https://api.freshcheckastra.ru' },
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
    '@nuxt/image'
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
    delay: 3000,
  },

  icon: {
    serverBundle: {
      collections: ['ph', 'heroicons', 'mdi']
    },
    fallbackToApi: false
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  image: {
    domains: ['api.freshcheckastra.ru'],
    ipx: {
      maxAge: 31536000,
    }
  },

  pinia: {
    storesDirs: []
  },
})