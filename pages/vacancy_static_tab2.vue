<script setup>
import SidebarLayout from '../components/layouts/SidebarLayout.vue' 
import SectionCard from '../components/SectionCard.vue'
import BackArrow from '../components/icons/backArrow.vue'
import ColorTag from '../components/ColorTag.vue'
import ModalWindow from '../components/ModalWindow.vue'
import InputEl from '../components/InputEl.vue'
import ButtonEl from '../components/ButtonEl.vue'
import SelectEl from '../components/SelectEl.vue'
import StageSelector from '../components/StageSelector.vue'
import MiniTabsNav from '../components/MiniTabsNav.vue'
import StageItemFiller from '../components/StageItemFiller.vue'
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
                        <MiniTabsNav :tabs="['Общее', 'Процесс']" :selectedIndex="1" />
                        <div class="input-container-lg">
                            <StageItemFiller id="1" stageTitle="Добавлен" />
                            <StageItemFiller id="2" stageTitle="Отказ" />
                            <StageItemFiller id="3" stageTitle="Скрининг" />
                            <StageItemFiller id="4" stageTitle="Первичное согласование" />
                        </div>
                            <div class="buttons-row">
                            <ButtonEl styleType="outlined" size="large">Отмена</ButtonEl>
                            <ButtonEl styleType="main" size="large">Сохранить</ButtonEl>
                        </div>
                    </template>
                </ModalWindow>
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
        <div id="vacancy-content-container">
            <p>DevOps Инженер в отдел разрабтки</p>
        </div>
    </SidebarLayout>
</template>