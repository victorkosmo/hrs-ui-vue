<template>
  <div :class="['key-value-text', typeClass]">
    <div class="key">
      <p :class="keyClass" style="color: var(--slate-700); margin: 0;">{{ keyText }}</p>
    </div>
    <div class="value">
      <p :class="valueClass" style="color: var(--slate-400); margin: 0;">{{ valueText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyValueText",
  props: {
    type: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value),
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["medium", "small"].includes(value),
    },
    keyText: {
      type: String,
      required: true,
    },
    valueText: {
      type: String,
      required: true,
    },
  },
  computed: {
    typeClass() {
      return this.type === "horizontal" ? "is-horizontal" : "is-vertical";
    },
    keyClass() {
      return this.size === "medium" ? "text-semibold" : "label-regular";
    },
    valueClass() {
      return this.size === "medium" ? "text-regular" : "label-regular";
    },
  },
};
</script>

<style scoped>
.key-value-text {
  display: flex;
}

.is-horizontal {
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

.is-vertical {
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;  /* Aligns text to the left */
}

.key, .value {
  display: inline-block;
  padding: 0;
  margin: 0;
  line-height: normal;
}
</style>
