const SITE_URL = "https://world-nsp.com";
const SITE_NAME = "World NSP";
const DEFAULT_TITLE =
  "NSP Nature's Sunshine — витамины и БАДы без 40% наценки";
const DEFAULT_DESCRIPTION =
  "Официальная продукция NSP (Nature's Sunshine Products): витамины, БАДы, фитопрепараты по партнёрской цене без 40% наценки. Бесплатное оформление Карты Партнёра, доставка по миру.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "NSP Nature's Sunshine",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: DEFAULT_DESCRIPTION,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+375-44-472-01-11",
      contactType: "customer service",
      availableLanguage: ["Russian", "English"],
      email: "worldnsp.info@gmail.com",
    },
  ],
  sameAs: [
    "https://t.me/+375444720111",
    "https://wa.me/375444720111",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "ru-RU",
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default {
  head: {
    title: DEFAULT_TITLE,
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      { name: "yandex-verification", content: "79f216b896cbdc88" },
      {
        name: "google-site-verification",
        content: "kXvxi-RlVIf2sJsIZ9eoN-wUtWrgzTU7HHhc-GDK1zE",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { name: "theme-color", content: "#176C4D" },
      {
        hid: "description",
        name: "description",
        content: DEFAULT_DESCRIPTION,
      },
      {
        name: "keywords",
        content:
          "NSP, НСП, Nature's Sunshine, витамины, БАДы, карта партнёра NSP, купить НСП, фитопрепараты, натуральные добавки, дистрибьютор NSP",
      },

      // Open Graph
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:site_name", property: "og:site_name", content: SITE_NAME },
      { hid: "og:title", property: "og:title", content: DEFAULT_TITLE },
      {
        hid: "og:description",
        property: "og:description",
        content: DEFAULT_DESCRIPTION,
      },
      { hid: "og:url", property: "og:url", content: SITE_URL },
      { hid: "og:image", property: "og:image", content: DEFAULT_OG_IMAGE },
      { hid: "og:image:width", property: "og:image:width", content: "1200" },
      { hid: "og:image:height", property: "og:image:height", content: "630" },
      { hid: "og:locale", property: "og:locale", content: "ru_RU" },

      // Twitter / X
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:title", name: "twitter:title", content: DEFAULT_TITLE },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: DEFAULT_DESCRIPTION,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: DEFAULT_OG_IMAGE,
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { hid: "canonical", rel: "canonical", href: `${SITE_URL}/` },
      { rel: "dns-prefetch", href: "//nsp25.com" },
    ],
    script: [
      {
        hid: "ld-organization",
        type: "application/ld+json",
        json: organizationSchema,
      },
      {
        hid: "ld-website",
        type: "application/ld+json",
        json: websiteSchema,
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },

  publicRuntimeConfig: {
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    defaultOgImage: DEFAULT_OG_IMAGE,
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/reveal.client.ts", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxt/postcss8",
  ],

  // Modules
  modules: ["@nuxtjs/axios", "@nuxtjs/sitemap"],

  sitemap: {
    hostname: SITE_URL,
    gzip: true,
    trailingSlash: false,
    exclude: ["/admin/**"],
    routes: ["/", "/how-buy", "/products", "/interesting"],
    defaults: {
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
  },

  // Build Configuration
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = "source-map";
      }
    },
  },
  server: {
    host: "0.0.0.0",
  },

  axios: {
    baseURL: "https://world-nsp.com/strapi",
    // baseURL: "http://localhost:1337",
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
};
