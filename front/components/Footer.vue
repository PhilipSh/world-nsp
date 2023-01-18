<template>
  <footer class="footer">
    <div class="section">
      <hr class="footer-divider" />
      <p class="mt-[10px] px-[10px] text-center md:mt-[35px] xl:mt-[40px]">
        Информационно-справочный портал независимого партнера компании Nature's
        Sunshine Products. <br />
        Сайт не является интернет-магазином. Не является официальным сайтом
        компании NSP. <br />
        Материалы и описания продуктов взяты на официальном сайте компании
        <a
          href="https://naturessunshine.ru"
          class="underline hover:text-light-green hover:underline"
          >naturessunshine.ru</a
        >
      </p>
      <p class="mt-[20px] text-center">
        Информация на сайте не является офертой.
      </p>
    </div>
  </footer>
</template>
<style scoped>
/* Footer */

.section {
  @apply w-[100%] mx-auto box-border;
}
.footer {
  @apply px-[54px] py-[40px] box-content flex flex-col justify-start items-center bg-[url('~/assets/images/footer-bg.jpg')] text-white text-xs md:px-[150px] md:py-[75px] lg:px-[270px] lg:py-[120px] xl:px-[320px] xl:py-[140px];
}
.footer-divider {
  @apply border-t border-white opacity-[35%] w-[100%];
}
</style>
