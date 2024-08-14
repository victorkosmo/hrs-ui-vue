<template>
    <div class="content-box">
      <p class="regular-semibold">{{ text }}</p>
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ContentBox',
    props: {
      text: {
        type: String,
        required: true
      }
    }
  });
  </script>
  
  <style scoped>
  .content-box {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  </style>
  