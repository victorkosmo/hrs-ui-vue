<!-- components/SectionTable.vue -->
<template>
  <div :class="['section-table', customClass]">
    <!-- Table Header -->
    <div class="table-header">
      <div class="col col-1"><p class="label-regular" style="color: var(--slate-500);">{{ col1Title }}</p></div>
      <div class="col col-2"><p class="label-regular" style="color: var(--slate-500);">{{ col2Title }}</p></div>
      <div class="col col-3"><p class="label-regular" style="color: var(--slate-500);">{{ col3Title }}</p></div>
    </div>
    
    <!-- Table Content -->
    <div class="table-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTable",
  props: {
    col1Title: {
      type: String,
      default: "Column 1",
    },
    col2Title: {
      type: String,
      default: "Column 2",
    },
    col3Title: {
      type: String,
      default: "Column 3",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.section-table {
  align-items: flex-start;
  background-color: #ffffff;
  border: 1px solid var(--slate-100);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
}

.table-header {
  align-items: center;
  align-self: stretch;
  border-bottom: 0.5px solid var(--slate-200);
  display: flex;
  padding: 14px 20px;
  width: 100%;
  box-sizing: border-box;
}

.table-content {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding-top: 12px;
  padding-bottom: 12px;
}

.col {
  display: flex;
  align-items: center;
  height: fit-content;
}

.col-1 {
  width: 50%;
}

.col-2 {
  width: 20%;
}

.col-3 {
  width: 30%;
  justify-content: flex-end;
}

.label-regular {
  margin: 0;
  padding: 0;
}

/* Style for the divider in the slot content */
.table-content > :not(:last-child) {
  border-bottom: 0.5px solid var(--slate-100);
  padding-bottom: 20px;
  margin-bottom: 20px;
}
</style>