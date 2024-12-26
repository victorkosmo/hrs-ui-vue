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
  counter: {
    type: Number,
    default: 0,
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
      <div
        class="counter-circle"
        :class="{ 'selected-counter': selected, 'non-selected-counter': !selected }"
      >
        <p class="counter-text" :style="{ color: selected ? 'var(--blue-500)' : 'var(--slate-500)' }">
          {{ counter }}
        </p>
      </div>
  </div>
</template>

<style scoped>
.stage-selector-item {
  display: flex;
  flex-direction: row;
  gap: 6px;
  height: 30px;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.selected-off:hover .menu-tab-text {
  color: var(--slate-600); /* Hover effect for non-selected tab */
}

.menu-tab-text {
  transition: color 0.3s ease;
}

.counter-circle {
  padding: 6px 10px;
  width: fit-content;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.selected-counter {
  background-color: var(--blue-50);
}

.non-selected-counter {
  background-color: var(--slate-100);
}

.counter-text {
  font-size: 14px;
  font-weight: bold;
  transition: color 0.3s ease;
}
</style>
