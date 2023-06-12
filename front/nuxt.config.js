export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "NSP - сайт независимого дистрибьютора компании",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "yandex-verification", content: "79f216b896cbdc88" },
      {
        name: "google-site-verification",
        content: "kXvxi-RlVIf2sJsIZ9eoN-wUtWrgzTU7HHhc-GDK1zE",
      },
      {
        hid: "description",
        name: "description",
        content:
          "НСП (NSP) в Мире Здоровья. Витамины и добавки без 40% розничной торговой надбавки по Карте Партнёра (оформление и консультация без оплаты). Профессиональная линейка продукции, высокое качество. Официальные поставки из США по всему миру, без посредников.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  server: {
    host: "0.0.0.0",
  },

  axios: {
    // baseURL: "https://world-nsp.com/strapi",
    baseURL: "http://localhost:1337", // Used as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
};
