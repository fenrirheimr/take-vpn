<script setup>
const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);

const toggle = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>

<template>
  <div class="toggle-switch" :class="{ checked: modelValue }" @click="toggle" />
</template>

<style scoped lang="scss">
.toggle-switch {
  background: #3a3b3f;

  border-radius: 0.75em;
  cursor: pointer;
  flex: none;
  height: 20px;
  position: relative;
  transition: background-color 150ms;
  width: 40px;
}

.toggle-switch::before {
  background: #fff;
  background-image: radial-gradient(
    circle at 0.375em 0.375em,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.05) 1em
  );
  border-radius: 0.625em;
  content: "";
  display: block;
  height: 1.25em;
  left: 0.125em;
  position: absolute;
  top: 0;
  transition: left 150ms;
  width: 1.25em;
  will-change: left;
}

// .checked {
//   background-color: #aac3f2;
// }

.checked::before {
  background: #81ef01;

  left: 20px;
}

.toggle-switch:hover {
  box-shadow: 0.0625em 0.0625em 0.125em rgba(0, 0, 0, 0.12) inset;
}

.toggle-switch:hover::before {
  background-image: radial-gradient(
    circle at 0.375em 0.375em,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.0375) 1em
  );
  box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.12);
}
</style>
