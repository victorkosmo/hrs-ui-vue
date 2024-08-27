<!-- components/Sidebar.vue -->
<script setup>
import { ref, watch } from 'vue'
import MenuTab from './MenuTab.vue'
import UserBar from './UserBar.vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  selectedIndex: {
    type: Number,
    default: null,
  }
})

const emit = defineEmits(['update:selectedIndex'])

const selectedTabIndex = ref(props.selectedIndex)

watch(() => props.selectedIndex, (newValue) => {
  selectedTabIndex.value = newValue
})

const selectTab = (index) => {
  selectedTabIndex.value = selectedTabIndex.value === index ? null : index
  emit('update:selectedIndex', selectedTabIndex.value)
}
</script>

<template>
  <div class="sidebar">
    <div class="top-section">
      <img src="/public/hrs-logo.svg" alt="HRS Logo">
      <div class="tab-section">
        <MenuTab 
          v-for="(tab, index) in tabs" 
          :key="index" 
          :tabTitle="tab.title" 
          :iconPath="tab.icon" 
          :selected="index === selectedTabIndex"
          @click="selectTab(index)" 
        />
      </div>
    </div>
    <UserBar userName="Ivan Ivanov" orgTitle="ООО Алдан"/>
  </div>
</template>

<style scoped>
.top-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-self: stretch;
}
.tab-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}
</style>