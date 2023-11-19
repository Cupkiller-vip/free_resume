// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    'nuxt-primevue',
  ],
  css: [
    '~/assets/base.css',
    'primevue/resources/themes/lara-light-teal/theme.css',
  ],
  ssr: false,
});
