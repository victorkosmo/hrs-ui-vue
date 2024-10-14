<!-- components/StageSelectorItem.vue -->
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Stage Title',
  },
  selected: {
    type: Boolean,
    default: false,
  },
  stageId: {
    type: [String, Number],
    required: true,
  },
});

const emit = defineEmits(['select-stage']);

const handleClick = () => {
  if (!props.selected) {
    emit('select-stage', props.stageId);
  }
};
</script>

<template>
  <div
    class="stage-selector-item"
    :class="{ 'selected-on': selected, 'selected-off': !selected }"
    @click.prevent="handleClick"
    :style="{ cursor: selected ? 'default' : 'pointer' }"
  >
    <p class="menu-tab-text" :style="{ color: selected ? 'var(--blue-500)' : 'var(--slate-500)' }">
      {{ title }}
    </p>
  </div>
</template>

<style scoped>
.stage-selector-item {
  padding: 2px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease
}

.selected-off:hover .menu-tab-text {
  color: var(--slate-600); /* Hover effect for non-selected tab */
}

.menu-tab-text {
  transition: color 0.3s ease;
}
</style>
