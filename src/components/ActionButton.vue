<script setup>
defineProps({
  size: String,
  title: String,
  color: {
    type: String,
    default: "#81ef01",
  },
});
</script>

<template>
  <div
    class="root-action-button"
    :style="{ background: color }"
    :class="{
      'size-small': size === 'small',
      'size-medium': size === 'medium',
      'size-large': size === 'large',
    }"
  >
    <div class="text">
      {{ title || "text" }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.root-action-button {
  @include flex(row, center, center);
  width: 100%;
  border-radius: 999px;
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;

  .text {
    @include font-style($font-size: 12px, $font-weight: 600, $color: #131416);
  }

  &:active,
  &:focus {
    animation: blink 0.5s both;
  }

  // &.size-small {}
  &.size-medium {
    .text {
      @include font-style($font-size: 18px, $font-weight: 700, $color: #131416);
    }
  }
  &.size-large {
    .text {
      @include font-style($font-size: 24px, $font-weight: 700, $color: #131416);
    }
  }
}
</style>
