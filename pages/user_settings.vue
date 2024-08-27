<!-- pages/user_settings.vue -->
<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue' 
import InputEl from '../components/InputEl.vue'
import ButtonEL from '../components/ButtonEl.vue'
import SectionTitle from '../components/SectionTitle.vue'
import MiniTab from '../components/MiniTab.vue'
import MiniTabsNav from '../components/MiniTabsNav.vue'
import SectionCard from '../components/SectionCard.vue'
</script>

<template>
  <SidebarLayout :selectedTabIndex="null">
      <SectionTitle title="Настройки профиля"/>
      <MiniTabsNav :tabs="['Профиль', 'Организация', 'Пользователи', 'Причины отказа']" :selectedIndex="0" />
      <SectionCard title titleValue="Профиль">
        <div class="settings-container">
          <div>
            <p class="text-semibold">users.name</p>
            <p>users.email</p>
            <p>users.role</p>
          </div>
          <a href="">Редактировать</a>
        </div>
      </SectionCard>
      <SectionCard title titleValue="Просмотры">
        <div class="settings-container">
          <div>
            <p>Просмотры: <span style="color: var(--slate-400)">Включены</span></p>
          </div>
          <a href="">Редактировать</a>
        </div>
      </SectionCard>
  </SidebarLayout>
</template>