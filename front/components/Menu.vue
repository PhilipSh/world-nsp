<template>
  <!-- Desktop menu -->
  <div class="flex items-center">
    <nav class="nav-list">
      <NuxtLink to="/how-buy" class="nav-link"> Как купить продукцию </NuxtLink>
      <NuxtLink to="/products" class="nav-link"> Продукция </NuxtLink>
      <NuxtLink to="/interesting" class="nav-link"> Интересное </NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.nav-list {
  @apply space-x-[20px] hidden w-0 md:flex md:justify-start md:items-center md:w-auto;
}
.nav-link {
  @apply text-base text-white uppercase py-[4px] px-[10px] hover:underline hover:underline-offset-4;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
