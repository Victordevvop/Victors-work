// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/sass/tailwind.scss"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@formkit/auto-animate/nuxt"],

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://localhost:3001/api",
    },
  },
  plugins: ["~/plugins/toastify"],
});
