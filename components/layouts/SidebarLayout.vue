<!-- components/layouts/SidebarLayout.vue -->
<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'

const props = defineProps({
  selectedTabIndex: {
    type: Number,
    default: null
  }
})

const selectedTab = ref(props.selectedTabIndex)

const updateSelectedTab = (index) => {
  selectedTab.value = index
}
</script>

<template>
  <div class="sidebar-layout">
    <Sidebar 
      :tabs="[
        { title: 'Вакансии', icon: 'briefcase.svg' },
        { title: 'Кандидаты', icon: 'users.svg' },
        { title: 'База резюме', icon: 'circle-stack.svg' },
        { title: 'Аналитика', icon: 'chart-bar.svg' }
      ]" 
      :selectedIndex="selectedTab" 
      @update:selectedIndex="updateSelectedTab"
    />
    <div id="main-container" class="main-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;
}
</style>