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
    <div class="user">
      <div class="avatar"></div>
      <div class="user-info">
        <div class="name">Ярослав</div>
        <div class="id">ID: 000001</div>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="content-block">
        <div class="block-title">Ваш тариф:</div>
        <div class="block-content">
          <div class="left">
            <div class="content-title">Take Free</div>
            <div class="additional">
              <div>Активен до: --.--.----</div>
              <div class="error">Остаток дней: 0 дней</div>
            </div>
          </div>
          <div class="right">
            <action-button title="Выбрать тариф" @click="toggleModal()" />
          </div>
        </div>
      </div>
      <div class="content-block">
        <div class="block-title">Страна подключения</div>
        <VueSelect
          v-model="selected"
          :options="[
            { label: 'Нидерланды', value: 'option_1' },
            { label: 'ОАЭ', value: 'option_2' },
            { label: 'США', value: 'option_3' },
            { label: 'Аргентина', value: 'option_4' },
          ]"
          placeholder="Выберете страну"
        >
          <template #value="{ option }">
            <div class="custom-value">
              <img
                :src="`https://flagsapi.com/${option.value.toUpperCase()}/flat/24.png`"
                class="block w-6 h-auto"
              />
              <span>{{ option.label }}</span>
            </div>
          </template>
        </VueSelect>
      </div>
      <div class="content-block">
        <div class="block-title">Все тарифы</div>
        <Tabs :tabs="tabs">
          <template v-slot:tab2>
            <div class="block-content tab-content" style="padding: 10px 0">
              <div class="left">
                <div class="content-title">Take Premium</div>
                <div class="additional">
                  <div>
                    Пользуйтесь высокой скорость с VPN без ограничений и рекламы
                  </div>
                </div>
              </div>
              <div class="right">
                <action-button title="Подключить" />
                <div class="additional" style="margin-top: 10px">
                  <div>от <span class="big">249₽</span>/30 дней </div>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:tab1>
            <div class="block-content tab-content" style="padding: 10px 0">
              <div class="left">
                <div class="content-title">Take Free</div>
                <div class="additional">
                  <div>Бесплатный тариф на 30 дней первым пользователям.</div>
                </div>
                <div class="alert">
                  <alert :width="15" :height="15" /> Пробный период нельзя
                  подключить повторно.
                </div>
              </div>
              <div class="right">
                <action-button title="Подключить" />
              </div>
            </div>
          </template>
        </Tabs>
      </div>

      <div class="banner">
        <div class="title">100₽ вам, 100₽ другу!</div>
        <div class="text">
          Приглашайте друзей и выполняйте задания, чтобы получить бонусы,
          которыми можно оплатить подписку
        </div>
        <div class="button" @click="router.push({ path: '/referal' })">
          Получить бонус
        </div>
      </div>

      <div class="content-block">
        <div class="block-title">Баланс бонусов</div>
        <div class="block-content">
          <div class="take-coin"></div>
          <div class="left">
            <div class="content-title">1500 TakeCoin</div>
            <div class="additional">
              <div>Баланс - 15 ₽</div>
            </div>
          </div>
          <div class="right" style="margin-left: auto">
            <action-button title="Потратить" color="#fff" />
          </div>
        </div>
      </div>
      <div class="content-block">
        <div class="block-title">Финансы</div>
        <div class="block-content col">
          <div class="f-item">
            <div class="title">Автоплатежи</div>
            <toggle-switch v-model="switchValue" />
          </div>
          <div class="hdivider"></div>
          <div class="f-item">
            <div class="title">История покупок</div>
          </div>
        </div>
      </div>
      <div class="content-block">
        <div class="block-title">Поддержка</div>
        <div class="block-content clear col">
          <action-button title="Задать вопрос в поддержке" color="#fff" />
          <div class="additional light center">
            <div>Отвечаем с 9:00 до 20:00 по МСК</div>
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

  min-height: 100%;
  height: 100%;
  padding: 10px 18px 35px;
  background: #131416;
  gap: 15px;
  position: relative;
  z-index: 2;
  overflow-y: auto !important;
  margin: 0 auto;

  .user {
    @include flex(row, flex-start, center);
    width: 100%;
    background: #1f2025;
    border-radius: 17px;
    padding: 10px 20px;
    gap: 10px;
    .avatar {
      width: 55px;
      height: 55px;
      background: #fff;
      border-radius: 50%;
    }
    .user-info {
      @include flex(column, flex-start, flex-start);
      gap: 8px;
      .name {
        @include font-style($font-size: 16px, $font-weight: 600, $color: #fff);
      }
      .id {
        @include font-style(
          $font-size: 12px,
          $font-weight: 500,
          $color: rgba(255, 255, 255, 0.5)
        );
        text-transform: uppercase;
      }
    }
  }

  .content-wrapper {
    @include flex(column, flex-start, flex-start);
    width: 100%;
    gap: 15px;
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
        gap: 10px;
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
    }

    .banner {
      @include flex(column, flex-start, flex-start);
      width: 100%;
      background: linear-gradient(277.47deg, #84f000 0%, #10d751 67%);
      border-radius: 17px;
      padding: 10px 20px;
      gap: 15px;
      .title {
        @include font-style($font-size: 20px, $font-weight: 700, $color: #fff);
      }
      .text {
        @include font-style(
          $font-size: 10px,
          $font-weight: 500,
          $color: #d2f7de
        );
      }
      .button {
        @include font-style($font-size: 10px, $font-weight: 500, $color: #fff);
        border: 1px solid #fff;
        border-radius: 999px;
        padding: 10px 20px;
        cursor: pointer;
        user-select: none;
      }
    }

    .take-coin {
      width: 49px;
      height: 49px;
      background-image: url("@/assets/img/take-coin.svg");
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
