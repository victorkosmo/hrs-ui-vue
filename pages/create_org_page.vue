<!-- pages/login_page.vue -->
<script setup>
import LoginLayout from '../components/layouts/LoginLayout.vue'
import InputEl from '../components/InputEl.vue'
import ButtonEL from '../components/ButtonEl.vue'
</script>

<script>
  export default {
  components: {
    LoginLayout,
    InputEl,
    ButtonEL
  },
  methods: {
    login() {
      this.$router.push('/vacancies')
    }
  }
}
</script>

<template>
  <LoginLayout>
    <div class="form-container">
      <img src="/public/hrs-logo.svg" alt="HRS Logo">
      <h2 style="color: var(--slate-400);">Создание организации</h2>
      <div class="input-container-lg">
        <InputEl
          id="user_name"
          type="text"
          placeholder="Имя"
          :showLabel="true"
          label="Имя"
        />
        <InputEl
          id="user_email"
          type="email"
          placeholder="Рабочая почта"
          :showLabel="true"
          label="Почта"
        />
        <InputEl
          id="user_company"
          type="text"
          placeholder="Название компании"
          :showLabel="true"
          label="Компания"
        />
        <InputEl
          id="password"
          type="password"
          placeholder="Пароль"
          :showLabel="true"
          label="Пароль"
        />
        <InputEl
          id="password2"
          type="password"
          placeholder="Подтвердите пароль"
          :showLabel="true"
          label="Подтвердите пароль"
        />
      </div>
      <ButtonEl styleType="main" size="large" @click="login">Создать</ButtonEl>
    </div>
  </LoginLayout>
</template>

<style scoped>
.form-container {
  display: flex;
  width: 100%;
  max-width: 400px;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.input-container-lg {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
}

@media screen and (min-width: 768px) {
  .form-container {
    width: 50%;
  }
}

@media screen and (min-width: 1440px) {
  .form-container {
    width: 25%;
  }
}
</style>