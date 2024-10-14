<!-- components/StageItemFiller.vue -->
<template>
    <div class="stage-item-filler">
        <div class="stage-item-filler-col1">
            <img src="/public/icons/slate/bars-2.svg" alt="bars">
            <p style="margin: 0; color: var(--slate-600); font-size: 16px">{{ stageTitle }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'StageItemFiller',
  props: {
    stageId: {
      type: Number,
      required: true
    },
    stageTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.stage-item-filler {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    background-color: var(--slate-50);
    padding: 8px 20px;
    border-radius: 8px;
    border: 1px solid var(--slate-100);
    width: 100%;
    box-sizing: border-box;
}

.stage-item-filler-col1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}
</style>