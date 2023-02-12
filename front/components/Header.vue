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
          <NuxtLink to="/products" class="nav-link"> Продукция </NuxtLink>

          <div
            class="extra-menu-container"
            @mouseenter="toggleExtraLinks"
            @mouseleave="toggleExtraLinks"
          >
            <button class="extra-button">
              <span>Интересное</span>
              <img src="~/assets/images/drop-down-arrow.svg" />
            </button>
            <div v-if="extraLinksOpen" class="extra-list">
              <div v-if="extraLinks.length">
                <a
                  v-for="link in extraLinks"
                  :key="link.id"
                  :href="link.url"
                  class="extra-link"
                >
                  {{ link.name }}
                </a>
              </div>

              <div v-else class="empty-list">Список пуст</div>
            </div>
          </div>
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
          <NuxtLink to="/products" class="nav-link"> Продукция </NuxtLink>

          <div
            class="mobile-nav-link mobile-extra-button"
            @click="toggleExtraLinks"
          >
            <span>Интересное</span>
            <img src="~/assets/images/drop-down-arrow.svg" />
          </div>

          <div v-if="extraLinksOpen" class="extra-list">
            <a
              v-for="link in extraLinks"
              :key="link.id"
              :href="link.url"
              class="mobile-extra-link"
            >
              {{ link.name }}
            </a>
          </div>
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
  @apply invisible space-x-[20px] flex justify-start items-center xs:max-lg:invisible xs:max-md:w-0  md:visible;
}
.nav-link {
  @apply text-base text-white uppercase py-[4px] px-[10px] hover:underline hover:underline-offset-4;
}
.extra-menu-container {
  @apply relative;
}
.extra-button {
  @apply flex justify-start items-center space-x-1 text-base text-white uppercase py-[4px] px-[10px];
}
.extra-list {
  @apply bg-white drop-shadow-md absolute right-[10px] min-w-[200px] w-auto rounded-md px-[20px] py-[20px] flex flex-col justify-start items-start;
}
.extra-link {
  @apply text-black hover:underline hover:underline-offset-4 whitespace-nowrap;
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
.mobile-extra-button {
  @apply flex justify-start items-center space-x-2;
}
.mobile-extra-link {
  @apply text-grey hover:underline hover:underline-offset-8 text-xl;
}
.transparent {
  background: transparent !important;
}
.empty-list {
  @apply text-grey;
}
</style>

<script lang="ts">
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
      extraLinksOpen: false,
      extraLinks: [] as Link[],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleExtraLinks() {
      this.extraLinksOpen = !this.extraLinksOpen;
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
  mounted() {
    this.getExtraLinks();
  },
});
</script>
