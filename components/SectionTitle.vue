<!-- components/SectionTitle.vue -->
<script setup>
import { defineProps, computed } from 'vue';
import ButtonEl from '../components/ButtonEl.vue';

// Define props with default values
const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  button: {
    type: Boolean,
    default: false
  }
});

// Computed class for title container
const titleContainerClass = computed(() => {
  return {
    'title-container': true,
    'with-button': props.button,
    'without-button': !props.button
  };
});
</script>

<template>
  <div :class="titleContainerClass">
    <div class="section-title">
        <h2>{{ title }}</h2>
    </div>
    <!-- Conditionally render ButtonEl based on the button prop -->
    <ButtonEl v-if="props.button" fit="true"/>
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
  padding: 1px 0;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
}

.with-button {
  justify-content: space-between;
}

.without-button {
  justify-content: flex-start;
}

.section-title {
  color: var(--slate-500);
}
</style>
