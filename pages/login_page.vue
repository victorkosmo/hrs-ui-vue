<!-- pages/login_page.vue -->
<script setup>
import LoginLayout from '../components/layouts/LoginLayout.vue'
import FormContainer from '../components/FormContainer.vue'
import ContentBox from '../components/ContentBox.vue'
</script>

<template>
  <LoginLayout>
    <FormContainer>
      <img src="/public/hrs-logo.svg" alt="">
      <h1>This is a test page</h1>
      <ContentBox text="This is a content box" />
    </FormContainer>
  </LoginLayout>
</template>

