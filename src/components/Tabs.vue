<script setup>
import { ref } from "vue";

defineProps({
  tabs: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((tab) => tab.title && tab.slotName);
    },
  },
});
const activeTab = ref(0);

const selectTab = (index) => {
  activeTab.value = index;
};
</script>

<template>
  <div class="tabs">
    <div class="tabs-header">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(index)"
        :class="{ active: activeTab === index }"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="tabs-content">
      <slot :name="tabs[activeTab].slotName"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  width: 100%;
}
.tabs-header {
  @include flex(row, space-between, center);
  width: 100%;
  background: #1f2025;
  border-radius: 17px;
  gap: 10px;
  overflow: hidden;
}

.tabs-header button {
  @include font-style($font-size: 10px, $font-weight: 500, $color: #8f8f92);
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  text-align: center;
  border-radius: 17px;
  width: 50%;
}

.tabs-header button.active {
  background: #fff;
  color: #131416;
}

.tabs-content {
}
</style>
