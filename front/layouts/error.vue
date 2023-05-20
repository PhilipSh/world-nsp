<template>
  <div class="error-page">
    <template v-if="error.statusCode === 404">
      <h1 class="error-title">404</h1>
      <p class="error-text">Страница не найдена</p>
    </template>

    <template v-else>
      <h1 class="error-title">Упс!</h1>
      <p class="error-text">Что-то пошло не так. Мы уже разбираемся.</p>
    </template>

    <NuxtLink class="go-to-home" to="/">
      <Button :type="'secondary'"> Вернуться на главную </Button>
    </NuxtLink>
  </div>
</template>

<style>
.error-page {
  @apply h-screen w-screen flex flex-col justify-center items-center p-[48px];
}

.error-title {
  @apply text-[96px] text-green font-bold text-center;
}

.error-text {
  @apply text-[48px] text-black font-semibold text-center;
}

.go-to-home {
  @apply mt-[20px];
}
</style>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
