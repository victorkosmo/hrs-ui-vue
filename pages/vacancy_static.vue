<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue' 
import SectionCard from '../components/SectionCard.vue'
import BackArrow from '../components/icons/backArrow.vue'
import ColorTag from '../components/ColorTag.vue'
import ModalWindow from '../components/ModalWindow.vue'
import InputEl from '../components/InputEl.vue'
import ButtonEl from '../components/ButtonEl.vue'
import SelectEl from '../components/SelectEl.vue'
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
                <ModalWindow modalTitle="Редактировать вакансию">
                    <template #trigger="{ openModal }">
                        <ButtonEl styleType="outlined" @click="openModal">Редактировать</ButtonEl>
                    </template>
                    <template #content>
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
        <div id="vacancy-content-container">
            <p>DevOps Инженер в отдел разрабтки</p>
        </div>
    </SidebarLayout>
</template>