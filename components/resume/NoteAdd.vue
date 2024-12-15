<!-- components/resume/NoteAdd.vue -->
<template>
    <div class="container-col-full" style="gap: 10px; padding-bottom: 15px; border-bottom: 1px solid var(--slate-200);">
      <h3 style="color: var(--slate-500);">Добавить заметку</h3>
      <div class="container-row-full-split">
        <div class="container-col-full">
          <InputEl
            v-model="noteText"
            id="noteText"
            type="text"
            name="noteText"
            placeholder="Новая заметка о кандидате"
          />
        </div>
        <ButtonEl styleType="main" fit @click="handleAdd">Добавить</ButtonEl>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonEl from '../ButtonEl.vue';
  import InputEl from '../InputEl.vue';
  
  export default {
    name: "NoteAdd",
    components: {
      ButtonEl,
      InputEl,
    },
    props: {
      viewerId: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        noteText: '',
      };
    },
    methods: {
      handleAdd() {
        if (this.noteText.trim() === '') return;
        this.$emit('add', {
          user_id: this.viewerId,
          applicant_id: '123e4567-e89b-12d3-a456-426614174000', // Hardcoded for demo
          text: this.noteText,
          date: new Date().toISOString(),
        });
        this.noteText = '';
      },
    },
  };
  </script>