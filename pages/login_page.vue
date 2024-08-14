<!-- pages/login_page.vue -->
<script setup>
import LoginLayout from '../components/layouts/LoginLayout.vue'
import ContentBox from '../components/ContentBox.vue'
import InputEl from '../components/InputEl.vue'
import ButtonEL from '../components/ButtonEl.vue'
</script>

<template>
  <LoginLayout>
    <div class="form-container">
      <img src="/public/hrs-logo.svg" alt="">
      <div class="input-container">
        <InputEl
          id="login"
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
      <p>Забыли пароль?</p>
    </div>
  </LoginLayout>
</template>

<style scoped>
  .form-container {
    display: flex;
    width: calc(100% / 3);
    padding: 5px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  .input-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
</style>

  

