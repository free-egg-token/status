export default defineNuxtConfig({
  compatibilityDate: '2026-11-12',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [{ name: 'theme-color', content: '#FBF8F1' }],
    },
  },
})
