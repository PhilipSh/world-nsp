<template>
  <div class="flex flex-col min-h-screen">
    <Header :isTransparent="false" />

    <main class="page-main flex-1">
      <header class="page-header">
        <div class="page-header-inner section">
          <span class="page-eyebrow">Где купить</span>
          <h1 class="page-title">
            Сервисные центры и&nbsp;<span class="text-accent">доставки</span>
          </h1>
          <p class="page-lead">
            Адреса официальных сервисных центров и служб доставки NSP по всему
            миру. Выберите подходящий формат и оформите заказ удобным способом.
          </p>
        </div>
      </header>

      <section class="section pb-[80px]">
        <div v-if="countries.length" class="country-list">
          <div v-for="country in countries" :key="country.id" class="country">
            <div v-if="country.name" class="country-head">
              <h2 class="country-name">{{ country.name }}</h2>
            </div>

            <hr class="country-divider" />

            <div class="service-center-list">
              <article
                v-for="serviceCenter in country.serviceCenters"
                :key="serviceCenter.id"
                class="service-center"
              >
                <h3 class="service-name">{{ serviceCenter.name }}</h3>

                <ul class="service-info-list">
                  <li
                    v-if="serviceCenter.description"
                    class="service-description"
                  >
                    {{ serviceCenter.description }}
                  </li>
                  <li
                    v-if="serviceCenter.links.length"
                    class="service-row service-link-list"
                  >
                    <span class="icon-wrapper">
                      <img src="~/assets/images/icon-link.svg" alt="" />
                    </span>
                    <div class="service-links-inner">
                      <a
                        v-for="link in serviceCenter.links"
                        :key="link.id"
                        :href="link.url"
                        target="_blank"
                        rel="noopener"
                        class="service-link"
                      >
                        {{ link.name }}
                      </a>
                    </div>
                  </li>
                  <li v-if="serviceCenter.address" class="service-row">
                    <span class="icon-wrapper">
                      <img src="~/assets/images/icon-address.svg" alt="" />
                    </span>
                    <span>{{ serviceCenter.address }}</span>
                  </li>
                  <li
                    v-for="phoneNumber in serviceCenter.phoneNumbers"
                    :key="phoneNumber.id"
                    class="service-row"
                  >
                    <span class="icon-wrapper">
                      <img src="~/assets/images/icon-phone.svg" alt="" />
                    </span>
                    <a :href="`tel:${phoneNumber.tel}`" class="service-link">{{
                      phoneNumber.tel
                    }}</a>
                  </li>
                  <li v-if="serviceCenter.workTime" class="service-row">
                    <span class="icon-wrapper">
                      <img src="~/assets/images/icon-work-time.svg" alt="" />
                    </span>
                    <span>{{ serviceCenter.workTime }}</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>

        <div v-else class="empty-list">
          <div class="empty-icon">🗺️</div>
          <p class="empty-title">Список адресов пока пуст</p>
          <p class="empty-subtitle">
            Мы заполняем карту сервисных центров — загляните позже.
          </p>
        </div>
      </section>
    </main>

    <Footer />
    <FloatingCall />
  </div>
</template>

<style scoped>
.section {
  @apply w-[100%] mx-auto px-[20px] box-border lg:max-w-[1116px] lg:px-[40px];
}

.page-main {
  @apply pt-[80px] md:pt-[92px] lg:pt-[120px];
}

.page-header {
  @apply relative overflow-hidden bg-gradient-mint border-b border-light-green;
}

.page-header::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle at top right,
    rgba(212, 165, 116, 0.16) 0%,
    transparent 55%
  );
  pointer-events: none;
}

.page-header-inner {
  @apply relative py-[40px] md:py-[56px] lg:py-[72px];
}

.page-eyebrow {
  @apply text-xs md:text-sm uppercase tracking-[0.22em] text-accent font-bold;
}

.page-title {
  @apply mt-[10px] text-[28px] md:text-[36px] lg:text-[44px] font-bold text-green leading-tight;
}

.page-lead {
  @apply mt-[14px] text-grey-dark leading-relaxed max-w-[640px];
}

.country-list {
  @apply mt-[24px] flex flex-col gap-[56px] lg:gap-[72px];
}

.country {
  @apply flex flex-col;
}

.country-head {
  @apply relative flex items-center gap-[14px] pl-[18px] lg:pl-[22px]
         pb-[14px];
}

.country-divider {
  @apply border-0 border-t border-grey-light w-full m-0;
}

.country-head + .country-divider {
  @apply -mt-px;
}

/* Vertical accent bar — анкор слева, чётко отделяет страну без жирной полосы */
.country-head::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0px;
  bottom: 16px;
  width: 4px;
  border-radius: 4px;
  background: linear-gradient(180deg, #176c4d 0%, #d4a574 100%);
}

.country-flag {
  @apply text-2xl lg:text-[28px] leading-none shrink-0;
}

.country-name {
  @apply text-xl lg:text-[28px] text-green-dark font-bold uppercase tracking-wide leading-none;
}

.country-count {
  @apply ml-auto text-sm text-grey-dark font-medium tabular-nums
         px-[10px] py-[4px] rounded-full bg-light-green;
}

.service-center-list {
  @apply mt-[20px] flex flex-col gap-7 lg:gap-[32px];
}

.service-center {
  @apply flex flex-col;
}

.service-name {
  @apply font-bold uppercase text-green tracking-wide text-base lg:text-lg leading-snug
         mb-4;
}

.service-info-list {
  @apply flex flex-col gap-[8px] text-[15px] lg:text-base text-grey-dark leading-relaxed;
}

.service-description {
  @apply text-grey-dark leading-relaxed;
}

.service-row {
  @apply flex justify-start items-start gap-[12px];
}

.service-link-list {
  @apply items-start;
}

.service-links-inner {
  @apply flex gap-[6px];
}

.service-link {
  @apply text-grey-dark hover:text-green transition-colors duration-200 underline underline-offset-4 decoration-transparent hover:decoration-green;
}

.icon-wrapper {
  @apply h-[22px] w-[22px] flex-shrink-0 flex justify-center items-center text-green;
}

.icon-wrapper img {
  @apply h-full w-full object-contain;
}

.empty-list {
  @apply flex flex-col items-center justify-center text-center py-[60px] gap-[8px];
}

.empty-icon {
  @apply text-[56px] mb-[4px];
}

.empty-title {
  @apply text-lg font-bold text-green;
}

.empty-subtitle {
  @apply text-grey;
}
</style>

<script lang="ts">
import { Context } from "@nuxt/types";

interface Country {
  id: number;
  name: string;
  serviceCenters: Array<ServiceCenter>;
}

interface PhoneNumber {
  id: number;
  tel: string;
}

interface Link {
  id: number;
  name: string;
  url: string;
}

interface ServiceCenter {
  id: number;
  name: string;
  phoneNumbers: PhoneNumber[];
  links: Link[];
  address?: string;
  workTime?: string;
  description?: string;
}

export default {
  head() {
    const url = "https://world-nsp.com/how-buy";
    const title =
      "Как купить продукцию NSP — сервисные центры и доставка по миру";
    const description =
      "Адреса сервисных центров NSP и служб доставки Nature's Sunshine Products по всему миру. Купите витамины и БАДы NSP с доставкой по партнёрской цене.";
    const image = "https://world-nsp.com/og-image.jpg";
    return {
      title,
      meta: [
        { hid: "description", name: "description", content: description },
        { hid: "og:title", property: "og:title", content: title },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        { hid: "og:url", property: "og:url", content: url },
        { hid: "og:image", property: "og:image", content: image },
        { hid: "twitter:title", name: "twitter:title", content: title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        { hid: "twitter:image", name: "twitter:image", content: image },
      ],
      link: [{ hid: "canonical", rel: "canonical", href: url }],
    };
  },
  data: function () {
    return {
      countries: [] as Country[],
    };
  },
  async asyncData({ $axios }: Context) {
    try {
      const response = await $axios.$get(`/api/store-page?populate=deep`);
      return { countries: response?.data?.attributes?.countries ?? [] };
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.error("[how-buy] failed to load:", e?.message || e);
      return { countries: [] };
    }
  },
};
</script>
