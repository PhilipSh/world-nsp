<template>
  <button
    class="button"
    :class="{ primary: type === 'primary', secondary: type === 'secondary' }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  @apply py-[16px] px-[42px] uppercase font-bold text-xl border-2 border-transparent rounded transition-all hover:bg-transparent hover:border-2 md:py-[16px] md:px-[60px] xl:py-[18px] xl:px-[80px];
}
.primary {
  @apply bg-white hover:text-white hover:border-white;
}
.secondary {
  @apply bg-green text-white hover:text-green hover:border-green;
}
</style>

<script>
export default {
  props: ["type"],
};
</script>
