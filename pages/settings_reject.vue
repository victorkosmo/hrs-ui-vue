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
import Dropdown from '../components/Dropdown.vue'
import DropdownItem from '../components/DropdownItem.vue'
import ModalWindow from '../components/ModalWindow.vue'
</script>

<template>
  <SidebarLayout :selectedTabIndex="null">
      <SectionTitle title="Настройки"/>
      <MiniTabsNav :tabs="['Профиль', 'Организация', 'Пользователи', 'Причины отказа']" :selectedIndex="3" />

        <div class="section-nav">
          <p>Причины отказов организации</p>
          <ModalButton buttonText="Добавить" modalTitle="Добавить новую причину отказа">
            <div class="input-container-lg">
              <InputEl id="reject_cause" type="text" placeholder="Название причины"/>
            </div>
            <div class="buttons-row">
              <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
              <ButtonEl styleType="main" size="large">Добавить</ButtonEl>
            </div>
          </ModalButton>
        </div>

        <SectionCard :divided="true">
          
          <div class="settings-container-padding">
            <p style="margin: 0;">Без указания причины</p>
            <p class="label-regular" style="margin: 0; color: var(--slate-400)">Базовое значение</p>
          </div>

          <div class="settings-container-padding">
            <p style="margin: 0;">Не достаточно знаний</p>
            <Dropdown width="200px">
              <template #trigger>
                <a>Изменить</a>
              </template>
              <template #content>
                <ul class="dropdown-list">
                  <ModalWindow modalTitle="Редактировать причину отказа">
                    <template #trigger="{ openModal }">
                      <DropdownItem text="Редактировать" @click="openModal"/>
                    </template>
                    <template #content>
                      <div class="input-container-lg">
                        <InputEl id="edit-reject-cause" type="text" modelValue="Не достаточно знаний"/>
                      </div>
                      <div class="buttons-row">
                        <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
                        <ButtonEl styleType="main" size="large">Сохранить</ButtonEl>
                      </div>
                    </template>
                  </ModalWindow>
                  <ModalWindow modalTitle="Удалить причину отказа">
                    <template #trigger="{ openModal }">
                      <DropdownItem text="Удалить" @click="openModal"/>
                    </template>
                    <template #content>
                      <p>Вы действительно хотите удалить причину отказа?</p>
                      <div class="buttons-row">
                        <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
                        <ButtonEl styleType="main" size="large">Удалить</ButtonEl>
                      </div>
                    </template>
                  </ModalWindow>
                </ul>
              </template>
            </Dropdown>
          </div>

          <div class="settings-container-padding">
            <p style="margin: 0;">Высокие ожидания</p>
            <Dropdown width="200px">
              <template #trigger>
                <a>Изменить</a>
              </template>
              <template #content>
                <ul class="dropdown-list">
                  <ModalWindow modalTitle="Редактировать причину отказа">
                    <template #trigger="{ openModal }">
                      <DropdownItem text="Редактировать" @click="openModal"/>
                    </template>
                    <template #content>
                      <div class="input-container-lg">
                        <InputEl id="edit-reject-cause" type="text" modelValue="Высокие ожидания"/>
                      </div>
                      <div class="buttons-row">
                        <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
                        <ButtonEl styleType="main" size="large">Сохранить</ButtonEl>
                      </div>
                    </template>
                  </ModalWindow>
                  <ModalWindow modalTitle="Удалить причину отказа">
                    <template #trigger="{ openModal }">
                      <DropdownItem text="Удалить" @click="openModal"/>
                    </template>
                    <template #content>
                      <p>Вы действительно хотите удалить причину отказа?</p>
                      <div class="buttons-row">
                        <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
                        <ButtonEl styleType="main" size="large">Удалить</ButtonEl>
                      </div>
                    </template>
                  </ModalWindow>
                </ul>
              </template>
            </Dropdown>
          </div>
          

        </SectionCard>
  </SidebarLayout>
</template>