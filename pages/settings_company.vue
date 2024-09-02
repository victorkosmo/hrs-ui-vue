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
  <SidebarLayout :selectedTabIndex="null">
      <SectionTitle title="Настройки"/>
      <MiniTabsNav :tabs="['Профиль', 'Организация', 'Пользователи', 'Причины отказа']" :selectedIndex="1" />
      <SectionCard title titleValue="Компания">
        <div class="settings-container">
          <KeyValueText keyText="Название компании" valueText="ООО Алдан" type="horizontal" size="medium"/>
          <a href="">Редактировать</a>
        </div>
      </SectionCard>
  </SidebarLayout>
</template>