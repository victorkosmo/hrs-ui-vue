<!-- components/MiniTabsNav.vue -->
<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  },
  selectedIndex: {
    type: Number,
    default: 0
  }
});
</script>

<template>
  <div class="mini-tabs-nav">
    <div
      v-for="(tab, index) in props.tabs"
      :key="index"
      :class="[
        'minitab',
        { 'selected-on': index === props.selectedIndex, 'selected-off': index !== props.selectedIndex }
      ]"
    >
      <div class="minitab-title text-regular">{{ tab }}</div>
    </div>
    <div class="bottom-border"></div>
  </div>
</template>

<style scoped>
.mini-tabs-nav {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}

.minitab {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Indicate interactable area */
  transition: color 0.3s ease, border-bottom 0.3s ease;
  position: relative; /* Ensure the ::after pseudo-element is positioned relative to .minitab */
}

.selected-off {
  color: var(--slate-400);
  border-bottom: 1px dotted transparent;
}

.selected-off:hover {
  color: var(--blue-300);
}

.selected-on {
  color: var(--blue-600);
}

.selected-on::after {
  content: '';
  position: absolute;
  bottom: -3px; /* Adjust to ensure it appears above the bottom border */
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--blue-600);
  z-index: 1; /* Ensure this is above the .bottom-border */
}

.bottom-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid var(--slate-200);
  pointer-events: none;
  z-index: 0; /* Ensure this is below the .selected-on::after border */
}
</style>
