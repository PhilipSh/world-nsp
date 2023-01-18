<template>
  <div class="header" :class="{ transparent: isTransparent }">
    <div class="menu">
      <!-- Desktop menu -->
      <NuxtLink to="/">
        <img src="~/assets/images/logo.svg" alt="Логотип" class="logo" />
      </NuxtLink>

      <div class="flex items-center">
        <button class="mobile-menu-button" @click="toggleMenu">
          <img src="~/assets/images/menu.svg" />
        </button>

        <nav class="nav-list">
          <NuxtLink to="/how-buy" class="nav-link">
            Как купить продукцию
          </NuxtLink>
          <a
            href="https://naturessunshine.ru/catalog/bad/"
            target="_blank"
            class="nav-link"
          >
            Продукция
          </a>

          <NuxtLink to="/" class="nav-link">Интересное</NuxtLink>
        </nav>
      </div>

      <!-- Mobile menu -->
      <div class="mobile-menu" :class="{ 'mobile-menu-open': menuOpen }">
        <button @click="toggleMenu">
          <img src="~/assets/images/close.svg" />
        </button>

        <nav class="mobile-nav-list">
          <NuxtLink to="/how-buy" class="mobile-nav-link">
            Как купить продукцию
          </NuxtLink>
          <a
            href="https://naturessunshine.ru/catalog/bad/"
            target="_blank"
            class="mobile-nav-link"
          >
            Продукция
          </a>

          <div class="mobile-nav-link" @click="getExtraLinks">Интересное</div>

          <a
            v-for="link in extraLinks"
            :key="link.id"
            :href="link.url"
            class="mobile-nav-link"
          >
            {{ link.name }}
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  @apply relative z-10 bg-green w-[100%];
}
.menu {
  @apply w-[100%] py-[8px] px-[20px] mx-auto box-border flex justify-between items-center md:py-[10px] lg:py-[14px] xl:py-[16px] lg:max-w-[1116px];
}
.logo {
  @apply h-[60px] md:h-[70px] lg:h-[90px];
}
.mobile-menu-button {
  @apply visible md:invisible;
}
.nav-list {
  @apply invisible space-x-[40px] flex justify-start items-center xs:max-lg:invisible xs:max-md:w-0  md:visible;
}
.nav-link {
  @apply text-base text-white uppercase hover:underline hover:underline-offset-4;
}
.mobile-menu {
  @apply invisible absolute top-0 left-0 h-screen w-[100%] bg-white z-10 flex flex-col justify-start items-end py-[24px] px-[20px];
}
.mobile-menu-open {
  @apply visible;
}
.mobile-nav-list {
  @apply mt-[60px] flex flex-col justify-start items-end space-y-5;
}
.mobile-nav-link {
  @apply text-black text-right text-2xl font-bold hover:underline hover:underline-offset-8;
}
.transparent {
  background: transparent !important;
}
</style>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";

interface Link {
  id: number;
  name: string;
  url: string;
}

export default Vue.extend({
  props: {
    isTransparent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuOpen: false,
      extraLinks: [] as Link[],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    getExtraLinks() {
      this.$axios
        .$get(`/api/interesting?populate=deep`)
        .then((response) => {
          this.extraLinks = response?.data?.attributes?.links ?? [];
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
});
</script>
