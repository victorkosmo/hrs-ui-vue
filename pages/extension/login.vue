<!-- pages/extension/login.vue -->
<script setup>
    import InputEl from '../components/InputEl.vue';
    import ButtonEl from '../components/ButtonEl.vue';
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
                    <p>Войдите в учетную запись</p>
                    <div class="input-container">
                        <InputEl
                        id="user_name"
                        type="text"
                        placeholder="Логин"
                        />
                        <InputEl
                        id="password"
                        type="password"
                        placeholder="Пароль"
                        />
                    </div>
                    <ButtonEl styleType="main" size="large">Вход</ButtonEl>
                    <p class="label-regular" style="color: #D32F2F;">Параграф для ошибки</p>
                </div>
            </div>
        </div>
    </div>
</template>
