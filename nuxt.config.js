// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    compressPublicAssets: true,
    preset: "vercel",
  },

  modules: [
    ['@artmizu/yandex-metrika-nuxt', {
      id: 94226945, initParams: {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      }
    }],
    ['@nuxtjs/tailwindcss'],
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]
  ],

  imports: {
    dirs: ['stores'],
  },

  css: [
    "@/assets/css/base.postcss"
  ],

  plugins: [
    { src: '~/plugins/ym.js', mode: 'client' }
  ],

  app: {
    head: {
      title: 'Template',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Tina Nuxt/Tailwind Template' },
      ]
    }
  }
})
