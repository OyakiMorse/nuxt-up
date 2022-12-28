// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
    alias: {
        '@': 'src/',
  },
  ssr: true,
  
  components: true,
  
  modules: [],
  
  css: [
    '~/assets/scss/common.scss',
  ],

  // plugins: ["~/plugins/vee-validate.js"]
  
})
