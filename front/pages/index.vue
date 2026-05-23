<template>
  <div class="page text-sm md:text-base lg:text-[17px]">
    <!-- HERO -->
    <div class="hero">
      <div
        class="hero-bg bg-[url('~/assets/images/bg-mobile.jpg')] lg:bg-[url('~/assets/images/bg.jpg')]"
      ></div>
      <div class="hero-overlay"></div>

      <Header :isTransparent="true" />

      <section class="hero-content section">
        <span class="hero-eyebrow animate-fade-up">
          Nature's Sunshine Products
        </span>

        <img
          class="hero-mobile-icon animate-scale-in lg:hidden"
          src="~/assets/images/logo-icon.svg"
          alt=""
        />

        <h1 class="hero-title animate-fade-up-delay-1">
          Настрой&nbsp;своё здоровье — <br class="hidden lg:inline" />
          <span class="hero-title-accent">построй свой бизнес</span>
        </h1>

        <p class="hero-subtitle animate-fade-up-delay-2">
          Высококачественные витамины, фитопродукты и косметика из США
          — без 40% розничной надбавки по&nbsp;Карте Партнёра.
        </p>

        <div class="hero-actions animate-fade-up-delay-3">
          <a href="#partner" aria-label="Оформить карту партнёра бесплатно">
            <Button :type="'primary'">Оформить карту бесплатно</Button>
          </a>
          <a href="#about" class="hero-secondary-link">
            ↓ Узнать подробнее
          </a>
        </div>

        <p class="hero-helper animate-fade-up-delay-3">
          Оформление и консультация — без оплаты. Нажмите кнопку выше,
          чтобы начать.
        </p>

        <a href="#about" class="hero-scroll-hint" aria-hidden="true">
          <span class="hero-scroll-dot"></span>
        </a>
      </section>
    </div>

    <!-- ABOUT -->
    <section
      id="about"
      v-reveal
      class="section pt-[60px] md:pt-[90px] lg:pt-[110px] xl:pt-[130px]"
    >
      <div class="section-header">
        <span class="section-eyebrow">О компании</span>
        <h2 class="section-title">
          50 лет на службе <span class="text-accent">здоровья</span>
        </h2>
      </div>

      <p class="section-lead mt-[24px] lg:mt-[32px]">
        Nature's Sunshine Products (NSP) — международная компания с
        полувековым опытом производства натуральных продуктов для укрепления
        здоровья и профилактики заболеваний. Это качественные
        фитокомплексы, витамины, минералы, ухаживающая косметика и средства
        гигиены.
      </p>

      <!-- Numbers card -->
      <div class="numbers-card" v-reveal>
        <div class="number-block">
          <span class="number-title">50</span>
          <span class="number-suffix">лет</span>
          <span class="number-caption">на международном рынке</span>
        </div>
        <span class="number-divider"></span>
        <div class="number-block">
          <span class="number-title">70</span>
          <span class="number-suffix">стран</span>
          <span class="number-caption">с представительствами NSP</span>
        </div>
        <span class="number-divider"></span>
        <div class="number-block">
          <span class="number-title">1 200</span>
          <span class="number-suffix">формул</span>
          <span class="number-caption">разработано для здоровья</span>
        </div>
      </div>

      <p class="mt-[28px] lg:mt-[40px] text-grey-dark leading-relaxed">
        Секрет популярности компании — в качестве. Система контроля
        разработана с превышением отраслевых требований на всех этапах: от
        исходного сырья до конечного продукта. Сырьё закупается только из
        экологически чистых регионов мира, тщательно проверяется и
        отвергается при несоответствии стандартам. NSP строго соблюдает
        технологические нормы и выпускает продукцию по высшему стандарту
        качества <span class="font-bold text-green">GMP</span>.
      </p>

      <!-- Showcase -->
      <div class="showcase" v-reveal>
        <img
          class="showcase-base"
          src="~/assets/images/set-of-product.jpg"
          alt="Линейка продукции NSP"
        />
        <img
          class="showcase-badge"
          src="~/assets/images/sales-leader.png"
          alt="Лидер продаж"
        />
        <img
          class="showcase-capsules"
          src="~/assets/images/capsules.png"
          alt=""
        />
      </div>

      <p class="text-grey-dark leading-relaxed">
        Метод прямых продаж — это прямая связь производителя с
        потребителем: убираются посредники, экономятся деньги, повышается
        качество обслуживания. С 1972 года NSP не ушла ни из одной страны,
        где начала бизнес. Компания — открытое акционерное общество, акции
        котируются на бирже NASDAQ.
      </p>
    </section>

    <!-- HOW IT WORKS — 3 steps for elderly clarity -->
    <section
      v-reveal
      class="section mt-[60px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]"
    >
      <div class="section-header">
        <span class="section-eyebrow">Как начать</span>
        <h2 class="section-title">
          Стать партнёром за <span class="text-accent">3 простых шага</span>
        </h2>
        <p class="section-lead mt-[16px]">
          Не нужно никуда ехать и заполнять сложные документы — всё займёт
          несколько минут.
        </p>
      </div>

      <ol class="how-steps">
        <li class="how-step">
          <span class="how-step-num">1</span>
          <div>
            <h3 class="how-step-title">Нажмите «Оформить карту»</h3>
            <p class="how-step-text">
              Ниже на странице есть большая зелёная кнопка
              «Оформить&nbsp;карту». Нажмите на неё — откроется простая
              форма.
            </p>
          </div>
        </li>
        <li class="how-step">
          <span class="how-step-num">2</span>
          <div>
            <h3 class="how-step-title">Заполните анкету</h3>
            <p class="how-step-text">
              Укажите своё имя, телефон и адрес электронной почты. Если что
              непонятно — позвоните нам, мы поможем.
            </p>
          </div>
        </li>
        <li class="how-step">
          <span class="how-step-num">3</span>
          <div>
            <h3 class="how-step-title">Покупайте без наценки</h3>
            <p class="how-step-text">
              Получаете партнёрские цены — на 40% дешевле розницы, кэшбэк
              до&nbsp;30% и бонусы за покупки.
            </p>
          </div>
        </li>
      </ol>

      <div class="how-cta">
        <a href="#partner" aria-label="Перейти к оформлению карты">
          <Button :type="'secondary'">Оформить карту бесплатно</Button>
        </a>
        <span class="how-cta-helper">
          Нужна помощь?
          <a href="tel:+375444720111" class="how-cta-phone">
            Позвоните: +375 444 720 111
          </a>
        </span>
      </div>
    </section>

    <!-- CATALOG TEASER -->
    <section
      v-reveal
      class="section mt-[60px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]"
    >
      <div class="product-card">
        <div class="product-card-text">
          <span class="product-eyebrow">Каталог</span>
          <h2 class="product-title">
            Продукция NSP <br />
            по лучшим ценам
          </h2>

          <ul class="product-props">
            <li class="product-list-item">Усиливает иммунную активность</li>
            <li class="product-list-item">
              Восстанавливает уровень железа в крови
            </li>
            <li class="product-list-item">Не раздражает слизистую ЖКТ</li>
          </ul>

          <a class="product-cta" href="/products" aria-label="Открыть полный каталог продукции">
            <Button :type="'secondary'">Открыть каталог</Button>
          </a>
          <p class="product-helper">→ Нажмите, чтобы увидеть всю продукцию</p>
        </div>

        <div class="product-card-visual">
          <div class="product-glow"></div>
          <img class="product-image" src="~/assets/images/bad.png" alt="" />
        </div>
      </div>
    </section>

    <!-- BUSINESS -->
    <section
      v-reveal
      class="section mt-[60px] md:mt-[90px] lg:mt-[110px] xl:mt-[130px]"
    >
      <div class="section-header">
        <span class="section-eyebrow">Сотрудничество</span>
        <h2 class="section-title">
          Бизнес с <span class="text-accent">NSP</span>
        </h2>
        <p class="section-lead mt-[20px]">
          Философия Nature's Sunshine — забота о здоровье людей в сочетании
          со стабильным бизнесом. Компания предлагает
          <span class="font-bold text-green">3 формата сотрудничества:</span>
        </p>
      </div>

      <div class="steps-grid">
        <article class="step-card" v-reveal>
          <div class="step-head">
            <span class="step-number">01</span>
            <img
              class="step-image"
              src="~/assets/images/buisness-step-1.png"
              alt=""
            />
          </div>
          <h3 class="step-title">Потребительская деятельность</h3>
          <p class="step-description">
            Получите статус партнёра — покупайте продукцию без 40%
            розничной надбавки в сервисных центрах или через службы
            доставки и участвуйте в акциях компании. Постоянные потребители
            получают специальное вознаграждение от компании.
          </p>
        </article>

        <article class="step-card" v-reveal>
          <div class="step-head">
            <span class="step-number">02</span>
            <img
              class="step-image"
              src="~/assets/images/buisness-step-2.png"
              alt=""
            />
          </div>
          <h3 class="step-title">Рекламно-информационная</h3>
          <p class="step-description">
            Рекомендуйте продукцию знакомым и предлагайте им стать
            партнёрами NSP. За покупки приглашённых вами людей и партнёров
            ваших партнёров компания выплачивает комиссионное
            вознаграждение.
          </p>
        </article>

        <article class="step-card" v-reveal>
          <div class="step-head">
            <span class="step-number">03</span>
            <img
              class="step-image"
              src="~/assets/images/buisness-step-3.png"
              alt=""
            />
          </div>
          <h3 class="step-title">Организаторская деятельность</h3>
          <p class="step-description">
            Постройте собственную бизнес-структуру в рамках компании. За
            товарооборот вашей организации NSP платит комиссионное
            вознаграждение согласно
            <a
              class="underline-offset-2 underline hover:text-green-dark transition-colors"
              href="https://naturessunshine.ru/business/career/"
              target="_blank"
              rel="noopener"
              >маркетинг-плану</a
            >.
          </p>
        </article>
      </div>
    </section>

    <!-- PARTNER -->
    <section
      id="partner"
      v-reveal
      class="section mt-[60px] md:mt-[90px] lg:mt-[110px] xl:mt-[130px]"
    >
      <div class="partner-card">
        <div class="partner-card-bg"></div>
        <div class="partner-card-inner">
          <div class="partner-card-text">
            <span class="section-eyebrow">Партнёрская карта</span>
            <h2 class="section-title mt-[8px]">
              Оформите карту партнёра
              <span class="text-accent">бесплатно</span>
            </h2>

            <ul class="partner-list">
              <li class="partner-list-item">
                Покупай продукцию без 40% розничной надбавки
              </li>
              <li class="partner-list-item">
                Получай кэшбэк от 5% до 30%
              </li>
              <li class="partner-list-item">
                Заказывай через интернет-магазины и службы доставки по
                всему миру
              </li>
              <li class="partner-list-item">
                Участвуй в акциях и получай бонусы
              </li>
              <li class="partner-list-item">
                Строй международный бизнес с компанией NSP
              </li>
            </ul>

            <a
              class="partner-button"
              href="https://nsp25.com/signup.php?sid=3551823"
              target="_blank"
              rel="noopener"
              aria-label="Перейти к форме оформления карты партнёра"
            >
              <Button :type="'secondary'">Оформить карту бесплатно</Button>
            </a>

            <ul class="partner-trust">
              <li>✓ Без оплаты</li>
              <li>✓ Занимает 2 минуты</li>
              <li>✓ Бесплатная консультация</li>
            </ul>

            <p class="partner-note">
              Нажмите кнопку — откроется страница регистрации NSP. Если
              нужна помощь, позвоните:
              <a href="tel:+375444720111" class="partner-phone"
                >+375 444 720 111</a
              >
            </p>
          </div>

          <div class="partner-card-visual">
            <div class="partner-glow"></div>
            <img
              class="partner-image"
              src="../assets/images/partner-card.webp"
              alt="Карта партнёра"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACTS -->
    <section
      v-reveal
      class="section mt-[60px] mb-[80px] md:mt-[90px] md:mb-[100px] lg:mt-[110px] lg:mb-[120px]"
    >
      <div class="section-header">
        <span class="section-eyebrow">Контакты</span>
        <h2 class="section-title">Мы всегда на&nbsp;связи</h2>
      </div>

      <div class="contacts-grid">
        <div class="contact-block">
          <span class="contact-label">Мессенджеры и телефон</span>
          <div class="contact-icons">
            <a
              href="https://t.me/+375444720111"
              aria-label="Telegram"
              target="_blank"
              rel="noopener"
              class="contact-icon-link"
            >
              <img src="~/assets/images/telegram.svg" alt="" />
            </a>
            <a
              href="https://wa.me/375444720111"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener"
              class="contact-icon-link"
            >
              <img src="~/assets/images/whatsapp.svg" alt="" />
            </a>
            <a
              href="viber://chat?number=%2B375444720111"
              aria-label="Viber"
              class="contact-icon-link"
            >
              <img src="~/assets/images/viber.svg" alt="" />
            </a>
          </div>
          <a href="tel:+375444720111" class="contact-value">
            + 375 444 720 111
          </a>
        </div>

        <div class="contact-block">
          <span class="contact-label">Электронная почта</span>
          <div class="contact-icons">
            <span class="contact-icon-link contact-icon-static">
              <img src="~/assets/images/mail.svg" alt="" />
            </span>
          </div>
          <a
            href="mailto:worldnsp.info@gmail.com"
            class="contact-value break-all"
          >
            worldnsp.info@gmail.com
          </a>
        </div>
      </div>
    </section>

    <Footer />
    <FloatingCall />
  </div>
</template>

<style scoped>
/* ============ Layout primitives ============ */

.page {
  @apply text-black;
}

.section {
  @apply w-[100%] mx-auto px-[20px] box-border lg:max-w-[1116px] lg:px-[40px];
}

.section-header {
  @apply flex flex-col;
}

.section-eyebrow {
  @apply text-xs md:text-sm uppercase tracking-[0.22em] text-accent font-bold;
}

.section-title {
  @apply mt-[10px] text-[26px] leading-[1.15] font-bold text-green
         md:text-[32px] lg:text-[40px] xl:text-[44px];
}

.section-lead {
  @apply text-grey-dark leading-relaxed max-w-[760px];
}

/* ============ HERO ============ */

.hero {
  @apply relative w-full min-h-[100dvh] overflow-hidden;
}

.hero-bg {
  @apply absolute inset-0 bg-center bg-cover;
}

.hero-overlay {
  @apply absolute inset-0 bg-gradient-hero;
}

/* Локальный scrim — мягкое затемнение точно под текстом, остальная картинка сочная */
.hero-overlay::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse 50% 45% at 26% 50%,
    rgba(8, 40, 28, 0.5) 0%,
    rgba(8, 40, 28, 0.2) 45%,
    transparent 70%
  );
}

@media (max-width: 1023px) {
  .hero-overlay::after {
    background: radial-gradient(
      ellipse 95% 50% at 50% 55%,
      rgba(8, 40, 28, 0.55) 0%,
      rgba(8, 40, 28, 0.2) 55%,
      transparent 80%
    );
  }
}

.hero-content {
  @apply relative z-10 flex flex-col justify-center min-h-[100dvh] py-[120px] gap-[20px] items-center text-center
         lg:items-start lg:text-left lg:py-[160px] lg:gap-[26px];
}

.hero-eyebrow {
  @apply inline-flex items-center text-xs md:text-sm uppercase tracking-[0.28em] font-bold
         px-[18px] py-[8px] rounded-full bg-green-deep/40 backdrop-blur-sm border border-white/30 text-white shadow-soft;
}

.hero-mobile-icon {
  @apply h-[80px] w-[80px] my-[6px];
}

.hero-title {
  @apply text-white font-bold uppercase leading-[1.1] tracking-tight
         text-[28px] max-w-[340px]
         md:text-[36px] md:max-w-[520px]
         lg:text-[48px] lg:max-w-[620px]
         xl:text-[56px] xl:max-w-[680px];
  text-shadow: 0 2px 20px rgba(8, 40, 28, 0.75), 0 1px 3px rgba(0, 0, 0, 0.4);
}

.hero-title-accent {
  @apply text-white;
}

.hero-subtitle {
  @apply text-white leading-relaxed text-[16px] md:text-[17px] lg:text-[19px]
         max-w-[420px] lg:max-w-[520px];
  text-shadow: 0 2px 12px rgba(10, 53, 38, 0.6), 0 1px 2px rgba(0, 0, 0, 0.25);
}

.hero-actions {
  @apply mt-[8px] flex flex-col items-center gap-[16px] lg:flex-row lg:items-center lg:gap-[24px];
}

.hero-secondary-link {
  @apply text-base md:text-lg text-white/85 underline underline-offset-[6px] decoration-white/40
         transition-colors duration-300 hover:text-white hover:decoration-white;
}

.hero-helper {
  @apply mt-[6px] text-sm md:text-base text-white/90 max-w-[420px]
         text-center lg:text-left;
  text-shadow: 0 1px 8px rgba(10, 53, 38, 0.55);
}

.hero-scroll-hint {
  @apply hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-[36px]
         w-[24px] h-[40px] rounded-full border-2 border-white/40 items-start justify-center pt-[6px];
}

.hero-scroll-dot {
  @apply block w-[4px] h-[8px] rounded-full bg-white/80 animate-float;
}

/* ============ NUMBERS ============ */

.numbers-card {
  @apply relative mt-[28px] rounded-[20px] overflow-hidden bg-gradient-mint
         shadow-card border border-light-green
         flex flex-col items-stretch
         lg:flex-row lg:items-stretch lg:justify-between
         px-[24px] py-[28px] lg:px-[56px] lg:py-[44px] gap-[24px] lg:gap-[16px];
}

.number-block {
  @apply flex flex-col items-start gap-[4px] py-[8px];
}

.number-title {
  @apply text-[72px] lg:text-[104px] xl:text-[120px] font-bold text-green leading-[0.95] tabular-nums tracking-tight;
}

.number-suffix {
  @apply text-base lg:text-lg font-bold text-green-dark uppercase tracking-wider mt-[4px];
}

.number-caption {
  @apply text-sm text-grey-dark leading-snug max-w-[200px];
}

.number-divider {
  @apply hidden lg:block w-px self-stretch bg-green/15;
}

/* ============ SHOWCASE ============ */

.showcase {
  @apply relative flex justify-center items-center mx-auto my-[32px] md:my-[56px] lg:my-[80px];
}

.showcase-base {
  @apply w-[445px] md:w-[636px] lg:w-[803px] drop-shadow-[0_20px_30px_rgba(23,108,77,0.18)];
}

.showcase-badge {
  @apply w-[120px] md:w-[200px] lg:w-[260px] absolute top-[-10%] right-[20%] lg:right-[28%]
         animate-float drop-shadow-[0_8px_16px_rgba(212,165,116,0.4)];
}

.showcase-capsules {
  @apply w-[80px] md:w-[120px] lg:w-[160px] absolute bottom-[-5%] right-[36%];
}

/* ============ HOW STEPS (elderly-friendly) ============ */

.how-steps {
  @apply mt-[36px] grid grid-cols-1 gap-[16px] lg:grid-cols-3 lg:gap-[20px] list-none p-0;
}

.how-step {
  @apply relative flex items-start gap-[20px] p-[24px] lg:p-[28px]
         bg-white border border-grey-light rounded-[20px] shadow-card
         transition-all duration-300;
}

.how-step:hover {
  @apply border-green/50 shadow-lift -translate-y-[2px];
}

.how-step-num {
  @apply flex-shrink-0 inline-flex items-center justify-center
         w-[56px] h-[56px] lg:w-[64px] lg:h-[64px]
         rounded-full bg-green text-white text-[28px] lg:text-[32px]
         font-bold leading-none shadow-soft;
}

.how-step-title {
  @apply text-lg lg:text-xl font-bold text-green leading-tight mb-[6px];
}

.how-step-text {
  @apply text-base text-grey-dark leading-relaxed;
}

.how-cta {
  @apply mt-[32px] flex flex-col items-center gap-[14px]
         lg:flex-row lg:justify-center lg:gap-[28px] text-center;
}

.how-cta-helper {
  @apply text-base text-grey-dark;
}

.how-cta-phone {
  @apply font-bold text-green hover:text-green-dark underline underline-offset-4
         transition-colors duration-300;
}

.product-helper {
  @apply mt-[14px] text-sm text-grey-dark;
}

/* ============ CATALOG TEASER ============ */

.product-card {
  @apply relative bg-white border border-grey-light rounded-[24px] overflow-hidden
         px-[24px] py-[36px] md:px-[40px] md:py-[48px] lg:px-[64px] lg:py-[64px]
         flex flex-col lg:flex-row lg:items-center lg:gap-[40px]
         shadow-card transition-all duration-500;
}

.product-card:hover {
  @apply shadow-lift -translate-y-[2px];
}

.product-card-text {
  @apply flex-1 max-w-[440px];
}

.product-eyebrow {
  @apply text-xs uppercase tracking-[0.22em] text-accent font-bold;
}

.product-title {
  @apply mt-[10px] text-[22px] md:text-[26px] lg:text-[32px] font-bold text-green leading-tight;
}

.product-props {
  @apply mt-[24px] flex flex-col gap-[14px] list-none;
}

.product-list-item {
  @apply relative pl-[34px] leading-snug text-grey-dark;
}

.product-list-item::before {
  content: "";
  background-image: url("../assets/images/list-item-icon.svg");
  background-repeat: no-repeat;
  position: absolute;
  width: 22px;
  height: 22px;
  top: 0;
  left: 0;
}

.product-cta {
  @apply inline-block mt-[28px];
}

.product-card-visual {
  @apply relative flex justify-center items-center mt-[24px] lg:mt-0;
}

.product-glow {
  @apply absolute w-[260px] h-[260px] lg:w-[340px] lg:h-[340px] rounded-full blur-3xl bg-green/15 -z-0;
}

.product-image {
  @apply relative z-10 h-[160px] md:h-[220px] lg:h-[280px] object-contain
         transition-transform duration-500 ease-out-soft;
}

.product-card:hover .product-image {
  transform: translateY(-6px) rotate(-2deg);
}

/* ============ STEPS ============ */

.steps-grid {
  @apply mt-[40px] grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[24px];
}

.step-card {
  @apply relative bg-white border border-grey-light rounded-[20px]
         p-[24px] lg:p-[28px] shadow-card transition-all duration-500 ease-out-soft;
}

.step-card:hover {
  @apply shadow-lift -translate-y-[4px] border-green/50;
}

.step-head {
  @apply flex items-start justify-between mb-[16px];
}

.step-number {
  @apply text-green/70 text-[44px] lg:text-[56px] font-bold leading-none tabular-nums;
}

.step-image {
  @apply h-[80px] lg:h-[100px] object-contain opacity-90 transition-transform duration-500;
}

.step-card:hover .step-image {
  transform: scale(1.06);
}

.step-title {
  @apply text-lg lg:text-xl font-bold text-green leading-tight uppercase tracking-wide;
}

.step-description {
  @apply mt-[12px] text-grey-dark leading-relaxed;
}

/* ============ PARTNER ============ */

.partner-card {
  @apply relative rounded-[28px] overflow-hidden shadow-card border border-light-green;
}

.partner-card-bg {
  @apply absolute inset-0 bg-gradient-mint;
}
.partner-card-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle at top right,
    rgba(212, 165, 116, 0.18) 0%,
    transparent 50%
  );
}

.partner-card-inner {
  @apply relative px-[24px] py-[36px] md:px-[44px] md:py-[48px] lg:px-[60px] lg:py-[64px]
         flex flex-col-reverse gap-[32px] lg:flex-row lg:items-center lg:justify-between lg:gap-[48px];
}

.partner-card-text {
  @apply flex-1 max-w-[520px];
}

.partner-list {
  @apply mt-[24px] flex flex-col gap-[12px] list-none;
}

.partner-list-item {
  @apply relative pl-[34px] text-grey-dark leading-snug;
}

.partner-list-item::before {
  content: "";
  background-image: url("../assets/images/list-item-icon.svg");
  background-repeat: no-repeat;
  position: absolute;
  width: 22px;
  height: 22px;
  top: 0;
  left: 0;
}

.partner-button {
  @apply inline-block mt-[28px];
}

.partner-trust {
  @apply mt-[20px] flex flex-wrap gap-x-[20px] gap-y-[8px] text-base text-green-dark font-bold list-none p-0;
}

.partner-note {
  @apply mt-[16px] text-base text-grey-dark leading-relaxed max-w-[480px];
}

.partner-phone {
  @apply font-bold text-green hover:text-green-dark underline underline-offset-4 whitespace-nowrap;
}

.partner-card-visual {
  @apply relative flex justify-center items-center;
}

.partner-glow {
  @apply absolute w-[260px] h-[260px] lg:w-[340px] lg:h-[340px] rounded-full blur-3xl bg-accent/20;
}

.partner-image {
  @apply relative z-10 w-[100%] max-w-[300px] lg:max-w-[340px]
         drop-shadow-[0_18px_28px_rgba(23,108,77,0.18)]
         transition-transform duration-500 ease-out-soft;
}

.partner-card:hover .partner-image {
  transform: rotate(-3deg) translateY(-4px);
}

/* ============ CONTACTS ============ */

.contacts-grid {
  @apply mt-[28px] grid grid-cols-1 sm:grid-cols-2 gap-[16px] lg:gap-[20px];
}

.contact-block {
  @apply flex flex-col items-center text-center
         px-[24px] py-[36px] md:px-[28px] md:py-[44px] lg:px-[40px] lg:py-[56px]
         rounded-[20px] bg-white border border-grey-light shadow-card
         transition-all duration-500 ease-out-soft;
}

.contact-block:hover {
  @apply shadow-lift -translate-y-[3px] border-green/50;
}

.contact-label {
  @apply text-xs uppercase tracking-[0.22em] text-grey font-medium;
}

.contact-icons {
  @apply mt-[20px] flex items-center justify-center gap-[14px];
}

.contact-icon-link {
  @apply inline-flex items-center justify-center w-[52px] h-[52px] rounded-full
         bg-light-green text-green
         transition-all duration-300 ease-out-soft
         hover:bg-green hover:-translate-y-[2px] shadow-soft;
}

.contact-icon-link img {
  @apply h-[24px] w-[24px] transition-all duration-300;
}

.contact-icon-link:hover img {
  filter: brightness(0) invert(1);
}

.contact-icon-static {
  @apply pointer-events-none;
}

.contact-icon-static:hover {
  @apply bg-light-green translate-y-0;
}

.contact-icon-static:hover img {
  filter: none;
}

.contact-value {
  @apply mt-[22px] text-lg lg:text-xl font-bold text-green-dark transition-colors duration-300 hover:text-green;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "indexPage",
  head() {
    return {
      title: "NSP - сайт независимого дистрибьютора компании",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "НСП (NSP) в Мире Здоровья. Витамины и добавки без 40% розничной торговой надбавки по Карте Партнёра (оформление и консультация без оплаты). Профессиональная линейка продукции, высокое качество. Официальные поставки из США по всему миру, без посредников.",
        },
      ],
    };
  },
});
</script>
