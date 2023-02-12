<template>
  <div>
    <button class="mobile-menu-button" @click="toggleMenu">
      <img src="~/assets/images/menu.svg" />
    </button>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ 'mobile-menu-open': menuOpen }">
      <button @click="toggleMenu">
        <img src="~/assets/images/close.svg" />
      </button>

      <nav class="mobile-nav-list">
        <span class="subtitle"> Основное </span>

        <NuxtLink to="/how-buy" class="mobile-nav-link">
          Как купить продукцию
        </NuxtLink>

        <NuxtLink to="/products" class="mobile-nav-link"> Продукция </NuxtLink>

        <span class="subtitle">Интересное</span>

        <div v-if="extraLinks.length" class="extra-list">
          <a
            v-for="link in extraLinks"
            :key="link.id"
            :href="link.url"
            class="mobile-nav-link"
          >
            {{ link.name }}
          </a>
        </div>
        <div v-else class="empty-list">Список пуст</div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.mobile-menu-button {
  @apply inline-block md:hidden;
}
.mobile-menu {
  @apply invisible absolute top-0 left-0 h-screen w-[100%] bg-white z-10 flex flex-col justify-start items-end py-[24px] px-[20px];
}
.mobile-menu-open {
  @apply visible;
}
.mobile-nav-list {
  @apply mt-[60px] flex flex-col justify-start items-end space-y-5;
}
.mobile-nav-link {
  @apply text-black text-right text-2xl font-bold hover:underline hover:underline-offset-8;
}
.subtitle {
  @apply text-grey text-sm;
}
.mobile-extra-button {
  @apply cursor-pointer text-black text-right text-2xl font-bold flex justify-start items-center space-x-2;
}
.mobile-extra-link {
  @apply text-grey hover:underline hover:underline-offset-8 text-xl;
}
.empty-list {
  @apply text-grey;
}
</style>

<script lang="ts">
import Vue, { PropType } from "vue";

interface Link {
  id: number;
  name: string;
  url: string;
}

export default Vue.extend({
  props: {
    extraLinks: {
      type: Array as PropType<Link[]>,
      default: [],
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
});
</script>
