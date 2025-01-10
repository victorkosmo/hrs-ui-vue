<!-- components/SelectionTabsContainer.vue -->
<template>
    <div class="conatiner-row-fit" style="padding: 6px 8px; background-color: var(--slate-100); border-radius: 8px;">
      <slot />
    </div>
</template>
  
<script>
  export default {
    name: "SelectionTabsContainer",
    mounted() {
      this.setTabWidths();
    },
    updated() {
      this.setTabWidths();
    },
    methods: {
      setTabWidths() {
        const tabs = this.$el.querySelectorAll(".selection-tab-item");
        if (tabs.length === 0) return;
  
        // Find the largest width
        let largestWidth = 0;
        tabs.forEach((tab) => {
          tab.style.width = "auto"; // Reset width to measure natural size
          const tabWidth = tab.offsetWidth;
          if (tabWidth > largestWidth) largestWidth = tabWidth;
        });
  
        // Apply the largest width to all tabs
        tabs.forEach((tab) => {
          tab.style.width = `${largestWidth}px`;
        });
      },
    },
  };
</script>