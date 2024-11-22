<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue' 
import BackArrow from '../components/icons/backArrow.vue'
import ColorTag from '../components/ColorTag.vue'
import ModalWindow from '../components/ModalWindow.vue'
import InputEl from '../components/InputEl.vue'
import ButtonEl from '../components/ButtonEl.vue'
import SelectEl from '../components/SelectEl.vue'
import StageSelector from '../components/StageSelector.vue'
import MiniTabsNav from '../components/MiniTabsNav.vue'
import ApplicantItem from '~/components/ApplicantItem.vue'
import ApplicantModal from '~/components/ApplicantModal.vue'

import { ref } from 'vue';

const showModal = ref(false);
const applicantId = ref('');
const applicantName = ref('');

const openModal = (id, name) => {
  applicantId.value = id;
  applicantName.value = name;
  showModal.value = true;
};
</script>

<template>
    <SidebarLayout :selectedTabIndex="0">
        <div class="section-top-container">
            <div id="section-top-container-col-1" class="section-top-container-col-1">
                <BackArrow back size="40" strokeWidth="1" color="var(--slate-400)" hover="var(--blue-500)"/>
                <h2 style="color: var(--slate-500);">DevOps Инженер</h2>
                <ColorTag text="В работе" color="green"/>
            </div>
            <div id="section-top-container-col-2" class="section-top-container-col-2">
                <!-- обе кнопки помещаются в container-row-fit -->
                <div class="container-row-fit">
                    <ModalWindow modalTitle="Добавить резюме">
                        <template #trigger="{ openModal }">
                            <ButtonEl styleType="main" @click="openModal">Добавить резюме</ButtonEl>
                        </template>
                        <template #content>
                            <div class="input-container-lg">
                                <InputEl id="user_name" type="text" placeholder="Имя кандидата" :showLabel="true" label="Имя"/>
                                <!-- в заголовок резюме вставляется значение вкансии, которое можно редактировать -->
                                <InputEl id="resume_title" type="text" 
                                modelValue="DevOps Инженер"
                                 :showLabel="true" label="Заголовок резюме"/>
                                 <!-- контактный номер можно оставить пустым -->
                                 <InputEl id="resume_phone" type="text" placeholder="Контактный номер" :showLabel="true" label="Телефон"/>
                                <SelectEl
                                    v-model="selectedValue"
                                    :items="[
                                        { value: 'hh', label: 'HH.RU' },
                                        { value: 'linkedin', label: 'Linkedin' },
                                        { value: 'referral', label: 'Личный контакт' },
                                        { value: 'other', label: 'Другое' },
                                    ]"
                                    label="Источник"/>
                            </div>
                            <div class="buttons-row">
                                <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
                                <ButtonEl styleType="main" size="large">Добавить</ButtonEl>
                            </div>
                        </template>
                    </ModalWindow>
                    <ModalWindow modalTitle="Редактировать вакансию">
                        <template #trigger="{ openModal }">
                            <ButtonEl styleType="outlined" @click="openModal">Редактировать</ButtonEl>
                        </template>
                        <template #content>
                            <MiniTabsNav :tabs="['Общее', 'Процесс']" :selectedIndex="0" />
                            <div class="input-container-lg">
                                <InputEl id="vacancy_title" type="text" modelValue="DevOps Инженер" :showLabel="true" label="Заголовок вакансии"/>
                                <!-- назначать менеджера может только админ -->
                                <SelectEl
                                v-model="selectedValue"
                                :items="[
                                { value: '5', label: 'Иван Иванов' },
                                { value: '12', label: 'Ольга В.' },
                                ]"
                                label="Менеджер вакансии"/>
                                <SelectEl
                                v-model="selectedValue"
                                :items="[
                                { value: 'active', label: 'В работе' },
                                { value: 'paused', label: 'Приостановлена' },
                                { value: 'closed', label: 'Закрыта' },
                                { value: 'draft', label: 'Черновик' },
                                ]"
                                label="Статус вакансии"/>
                                <InputEl id="vacancy_description" type="text" modelValue="DevOps Инженер в отдел разрабтки" :showLabel="true" label="Описание вакансии"/>
                            </div>
                                <div class="buttons-row">
                                <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
                                <ButtonEl styleType="main" size="large">Сохранить</ButtonEl>
                            </div>
                        </template>
                    </ModalWindow>
                </div>
            </div>
        </div>
        <StageSelector
              :stages="[
                { id: 1, title: 'Добавлен' },
                { id: 2, title: 'Отказ' },
                { id: 3, title: 'Скрининг' },
                { id: 4, title: 'Первичное согласование' }
              ]"
            />
        <div id="vacancy-content-container" class="vacancy-content-container">
            <SectionTable col1Title="Кандидат" col2Title="Стадия" col3Title="Добавлен" size="small">
                <ApplicantItem id="123" keyText="Алексей Пономарев" valueText="Product Manager b2b" col2Text="Первичное согласование" col3Text="10 мин. назад" @click="openModal('123', 'Алексей Пономарев')"/>
                <ApplicantItem id="124" keyText="Alexander Guselnikov" valueText="Product manager" col2Text="Отказ" col3Text="1 ч. назад"/>
                <ApplicantItem id="125" keyText="Савилова Елена" valueText="Product Owner / Product manager" col2Text="Скрининг" col3Text="6 дн. назад"/>
                <ApplicantItem id="126" valueText="Product manager" col2Text="Добавлен" col3Text="6 мес. назад"/>
                <ApplicantItem id="127" valueText="CPO (Chief Product Owner / Chief Product Officer)" col2Text="Добавлен" col3Text="6 мес. назад"/>
            </SectionTable>
        </div>

        <!-- Modal that opens when 'showModal' is true -->
        <ApplicantModal
            v-if="showModal"
            :visible="showModal"
            :applicantId="applicantId"
            @close="showModal = false"
        />
    </SidebarLayout>
</template>