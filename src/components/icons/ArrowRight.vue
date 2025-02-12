<script>
export default {
  props: {
    width: Number,
    height: Number,
  },
};

// width="12"
//   height="9"
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 12 9"
    fill="transparent"
  >
    <path
      d="M11 5C11.2761 5 11.5 4.77614 11.5 4.5C11.5 4.22386 11.2761 4 11 4V5ZM0.646446 4.14645C0.451184 4.34171 0.451184 4.65829 0.646446 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646446 4.14645ZM11 4L1 4V5L11 5V4Z"
      fill="currentColor"
    />
  </svg>
</template>
