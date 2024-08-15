<template>
  <button
    :class="[
      'button',
      `button--${styleType}`,
      { 'button--icon-on': icon, 'button--fit-on': fit },
      `button--${size}`,
    ]"
  >
    <img v-if="icon" :src="iconSrc" alt="icon" class="button__icon" />
    <span class="button__text"><slot>Click</slot></span>
  </button>
</template>

<script>
export default {
  name: "ButtonEl",
  props: {
    styleType: {
      type: String,
      default: "main", // main, outlined
      validator: (value) => ["main", "outlined"].includes(value),
    },
    icon: {
      type: Boolean,
      default: false, // true = on, false = off
    },
    fit: {
      type: Boolean,
      default: false, // true = hug content, false = full width
    },
    size: {
      type: String,
      default: "medium", // medium, large, small
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    iconSrc: {
      type: String,
      default: "add-square-02.svg",
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  width: 100%; /* Default to full width */
}

/* Size Variants */
.button--small {
  padding: 4px 8px;
  font-size: 12px;
}

.button--medium {
  padding: 8px 16px;
  font-size: 14px;
}

.button--large {
  padding: 12px 24px;
  font-size: 16px;
}

/* Style Variants */
.button--main {
  background-color: var(--blue-600, #2563eb);
  color: white;
  border: 2px solid transparent;
}

.button--main:hover {
  background-color: var(--blue-700, #1d4ed8);
}

.button--outlined {
  background-color: transparent;
  color: var(--blue-600, #2563eb);
  border: 2px solid var(--blue-600, #2563eb);
}

.button--outlined:hover {
  background-color: var(--blue-50, #eff6ff);
}

/* Icon Variants */
.button--icon-on .button__icon {
  margin-right: 8px;
}

.button__icon {
  width: 20px;
  height: 20px;
}

/* Fit Variants */
.button--fit-on {
  width: auto; /* Hug content */
}

.button--fit-off {
  width: 100%; /* Full width */
}
</style>
