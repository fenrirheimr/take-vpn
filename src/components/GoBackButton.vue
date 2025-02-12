<script setup>
import { useRouter } from "vue-router";
import ArrowRight from "@/components/icons/ArrowRight.vue";

defineProps({
  title: String,
  route: Object,
});
const router = useRouter();
</script>

<template>
  <div class="root-go-back-button" @click="router.back()">
    <ArrowRight class="arrow" :width="12" :height="9" />
    <span>Назад</span>
  </div>
</template>

<style scoped lang="scss">
.root-go-back-button {
  @include flex(row, flex-start, center);
  @include font-style(
    $font-size: 16px,
    $font-weight: 600,
    $color: rgba(255, 255, 255, 0.8)
  );
  gap: 11px;
  height: 55px;
  border-radius: 8px;
  align-self: flex-start;
  margin-bottom: 10px;
  cursor: pointer;
  &:active,
  &:focus {
    animation: blink 0.5s both;
  }
}

@keyframes blink {
  0% {
    color: #fff500;
    opacity: 0.5;
  }

  100% {
    color: #fff;
    opacity: 1;
  }
}
</style>
