<script setup>
import { ref } from "vue";
import debounce from "lodash/debounce";

import Close from "@/components/icons/Close.vue";
import ActionButton from "@/components/ActionButton.vue";
import Alert from "@/components/icons/Alert.vue";
import { modalStore } from "@/store/modal";

const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["close"]);
const modal = ref(null);

const removed = debounce(() => {
  emit("close");
}, 500);

function closeModal() {
  modal.value.classList.add("removing");
  removed();
}
</script>

<template>
  <Teleport to="body">
    <div v-if="props.show" ref="modal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!-- <div class="close-modal">
            <Close :width="24" :height="24" @click="closeModal" />
          </div> -->
          <div class="title">Оплата тарифа</div>
          <!-- <div class="text" v-html="modalStore().getModalData.text" /> -->

          <div class="tarif-wrapper">
            <div class="tariff-item active">
              <div class="time">
                30
                <span>дней</span>
              </div>
              <div class="price">299 ₽</div>
            </div>
            <div class="tariff-item">
              <div class="time">
                90
                <span>дней</span>
              </div>
              <div class="price">899 ₽</div>
            </div>
            <div class="tariff-item">
              <div class="time">
                1
                <span>год</span>
              </div>
              <div class="price">2999 ₽</div>
              <div class="additional">249₽/30 дней </div>
            </div>
          </div>

          <div class="input-wrapper">
            <input value="" placeholder="Промокод" />
            <action-button title="применить" />
          </div>

          <div class="alert">
            <alert :width="15" :height="15" /> Такого промокода нет или он
            введен неправильно
          </div>

          <div class="button-wrapper">
            <ActionButton
              size="medium"
              title="Оплатить"
              @click="modalStore().getModalData.callback()"
            />
            <div class="close-btn" @click="closeModal">Закрыть</div>

            <div class="oferta">
              Оплачивая счет вы соглашаетесь с <a href="#">публичной офертой</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-mask {
  @include flex(row, center, center);
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .modal-wrapper {
    @include flex(row, center, center);
  }
  .modal-container {
    width: 83.6734693878vw;
    min-height: 10vh;
    margin: 0 auto;
    padding: 20px 17px;
    border: 1px solid #7e7e7e;
    background: #1f2025;

    border-radius: 10px;
    box-shadow: 0 50px 30px rgba(0, 0, 0, 0.3);
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    position: relative;
    text-align: center;
    .input-wrapper {
      @include flex(row, center, center);
      margin-top: 24px;
      margin-bottom: 18px;
      border: 1px solid #7e7e7e;
      border-radius: 999px;
      padding: 5px;
      .root-action-button {
        width: 74px;
      }
      input {
        width: 100%;
        border: none;
        background: transparent;
        outline: none;
        padding: 0 10px;
      }
    }
    .alert {
      @include font-style($font-size: 12px, $font-weight: 500, $color: #ff7d00);
    }
    .tarif-wrapper {
      @include flex(row, center, center);
      width: 100%;
      gap: 15px;
      .tariff-item {
        @include flex(column, space-between, center);
        @include font-style($font-size: 20px, $font-weight: 700, $color: #fff);
        border: 1px solid #7e7e7e;
        border-radius: 10px;
        width: 106px;
        height: 120px;
        padding: 18px 0;
        &:hover,
        &:active {
          border: 1px solid #81ef01;
          cursor: pointer;
        }
        span,
        .additional {
          font-size: 10px;
        }
        .time,
        .price {
          @include flex(column, flex-start, center);
        }
      }
    }
    .title {
      @include font-style($font-size: 20px, $font-weight: 600, $color: #fff);
      margin-top: 36px;
      margin-bottom: 24px;
    }
    .text {
      @include font-style(
        $font-size: 14px,
        $font-weight: 500,
        $color: #fff,
        $line-height: normal
      );
      ::v-deep {
        .colored {
          color: #1fdd00 !important;
        }
      }
    }
    .button-wrapper {
      margin-top: 36px;
      .close-btn {
        margin-top: 20px;
        margin-bottom: 10px;
        color: #fff;
        cursor: pointer;
      }
      .oferta {
        @include font-style($font-size: 12px, $font-weight: 500, $color: #fff);
        a {
          color: #81ef01;
        }
      }
    }
    .close-modal {
      @include absolute(16px, 16px, auto, auto);
      width: 24px;
      height: 24px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  &.removing {
    .modal-container {
      animation: slide-out-blurred-top 0.45s
        cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
    }
  }
}

@keyframes slide-in-blurred-top {
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes slide-out-blurred-top {
  0% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 0;
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    transform-origin: 50% 0;
    filter: blur(40px);
    opacity: 0;
  }
}

@keyframes swirl-in-fwd {
  0% {
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}

@keyframes slide-in-fwd-center {
  0% {
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes slide-out-bck-center {
  0% {
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-1400px);
    opacity: 0;
  }
}
</style>
