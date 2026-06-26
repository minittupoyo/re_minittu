// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/ui'],
  content: {
    renderer: {
      anchorLinks: false
    },
    build: {
      markdown: {
        remarkPlugins: {
          'remark-breaks': {},
          'remark-link-card-plus': {}
        }
      }
    }
  }
})