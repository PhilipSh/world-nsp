<template>
  <!-- Desktop menu -->
  <div class="flex items-center">
    <nav class="nav-list">
      <NuxtLink to="/how-buy" class="nav-link"> Как купить продукцию </NuxtLink>
      <NuxtLink to="/products" class="nav-link"> Продукция </NuxtLink>
      <div
        class="extra-menu-container"
        @mouseenter="toggleExtraLinks"
        @mouseleave="toggleExtraLinks"
      >
        <button class="extra-button">
          <span>Интересное</span>
        </button>
        <div v-if="extraLinksOpen" class="extra-list">
          <div v-if="extraLinks.length">
            <a
              v-for="link in extraLinks"
              :key="link.id"
              :href="link.url"
              class="extra-link"
            >
              {{ link.name }}
            </a>
          </div>

          <div v-else class="empty-list">Список пуст</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.nav-list {
  @apply space-x-[20px] flex justify-start items-center xs:max-lg:hidden xs:max-md:w-0 md:flex;
}
.nav-link {
  @apply text-base text-white uppercase py-[4px] px-[10px] hover:underline hover:underline-offset-4;
}
.extra-menu-container {
  @apply relative;
}
.extra-button {
  @apply flex justify-start items-center space-x-1 text-base text-white uppercase py-[4px] px-[10px];
}
.extra-list {
  @apply bg-white drop-shadow-md absolute right-[10px] min-w-[200px] w-auto rounded-md px-[20px] py-[20px] flex flex-col justify-start items-start;
}
.extra-link {
  @apply text-black hover:underline hover:underline-offset-4 whitespace-nowrap;
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
    extraLinks: Array as PropType<Link[]>,
  },
  data() {
    return {
      extraLinksOpen: false,
    };
  },
  methods: {
    toggleExtraLinks() {
      this.extraLinksOpen = !this.extraLinksOpen;
    },
  },
});
</script>
