<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
// import { userStore } from "@/store/user";
import { passportStore } from "@/store/passport";
import { coinStore } from "@/store/coin";
import { modalStore } from "@/store/modal";

import Spinner from "@/components/Spinner.vue";
import TakeVpnButton from "@/components/TakeVpnButton.vue";
import CoinButton from "@/components/CoinButton.vue";
import Modal from "@/components/Modal.vue";

import Home from "@/components/icons/Home.vue";
import SKakDollar from "@/components/icons/SKakDollar.vue";
import Help from "@/components/icons/Help.vue";
import Alert from "@/components/icons/Alert.vue";
import ActionButton from "@/components/ActionButton.vue";
import Tabs from "@/components/Tabs.vue";
import ToggleSwitch from "@/components/ToggleSwitch.vue";

import GoBackButton from "@/components/GoBackButton.vue";

import VueSelect from "vue3-select-component";
const selected = ref("");

const router = useRouter();
let counter;

const isLoaded = ref(false);
const isError = ref(false);

const tgUserId = passportStore().getTgUserId;

///////////////////////////////////////////////////////////////////////////////////////

const root = document.querySelector("#app");
const showModal = ref(false);

// const modalData = {
//   title: "Оплата тарифа",
//   text: '<p>Стань важной частью нашего сервиса, подпишись на закрытое комьюнити <span class="colored">TAKE</span> 🫶</p>',
//   hasButton: true,
//   buttonText: "Выполнить задание 🌟",
//   callback: () => {
//     justTakeNetwork();
//   },
// };

function toggleModal() {
  // modalStore().setModalData(data);
  showModal.value = !showModal.value;
  root.classList.toggle("blurred");
}

// function justTakeNetwork() {
//   console.log("justTakeNetwork");
//   userStore().chekUserSubscription();
//   if (userStore().getUserSubscription === true) {
//     showModal.value = !showModal.value;
//     root.classList.remove("blurred");
//   } else {
//     window.location.href = "https://t.me/+Yo3ifqMOxhg1MDc6";
//     root.classList.remove("blurred");
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////

// 1) Ракета появляется в течении 5 минут после запуска игры и далее повторяется каждые 5 минут.
// 2) Начисления монет возрастают с каждый новым бустером. Первый бустер +2, второй +3 и тд
// 3) При клиrе на бустер (ракета) запускается эвент в течении 1 минуты с доп начислениями и в этот момент появляется таймер +2

let coinValue = ref(1);
let tempCoinValue = ref(1);
let timer = ref(11);
let timerIsVisible = ref(false);
let roketIsVisible = ref(false);
let roketAnimation = ref(false);
let starIsVisible = ref(false);

// запускаем ивент
// function startEvent() {
//   console.log("startEvent");
//   if (userStore().getUserSubscription === true) {
//     roketIsVisible.value = true;
//     timerIsVisible.value = true;
//     countdown();
//   } else {
//     starIsVisible.value = true;
//   }
//   // setTimeout(() => {
//   //   if(timerIsVisible.value === false) {
//   //     roketIsVisible.value = false
//   //   }
//   // }, 0.5 * 1000 * 60);
// }
// function reStartEvent() {
//   timer.value = 10;
//   timerIsVisible.value = false;
//   roketIsVisible.value = false;
//   roketAnimation.value = false;

//   coinValue.value = 1;
//   tempCoinValue.value = tempCoinValue.value + 1;
//   setTimeout(startEvent, 1000 * 60);
// }
// function getRocket() {
//   if (userStore().getUserSubscription === true) {
//     roketAnimation.value = true;
//     coinValue.value = coinValue.value + tempCoinValue.value;
//   } else {
//     toggleModal(modalData);
//   }
// }

// function countdown() {
//   timer.value--;

//   if (timer.value > 0) {
//     setTimeout(countdown, 1000);
//   } else {
//     reStartEvent();
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////

// async function checkubscription() {
//   console.log(">>>");
//   const subscribed = await userStore().chekUserSubscription();
//   if (!subscribed) {
//     setTimeout(checkubscription, 1000);
//   }
// }

onMounted(async () => {
  // await userStore().userData(tgUserId);
  // isLoaded.value = userStore().isLoaded;
  // isError.value = userStore().isError;
  // coinStore().calculateLimit();
  /// рандом запуска от 2 до 3 минут
  // const min = 1
  // const max = 60000;
  // var rand = Math.floor(Math.random() * (max - min + 1) + min);
  // console.log('startEvent in',rand, 'minutes')
  // setTimeout(startEvent, 60000);
  // setTimeout(async () => {
  //   const subscribed = await userStore().chekUserSubscription();
  //   if (!subscribed) {
  //     toggleModal(modalData);
  //     checkubscription();
  //   }
  // }, 5000);
});

// function checkIsError() {
//   if (isError.value === true) {
//     counter = setInterval(async () => {
//       await userStore().userData(tgUserId);
//     }, 1000);
//   } else {
//     clearInterval(counter);
//   }
// }

function handleCoin(value) {
  if (userStore().getUserSubscription === true) {
    coinStore().incrementCoinsValue(value);
    coinStore().decrementLimitValue();
  }
}

function goToFaq() {
  window.location.href =
    "https://takecoin.notion.site/Takecoin-f971d96521da4247866d199f40f3acd7";
}

function numberWithSpaces(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const tabs = [
  { title: "Take Free", slotName: "tab1" },
  { title: "Take Premium", slotName: "tab2" },
];

const switchValue = ref(true);
</script>

<template>
  <section>
    <GoBackButton />

    <div class="ref-block">
      <div class="caption">Реферальная программа</div>
      <div class="title large white">100₽ вам, 100₽ другу!</div>
      <div class="description">начисления идут в игровой валюте TakeCoin</div>
    </div>

    <div class="content-wrapper">
      <div class="block-wrapper">
        <div class="content-block">
          <div class="block-title">Приглашено друзей</div>
          <div class="block-content" style="justify-content: center">
            <div class="large white">1</div>
            &nbsp;
            <div class="take-coin" style="width: 20px; height: 20px"></div>
          </div>
        </div>
        <div class="content-block">
          <div class="block-title">
            Заработно бонусов с приглашенных друзей в ВПН
          </div>
          <div class="block-content" style="justify-content: center">
            <div class="large white">150</div>
            &nbsp;
            <div class="take-coin" style="width: 20px; height: 20px"></div>
          </div>
        </div>
      </div>
      <div class="content-block">
        <div class="block-title">Доступно бонусов</div>
        <div class="block-content" style="justify-content: center">
          <div class="large white">150</div>
          &nbsp;
          <div class="take-coin" style="width: 20px; height: 20px"></div>
        </div>
      </div>
      <div class="content-block">
        <div class="block-title">Ссылка для друга</div>
        <div class="block-content">
          <div class="text">https://исходная_ссылка.ru</div>
          <div class="copy-icon"></div>
        </div>
      </div>

      <div class="content-block slider-wrapper">
        <div class="block-title">Как работает реферальная программа?</div>
        <div class="slider">
          <div class="content-block slider-content">
            <div class="num">1</div>
            <div class="block-title">Поделитесь своей реферальной ссылкой</div>
            <div class="block-content">
              Скопируйте реферальную ссылку в вашем профиле. Отправьте её
              друзьям или нажмите кнопку "Пригласить друга", чтобы поделиться
              напрямую.
            </div>
          </div>
          <div class="content-block slider-content">
            <div class="num">2</div>
            <div class="block-title">Ваши друзья получат бонусы</div>
            <div class="block-content">
              При регистрации по вашей ссылке друзья сразу получат бонус в
              размере 100 ₽ на свой аккаунт.
            </div>
          </div>
          <div class="content-block slider-content">
            <div class="num">3</div>
            <div class="block-title">Получайте бонусы за приглашение</div>
            <div class="block-content">
              После того как ваши друзья активируют аккаунт и совершат первую
              покупку, вы получите вознаграждение на свой счёт.
            </div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="block-title">Дополнительные бонусы</div>
        <div class="block-content col">
          <div class="f-item">
            <div class="title">Подписаться на наш Telegram</div>
            <div class="large white" style="margin-left: auto">150</div>
            &nbsp;
            <div class="take-coin" style="width: 20px; height: 20px"></div>
          </div>
          <div class="hdivider"></div>
          <div class="f-item" style="justify-content: space-between">
            <div class="title">Пригласить 10 друзей</div>
            <div class="large white" style="margin-left: auto" s>150</div>
            &nbsp;
            <div class="take-coin" style="width: 20px; height: 20px"></div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="extermal-link">Политика конфиденциальности</div>
      </div>
    </div>

    <div class="navigation-wrapper">
      <div class="navigation">
        <div class="item active" @click="router.push({ path: '/' })">
          <home />
          <div class="title">Главная</div>
        </div>
        <!-- @click="router.push({ path: '/friends' })" -->
        <div class="item" @click="router.push({ path: '/coins' })">
          <s-kak-dollar />
          <div class="title">TakeCoin</div>
        </div>
        <div class="item">
          <help />
          <div class="title">Поддержка</div>
        </div>
      </div>
    </div>
  </section>
  <Modal :show="showModal" @close="toggleModal" />
</template>

<style scoped lang="scss">
section {
  @include flex(column, flex-start, center);
  width: 100%;
  max-width: 425px;
  min-height: 100%;
  height: 100%;
  padding: 10px 18px 35px;
  background: #131416;
  gap: 15px;
  position: relative;
  z-index: 2;
  overflow-y: auto !important;
  margin: 0 auto;

  .ref-block {
    @include flex(column, center, center);
    width: 100%;
    gap: 5px;
    margin-bottom: 10px;
    .caption {
      @include font-style($font-size: 12px, $font-weight: 500, $color: #89898a);
    }
    .description {
      @include font-style($font-size: 8px, $font-weight: 500, $color: #89898a);
    }
  }

  .large {
    @include font-style($font-size: 20px, $font-weight: 700);
  }
  .white {
    color: #fff;
  }

  .content-wrapper {
    @include flex(column, flex-start, flex-start);
    width: 100%;
    gap: 15px;
    .block-wrapper {
      @include flex(row, space-between, flex-end);
      width: 100%;
      gap: 5px;
      & > .content-block {
        width: 50%;
      }
    }
    .content-block {
      @include flex(column, flex-start, flex-start);
      width: 100%;
      gap: 5px;
      .extermal-link {
        @include font-style(
          $font-size: 12px,
          $font-weight: 500,
          $color: #89898a
        );
        text-decoration: underline;
        &:hover {
          cursor: pointer;
          text-decoration: none;
        }
      }
      .block-title {
        @include font-style(
          $font-size: 12px,
          $font-weight: 500,
          $color: #89898a
        );
      }
      .block-content {
        @include flex(row, space-between, center);
        width: 100%;
        background: #1f2025;
        border-radius: 17px;
        padding: 10px 15px;
        min-height: 67px;
        gap: 10px;
        .text {
          @include font-style(
            $font-size: 20px,
            $font-weight: 500,
            $color: #fff
          );
        }
        &.clear {
          background: none;
          padding: 10px 0;
        }
        &.col {
          flex-direction: column;
          align-items: flex-start;
        }
        .f-item {
          @include flex(row, space-between, center);
          width: 100%;
          .title {
            @include font-style(
              $font-size: 14px,
              $font-weight: 500,
              $color: #fff
            );
          }
        }
        .hdivider {
          width: 100%;
          height: 1px;
          background: #5b5c60;
          margin: 10px 0;
        }
        &.tab-content {
          background: none;
        }

        :deep(.vue-select) {
          width: 100%;
          background: #1f2025;
          border-radius: 17px;
          padding: 10px 15px;
        }
        :deep(.vue-select .control) {
          width: 100%;
          background: #1f2025;
          border-radius: 17px;
          padding: 10px 15px;
        }
        .content-title {
          @include font-style(
            $font-size: 16px,
            $font-weight: 500,
            $color: #fff
          );
        }
        .additional {
          @include flex(column, flex-start, flex-start);
          @include font-style(
            $font-size: 12px,
            $font-weight: 500,
            $color: #89898a
          );
          width: 100%;
          gap: 4px;
          div {
            width: 100%;
          }

          .error {
            color: #e91f2f;
          }
          .big {
            @include font-style(
              $font-size: 16px,
              $font-weight: 500,
              $color: #fff
            );
          }
          &.light {
            color: #fff;
          }
          &.center {
            text-align: center;
          }
        }
        .alert {
          @include font-style(
            $font-size: 12px,
            $font-weight: 500,
            $color: #ff7d00
          );
        }
        .left {
          @include flex(column, flex-start, flex-start);
          gap: 4px;
        }
        .right {
        }
      }
      &.slider-wrapper {
        // background: red;
        // overflow: hidden;
        overflow-y: scroll;
        gap: 15px;
        margin-left: -18px;
        margin-right: -18px;
        min-width: 100vw;
        &::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        & > .block-title {
          @include font-style(
            $font-size: 16px,
            $font-weight: 500,
            $color: #fff
          );
          margin-left: 18px;
        }
        .slider {
          @include flex(row, flex-start, flex-start);
          gap: 5px;
          padding: 0 18px;
          overflow: hidden;
          .slider-content {
            @include flex(column, space-between, flex-start);
            background: #1f2025;
            border-radius: 17px;
            padding: 10px 15px;
            min-height: 67px;
            gap: 5px;
            width: 160px;
            .block-content {
              @include font-style(
                $font-size: 8px,
                $font-weight: 500,
                $color: #8f8f92
              );
              background: none;
              padding: 0;
            }
            .block-title {
              @include font-style(
                $font-size: 12px,
                $font-weight: 500,
                $color: #fff
              );
            }

            .num {
              @include flex(row, center, center);
              @include font-style(
                $font-size: 10px,
                $font-weight: 700,
                $color: #fff
              );
              width: 18px;
              height: 18px;
              background: #3f4149;
              border-radius: 50%;
            }
          }
        }
      }
    }

    .take-coin {
      width: 49px;
      height: 49px;
      background-image: url("@/assets/img/take-coin.svg");
      background-size: cover;
    }
  }

  .navigation-wrapper {
    @include flex(row, flex-start, center);
    width: 100%;
    margin-top: auto;

    .navigation {
      @include flex(row, space-between, center);
      width: 100%;
      margin-left: auto;
      padding: 5px 20px;
      overflow: hidden;
      .item {
        @include flex(column, space-between, center);
        width: 40px;
        height: 50px;
        cursor: pointer;
        position: relative;
        color: #05be06;
        gap: 5px;

        .title {
          @include font-style(
            $font-size: 14px,
            $font-weight: 500,
            $color: #89898a
          );
          z-index: 1;
        }
        &.active {
          .title {
            @include font-style(
              $font-size: 14px,
              $font-weight: 500,
              $color: #05be06
            );
            z-index: 1;
          }
        }
      }
    }
  }
}
</style>
