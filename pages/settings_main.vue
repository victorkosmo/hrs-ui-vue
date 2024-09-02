<!-- pages/user_settings.vue -->
<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue' 
import InputEl from '../components/InputEl.vue'
import ButtonEL from '../components/ButtonEl.vue'
import SectionTitle from '../components/SectionTitle.vue'
import MiniTab from '../components/MiniTab.vue'
import MiniTabsNav from '../components/MiniTabsNav.vue'
import SectionCard from '../components/SectionCard.vue'
import KeyValueText from '~/components/KeyValueText.vue'
</script>

<template>
  <SidebarLayout :selectedTabIndex="null">
      <SectionTitle title="Настройки профиля"/>
      <MiniTabsNav :tabs="['Профиль', 'Организация', 'Пользователи', 'Причины отказа']" :selectedIndex="0" />
      <SectionCard title titleValue="Профиль">
        <div class="settings-container">
          <KeyValueText keyText="Ivan Ivanov" valueText="ivanov.i@gmail.com" type="vertical" size="medium"/>
          <a href="">Изменить</a>
        </div>
      </SectionCard>
      <SectionCard title titleValue="Просмотры">
        <div class="settings-container">
          <KeyValueText keyText="Просмотры" valueText="Включены" type="horizontal" size="medium"/>
          <a href="">Изменить</a>
        </div>
      </SectionCard>
  </SidebarLayout>
</template>