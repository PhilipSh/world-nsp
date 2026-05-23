<template>
  <header
    class="header"
    :class="{
      transparent: isTransparent && !scrolled,
      scrolled: scrolled,
      compact: scrolled,
    }"
  >
    <div class="menu">
      <NuxtLink to="/" class="logo-link" aria-label="На главную">
        <img src="~/assets/images/logo.svg" alt="World NSP" class="logo" />
      </NuxtLink>

      <div class="menu-right">
        <MobileMenu />
        <Menu />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  @apply fixed top-0 left-0 right-0 z-30 w-[100%] transition-all duration-300 ease-out-soft;
  background: #176C4D;
}

.menu {
  @apply w-[100%] py-[10px] px-[20px] mx-auto box-border flex justify-between items-center transition-all duration-300 ease-out-soft
         md:py-[12px] lg:py-[16px] xl:py-[18px] lg:max-w-[1116px];
}

.logo-link {
  @apply inline-flex transition-transform duration-300 ease-out-soft hover:scale-[1.03];
}

.logo {
  @apply h-[52px] md:h-[60px] lg:h-[76px] transition-all duration-300 ease-out-soft;
}

.menu-right {
  @apply flex items-center;
}

/* Transparent (used over hero) — subtle dark gradient for legibility */
.transparent {
  background: linear-gradient(
    180deg,
    rgba(10, 53, 38, 0.55) 0%,
    rgba(10, 53, 38, 0.15) 70%,
    transparent 100%
  ) !important;
  box-shadow: none;
}

/* On scroll: glassy translucent green */
.scrolled {
  background: rgba(15, 77, 55, 0.85);
  backdrop-filter: saturate(140%) blur(14px);
  -webkit-backdrop-filter: saturate(140%) blur(14px);
  box-shadow: 0 6px 24px -8px rgba(10, 53, 38, 0.25);
}

.compact .logo {
  @apply h-[44px] md:h-[50px] lg:h-[58px];
}
.compact .menu {
  @apply py-[8px] md:py-[10px] lg:py-[12px];
}
</style>

<script lang="ts">
import Vue from "vue";
import Menu from "./Menu.vue";
import MobileMenu from "./MobileMenu.vue";

export default Vue.extend({
  props: {
    isTransparent: {
      type: Boolean,
      default: false,
    },
  },
  components: { MobileMenu, Menu },
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    this.onScroll();
    // body is the scroll container (html has overflow:hidden in main.css)
    document.body.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("scroll", this.onScroll, { passive: true });
  },
  beforeDestroy() {
    document.body.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const top =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.scrollY ||
        0;
      this.scrolled = top > 24;
    },
  },
});
</script>
