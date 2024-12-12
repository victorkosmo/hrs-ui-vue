<template>
  <Teleport to="body">
    <div v-if="visible" class="side-modal-overlay" @click.self="$emit('close')">
      <div class="side-modal-container" style="background-color: var(--slate-100);">
        <!-- Top Section: Applicant Info -->
        <div id="applicant-modal-top" class="container-col-full" style="padding: 16px 16px;">
          <div id="applicant-info" class="container-row-full-split">
            <KeyValueText :type="'vertical'" :keyText="applicantData.name" :valueText="applicantData.resumeTitle" />
            <div class="container-col-fit" style="gap: 2px;">
              <ColorTag :text="applicantData.source" color="red" />
              <ColorTag :text="applicantData.location" color="gray" />
            </div>
          </div>
          <div id="applicant-stage-control" class="card-medium-full" style="padding: 12px;">
            <div class="container-row-full-split">
              <KeyValueText :type="'horizontal'" :keyText="'Этап:'" :valueText="applicantData.stageTitle" />
              <div class="container-row-fit">
                <Dropdown width="220px">
                  <template #trigger>
                    <ButtonEl styleType="outlined" fit>Перевести</ButtonEl>
                  </template>
                  <template #content>
                    <ul class="dropdown-list">
                      <DropdownItem 
                        v-for="(stage, index) in vacancyInfo.stageList" 
                        :key="index" 
                        :text="stage" 
                      />
                    </ul>
                  </template>
                </Dropdown>
                <Dropdown width="220px">
                  <template #trigger>
                    <ButtonEl styleType="outlined" fit>Отказ</ButtonEl>
                  </template>
                  <template #content>
                    <ul class="dropdown-list">
                      <DropdownItem 
                        v-for="(stage, index) in vacancyInfo.rejectList" 
                        :key="index" 
                        :text="stage" 
                      />
                    </ul>
                  </template>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <!-- Tabs Section -->
        <div id="applicant-modal-content" class="container-col-fill" style="gap: 0px;">
          <div class="container-row-fit" style="padding: 0px 16px;">
            <!-- Tabs for switching content -->
            <CornerTab
              title="Резюме"
              icon="icons/slate/clipboard.svg"
              :selected="activeTab === 'resume'"
              @click="setActiveTab('resume')"
            />
            <CornerTab
              title="Контакты"
              icon="icons/slate/identification.svg"
              :selected="activeTab === 'contacts'"
              @click="setActiveTab('contacts')"
            />
            <CornerTab
              title="Заметки"
              icon="icons/slate/pencil-square.svg"
              :selected="activeTab === 'notes'"
              @click="setActiveTab('notes')"
            />
          </div>
          <!-- Dynamic Content Based on Active Tab -->
          <div class="modal-tabs-container">
            <div class="corner-tab-content" v-if="activeTab === 'resume'">
              <ApplicantResume :resume-data="applicantData.resume" />
            </div>
            <div class="corner-tab-content" v-if="activeTab === 'contacts'">
              <ApplicantContacts :phone="applicantData.phoneNumber" :email="applicantData.email" :whatsapp="applicantData.whatsapp" :telegram="applicantData.telegram" />
            </div>
            <div class="corner-tab-content" v-if="activeTab === 'notes'">
              <p>Notes:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import ColorTag from './ColorTag.vue';
import KeyValueText from './KeyValueText.vue';
import ButtonEl from './ButtonEl.vue';
import CornerTab from './CornerTab.vue';
import Dropdown from './Dropdown.vue';
import ApplicantContacts from './ApplicantContacts.vue';
import resumeData from '~/data/samples/resume3.json'; // Import JSON data from the "data" folder

export default {
  name: 'ApplicantModal',
  props: {
    visible: {
      // Demo purpose only
      type: Boolean,
      required: true,
    },
    applicantId: {
      type: String,
      required: true,
    },
  },
  // Dummy data for demo purposes only
  data() {
    return {
      applicantData: {
        name: 'Alexander Guselnikov',
        resumeTitle: 'Product Manager',
        source: 'HH.RU',
        location: 'Москва',
        stageTitle: 'Первичное согласование',
        phoneNumber: '+7 900 123 45 67', //phone_number value in DB
        email: '',
        whatsapp: '',
        telegram: '@testusername',
        resume: resumeData, // Assign the imported JSON to the "resume" field
      },
      vacancyInfo: {
        stageList: ['Добавлен', 'Скрининг', 'Оффер'],
        rejectList: ['Слабые навыки', 'Мало опыта', 'Другое']
      },
      activeTab: 'resume', // Default active tab
    };
  },
  // Dummy tab methods for demo purposes only
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName; // Set the active tab
    },
  },
};
</script>
