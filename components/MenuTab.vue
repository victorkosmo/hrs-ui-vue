<template>
  <div :class="tabClass" class="menu-tab">
    <div class="icon">
      <img :src="computedIconPath" class="vector" />
    </div>
    <div class="tab-name menu-tab-text">{{ tabTitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'MenuTab',
  props: {
    selected: {
      type: Boolean,
      required: true,
      default: false,
    },
    tabTitle: {
      type: String,
      default: 'Tab Name',
    },
    iconPath: {
      type: String,
      default: 'plus-circle.svg',
    },
  },
  computed: {
    tabClass() {
      return {
        'selected-off': !this.selected,
        'selected-on': this.selected,
      };
    },
    computedIconPath() {
      const folder = this.selected ? 'blue' : 'slate';
      return `/icons/${folder}/${this.iconPath}`;
    },
  },
};
</script>

<style scoped>
.menu-tab {
  width: 100%;
  padding: 12px 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  transition: background-color 0.4s ease;
}

.selected-off {
  background: transparent;
  color: var(--slate-400);
  border: none;
}

.selected-off:hover {
  background: var(--slate-50);
}

.selected-on {
  background: var(--blue-50);
  color: var(--blue-500);
}

.icon {
  display: flex;
  align-items: center;
}

.vector {
  width: 28px;
  height: 28px;
}

.tab-name {
  color: inherit;
}
</style>
