<template>
    <div class="form-container">
      <slot />
    </div>
</template>
  
  <style scoped>
  .form-container {
    display: flex;
    width: 400px;
    padding: 5px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
  </style>
  