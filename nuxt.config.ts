// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Sheriff Culture Hub',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Explore sheriff culture, jokes, and global sayings' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rye&display=swap'
        }
      ]
    },
    // Updated baseURL and buildAssetsDir for production
    baseURL: '/',
    buildAssetsDir: '/_nuxt/'
  },
  // Configure for production
  nitro: {
    preset: 'node-server',
    server: {
      host: '0.0.0.0',
      port: 5000
    }
  },
  // Ensure proper static file generation
  generate: {
    fallback: true
  }
})