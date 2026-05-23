<template>
  <div class="error-page">
    <div class="error-glow"></div>

    <span class="error-eyebrow">
      {{ error.statusCode === 404 ? "404 — Ошибка" : "Упс" }}
    </span>

    <template v-if="error.statusCode === 404">
      <h1 class="error-title">Страница <span class="text-accent">не найдена</span></h1>
      <p class="error-text">
        Возможно, она была перемещена или её никогда не существовало.
      </p>
    </template>

    <template v-else>
      <h1 class="error-title">Что-то <span class="text-accent">пошло не так</span></h1>
      <p class="error-text">
        Мы уже разбираемся в чём дело. Попробуйте обновить страницу или
        вернитесь на главную.
      </p>
    </template>

    <NuxtLink class="go-to-home" to="/">
      <Button :type="'secondary'">Вернуться на главную</Button>
    </NuxtLink>
  </div>
</template>

<style>
.error-page {
  @apply relative h-screen w-screen flex flex-col justify-center items-center px-[24px] text-center
         bg-gradient-mint overflow-hidden;
}

.error-glow {
  @apply absolute pointer-events-none w-[640px] h-[640px] rounded-full blur-3xl bg-accent/20 -z-0;
  top: -200px;
  right: -200px;
}

.error-eyebrow {
  @apply relative text-xs md:text-sm uppercase tracking-[0.28em] text-accent font-bold;
}

.error-title {
  @apply relative mt-[14px] text-[40px] md:text-[64px] lg:text-[80px] text-green font-bold text-center leading-[1.05];
}

.error-text {
  @apply relative mt-[14px] text-base md:text-lg text-grey-dark max-w-[520px] leading-relaxed;
}

.go-to-home {
  @apply relative mt-[28px];
}
</style>

<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>
