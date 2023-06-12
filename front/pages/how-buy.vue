<template>
  <div class="flex flex-col min-h-screen">
    <Header :isTransparent="false" />

    <section class="section flex-1">
      <div v-if="countries.length" class="country-list">
        <div v-for="country in countries" :key="country.id" class="country">
          <h2 class="country-name">{{ country.name }}</h2>
          <hr class="divider" />

          <div class="service-center-list">
            <div
              v-for="serviceCenter in country.serviceCenters"
              :key="serviceCenter.id"
              class="service-center"
            >
              <h3 class="service-name">{{ serviceCenter.name }}</h3>
              <ul class="sevice-info-list">
                <li
                  v-if="serviceCenter.description"
                  class="service-description"
                >
                  <span> {{ serviceCenter.description }}</span>
                </li>
                <li v-if="serviceCenter.links.length" class="service-link-list">
                  <span class="icon-wrapper">
                    <img src="~/assets/images/icon-link.svg" />
                  </span>
                  <a
                    v-for="link in serviceCenter.links"
                    :key="link.id"
                    :href="link.url"
                    target="_blank"
                    class="service-link"
                  >
                    {{ link.name }}
                  </a>
                </li>
                <li v-if="serviceCenter.address" class="service-adress">
                  <span class="icon-wrapper">
                    <img src="~/assets/images/icon-address.svg" />
                  </span>
                  <span> {{ serviceCenter.address }}</span>
                </li>
                <li
                  v-for="phoneNumber in serviceCenter.phoneNumbers"
                  :key="phoneNumber.id"
                  class="service-phone"
                >
                  <span class="icon-wrapper">
                    <img src="~/assets/images/icon-phone.svg" />
                  </span>
                  <span>{{ phoneNumber.tel }}</span>
                </li>
                <li v-if="serviceCenter.workTime" class="service-work-time">
                  <span class="icon-wrapper">
                    <img src="~/assets/images/icon-work-time.svg" />
                  </span>
                  <span> {{ serviceCenter.workTime }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="empty-list">Список адресов пуст 😢</div>
    </section>
    <Footer />
  </div>
</template>

<style scoped>
.section {
  @apply w-[100%] mx-auto px-[20px] pt-[20px] pb-[80px] box-border lg:max-w-[1116px];
}
.country-list {
  @apply flex flex-col space-y-[40px];
}
.country {
  @apply flex flex-col justify-start space-y-[12px];
}
.country-name {
  @apply text-xl  text-green font-bold uppercase;
}
.divider {
  @apply text-grey;
}
.service-center-list {
  @apply flex flex-col space-y-[24px];
}
.service-center {
  @apply flex flex-col space-y-[10px];
}
.sevice-info-list {
  @apply flex flex-col space-y-[10px];
}
.service-name {
  @apply flex flex-col space-y-[10px] font-bold uppercase;
}
.service-adress {
  @apply flex justify-start items-start space-x-[16px];
}
.service-phone {
  @apply flex justify-start items-start space-x-[16px];
}
.service-link-list {
  @apply flex justify-start items-start space-x-[16px];
}
.service-link {
  @apply hover:text-green hover:underline hover:underline-offset-4;
}
.service-work-time {
  @apply flex justify-start items-start space-x-[16px];
}
.icon-wrapper {
  @apply h-[24px] w-[24px] flex-shrink-0 flex justify-center items-center;
}

.icon-wrapper img {
  @apply relative top-[-1px];
}
.empty-list {
  @apply text-grey mt-[20px];
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
    return {
      title: "Как купить продукцию NSP",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Адреса сервисных центров и доставок продукции NSP по всему миру",
        },
      ],
    };
  },
  data: function () {
    return {
      countries: [] as Country[],
    };
  },
  async asyncData({ $axios }: Context) {
    const response = await $axios.$get(`/api/store-page?populate=deep`);
    return { countries: response?.data?.attributes?.countries ?? [] };
  },
};
</script>
