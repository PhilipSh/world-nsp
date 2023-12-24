<template>
  <div class="header" :class="{ transparent: isTransparent }">
    <div class="menu">
      <NuxtLink to="/">
        <img src="~/assets/images/logo.svg" alt="Логотип" class="logo" />
      </NuxtLink>

      <div>
        <MobileMenu />
        <Menu />
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
.transparent {
  background: transparent !important;
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
});
</script>
