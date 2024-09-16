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
import Dropdown from '../components/Dropdown.vue'
import DropdownItem from '../components/DropdownItem.vue'
</script>

<template>
  <SidebarLayout :selectedTabIndex="null">
      <SectionTitle title="Настройки профиля"/>
      <MiniTabsNav :tabs="['Профиль', 'Организация', 'Пользователи', 'Причины отказа']" :selectedIndex="0" />
      <SectionCard title titleValue="Профиль">
        <div class="settings-container">
          <KeyValueText keyText="Ivan Ivanov" valueText="ivanov.i@gmail.com" type="vertical" size="medium"/>
          <ModalWindow modalTitle="Редактировать профиль">
            <template #trigger="{ openModal }">
              <a href="#" @click="openModal">Изменить</a>
            </template>
            <template #content>
              <div class="input-container-lg">
                <InputEl id="edit-reject-cause" type="text" modelValue="Ivan Ivanov" :showLabel="true" label="Имя"/>
              </div>
              <div class="buttons-row">
                <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
                <ButtonEl styleType="main" size="large">Сохранить</ButtonEl>
              </div>
            </template>
          </ModalWindow>
        </div>
      </SectionCard>
      <SectionCard title titleValue="Просмотры">
        <div class="settings-container">
          <KeyValueText keyText="Просмотры" valueText="Включены" type="horizontal" size="medium"/>
          <Dropdown width="200px">
            <template #trigger>
              <a>Изменить</a>
            </template>
            <template #content>
              <ul class="dropdown-list">
                <li><DropdownItem text="Выключить"/></li>
              </ul>
            </template>
          </Dropdown>
        </div>
      </SectionCard>
  </SidebarLayout>
</template>