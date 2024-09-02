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
      <MiniTabsNav :tabs="['Профиль', 'Организация', 'Пользователи', 'Причины отказа']" :selectedIndex="2" />
        <div class="section-nav">
          <p>Пользователи организации</p>
          <ButtonEl icon fit>Пользователь</ButtonEl>
        </div>
        <SectionTable col1Title="Пользователь" col2Title="Роль" col3Title="Статус">
          <TableItem keyText="Ivan Ivanov" valueText="ivanov.i@gmail.com" col2Text="Админ" col3Text="Активный" icnBtn/>
          <TableItem keyText="Ольга Петрова" valueText="petrova52@yahoo.com" col2Text="Рекрутер" col3Text="Активный" icnBtn/>
          <TableItem keyText="Анна Смирнова" valueText="smirnova.aa@yandex.ru" col2Text="Заказчик" col3Text="Активный" icnBtn/>
          <TableItem keyText="Алексей" valueText="alekseev@adlandev.com" col2Text="Наблюдатель" col3Text="Доступ ограничен" icnBtn/>
        </SectionTable>
  </SidebarLayout>
</template>