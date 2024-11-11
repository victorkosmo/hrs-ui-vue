<!-- pages/extension/login.vue -->
<script setup>
    import Dropdown from '~/components/Dropdown.vue';
    import DropdownItem from '~/components/DropdownItem.vue';
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
                    <p class="text-regular" style="text-align: center;">Резюме успешно сохранено! (или текст ошибки)</p>
                </div>
            </div>
        </div>
    </div>
</template>
