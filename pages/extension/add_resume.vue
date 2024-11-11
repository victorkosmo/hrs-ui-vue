<!-- pages/extension/add_resume.vue -->
<script setup>
    import InputEl from '../components/InputEl.vue';
    import ButtonEl from '../components/ButtonEl.vue';
    import Dropdown from '~/components/Dropdown.vue';
    import DropdownItem from '~/components/DropdownItem.vue';
    import SelectEl from '../components/SelectEl.vue';
</script>

<template>
    <div id="extension-window" style="width: 400px; height: 600px;">
        <div class="extension-layout">
            <div class="extension-top-wrapper">
                <div class="extension-top">
                    <Dropdown width="200px">
                        <template #trigger>
                            <img src="/icons/slate/ellipsis-vertical.svg" alt="close"/>
                        </template>
                        <template #content>
                        <ul class="dropdown-list">
                            <li><DropdownItem text="Выйти"/></li>
                        </ul>
                        </template>
                    </Dropdown>
                    <img src="/public/hrs-logo.svg" alt="">
                    <img src="/icons/slate/x-mark.svg" alt="close"/>
                </div>
            </div>
            <div class="extension-container">
                <div class="extension-form-container">
                    <p>Добавить резюме</p>
                    <div class="input-container-lg">
                        <SelectEl
                            v-model="selectedValue"
                            :items="[
                            { value: '5', label: 'Product Owner / Scrum Master' },
                            { value: '12', label: 'Тестировщик' },
                            { value: '35', label: 'Java Программист' },
                            ]"
                            label="Вакансия:"
                        />
                        <InputEl
                        id="resume_title"
                        type="text"
                        modelValue="Product Manager"
                        label="Заголовок резюме:"
                        />
                        <InputEl
                        id="resume_title"
                        type="text"
                        modelValue="Иван Петров (или пустое поле)"
                        label="Имя:"
                        />
                    </div>
                    <ButtonEl styleType="main" size="large">Добавить</ButtonEl>
                    <p class="label-regular" style="color: #D32F2F;">Параграф для ошибки</p>
                </div>
            </div>
        </div>
    </div>
</template>
