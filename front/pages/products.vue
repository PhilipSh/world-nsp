<template>
  <div class="flex flex-col min-h-screen">
    <Header :isTransparent="false" />

    <section class="section flex-1">
      <div v-if="categories.length" class="category-list">
        <div v-for="category in categories" :key="category.id" class="category">
          <div
            class="flex justify-start items-center space-x-2 cursor-pointer"
            @click="toggleCategory(category)"
          >
            <h2 class="category-name">
              {{ category.name }}
            </h2>
            <img
              src="~/assets/images/caret-down.svg"
              class="h-[20px]"
              :class="{ 'rotate-180': category.opened }"
            />
          </div>
          <hr v-if="category.opened" class="divider" />

          <div v-if="category.opened" class="product-list">
            <a
              v-for="product in category.products"
              :key="product.id"
              :href="product.url"
              target="_blank"
              class="product"
            >
              {{ product.name }}
            </a>
          </div>
        </div>
      </div>

      <div v-else class="empty-list">Список продукции пуст 😢</div>

      <a class="price-link" target="_blank" :href="priceFileUrl">
        <img src="~/assets/images/pdf-file.svg" />
        <span>Полный каталог продукции по лучшим ценам</span>
      </a>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
.section {
  @apply w-[100%] mx-auto px-[20px] pt-[20px] pb-[80px] box-border lg:max-w-[1116px];
}
.category-list {
  @apply flex flex-col space-y-[10px];
}
.category {
  @apply flex flex-col justify-start space-y-[12px];
}
.category-name {
  @apply text-xl text-green font-bold uppercase;
}
.divider {
  @apply text-grey;
}
.product-list {
  @apply flex flex-col;
}
.product {
  @apply flex flex-col space-y-[10px] hover:text-green hover:underline hover:underline-offset-4;
}
.price-link {
  @apply mt-[40px] flex space-x-2 justify-start items-start text-[20px] hover:text-green hover:underline hover:underline-offset-4;
}
.price-link img {
  position: relative;
  top: 2px;
}
.empty-list {
  @apply text-grey mt-[20px];
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
    return {
      title: "Каталог продукции NSP",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Полный каталог продукции NSP по лучшим ценам. Витамины и добавки без 40% розничной торговой надбавки по Карте Партнёра. Профессиональная линейка продукции, высокое качество.",
        },
      ],
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
      category.opened = !category.opened;
    },
  },
  async asyncData({ $axios }: Context) {
    const response = await $axios.$get(`/api/product-page?populate=deep`);
    const categories = response?.data?.attributes?.categories.map(
      (item: Category) => ({ ...item, opened: false })
    );
    const priceFileUrl =
      $axios.defaults.baseURL +
      response?.data?.attributes?.priceFile?.file?.data?.attributes?.url;

    return { categories: categories ?? [], priceFileUrl: priceFileUrl ?? "" };
  },
};
</script>
