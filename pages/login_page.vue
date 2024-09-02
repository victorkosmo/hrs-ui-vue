<!-- pages/login_page.vue -->
<script setup>
import LoginLayout from '../components/layouts/LoginLayout.vue'
import InputEl from '../components/InputEl.vue'
import ButtonEL from '../components/ButtonEl.vue'
</script>

<script>
  //go to '/vacancies' page after button click
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
      <div class="input-container">
        <InputEl
          id="login"
          type="text"
          placeholder="Логин"
          :showLabel="false"
        />
        <InputEl
          id="password"
          type="password"
          placeholder="Пароль"
          :showLabel="false"
        />
      </div>
      <ButtonEl styleType="main" size="large" @click="login">Вход</ButtonEl>
      <p>Забыли пароль?</p>
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
  gap: 20px;
}

.input-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5px;
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