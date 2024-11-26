<!-- components/CornerTab.vue -->
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  icon: {
    type: String,
    default: '',
  },
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="corner-tab"
    :class="{
      'selected-on': selected,
      'selected-off': !selected,
    }"
  >
    <div class="icon-and-text">
      <!-- Render the icon only if provided -->
      <img v-if="icon" :src="icon" alt="icon" class="icon" />
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>
.corner-tab {
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px 12px 0px 0px;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

/* Selected state */
.corner-tab.selected-on {
  background-color: #ffffff;
  color: var(--slate-400);
}

/* Not selected state */
.corner-tab.selected-off {
  background-color: transparent;
  color: var(--slate-500);
}
</style>
