<!-- components/StageSelector.vue -->
<template>
  <div class="selector-content">
    <StageSelectorItem
      v-for="stage in stages"
      :key="stage.id"
      :title="stage.title"
      :stageId="stage.id"
      :selected="selectedStage === stage.id"
      @select-stage="handleStageSelect"
    />
  </div>
</template>

<script>
import StageSelectorItem from './StageSelectorItem.vue';

export default {
  name: 'StageSelector',
  components: {
    StageSelectorItem,
  },
  props: {
    stages: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      selectedStage: null // Stores the ID of the selected stage
    };
  },
  mounted() {
    // Set the first stage as selected by default if there are stages
    if (this.stages.length > 0) {
      this.selectedStage = this.stages[0].id; // Default to the first stage's id
    }
  },
  methods: {
    handleStageSelect(stageId) {
      this.selectedStage = stageId; // Update the selected stage when one is clicked
      this.$emit('stage-changed', stageId); // Emit event to parent (optional)
    }
  }
};
</script>