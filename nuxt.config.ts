// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    "usebootstrap",
    "@nuxt/icon",
    "nuxt-aos",
    "@nuxt/fonts",
    "@hypernym/nuxt-gsap"
  ],
  usebootstrap: {
    bootstrap: {
      prefix: ``
    },
    html: {
      prefix: `B`
    },
  },
  css: [
    "bootstrap/scss/bootstrap.scss",
    "~/assets/css/main.css",
  ],
  gsap: {
    extraPlugins: {
      text: true
    }
  }


})