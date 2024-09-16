<!-- pages/settings_company.vue -->
<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue' 
import SectionTitle from '../components/SectionTitle.vue'
import MiniTab from '../components/MiniTab.vue'
import MiniTabsNav from '../components/MiniTabsNav.vue'
import SectionCard from '../components/SectionCard.vue'
import KeyValueText from '~/components/KeyValueText.vue'
import TableItem from '../components/TableItem.vue'
import SectionTable from '../components/SectionTable.vue'
import ModalButton from '../components/ModalButton.vue'
import InputEl from '../components/InputEl.vue'
import SelectEl from '../components/SelectEl.vue'
import Dropdown from '../components/Dropdown.vue'
import CirclesIcn from '../components/icons/circlesIcn.vue'
</script>

<template>
  <SidebarLayout :selectedTabIndex="null">
      <SectionTitle title="Настройки"/>
      <MiniTabsNav :tabs="['Профиль', 'Организация', 'Пользователи', 'Причины отказа']" :selectedIndex="2" />
        <div class="section-nav">
          <p>Пользователи организации</p>
          <ModalButton buttonText="Пользователь" modalTitle="Добавить нового пользователя">
            <div class="input-container-lg">
              <InputEl id="user_name" type="text" placeholder="Имя пользователя" :showLabel="true"
                label="Имя"/>
              <InputEl id="user_name" type="text" placeholder="Почта пользователя" :showLabel="true"
                label="Почта"/>
              <SelectEl
              v-model="selectedValue"
              :items="[
                { value: 'recruiter', label: 'Рекрутер' },
                { value: 'client', label: 'Заказчик' },
                { value: 'follower', label: 'Наблюдатель' },
              ]"
              label="Роль пользователя"/>
            </div>
            <div class="buttons-row">
              <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
              <ButtonEl styleType="main" size="large">Добавить</ButtonEl>
            </div>
          </ModalButton>
        </div>
        <SectionTable col1Title="Пользователь" col2Title="Роль" col3Title="Статус">
          <TableItem keyText="Ivan Ivanov" valueText="ivanov.i@gmail.com" col2Text="Админ" col3Text="Активный">
            <template #options>
              <CirclesIcn color="var(--slate-300)" size="26" />
            </template>
          </TableItem>
          <TableItem keyText="Ольга Петрова" valueText="petrova52@yahoo.com" col2Text="Рекрутер" col3Text="Активный">
            <template #options>
              <Dropdown width="220px">
                <template #trigger>
                  <CirclesIcn color="var(--slate-400)" size="26" hover="var(--blue-500)"/>
                </template>
                <template #content>
                  <ul class="dropdown-list">
                    <DropdownItem text="Ограничить доступ"/>
                  </ul>
                </template>
              </Dropdown>
            </template>
          </TableItem>
          <TableItem keyText="Анна Смирнова" valueText="smirnova.aa@yandex.ru" col2Text="Заказчик" col3Text="Приглашение отправлено">
            <template #options>
              <Dropdown width="220px">
                <template #trigger>
                  <CirclesIcn color="var(--slate-400)" size="26" hover="var(--blue-500)"/>
                </template>
                <template #content>
                  <ul class="dropdown-list">
                    <DropdownItem text="Ограничить доступ"/>
                  </ul>
                </template>
              </Dropdown>
            </template>
          </TableItem>
          <TableItem keyText="Алексей" valueText="alekseev@adlandev.com" col2Text="Наблюдатель" col3Text="Доступ ограничен">
            <template #options>
              <Dropdown width="220px">
                <template #trigger>
                  <CirclesIcn color="var(--slate-400)" size="26" hover="var(--blue-500)"/>
                </template>
                <template #content>
                  <ul class="dropdown-list">
                    <DropdownItem text="Открыть доступ"/>
                  </ul>
                </template>
              </Dropdown>
            </template>
          </TableItem>
        </SectionTable>
  </SidebarLayout>
</template>