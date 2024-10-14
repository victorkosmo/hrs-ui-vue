<!-- components/StageItem.vue -->
<template>
  <div :class="['stage-item', mutable ? 'on' : 'off']" :id="id">
    <!-- Left column with drag icon (always present but transparent if not mutable), color select, and title -->
    <div class="stage-item-col">
      <img
        src="/icons/slate/bars-2.svg"
        alt="bars"
        class="icon-bars"
        :style="{ opacity: mutable ? 1 : 0 }"
        :class="{ 'icon-draggable': mutable }"
      />
      <div class="color-select-wrapper">
        <StageColorSelect :color="color" :mutable="mutable" />
      </div>
      <p class="label-regular" style="margin: 0; color: var(--slate-500)">{{ title }}</p>
    </div>

    <!-- Right column with edit and delete icons (if mutable) -->
    <div v-if="mutable" class="icon-controls">
      <img src="/icons/slate/pencil-square.svg" alt="edit" class="icon-pencil hover-icon" />
      <img src="/icons/slate/x-mark.svg" alt="delete" class="icon-delete hover-icon" />
    </div>
  </div>
</template>

<script>
import StageColorSelect from './StageColorSelect.vue';

export default {
  name: 'StageItem',
  components: {
    StageColorSelect,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'gray',
    },
    mutable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.stage-item {
  display: flex;
  align-items: center;
  background-color: var(--slate-100);
  border-radius: 8px;
  padding: 8px 20px;
  width: 100%;
  box-sizing: border-box;
}

.stage-item.on {
  justify-content: space-between;
}

.stage-item.off {
  gap: 10px;
  justify-content: space-around;
}

.stage-item-col {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-grow: 1;
}

.color-select-wrapper {
  position: relative;
}

.icon-controls {
  display: inline-flex;
  gap: 10px;
}

.icon-bars {
  width: 24px;
  height: 24px;
  transition: opacity 0.3s;
}

/* Pointer on hover for mutable state */
.icon-draggable {
  cursor: grabbing;
}

.hover-icon {
  transition: filter 0.2s ease;
}

.hover-icon:hover {
  filter: brightness(0) saturate(100%) invert(43%) sepia(93%) saturate(1352%) hue-rotate(190deg) brightness(99%) contrast(96%);
}
</style>