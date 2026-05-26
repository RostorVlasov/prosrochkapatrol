export default defineNuxtConfig({
  ssr: true,

  routeRules: {
    '/**': { isr: 3600 },

    '/_error/**': { isr: false },
    
    '/api/**': {
      proxy: { 
        to: 'https://api.test.prosrochkapatrol.ru/api/**' 
      }
    }
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || 'https://api.test.prosrochkapatrol.ru',
    }
  },

  nitro: {
    storage: {
      '/': { driver: 'fs', base: './.cache' }
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

  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  modules: ['@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt', '@nuxtjs/color-mode'],
  
  icon: {
    serverBundle: 'local',
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    fallbackToApi: false,
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