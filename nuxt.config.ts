// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
    alias: {
        '@': 'src/',
  },
  ssr: false,
  
  components: true,
  
  modules: [],
  
  css: [
    '~/assets/scss/common.scss',
  ],

  build: {
    transpile: ['gsap'],
  },
  
})
