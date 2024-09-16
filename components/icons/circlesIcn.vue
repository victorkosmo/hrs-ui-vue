<template>
  <div
    class="icon-container"
    :class="{ 'has-hover': hover }"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      '--hover-color': hover,
    }"
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
        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
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
  },
};
</script>