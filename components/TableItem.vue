<template>
  <div id="table-item" class="table-item">
      <!-- Column 1: Key-Value Text -->
      <div class="col col-1">
        <div class="key-value-text">
          <p class="key-value-wrapper" style="font-weight: 500; font-size: 15.5px;">{{ keyText }}</p>
          <p class="key-value-wrapper" style="color: var(--slate-400); font-size: 15px;">{{ valueText }}</p>
        </div>
      </div>
      
      <!-- Column 2: Description -->
      <div class="col col-2">
        <p class="label-regular" style="color: var(--slate-600);">{{ col2Text }}</p>
      </div>
      
      <!-- Column 3: Additional Text and Optional Icon -->
      <div class="col col-3">
        <p class="label-regular" style="color: var(--slate-400);">{{ col3Text }}</p>
        <img v-if="icnBtn" :src="iconPath" class="icon-instance" />
      </div>
  </div>
</template>

<script>
export default {
  name: "TableItem",
  props: {
    icnBtn: {
      type: Boolean,
      default: false,
    },
    keyText: {
      type: String,
      required: true,
    },
    valueText: {
      type: String,
      required: true,
    },
    col2Text: {
      type: String,
      required: true,
    },
    col3Text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      iconPath: 'icons/slate/ellipsis-horizontal.svg', // Hardcoded icon path
    };
  },
};
</script>

<style scoped>
.table-item {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 8px 20px;
  box-sizing: border-box;
}
.table-item:hover {
  background-color: var(--slate-50);
}

.col {
  display: flex;
  align-items: center;
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
  gap: 10px;
}

.key-value-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.text-wrapper {
  font-weight: bold;
  color: var(--slate-700);
}

.value-wrapper {
  color: var(--slate-500);
}

.icon-instance {
  height: 24px;
  width: 24px;
}
.key-value-wrapper {
  display: inline-block;
  padding: 0;
  margin: 0;
  line-height: normal;
}
</style>