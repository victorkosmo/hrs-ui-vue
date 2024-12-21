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
    <!-- Only use one class if needed -->
    <div class="app-content">
      <div class="main-container">
        <slot />
      </div>
    </div>
  </div>
</template>
