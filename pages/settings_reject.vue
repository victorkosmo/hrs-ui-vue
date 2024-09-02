<!-- pages/settings_company.vue -->
<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue' 
import SectionTitle from '../components/SectionTitle.vue'
import MiniTab from '../components/MiniTab.vue'
import MiniTabsNav from '../components/MiniTabsNav.vue'
import SectionCard from '../components/SectionCard.vue'
import KeyValueText from '~/components/KeyValueText.vue'
import ButtonEl from '../components/ButtonEl.vue'
import TableItem from '../components/TableItem.vue'
import SectionTable from '../components/SectionTable.vue'
</script>

<template>
  <SidebarLayout :selectedTabIndex="null">
      <SectionTitle title="Настройки"/>
      <MiniTabsNav :tabs="['Профиль', 'Организация', 'Пользователи', 'Причины отказа']" :selectedIndex="3" />
        <div class="section-nav">
          <p>Причины отказов организации</p>
          <ButtonEl icon fit>Добавить</ButtonEl>
        </div>
        <SectionCard :divided="true">
          <div class="settings-container-padding">
            <p style="margin: 0;">Не подходит</p>
            <a href="">Изменить</a>
          </div>
          <div class="settings-container-padding">
            <p style="margin: 0;">Не достаточно знаний</p>
            <a href="">Изменить</a>
          </div>
          <div class="settings-container-padding">
            <p style="margin: 0;">Высокие ожидания</p>
            <a href="">Изменить</a>
          </div>
        </SectionCard>
  </SidebarLayout>
</template>