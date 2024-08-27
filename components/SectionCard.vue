<!-- components/SectionCard.vue -->
<template>
  <div :class="['section-card', customClass]">
    <div v-if="title" class="section-title">
      <div class="label-regular" style="color: var(--slate-500)">{{ titleValue }}</div>
    </div>
    <div class="section-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionCard",
  props: {
    title: {
      type: Boolean,
      default: false,
    },
    titleValue: {
      type: String,
      default: "Title",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.section-card {
  align-items: flex-start;
  background-color: #ffffff;
  border: 1px solid var(--slate-100);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
}

.section-title {
  align-items: center;
  align-self: stretch;
  border-bottom: 0.5px solid var(--slate-200);
  display: flex;
  padding: 14px 20px;
  width: 100%;
  box-sizing: border-box;
}

.section-content {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}

.slot-template-instance {
  align-self: stretch !important;
  height: 48px !important;
  width: 100% !important;
}
</style>
