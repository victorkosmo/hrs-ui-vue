<template>
  <div class="input-wrapper">
    <label v-if="showLabel && label" :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

label {
  font-size: 14px;
  color: var(--slate-600, #475569);
}

input {
  border: 2px solid transparent;
  border-radius: 6px;
  padding: 8px 12px;
  background-color: var(--slate-100, #f1f5f9);
  font-size: 15px;
  color: var(--slate-500, #64748b);
  transition: border-color 0.3s ease, border-width 0s;
}

input:focus {
  border-color: var(--blue-600, #2563eb);
  outline: none;
}

input:disabled {
  background-color: var(--slate-200, #e2e8f0);
  cursor: not-allowed;
}
</style>