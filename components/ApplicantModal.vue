<!-- components/ApplicantModal.vue -->
<template>
    <Teleport to="body">
      <div v-if="visible" class="side-modal-overlay" @click.self="$emit('close')">
        <div class="side-modal-container">
          <div class="side-modal-header">
            <h3 style="color: var(--slate-500)">Информация о кандидате</h3>
            <a style="cursor: pointer" @click="$emit('close')">Закрыть</a>
          </div>
          <div class="side-modal-body">
            <p>Applicant ID: {{ applicantId }}</p>
          </div>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script>
  export default {
    name: "ApplicantModal",
    props: {
      visible: {
        //for deomnstartion only
        type: Boolean,
        required: true,
      },
      applicantId: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
      