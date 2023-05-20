<template>
  <div class="text-sm md:text-base lg:text-lg">
    <div
      class="h-screen w-full bg-[url('~/assets/images/bg-mobile.jpg')] lg:bg-[url('~/assets/images/bg.jpg')] bg-center bg-cover"
    >
      <div class="relative h-[100%] grid grid-rows-[auto_1fr]">
        <Header :isTransparent="true" />

        <section
          class="section flex flex-col justify-center items-center h-screen space-y-[30px] relative bottom-[80px] md:bottom-[90px] lg:bottom-[110px] lg:justify-center lg:items-start lg:space-y-[50px]"
        >
          <img
            class="visible h-[92px] w-[92px] lg:invisible lg:h-0"
            src="~/assets/images/logo-icon.svg"
          />

          <h1
            class="text-[20px] text-center text-white uppercase leading-[1.2] w-[290px] md:text-[24px] md:w-[420px] md:leading-[1.1] lg:text-[34px] lg:text-left lg:w-[420px] lg:leading-[1.1] xl:w-[420px] xl:text-left xl:text-5xl xl:leading-[1.1]"
          >
            Настрой своё здоровье - построй свой бизнес
          </h1>

          <a href="#about">
            <Button :type="'primary'">Подробнее</Button>
          </a>
        </section>
      </div>
    </div>

    <section
      id="about"
      class="section mt-[40px] md:mt-[80px] lg:mt-[90px] xl:mt-[100px]"
    >
      <h2 class="section-title">О компании</h2>
      <p class="mt-[20px] xl:mt-[40px]">
        Nature’s Sunshine Products(NSP) — международная компания с 50-ти летним
        опытом в производстве натуральных продуктов для укрепления здоровья,
        профилактики заболеваний и оздоровления организма в целом. Это
        высококачественные, экологически чистые фитопродукты и фитокомплексы,
        витамины, минералы и витаминно-минеральные комплексы, ухаживающая
        косметика и средства гигиены.
      </p>

      <p class="mt-[20px] xl:mt-[40px]">Об NSP в цифрах:</p>

      <div class="numbers-card">
        <div class="number-block">
          <span class="number-title">50</span>
          <span
            >лет компания <br />
            действует на рынке</span
          >
        </div>

        <div class="number-block">
          <span class="number-title">70</span>
          <span
            >стран имеют <br />
            представительства <br />
            NSP</span
          >
        </div>

        <div class="number-block">
          <span class="number-title">1 200</span>
          <span>
            уникальных формул продуктов <br />
            разработано NSP для здоровья
          </span>
        </div>
      </div>

      <p class="mt-[25px] lg:mt-[44px]">
        Секрет популярности компании на мировом рынке кроется в качестве
        выпускаемой продукции. Система контроля качества разработана с
        превышением уровня отраслевых требований к качеству на всех этапах – от
        исходного сырья до конечного продукта. Сырьё для выпускаемой продукции
        закупается только из экологически чистых регионов мира, в которых сама
        природа благоприятствует произрастанию данных видов, тщательно
        проверяется и если выявляется несоответствие стандартам качества
        компании, оно отвергается. Nature’s Sunshine Products строго соблюдает
        технологические нормы и правила стандартов производства и выпускает
        продукцию для здоровья по самому высокому стандарту качества GMP.
      </p>

      <div
        class="relative flex justify-center items-center mx-auto my-[20px] md:my-[40px] lg:my-[70px]"
      >
        <img
          class="w-[445px] md:w-[636px] lg:w-[803px]"
          src="~/assets/images/set-of-product.jpg"
        />
        <img
          class="w-[120px] md:w-[240px] lg:w-[300px] absolute top-[-10%] right-[30%]"
          src="~/assets/images/sales-leader.png"
        />
        <img
          class="w-[80px] md:w-[120px] lg:w-[160px] absolute bottom-[-5%] right-[40%]"
          src="~/assets/images/capsules.png"
        />
      </div>

      <p>
        Ещё одно преимущество компании Nature’s Sunshine Products – эффективный
        сервис. Метод прямых продаж – это прямая связь производителя с
        потребителем, которая коренным образом меняет модель покупки. Вся
        продукция продаётся через специализированные сервисные центры и
        собственные службы доставки. Убираются посредники, экономятся деньги,
        повышаются сервис и качество обслуживания. В результате NSP предлагает
        свою продукцию по доступной цене и спрос на нее постоянно растет, что
        подтверждают миллионы довольных потребителей во всем мире. Честность и
        надежность компании проверена временем. С 1972 года NSP не ушла ни из
        одной страны, где начала свой бизнес и с каждым годом только добавляются
        новые. Компания является открытым акционерным обществом, акции имеют
        высокие котировки на бирже NASDAQ. И что ещё важно, NSP справедливо и
        вовремя вознаграждает усилия каждого партнера.
      </p>
    </section>

    <section class="section mt-[30px] md:mt-[40px] lg:mt-[45px] xl:mt-[45px]">
      <div class="product-card">
        <h2 class="section-title product-title">
          Каталог продукции NSP по лучшим ценам
        </h2>

        <div class="product">
          <img class="product-image" src="~/assets/images/bad.png" />
          <ul class="product-props">
            <li class="product-list-item">усиливает имунную активность</li>
            <li class="product-list-item">
              восстанавливает уровень железа в крови
            </li>
            <li class="product-list-item">не раздражает слизистую ЖКТ</li>
          </ul>
        </div>

        <a class="product-button" href="/products">
          <Button :type="'secondary'"> Посмотреть </Button>
        </a>
      </div>
    </section>

    <section class="section mt-[40px] lg:mt-[90px] xl:mt-[100px]">
      <h2 class="section-title">Бизнес с NSP</h2>

      <p class="mt-[20px]">
        Философия Nature’s Sunshine — это забота о здоровье людей в сочетании с
        возможностью стабильного бизнеса. Компания Nature’s Sunshine Products
        предлагает <span class="font-bold">3 вида сотрудничества:</span>
      </p>

      <div
        class="flex flex-col space-y-[30px] mt-[20px] lg:flex-row lg:justify-start lg:items-stretch lg:space-y-0 lg:space-x-[24px] lg:mt-[60px]"
      >
        <div class="step-card">
          <span class="step-number">1</span>
          <h3 class="step-title">Потребительская деятельность</h3>
          <p class="step-description">
            Человек, заключивший партнерское соглашение с NSP, получает статус
            партнера. Он имеет право приобретать продукцию без 40% розничной
            надбавки, покупая ее в наших специализированных сервисных центрах
            или через службы доставки, а так же участвовать в акциях компании.
            Потребитель приобретает только ту продукцию и только тогда, когда он
            в ней нуждается. Столько, сколько ему нужно. Кроме того, постоянные
            потребители получают специальное вознаграждение от компании.
          </p>
          <img class="step-image" src="~/assets/images/buisness-step-1.png" />
        </div>

        <div class="step-card">
          <span class="step-number">2</span>
          <h3 class="step-title">Рекламно - информационная деятельность</h3>
          <p class="step-description">
            Партнер может рекомендовать продукцию компании своим знакомым и
            незнакомым людям. В данном случае можно предложить человеку
            заключить соглашение с компанией и этим дать возможность
            пользоваться всеми преимуществами партнера NSP. При этом за покупки,
            которые делают пригашенные лично Вами люди и партнеры Ваших людей,
            компания выплачивает Вам комиссионное вознаграждение. Или предложить
            продукцию по розничной цене (эта деятельность себя не совсем
            оправдывает).
          </p>
          <img class="step-image" src="~/assets/images/buisness-step-2.png" />
        </div>

        <div class="step-card">
          <span class="step-number">3</span>
          <h3 class="step-title">Организаторская деятельность</h3>
          <p class="step-description">
            Это построение своей коммерческой бизнес-структуры в рамках
            компании. Вы привлекаете в этот бизнес людей, которые заинтересованы
            быть либо просто потребителями продукции, либо заниматься
            рекламно-информационной деятельностью, либо также строить свою
            структуру. И обучаете их. И за товарооборот всей Вашей структуры,
            постоянно растущей организации, NSP платит Вам комиссионное
            вознаграждение в соответствии с
            <a
              class="underline hover:text-green hover:underline"
              href="https://naturessunshine.ru/business/career/"
              target="_blank"
            >
              маркетинг-планом </a
            >, существующим в компании.
          </p>
          <img class="step-image" src="~/assets/images/buisness-step-3.png" />
        </div>
      </div>
    </section>

    <section class="section mt-[70px] lg:mt-[100px]">
      <h2 class="section-title">Оформи карту партнера бесплатно</h2>

      <div class="partner-card">
        <div
          class="flex flex-col-reverse justify-center items-center lg:flex-row"
        >
          <ul class="partner-list">
            <li class="partner-list-item">
              покупай продукцию компании по партнерским ценам, без 40% розничной
              торговой надбавки
            </li>
            <li class="partner-list-item">получай кэшбэк от 5% до 30%</li>
            <li class="partner-list-item">
              заказывай продукцию через интернет-магазины и службы
              интернет-доставки компании по всему миру
            </li>
            <li class="partner-list-item">
              участвуй в акциях и получай бонусы
            </li>
            <li class="partner-list-item">
              участвуй в Партнерской программе NSP
            </li>
            <li class="partner-list-item">
              построй свой Международный бизнес с компанией NSP
            </li>
          </ul>

          <img
            class="partner-image"
            src="../assets/images/partner-card.webp"
            alt="Карта партнера"
          />
        </div>

        <a
          class="partner-button"
          href="https://nsp25.com/signup.php?sid=3551823"
          target="_blank"
        >
          <Button :type="'secondary'">Оформить</Button>
        </a>
      </div>
    </section>

    <section
      class="section mt-[50px] mb-[80px] md:mt-[80px] md:mb-[90px] lg:mt-[90 px]"
    >
      <h2 class="section-title">Мы всегда на связи</h2>

      <div
        class="mt-[20px] flex flex-col justify-center items-start space-y-[10px] sm:flex-row sm:space-y-0 sm:space-x-[20px] md:mt-[40px] lg:mt-[60px] xl:mt-[80px]"
      >
        <div class="contact-block">
          <div class="flex justify-center items-start space-x-[20px]">
            <a
              href="https://t.me/+375444720111"
              aria-label="Telegram"
              target="_blank"
            >
              <img src="~/assets/images/telegram.svg" class="contact-image" />
            </a>

            <a
              href="https://wa.me/375444720111"
              aria-label="Whats App"
              target="_blank"
            >
              <img src="~/assets/images/whatsapp.svg" class="contact-image" />
            </a>

            <a
              href="viber://chat?number=%2B375444720111"
              aria-label="Viber"
              target="_blank"
            >
              <img src="~/assets/images/viber.svg" class="contact-image" />
            </a>
          </div>

          <a
            href="tel:+375444720111"
            class="mt-[14px] hover:text-green hover:underline"
          >
            + 375 444 720 111
          </a>
        </div>

        <div class="contact-block">
          <img src="~/assets/images/mail.svg" class="contact-image" />
          <a
            href="mailto:worldnsp.info@gmail.com"
            class="mt-[14px] hover:text-green hover:underline"
          >
            worldnsp.info@gmail.com
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
/* Common */

.section {
  @apply w-[100%] mx-auto px-[20px] box-border lg:max-w-[1116px];
}

.section-title {
  @apply text-[20px] text-green uppercase font-bold lg:text-[24px] xl:text-[30px];
}

/* Section About */

.numbers-card {
  @apply bg-light-green mt-[20px] flex flex-col-reverse justify-center items-start rounded-md md:mt-[30px] lg:flex-row lg:justify-between lg:items-start lg:py-10 lg:px-20 xl:mt-[40px];
}
.number-block {
  @apply flex flex-col w-fit py-[25px] px-[16px];
}

.number-title {
  @apply text-[96px] font-bold text-green leading-none lg:text-[140px];
}

/* Go to catalog */

.product-card {
  @apply py-[36px] px-[20px] bg-light-green flex flex-wrap flex-col justify-start items-center md:h-[300px] md:p-[40px] md:items-start lg:px-[100px] lg:py-[70px] lg:h-[440px] lg:items-start;
}

.product-title {
  @apply order-1 md:order-1 md:w-[240px] lg:order-1 lg:w-[290px];
}

.product {
  @apply flex justify-start items-center mt-[40px] order-2 md:mt-0 md:order-3 lg:order-3 lg:mt-0 lg:ml-[90px] lg:my-auto;
}

.product-image {
  @apply h-[140px] translate-x-[30%] md:h-[200px] lg:h-[260px];
}

.product-props {
  @apply ml-[30px] list-none space-y-[20px];
}

.product-list-item {
  @apply leading-none w-[150px] relative;
}

.product-list-item::before {
  content: "";
  background-image: url("../assets/images/list-item-icon.svg");
  background-repeat: no-repeat;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: -24px;
}

.product-button {
  @apply order-3 mt-[40px] md:order-2 md:mt-[70px] lg:order-2 lg:mt-[120px];
}

/* Section buisness */

.step-card {
  @apply bg-light-green drop-shadow-md p-[16px] pb-[52px] box-border rounded-md flex flex-row flex-wrap justify-start items-end relative lg:p-[30px] lg:flex-col lg:items-start;
}

.step-number {
  @apply text-green text-[96px] leading-none font-bold lg:absolute lg:translate-y-[-80px];
}

.step-title {
  @apply text-lg uppercase font-bold text-green ml-[30px] w-[180px] lg:text-xl lg:m-0 lg:mt-[30px];
}

.step-description {
  @apply mt-[20px] lg:mt-[25px];
}

.step-image {
  @apply absolute bottom-[-20px] right-[20px];
}

/* Parnter card */

.partner-card {
  @apply bg-light-green px-[16px] py-[30px] flex flex-col mt-[20px] lg:p-[50px];
}

.partner-list {
  @apply ml-[24px] list-none;
}

.partner-list-item {
  @apply relative mt-[10px];
}

.partner-list-item::before {
  content: "";
  background-image: url("../assets/images/list-item-icon.svg");
  background-repeat: no-repeat;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: -24px;
}

.partner-image {
  @apply w-[100%] max-w-[360px] sm:w-[325px] lg:w-[325px];
}

.partner-button {
  @apply mt-[36px] text-center;
}

/* Contact */

.contact-block {
  @apply flex flex-col justify-start items-center w-[100%] border-grey border rounded-[4px] px-[40px] py-[38px] md:px-[30px] md:py-[60px] lg:px-[45px] lg:py-[80px] xl:px-[56px] xl:py-[100px];
}

.contact-image {
  @apply h-[36px] md:h-[40px] lg:h-[50px] xl:h-[60px];
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "indexPage",
});
</script>
