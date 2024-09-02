<!-- pages/settings_company.vue -->
<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue' 
import SectionTitle from '../components/SectionTitle.vue'
import MiniTab from '../components/MiniTab.vue'
import MiniTabsNav from '../components/MiniTabsNav.vue'
import SectionCard from '../components/SectionCard.vue'
import KeyValueText from '~/components/KeyValueText.vue'
</script>

<template>
  <SidebarLayout :selectedTabIndex="0">
      <SectionTitle title="Вакансии"/>
      <p>У вас еще нет запущенных вакансий</p>
  </SidebarLayout>
</template>