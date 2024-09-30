<!-- pages/vacancies2.vue -->
<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue' 
import SectionCard from '../components/SectionCard.vue'
import VacancyCard from '~/components/VacancyCard.vue'
import ModalWindow from '../components/ModalWindow.vue'
import InputEl from '../components/InputEl.vue'
import SelectEl from '../components/SelectEl.vue'
import ButtonEl from '../components/ButtonEl.vue'
</script>

<template>
  <SidebarLayout :selectedTabIndex="0">
      <h2 style="color: var(--slate-500);">Вакансии</h2>
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