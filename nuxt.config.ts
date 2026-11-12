export default defineNuxtConfig({
  compatibilityDate: '2026-11-12',
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'zh-CN', language: 'zh-CN', name: '简体中文', file: 'zh-CN.json' },
      { code: 'zh-TW', language: 'zh-TW', name: '繁體中文', file: 'zh-TW.json' },
    ],
    detectBrowserLanguage: false,
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [{ name: 'theme-color', content: '#FBF8F1' }],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/zh-CN', '/zh-TW'],
    },
  },
})
