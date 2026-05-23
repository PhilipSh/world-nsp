<template>
  <button
    class="button group"
    :class="{
      primary: type === 'primary',
      secondary: type === 'secondary',
      ghost: type === 'ghost',
    }"
  >
    <span class="button-label">
      <slot></slot>
    </span>
    <span class="button-arrow" aria-hidden="true">
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="button-arrow-icon"
      >
        <path
          d="M2.5 8H13.5M13.5 8L8.5 3M13.5 8L8.5 13"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </button>
</template>

<style scoped>
.button {
  @apply inline-flex items-center justify-center gap-[12px] py-[18px] px-[36px] rounded-full
         font-bold tracking-wide border-2 border-transparent
         transition-all duration-300 ease-out-soft
         cursor-pointer select-none
         md:py-[20px] md:px-[44px]
         xl:py-[22px] xl:px-[52px];
}

.button-label {
  @apply leading-none uppercase text-[15px] md:text-[16px] xl:text-[17px] tracking-[0.06em];
}

.button-arrow {
  @apply inline-flex items-center justify-center w-[18px] h-[18px]
         overflow-hidden transition-transform duration-300 ease-out-soft;
}

.button-arrow-icon {
  @apply w-full h-full transition-transform duration-300 ease-out-soft;
}

.button:hover .button-arrow-icon {
  transform: translateX(3px);
}

.button:active {
  transform: translateY(1px) scale(0.99);
}

/* Primary: solid white on dark hero — subtle elevation */
.primary {
  @apply bg-white text-green shadow-soft;
}
.primary:hover {
  @apply bg-light-green text-green-dark shadow-lift -translate-y-[2px];
}

/* Secondary: brand-filled with green */
.secondary {
  @apply bg-green text-white shadow-soft;
}
.secondary:hover {
  @apply bg-green-dark shadow-lift -translate-y-[2px];
}

/* Ghost: outline / tertiary */
.ghost {
  @apply bg-transparent text-green border-green;
}
.ghost:hover {
  @apply bg-green text-white -translate-y-[2px] shadow-soft;
}
</style>

<script>
export default {
  props: ["type"],
};
</script>
