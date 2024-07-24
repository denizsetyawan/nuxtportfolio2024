// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      title: "dnz portfolio",
      meta: [
        { name: "description", content: "deniz setyawan" },
        { name: "keywords", content: "portfolio, web developer" },
        { name: "author", content: "deniz" }
      ],
    }
  },
  devtools: {
    enabled: true
  },
  modules: [
    "usebootstrap",
    "@nuxt/icon",
    "nuxt-aos",
    "@nuxt/fonts",
    "@hypernym/nuxt-gsap",
    "@nuxt/content"
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
      text: true,
      scrollTrigger: true
    }
  }


})