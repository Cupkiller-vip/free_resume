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
  ],
  css: ['@unocss/reset/tailwind-compat.css'],
  ssr: false,
});
