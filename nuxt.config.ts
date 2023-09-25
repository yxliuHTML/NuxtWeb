// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  modules: [
    // ...
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    ['nuxt-swiper', {
      // Swiper options
    }]
  ],
  css:['@/assets/css/default.scss']
})
