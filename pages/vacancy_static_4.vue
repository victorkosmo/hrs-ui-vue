<!-- pagination controls demo-->
<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue'
import SectionTable from '../components/SectionTable.vue'
import ApplicantItem from '~/components/ApplicantItem.vue'
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
  </SidebarLayout>
</template>