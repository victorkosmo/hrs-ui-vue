<!-- components/layouts/LoginLayout.vue -->
<template>
    <div class="centered-layout">
      <slot />
    </div>
</template>
  
<style scoped>
    .centered-layout {
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100vw;
      margin: 0;
    }
</style>
  