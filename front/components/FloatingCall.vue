<template>
  <a
    href="tel:+375444720111"
    class="floating-call"
    aria-label="Позвонить нам +375 444 720 111"
  >
    <span class="floating-call-ring"></span>
    <span class="floating-call-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0 1 22 16.92z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span class="floating-call-label">
      <span class="floating-call-title">Позвоните нам</span>
      <span class="floating-call-phone">+375 444 720 111</span>
    </span>
  </a>
</template>

<style scoped>
.floating-call {
  @apply fixed z-30 right-[16px] bottom-[16px] lg:right-[28px] lg:bottom-[28px]
         inline-flex items-center gap-[12px]
         pl-[12px] pr-[18px] py-[10px] lg:pl-[14px] lg:pr-[22px] lg:py-[12px]
         bg-green text-white rounded-full shadow-lift
         transition-all duration-300 ease-out-soft
         hover:bg-green-dark hover:-translate-y-[2px];
}

.floating-call-ring {
  @apply absolute inset-0 rounded-full pointer-events-none;
  box-shadow: 0 0 0 0 rgba(23, 108, 77, 0.45);
  animation: ring 2.4s cubic-bezier(0.66, 0, 0, 1) infinite;
}

@keyframes ring {
  0% {
    box-shadow: 0 0 0 0 rgba(23, 108, 77, 0.45);
  }
  60%,
  100% {
    box-shadow: 0 0 0 18px rgba(23, 108, 77, 0);
  }
}

.floating-call-icon {
  @apply inline-flex items-center justify-center w-[40px] h-[40px] lg:w-[44px] lg:h-[44px]
         rounded-full bg-white text-green shadow-soft shrink-0;
}

.floating-call-icon svg {
  @apply w-[20px] h-[20px] lg:w-[22px] lg:h-[22px];
}

.floating-call-label {
  @apply flex flex-col leading-tight text-left;
}

.floating-call-title {
  @apply text-[11px] lg:text-xs uppercase tracking-[0.18em] text-white/75 font-medium;
}

.floating-call-phone {
  @apply text-sm lg:text-base font-bold whitespace-nowrap;
}

/* On very small screens — show icon-only */
@media (max-width: 480px) {
  .floating-call {
    @apply pr-[14px];
  }
  .floating-call-label {
    display: none;
  }
}
</style>

<script>
export default {
  name: "FloatingCall",
};
</script>
