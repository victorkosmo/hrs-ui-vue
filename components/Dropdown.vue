<!-- components/Dropdown.vue -->
<template>
  <div class="dropdown" ref="dropdownContainer">
    <div @click="toggleDropdown" class="dropdown-trigger" ref="triggerElement">
      <!-- Trigger element slot -->
      <slot name="trigger">
        <button>Dropdown</button>
      </slot>
    </div>
    <div v-if="isOpen" class="dropdown-content" ref="dropdownContent" :style="dropdownStyles">
      <slot name="content">
        <ul class="dropdown-list">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '', // If no width is provided, we'll dynamically set it
    },
  },
  data() {
    return {
      isOpen: false,
      dropdownStyles: {
        left: '0',
        top: '100%',
        width: this.width, // Initially, use provided width if any
      },
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.$nextTick(() => {
          this.setDropdownWidth();
          this.adjustDropdownPosition();
          document.addEventListener('click', this.handleClickOutside);
        });
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
    setDropdownWidth() {
      if (!this.width) {
        // Get the width of the trigger element and apply it to the dropdown
        const trigger = this.$refs.triggerElement;
        const triggerWidth = trigger.offsetWidth + 'px';
        this.dropdownStyles.width = triggerWidth;
      }
    },
    adjustDropdownPosition() {
      const trigger = this.$refs.dropdownContainer;
      const triggerRect = trigger.getBoundingClientRect();
      const dropdown = this.$refs.dropdownContent;
      const dropdownWidth = parseInt(this.dropdownStyles.width);
      const dropdownHeight = dropdown.offsetHeight;

      // Adjust Left-Right positioning
      if (triggerRect.right + dropdownWidth > window.innerWidth) {
        this.dropdownStyles.right = '0';
        this.dropdownStyles.left = 'auto';
      } else {
        this.dropdownStyles.left = '0';
        this.dropdownStyles.right = 'auto';
      }

      // Adjust Up-Down positioning
      if (triggerRect.bottom + dropdownHeight > window.innerHeight) {
        // Open the dropdown upwards
        this.dropdownStyles.top = 'auto';
        this.dropdownStyles.bottom = '100%';
      } else {
        // Default to opening the dropdown downwards
        this.dropdownStyles.top = '100%';
        this.dropdownStyles.bottom = 'auto';
      }
    },
    handleClickOutside(event) {
      const dropdown = this.$refs.dropdownContent;
      const trigger = this.$refs.dropdownContainer;

      if (dropdown && !dropdown.contains(event.target) && !trigger.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

