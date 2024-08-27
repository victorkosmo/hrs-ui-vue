<!-- components/MiniTab.vue -->
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  selected: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="minitab" :class="{'selected-on': props.selected, 'selected-off': !props.selected}">
    <div class="minitab-title text-regular">{{ props.title }}</div>
  </div>
</template>

<style scoped>
.minitab {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

.selected-off {
  border-bottom: 1px dotted transparent; /* No border when not selected */
  color: var(--slate-400);
}

.selected-off:hover {
  color: var(--slate-600); /* Hover effect for non-selected tab */
}

.selected-on {
  border-bottom: 2px solid var(--blue-600); /* Border when selected */
  color: var(--blue-600);
}
</style>
