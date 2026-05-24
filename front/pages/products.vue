<template>
  <div class="flex flex-col min-h-screen">
    <Header :isTransparent="false" />

    <main class="page-main flex-1">
      <!-- Page header -->
      <header class="page-header">
        <div class="page-header-inner section">
          <span class="page-eyebrow">Каталог</span>
          <h1 class="page-title">
            Продукция <span class="text-accent">NSP</span>
          </h1>
          <p class="page-lead">
            Полная линейка продукции по партнёрским ценам.
            <strong class="text-green">Нажмите на категорию,</strong>
            чтобы увидеть продукты внутри.
          </p>
        </div>
      </header>

      <section class="section pb-[80px]">
        <div v-if="categories.length" class="category-list">
          <div
            v-for="category in categories"
            :key="category.id"
            class="category"
            :class="{ 'category-open': category.opened }"
          >
            <button
              class="category-head"
              :aria-expanded="category.opened ? 'true' : 'false'"
              :aria-label="
                (category.opened ? 'Свернуть' : 'Раскрыть') +
                ' категорию ' +
                category.name
              "
              @click="toggleCategory(category)"
            >
              <span class="category-text">
                <h2 class="category-name">{{ category.name }}</h2>
                <span class="category-count">
                  {{ category.products && category.products.length }}
                  {{
                    (category.products && category.products.length) === 1
                      ? "продукт"
                      : "продуктов"
                  }}
                </span>
              </span>
              <span class="category-meta">
                <span class="category-hint">
                  {{ category.opened ? "Свернуть" : "Открыть" }}
                </span>
                <span class="caret" aria-hidden="true">
                  <img
                    src="~/assets/images/caret-down.svg"
                    class="caret-icon"
                    :class="{ 'rotate-180': category.opened }"
                    alt=""
                  />
                </span>
              </span>
            </button>

            <div v-if="category.opened" class="product-list">
              <a
                v-for="product in category.products"
                :key="product.id"
                :href="product.url"
                target="_blank"
                rel="noopener"
                class="product"
              >
                <span class="product-bullet"></span>
                <span class="product-name">{{ product.name }}</span>
                <span class="product-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div v-else class="empty-list">
          <div class="empty-icon">🌿</div>
          <p class="empty-title">Список продукции пока пуст</p>
          <p class="empty-subtitle">
            Мы обновляем каталог — загляните чуть позже.
          </p>
        </div>

        <a
          v-if="priceFileUrl"
          class="price-link"
          target="_blank"
          rel="noopener"
          :href="priceFileUrl"
        >
          <span class="price-icon">
            <img src="~/assets/images/pdf-file.svg" alt="" />
          </span>
          <span class="price-text">
            <span class="price-title">Полный каталог</span>
            <span class="price-subtitle">PDF с лучшими ценами</span>
          </span>
        </a>
      </section>
    </main>

    <Footer />
    <FloatingCall />
  </div>
</template>

<style scoped>
.section {
  @apply w-[100%] mx-auto px-[20px] box-border lg:max-w-[1116px] lg:px-[40px];
}

.page-main {
  @apply pt-[80px] md:pt-[92px] lg:pt-[120px];
}

.page-header {
  @apply relative overflow-hidden bg-gradient-mint border-b border-light-green;
}

.page-header::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle at top right,
    rgba(212, 165, 116, 0.16) 0%,
    transparent 55%
  );
  pointer-events: none;
}

.page-header-inner {
  @apply relative py-[40px] md:py-[56px] lg:py-[72px];
}

.page-eyebrow {
  @apply text-xs md:text-sm uppercase tracking-[0.22em] text-accent font-bold;
}

.page-title {
  @apply mt-[10px] text-[28px] md:text-[36px] lg:text-[44px] font-bold text-green leading-tight;
}

.page-lead {
  @apply mt-[14px] text-grey-dark leading-relaxed max-w-[640px];
}

.category-list {
  @apply mt-[28px] flex flex-col gap-[10px];
}

.category {
  @apply bg-white border border-grey-light rounded-[16px] shadow-soft
         transition-all duration-300 ease-out-soft overflow-hidden;
}

.category:hover {
  @apply border-green/60 shadow-card;
}

.category.category-open {
  @apply border-green shadow-card;
}

.category-head {
  @apply w-full flex items-center justify-between gap-[12px] py-[14px] px-[16px]
         md:py-[18px] md:px-[20px] lg:py-[22px] lg:px-[28px]
         cursor-pointer text-left transition-colors duration-300 hover:bg-mint/60;
}

.category-text {
  @apply flex flex-col items-start min-w-0 flex-1 gap-[4px];
}

.category-name {
  @apply text-base md:text-lg lg:text-xl font-bold text-green uppercase tracking-wide leading-tight;
}

.category-meta {
  @apply flex items-center gap-[12px] lg:gap-[14px] shrink-0;
}

.category-count {
  @apply text-xs md:text-sm lg:text-base text-grey-dark font-medium tabular-nums whitespace-nowrap;
}

.category-hint {
  @apply hidden lg:inline-block text-sm font-bold text-green uppercase tracking-wider;
}

.caret {
  @apply inline-flex items-center justify-center w-[36px] h-[36px] rounded-full bg-light-green shrink-0;
}

.caret-icon {
  @apply h-[12px] transition-transform duration-300 ease-out-soft;
}

.product-list {
  @apply flex flex-col gap-[2px] px-[20px] pb-[20px] lg:px-[28px] lg:pb-[24px];
}

.product {
  @apply inline-flex items-center gap-[14px] py-[10px] px-[12px] -mx-[12px] rounded-[10px]
         text-grey-dark transition-all duration-300
         hover:bg-mint hover:text-green hover:pl-[18px];
}

.product-bullet {
  @apply inline-block w-[6px] h-[6px] rounded-full bg-green/30
         transition-all duration-300;
}

.product:hover .product-bullet {
  @apply bg-accent w-[8px];
}

.product-name {
  @apply flex-1;
}

.product-arrow {
  @apply text-sm text-grey opacity-0 -translate-x-1 transition-all duration-300;
}

.product:hover .product-arrow {
  @apply opacity-100 translate-x-0 text-green;
}

.empty-list {
  @apply flex flex-col items-center justify-center text-center py-[60px] gap-[8px];
}

.empty-icon {
  @apply text-[56px] mb-[4px];
}

.empty-title {
  @apply text-lg font-bold text-green;
}

.empty-subtitle {
  @apply text-grey;
}

.price-link {
  @apply mt-[40px] inline-flex items-center gap-[16px] py-[16px] pl-[16px] pr-[28px]
         bg-white border border-grey-light rounded-[16px] shadow-card
         transition-all duration-300 ease-out-soft
         hover:shadow-lift hover:-translate-y-[2px] hover:border-green/50;
}

.price-icon {
  @apply inline-flex items-center justify-center w-[48px] h-[48px] rounded-[12px] bg-light-green shadow-soft;
}

.price-icon img {
  @apply h-[24px] w-[24px];
}

.price-text {
  @apply flex flex-col leading-tight;
}

.price-title {
  @apply font-bold text-green text-base lg:text-lg;
}

.price-subtitle {
  @apply text-xs lg:text-sm text-grey mt-[2px];
}
</style>

<script lang="ts">
import { Context } from "@nuxt/types";

interface Category {
  id: number;
  name: string;
  products: Array<Product>;
  opened?: boolean;
}

interface Product {
  id: number;
  name: string;
  url: string;
}

export default {
  head() {
    const url = "https://world-nsp.com/products";
    const title =
      "Каталог продукции NSP — витамины, БАДы и фитопрепараты Nature's Sunshine";
    const description =
      "Полный каталог продукции NSP по партнёрским ценам без 40% наценки. Витамины, БАДы, фитопрепараты Nature's Sunshine Products высокого качества по стандарту GMP.";
    const image = "https://world-nsp.com/og-image.jpg";
    return {
      title,
      meta: [
        { hid: "description", name: "description", content: description },
        { hid: "og:title", property: "og:title", content: title },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        { hid: "og:url", property: "og:url", content: url },
        { hid: "og:image", property: "og:image", content: image },
        { hid: "twitter:title", name: "twitter:title", content: title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        { hid: "twitter:image", name: "twitter:image", content: image },
      ],
      link: [{ hid: "canonical", rel: "canonical", href: url }],
    };
  },
  data: function () {
    return {
      categories: [] as Category[],
      priceFileUrl: "" as string,
    };
  },
  methods: {
    toggleCategory(category: Category) {
      (this as any).$set(category, "opened", !category.opened);
    },
  },
  async asyncData({ $axios }: Context) {
    try {
      const response = await $axios.$get(`/api/product-page?populate=deep`);
      const categories =
        response?.data?.attributes?.categories?.map((item: Category) => ({
          ...item,
          opened: false,
        })) ?? [];
      const fileUrl =
        response?.data?.attributes?.priceFile?.file?.data?.attributes?.url;
      const priceFileUrl = fileUrl ? $axios.defaults.baseURL + fileUrl : "";
      return { categories, priceFileUrl };
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.error("[products] failed to load:", e?.message || e);
      return { categories: [], priceFileUrl: "" };
    }
  },
};
</script>
