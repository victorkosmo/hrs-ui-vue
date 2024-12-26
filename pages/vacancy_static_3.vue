<!-- pagination controls demo-->
<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue'
import SectionTable from '../components/SectionTable.vue'
import BackArrow from '../components/icons/backArrow.vue'
import ColorTag from '../components/ColorTag.vue'
import ButtonEl from '../components/ButtonEl.vue'
import StageSelector from '../components/StageSelector.vue'
import ApplicantItem from '~/components/ApplicantItem.vue'
import ApplicantModal from '~/components/ApplicantModal.vue'
import PaginationControls from '~/components/PaginationControls.vue'
import dummyApplicantList from '~/data/dummyApplicantList1.json'

import { ref, computed, nextTick } from 'vue';

// State for modal
const showModal = ref(false);
const applicantId = ref('');
const applicantName = ref('');

const openModal = (id, name) => {
  applicantId.value = id;
  applicantName.value = name;
  showModal.value = true;
};

// Pagination state
const currentPage = ref(1);
const pageSize = ref(50);
const applicantsList = ref(dummyApplicantList);

const paginatedApplicants = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return applicantsList.value.slice(start, end);
});
const updatePage = (newPage) => {
  currentPage.value = newPage;
};
</script>

<template>
  <SidebarLayout :selectedTabIndex="0">
    <div class="section-top-container">
      <div id="section-top-container-col-1" class="section-top-container-col-1">
        <BackArrow back size="40" strokeWidth="1" color="var(--slate-400)" hover="var(--blue-500)"/>
        <h2 style="color: var(--slate-500);">DevOps Engineer</h2>
        <ColorTag text="В работе" color="green"/>
      </div>
      <!-- ui filler -->
      <div id="section-top-container-col-2" class="section-top-container-col-2">
        <div class="container-row-fit" style="width: 45%;">
          <ButtonEl styleType="main">Добавить резюме</ButtonEl>
          <ButtonEl styleType="outlined">Редактировать</ButtonEl>
        </div>
      </div>
    </div>
    <StageSelector
      :stages="[
        { id: 1, title: 'Все', counter: 101 },
        { id: 2, title: 'Добавлен', counter: 83 },
        { id: 3, title: 'Отказ', counter: 12 },
        { id: 4, title: 'Скриннинг', counter: 4 },
        { id: 5, title: 'Первичное согласование', counter: 0 }
      ]"
    />
    <div id="vacancy-content-container" class="vacancy-content-container" ref="vacancyContentRef">
    <SectionTable col1Title="Кандидат" col2Title="Стадия" col3Title="Добавлен" size="small">
      <ApplicantItem
        v-for="applicant in paginatedApplicants"
        :key="applicant.id"
        :id="applicant.id"
        :keyText="applicant.keyText"
        :valueText="applicant.valueText"
        :col2Text="applicant.col2Text"
        :col3Text="applicant.col3Text"
        @click="openModal(applicant.id, applicant.keyText)"
      />
      <div class="container-col-full" style="align-items: end;">
        <PaginationControls
          v-if="applicantsList.length > pageSize"
          :total-items="applicantsList.length"
          :page-size="pageSize"
          :current-page="currentPage"
          :scroll-to-top-enabled="true"
          @pageChanged="updatePage"
        />
      </div>
    </SectionTable>
    </div>

    <!-- Demo modal that opens when 'showModal' is true -->
    <ApplicantModal
      v-if="showModal"
      :visible="showModal"
      :applicantId="applicantId"
      @close="showModal = false"
    />
  </SidebarLayout>
</template>