<script>
export default {
  props: {
    width: Number,
    height: Number,
  },
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 15 15"
    fill="transparent"
  >
    <path
      d="M6.43099 2.41226L1.13724 11.2498C1.02809 11.4388 0.970343 11.6531 0.969731 11.8713C0.96912 12.0896 1.02567 12.3042 1.13375 12.4938C1.24184 12.6835 1.39769 12.8415 1.58581 12.9522C1.77392 13.0629 1.98774 13.1224 2.20599 13.1248H12.7935C13.0117 13.1224 13.2256 13.0629 13.4137 12.9522C13.6018 12.8415 13.7576 12.6835 13.8657 12.4938C13.9738 12.3042 14.0304 12.0896 14.0297 11.8713C14.0291 11.6531 13.9714 11.4388 13.8622 11.2498L8.56849 2.41226C8.45707 2.22858 8.30019 2.07671 8.11299 1.97131C7.92578 1.86592 7.71457 1.81055 7.49974 1.81055C7.2849 1.81055 7.0737 1.86592 6.88649 1.97131C6.69929 2.07671 6.54241 2.22858 6.43099 2.41226Z"
      stroke="currentColor"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 5.625V8.125"
      stroke="currentColor"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 10.625H7.50525"
      stroke="currentColor"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
