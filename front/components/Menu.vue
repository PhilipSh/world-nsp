<template>
  <!-- Desktop menu -->
  <div class="hidden md:flex items-center">
    <nav class="nav-list" aria-label="Главное меню">
      <NuxtLink to="/how-buy" class="nav-link">
        <span>Как купить</span>
      </NuxtLink>
      <NuxtLink to="/products" class="nav-link">
        <span>Продукция</span>
      </NuxtLink>
      <NuxtLink to="/interesting" class="nav-link">
        <span>Интересное</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.nav-list {
  @apply flex items-center gap-[4px];
}

.nav-link {
  @apply relative inline-flex items-center text-[14px] lg:text-[15px] font-medium text-white/80 uppercase tracking-[0.06em]
         py-[10px] px-[14px] lg:px-[16px]
         transition-colors duration-300 ease-out-soft
         hover:text-white;
}

/* Single underline indicator — animates on hover, persists on active */
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 14px;
  right: 14px;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nuxt-link-active,
.nuxt-link-exact-active {
  @apply text-white font-bold;
}

.nuxt-link-active::after,
.nuxt-link-exact-active::after {
  transform: scaleX(1);
  background: #D4A574; /* accent — отличается от обычного hover */
  height: 3px;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
