// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-lucide-icons',
  ],
  app: {
    head: {
      title: 'Nuxt 3 Starter Template',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A clean Nuxt 3 starter template with Tailwind CSS' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
  },
  css: [
    '~/assets/css/tailwind.css',
  ],
  plugins: [
    '~/plugins/logger.ts',
    '~/plugins/axios.ts',
    '~/plugins/api.ts',
  ],
  // Runtime config with API settings
  runtimeConfig: {
    // Private keys (server only)
    apiSecret: process.env.API_SECRET || 'default-secret',
    
    // Public keys
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000/api',
      useMockApi: process.env.USE_MOCK_API === 'true' || true, // Default to mock API for demo
    }
  },
});