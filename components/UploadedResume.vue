<!-- components/UploadedResume.vue -->
<template>
    <div class="uploaded-resume">
      <p>Прикреплённое резюме:</p>
      <div class="container-row-full-split">
        <!-- Clickable area for the resume link -->
        <div class="resume-link" @click="openResume">
          <img src="/icons/slate/file.svg" alt="File Icon" />
          <p class="label-regular">{{ file.name }}</p>
        </div>
        <!-- Delete button (not part of the clickable link) -->
        <button @click.stop="deleteResume">Удалить</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      file: {
        type: Object,
        required: true,
        validator: (value) => value.name && value.url,
      },
    },
    methods: {
      openResume() {
        window.open(this.file.url, '_blank'); // Open the file in a new tab
      },
      deleteResume() {
        this.$emit('delete-file'); // Emit 'delete-file' event on button click
      },
    },
  };
  </script>
  
  <style scoped>
  .uploaded-resume {
    border: 1px solid var(--slate-200);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    background-color: white;
  }
  
  .container-row-full-split {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  
  .resume-link {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: var(--primary-color);
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.2s;
    flex-grow: 1; /* Take up remaining space */
  }
  
  .resume-link:hover {
    background-color: var(--slate-100); /* Hover effect */
  }
  
  .resume-link img {
    width: 20px;
    height: 20px;
  }
  
  .resume-link p {
    margin: 0;
    color: inherit;
  }
  
  button {
    padding: 8px 12px;
    cursor: pointer;
    border: 1px solid var(--slate-300);
    border-radius: 4px;
    background-color: var(--slate-100);
    color: var(--slate-700);
    transition: background-color 0.2s;
  }
  
  button:hover {
    background-color: var(--slate-200); /* Hover effect for button */
  }
  </style>