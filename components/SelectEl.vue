<!-- components/SelectEl.vue -->
<template>
  <div class="select-wrapper">
    <label class="label-regular" style="color: var(--slate-500);" v-if="showLabel && label" :for="id">{{ label }}</label>
    <div class="select-container">
      <select
        :id="id"
        :value="modelValue"
        @change="handleChange"
        :disabled="disabled"
      >
        <option v-for="(item, index) in items" :key="item.value" :value="index">
          {{ item.label }}
        </option>
      </select>
      <img src="/icons/slate/chevron-down.svg" alt="Dropdown arrow" class="dropdown-arrow" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectEl",
  props: {
    modelValue: {
      type: [String, Number],
      default: "0",
    },
    items: {
      type: Array,
      required: true,
      validator: (value) => value.length > 0 && value.every(item => 'value' in item && 'label' in item),
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
  mounted() {
    this.initializeDefaultValue();
  },
  methods: {
    initializeDefaultValue() {
      if (this.modelValue === "0" && this.items.length > 0) {
        this.$emit('update:modelValue', "0");
      }
    },
    handleChange(event) {
      const index = event.target.value;
      const selectedItem = this.items[index];
      this.$emit('update:modelValue', selectedItem.value);
    }
  },
  watch: {
    items: {
      immediate: true,
      handler() {
        this.$nextTick(this.initializeDefaultValue);
      }
    }
  }
};
</script>

<style scoped>
.select-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
}

.select-container {
  position: relative;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid transparent;
  border-radius: 6px;
  padding: 8px 12px;
  padding-right: 30px; /* Space for the arrow */
  background-color: var(--slate-100, #f1f5f9);
  font-size: 15px;
  color: var(--slate-500, #64748b);
  transition: border-color 0.3s ease;
  width: 100%;
  cursor: pointer;
}

select:focus {
  border-color: var(--blue-600, #2563eb);
  outline: none;
}

select:disabled {
  background-color: var(--slate-200, #e2e8f0);
  cursor: not-allowed;
}

.dropdown-arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>