<template>
  <div class="color-select-wrapper" ref="colorSelectWrapper">
    <div 
      :class="['stage-color-select', selectedColor]" 
      @click="toggleDropdown"
      :style="{ cursor: mutable ? 'pointer' : 'default' }"
    ></div>

    <div v-if="isDropdownVisible" class="color-dropdown">
      <div
        v-for="color in colors"
        :key="color"
        :class="['dropdown-color', color]"
        @click="selectColor(color)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorSelectItem',
  props: {
    color: {
      type: String,
      required: true,
      validator(value) {
        return ['lime', 'teal', 'gray', 'sky', 'blue', 'orange', 'green', 'red', 'purple'].includes(value);
      }
    },
    mutable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      selectedColor: this.color,
      isDropdownVisible: false,
      colors: ['lime', 'teal', 'gray', 'sky', 'blue', 'orange', 'green', 'red', 'purple']
    };
  },
  methods: {
    toggleDropdown() {
      if (this.mutable) {
        this.isDropdownVisible = !this.isDropdownVisible;
      }
    },
    selectColor(color) {
      if (this.mutable) {
        this.selectedColor = color;
        this.isDropdownVisible = false;
        this.$emit('color-change', color);
      }
    },
    closeDropdown() {
      this.isDropdownVisible = false;
    },
    handleClickOutside(event) {
      if (!this.$refs.colorSelectWrapper.contains(event.target)) {
        this.closeDropdown();
      }
    }
  },
  watch: {
    color(newColor) {
      this.selectedColor = newColor;
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style scoped>
.color-select-wrapper {
  position: relative;
  display: inline-block;
}

.stage-color-select {
  border: 1px solid var(--slate-300);
  border-radius: 50%;
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.color-dropdown {
  position: absolute;
  top: 0;
  left: 30px;
  background: white;
  border: 1px solid var(--slate-300);
  border-radius: 5px;
  padding: 5px;
  max-width: 250px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
  gap: 5px;
}

.dropdown-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.teal { background-color: #14b8a6; }
.gray { background-color: #f8fafc; }
.purple { background-color: #a855f7; }
.blue { background-color: #3b82f6; }
.lime { background-color: #84cc16; }
.sky { background-color: #0ea5e9; }
.red { background-color: #ef4444; }
.orange { background-color: #f97316; }
.green { background-color: #22c55e; }
</style>