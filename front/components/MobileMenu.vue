<template>
  <div>
    <button class="mobile-menu-button" @click="toggleMenu">
      <img src="~/assets/images/menu.svg" />
    </button>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ 'mobile-menu-open': menuOpen }">
      <button @click="toggleMenu">
        <img src="~/assets/images/close.svg" />
      </button>

      <nav class="mobile-nav-list">
        <span class="subtitle"> Основное </span>

        <NuxtLink to="/how-buy" class="mobile-nav-link">
          Как купить продукцию
        </NuxtLink>

        <NuxtLink to="/products" class="mobile-nav-link"> Продукция </NuxtLink>

        <NuxtLink to="/interesting" class="mobile-nav-link">
          Интересное
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.mobile-menu-button {
  @apply inline-block md:hidden;
}
.mobile-menu {
  @apply invisible fixed top-0 left-0 h-[100%] w-[100%] bg-white z-10 flex flex-col justify-start items-end py-[24px] px-[20px];
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
</style>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
});
</script>
