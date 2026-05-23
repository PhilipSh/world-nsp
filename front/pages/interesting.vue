<template>
  <div class="flex flex-col min-h-screen">
    <Header :isTransparent="false" />

    <main class="page-main flex-1">
      <header class="page-header">
        <div class="page-header-inner section">
          <span class="page-eyebrow">Журнал</span>
          <h1 class="page-title">
            Интересное из&nbsp;<span class="text-accent">мира NSP</span>
          </h1>
          <p class="page-lead">
            Статьи о здоровом образе жизни, разборы компонентов и
            практические советы — подобрано для тех, кому небезразлична
            забота о теле.
          </p>
        </div>
      </header>

      <section class="section pb-[80px]">
        <div v-if="!!posts.length" class="post-list">
          <article
            v-for="post in posts"
            :key="post.id"
            class="post"
          >
            <a :href="post.link" target="_blank" rel="noopener" class="post-link-wrap">
              <div class="post-img-container">
                <img
                  :src="post.img.url"
                  :alt="post.title"
                  class="post-img"
                  loading="lazy"
                />
                <span class="post-img-overlay"></span>
                <span class="post-tag">Статья</span>
              </div>
              <div class="post-body">
                <h3 class="post-title">{{ post.title }}</h3>
                <p class="post-description">{{ post.description }}</p>
                <span class="post-cta">
                  <span>Читать</span>
                  <span class="post-cta-arrow" aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </article>
        </div>

        <div v-else class="empty-list">
          <div class="empty-icon">📚</div>
          <p class="empty-title">Список статей пока пуст</p>
          <p class="empty-subtitle">
            Мы пишем новые материалы — загляните позже.
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

.post-list {
  @apply mt-[36px] grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[28px];
}

.post {
  @apply rounded-[20px] overflow-hidden bg-white border border-grey-light
         shadow-card transition-all duration-500 ease-out-soft;
}

.post:hover {
  @apply shadow-lift -translate-y-[4px] border-green/50;
}

.post-link-wrap {
  @apply flex flex-col h-full;
}

.post-img-container {
  @apply relative w-[100%] aspect-[16/10] overflow-hidden;
}

.post-img {
  @apply w-full h-full object-cover transition-transform duration-700 ease-out-soft;
}

.post:hover .post-img {
  transform: scale(1.06);
}

.post-img-overlay {
  @apply absolute inset-0 pointer-events-none;
  background: linear-gradient(180deg, transparent 50%, rgba(10, 53, 38, 0.35) 100%);
}

.post-tag {
  @apply absolute top-[14px] left-[14px] inline-flex items-center
         px-[12px] py-[6px] rounded-full
         bg-white/90 backdrop-blur-sm text-xs uppercase tracking-[0.14em]
         font-bold text-green shadow-soft;
}

.post-body {
  @apply flex flex-col flex-1 px-[22px] py-[24px] lg:px-[28px] lg:py-[28px];
}

.post-title {
  @apply font-bold text-lg lg:text-xl text-green leading-tight transition-colors duration-300;
}

.post:hover .post-title {
  @apply text-green-dark;
}

.post-description {
  @apply mt-[12px] text-grey-dark leading-relaxed text-sm lg:text-base flex-1;
}

.post-cta {
  @apply mt-[20px] inline-flex items-center gap-[10px]
         text-green font-bold uppercase text-sm tracking-[0.08em];
}

.post-cta-arrow {
  @apply inline-block transition-transform duration-300 ease-out-soft;
}

.post:hover .post-cta-arrow {
  transform: translateX(4px);
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
    try {
      const response = await $axios.$get(`/api/interesting-page?populate=deep`);
      const posts =
        response?.data?.attributes?.posts?.map((post: any) => ({
          ...post,
          img: {
            url: $axios.defaults.baseURL + post?.img?.data?.attributes?.url,
          },
        })) ?? [];
      return { posts };
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.error("[interesting] failed to load:", e?.message || e);
      return { posts: [] };
    }
  },
};
</script>
