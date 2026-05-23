<template>
  <footer class="footer">
    <div class="footer-overlay"></div>
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-brand-link" aria-label="На главную">
            <span class="footer-brand-mark">NSP</span>
            <span class="footer-brand-text">
              <span class="footer-brand-line1">World NSP</span>
              <span class="footer-brand-line2">Nature's Sunshine</span>
            </span>
          </NuxtLink>
          <p class="footer-tagline">
            Информационно-справочный портал независимого партнёра компании
            Nature's Sunshine Products.
          </p>
        </div>

        <div class="footer-col">
          <span class="footer-heading">Навигация</span>
          <NuxtLink to="/how-buy" class="footer-link">Как купить</NuxtLink>
          <NuxtLink to="/products" class="footer-link">Продукция</NuxtLink>
          <NuxtLink to="/interesting" class="footer-link">Интересное</NuxtLink>
        </div>

        <div class="footer-col">
          <span class="footer-heading">Связаться</span>
          <a href="tel:+375444720111" class="footer-link"
            >+ 375 444 720 111</a
          >
          <a
            href="mailto:worldnsp.info@gmail.com"
            class="footer-link break-all"
            >worldnsp.info@gmail.com</a
          >

          <div class="footer-socials">
            <a
              href="https://t.me/+375444720111"
              aria-label="Telegram"
              target="_blank"
              rel="noopener"
              class="footer-social"
            >
              <img src="~/assets/images/telegram.svg" alt="" />
            </a>
            <a
              href="https://wa.me/375444720111"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener"
              class="footer-social"
            >
              <img src="~/assets/images/whatsapp.svg" alt="" />
            </a>
            <a
              href="viber://chat?number=%2B375444720111"
              aria-label="Viber"
              class="footer-social"
            >
              <img src="~/assets/images/viber.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <hr class="footer-divider" />

      <div class="footer-bottom">
        <p>
          © {{ year }} World NSP. Сайт не является интернет-магазином и не
          является официальным сайтом компании NSP.
        </p>
        <p class="footer-bottom-secondary">
          Материалы и описания продуктов взяты на официальном сайте компании
          <a
            href="https://naturessunshine.ru"
            target="_blank"
            rel="noopener"
            class="footer-inline-link"
            >naturessunshine.ru</a
          >. Информация на сайте не является офертой.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
});
</script>

<style scoped>
.footer {
  @apply relative w-full text-white overflow-hidden;
  background:
    linear-gradient(180deg, rgba(15, 77, 55, 0.92) 0%, rgba(10, 53, 38, 0.97) 100%),
    url("~/assets/images/footer-bg.jpg") center / cover no-repeat;
}

.footer-overlay {
  @apply absolute inset-0 pointer-events-none opacity-[0.06];
  background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
  background-size: 28px 28px;
}

.footer-inner {
  @apply relative w-full max-w-[1116px] mx-auto px-[20px] py-[48px] md:py-[64px] lg:px-[40px] lg:py-[80px];
}

.footer-grid {
  @apply grid grid-cols-1 gap-[36px] md:grid-cols-3 md:gap-[32px] lg:gap-[64px];
}

.footer-brand {
  @apply flex flex-col gap-[16px] md:col-span-1 items-start;
}

.footer-brand-link {
  @apply inline-flex items-center gap-[14px] transition-opacity duration-300 hover:opacity-90;
}

.footer-brand-mark {
  @apply inline-flex items-center justify-center w-[52px] h-[52px] rounded-[14px]
         bg-white text-green font-bold text-[18px] tracking-tight shadow-soft;
}

.footer-brand-text {
  @apply flex flex-col leading-tight;
}

.footer-brand-line1 {
  @apply text-white text-lg font-bold tracking-wide;
}

.footer-brand-line2 {
  @apply text-xs uppercase tracking-[0.18em] text-white/60 font-medium mt-[3px];
}

.footer-tagline {
  @apply text-sm text-white/75 leading-relaxed max-w-[280px];
}

.footer-col {
  @apply flex flex-col gap-[10px];
}

.footer-heading {
  @apply text-xs uppercase tracking-[0.18em] text-white/60 font-medium mb-[6px];
}

.footer-link {
  @apply text-sm text-white/90 transition-colors duration-300 hover:text-light-green;
}

.footer-socials {
  @apply mt-[16px] flex items-center gap-[10px];
}

.footer-social {
  @apply inline-flex items-center justify-center w-[44px] h-[44px] rounded-full
         bg-white text-green
         shadow-soft
         transition-all duration-300
         hover:bg-accent-soft hover:-translate-y-[2px];
}

.footer-social img {
  @apply h-[22px] w-[22px];
  /* Иконки соцсетей цветные изначально — оставляем как есть, фон теперь белый */
}

.footer-divider {
  @apply border-t border-white/15 my-[32px] md:my-[40px];
}

.footer-bottom {
  @apply flex flex-col gap-[10px] text-xs text-white/65 leading-relaxed;
}

.footer-bottom-secondary {
  @apply text-white/55;
}

.footer-inline-link {
  @apply text-white/85 underline underline-offset-2 hover:text-light-green transition-colors;
}
</style>
