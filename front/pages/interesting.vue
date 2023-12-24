<template>
  <div class="flex flex-col min-h-screen">
    <Header :isTransparent="false" />

    <section class="section">
      <div v-if="!!posts.length" class="post-list">
        <div v-for="post in posts" :key="post.id" class="post">
          <div class="post-img-container">
            <img :src="post.img.url" alt="Картинка статьи" class="post-img" />
          </div>
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-description">{{ post.description }}</p>
          <a class="post-link" :href="post.link">Подробнее</a>
        </div>
      </div>

      <div v-else class="empty-list">Список статей пуст 😢</div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
.section {
  @apply w-[100%] mx-auto px-[20px] pt-[20px] pb-[80px] box-border lg:max-w-[1116px] flex-1;
}
.post-list {
  @apply grid grid-rows-[auto] gap-5 grid-cols-1 md:grid-cols-2;
}
.post {
  @apply flex flex-col justify-start items-start;
}
.post-img-container {
  @apply w-[100%] h-[285px] overflow-hidden rounded-xl;
}
.post-img {
  @apply w-full h-full object-cover transition-transform transform-gpu hover:scale-110;
}
.post-title {
  @apply mt-6 font-semibold text-xl text-green;
}
.post-description {
  @apply mt-4 font-medium text-base;
}
.post-link {
  @apply mt-4 py-[10px] px-[34px] font-semibold text-lg text-green border border-[#C1D7CF] rounded;
}
</style>

<script lang="ts">
import { Context } from "@nuxt/types";

interface Post {
  id: number;
  title: string;
  description: string;
  link: string;
  img: Image;
}

interface Image {
  url: string;
}

export default {
  head() {
    return {
      title: "Интересное из мира NSP",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Статьи на разные темы в категории здоровья",
        },
      ],
    };
  },
  data: function () {
    return {
      posts: [] as Post[],
    };
  },
  async asyncData({ $axios }: Context) {
    const response = await $axios.$get(`/api/interesting-page?populate=deep`);
    const posts = response?.data?.attributes?.posts.map((post: any) => ({
      ...post,
      img: {
        url: $axios.defaults.baseURL + post?.img?.data?.attributes?.url,
      },
    }));

    return { posts };
  },
};
</script>
