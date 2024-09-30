<!-- components/icons/backArrow.vue -->
<template>
  <div
    class="icon-container"
    :class="{ 'has-hover': hover }"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      '--hover-color': hover,
    }"
    @click="handleClick"
  >
    <svg 
      class="icon-box" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      :stroke-width="strokeWidth" 
      :stroke="color"
    >
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: 'var(--slate-500)',
    },
    hover: {
      type: String,
      default: '',
    },
    strokeWidth: {
      type: Number,
      default: 1.5,
    },
    back: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (this.back) {
        window.history.back();
      }
    },
  },
};
</script>