<template>
  <div class="md:hidden">
    <button
      class="mobile-menu-button"
      @click="toggleMenu"
      aria-label="Открыть меню"
    >
      <img src="~/assets/images/menu.svg" alt="" />
    </button>

    <!-- Backdrop -->
    <div
      class="mobile-backdrop"
      :class="{ 'is-open': menuOpen }"
      @click="toggleMenu"
      aria-hidden="true"
    ></div>

    <!-- Mobile menu drawer -->
    <aside
      class="mobile-menu"
      :class="{ 'is-open': menuOpen }"
      aria-label="Мобильное меню"
    >
      <div class="mobile-menu-header">
        <span class="mobile-menu-eyebrow">Меню</span>
        <button @click="toggleMenu" aria-label="Закрыть меню" class="close-btn">
          <img src="~/assets/images/close.svg" alt="" />
        </button>
      </div>

      <nav class="mobile-nav-list" aria-label="Мобильная навигация">
        <NuxtLink to="/" exact class="mobile-nav-link" @click.native="toggleMenu">
          <span class="nav-index">01</span>
          <span>Главная</span>
        </NuxtLink>
        <NuxtLink
          to="/how-buy"
          class="mobile-nav-link"
          @click.native="toggleMenu"
        >
          <span class="nav-index">02</span>
          <span>Как купить</span>
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="mobile-nav-link"
          @click.native="toggleMenu"
        >
          <span class="nav-index">03</span>
          <span>Продукция</span>
        </NuxtLink>
        <NuxtLink
          to="/interesting"
          class="mobile-nav-link"
          @click.native="toggleMenu"
        >
          <span class="nav-index">04</span>
          <span>Интересное</span>
        </NuxtLink>
      </nav>

      <div class="mobile-menu-footer">
        <a
          href="tel:+375444720111"
          class="mobile-menu-phone"
          @click="toggleMenu"
        >
          + 375 444 720 111
        </a>
        <p class="mobile-menu-note">Мы на связи каждый день</p>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.mobile-menu-button {
  @apply inline-flex items-center justify-center w-[44px] h-[44px] rounded-full
         transition-all duration-300 hover:bg-white/10 active:scale-95;
}

.mobile-backdrop {
  @apply fixed inset-0 z-40 bg-green-deep/40 opacity-0 pointer-events-none transition-opacity duration-300;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.mobile-backdrop.is-open {
  @apply opacity-100 pointer-events-auto;
}

.mobile-menu {
  @apply fixed top-0 right-0 h-[100dvh] w-[86%] max-w-[360px] z-50
         bg-white shadow-lift flex flex-col
         translate-x-full transition-transform duration-500 ease-out-soft;
}

.mobile-menu.is-open {
  @apply translate-x-0;
}

.mobile-menu-header {
  @apply flex justify-between items-center px-[24px] py-[20px] border-b border-grey-soft;
}

.mobile-menu-eyebrow {
  @apply text-xs uppercase tracking-[0.18em] text-grey font-medium;
}

.close-btn {
  @apply inline-flex items-center justify-center w-[40px] h-[40px] rounded-full
         transition-all duration-300 hover:bg-grey-soft active:scale-95;
}

.mobile-nav-list {
  @apply flex-1 flex flex-col justify-start px-[24px] py-[32px] gap-[6px];
}

.mobile-nav-link {
  @apply flex items-center gap-[16px] py-[14px] px-[16px] -mx-[16px] rounded-2xl
         text-black text-[22px] font-bold
         transition-all duration-300 ease-out-soft
         hover:bg-mint hover:text-green hover:pl-[24px];
}

.nav-index {
  @apply text-[12px] font-medium text-grey tracking-[0.1em] tabular-nums;
}

.mobile-nav-link.nuxt-link-active,
.mobile-nav-link.nuxt-link-exact-active {
  @apply text-green bg-mint;
}

.mobile-menu-footer {
  @apply px-[24px] py-[28px] border-t border-grey-soft;
}

.mobile-menu-phone {
  @apply block text-xl font-bold text-green hover:text-green-dark transition-colors;
}

.mobile-menu-note {
  @apply mt-[6px] text-sm text-grey;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      menuOpen: false,
    };
  },
  watch: {
    menuOpen(open: boolean) {
      if (typeof document !== "undefined") {
        document.body.style.overflow = open ? "hidden" : "";
      }
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
});
</script>
