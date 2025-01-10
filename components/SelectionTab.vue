<template>
    <div
      class="selection-tab-item"
      v-if="selected"
      style="background: white; color: var(--slate-500);"
    >
      <span class="text-semibold" style="font-size: 15px;">{{ text }}</span>
      <span
        v-if="counter"
        class="counter-circle selected-counter"
      >
        <p class="counter-text" style="color: var(--blue-400);">{{ number }}</p>
      </span>
    </div>
    <div
      class="selection-tab-item"
      v-else
      style="color: var(--slate-400);"
    >
      <span class="text-semibold hoverable-text" style="font-size: 15px;">{{ text }}</span>
      <span
        v-if="counter"
        class="counter-circle non-selected-counter" style="background-color: var(--slate-50);"
      >
        <p class="counter-text" style="color: var(--slate-400);">{{ number }}</p>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: "SelectionTab",
    props: {
      selected: {
        type: Boolean,
        default: false,
      },
      text: {
        type: String,
        default: "Tab",
      },
      counter: {
        type: Boolean,
        default: false,
      },
      number: {
        type: Number,
        default: 0,
      },
    },
  };
  </script>
  
  <style scoped>
  .selection-tab-item {
    align-self: stretch;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 4px 4px;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
  }
  
  .hoverable-text:hover {
    color: var(--blue-400);
  }
</style>
  