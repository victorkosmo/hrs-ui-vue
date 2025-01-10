<!-- pages/vacancies2.vue -->
<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue' 
import SectionCard from '../components/SectionCard.vue'
import VacancyCard from '~/components/VacancyCard.vue'
import ModalWindow from '../components/ModalWindow.vue'
import InputEl from '../components/InputEl.vue'
import SelectEl from '../components/SelectEl.vue'
import ButtonEl from '../components/ButtonEl.vue'
import SelectionTab from '../components/SelectionTab.vue'
import SelectionTabsContainer from '../components/SelectionTabsContainer.vue'
</script>

<template>
  <SidebarLayout :selectedTabIndex="0">
      <div class="section-top-container">
        <h2 style="color: var(--slate-500);">Вакансии</h2>
        <SelectionTabsContainer>
            <SelectionTab :selected="true" text="Messages" :counter="true" :number="5" />
            <SelectionTab :selected="false" text="Notifications" :counter="true" :number="12" />
            <SelectionTab :selected="false" text="Settings" :counter="true" :number="20" />
        </SelectionTabsContainer>
        <ModalWindow modalTitle="Создать новую вакансию">
            <template #trigger="{ openModal }">
              <ButtonEl @click="openModal">Новая вакансия</ButtonEl>
            </template>
            <template #content>
              <div class="input-container-lg">
                <InputEl id="vacancy_title" type="text" placeholder="Название вакансии" :showLabel="true" label="Название вакансии"/>
                <!-- выбор менеджера, дефолтное значение - id админа, если в компании есть рекрутеры то в списке появятся их id -->
                <SelectEl
                v-model="selectedValue"
                :items="[
                  { value: '5', label: 'Иван Иванов' },
                  { value: '12', label: 'Ольга В.' },
                ]"
                label="Назначить менеджера"/>
                <InputEl id="vacancy_description" type="text" placeholder="Можно оставить пустым" :showLabel="true" label="Описание вакансии"/>
              </div>
              <div class="buttons-row">
                <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
                <ButtonEl styleType="main" size="large">Создать</ButtonEl>
              </div>
            </template>
        </ModalWindow>
      </div>
      <VacancyCard
        :id="123"
        title="Software Engineer"
        :applicantsTotal="50"
        :applicantsOnStage="10"
        :tags="[{ text: 'Remote'}]"
        status="active"
      />
      <VacancyCard
        :id="124"
        title="Frontend Developer"
        :applicantsTotal="150"
        :applicantsOnStage="21"
        :tags="[{ text: 'On-site' }, { text: 'Contract'}, { text: 'Remote'}]"
        status="paused"
      />
      <VacancyCard
        :id="125"
        title="Backend Engineer"
        :applicantsTotal="200"
        :applicantsOnStage="12"
        status="closed"
      />
      <VacancyCard
        :id="126"
        title="Fullstack Developer"
        :applicantsTotal="300"
        :applicantsOnStage="9"
        status="draft"
      />
      <VacancyCard
        :id="127"
        title="Менеджер проектов"
        :tags="[{ text: 'On-site' }, { text: 'Contract'}, { text: 'Отдел продаж'}, { text: 'Для Ивана Иванова'}]"
        :applicantsTotal="300"
        :applicantsOnStage="20"
      />
  </SidebarLayout>
</template>