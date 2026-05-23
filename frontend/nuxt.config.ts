// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: true,
  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear() //Do not generate any routes
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || 'https://api.test.prosrochkapatrol.ru',
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
  devtools: {
    enabled: false,
    timeline: {
      enabled: true,
    },
  },
  modules: ['@pinia/nuxt', '@nuxt/ui', 'nuxt-single-html', '@vueuse/nuxt', '@nuxtjs/color-mode'],
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
    /**
     * Automatically add stores dirs to the auto imports. This is the same as
     * directly adding the dirs to the `imports.dirs` option. If you want to
     * also import nested stores, you can use the glob pattern `./stores/**`
     * (on Nimport { API_URL } from './app/utils/constants';
uxt 3) or `app/stores/**` (on Nuxt 4+)
     *
     * @default `['stores']`
     */
    storesDirs: []
  },
})