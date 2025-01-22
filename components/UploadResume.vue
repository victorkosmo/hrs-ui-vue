<!-- src/components/UploadResume.vue -->
<template>
  <div class="resume-upload-container" @click="triggerFileUpload">
    <p>Резюме не добавлено. Пожалуйста, загрузите резюме в формате PDF.</p>
    <div class="file-drop-area">
      <input
        type="file"
        id="fileInput"
        @change="handleFileUpload"
        accept=".pdf"
        hidden
        ref="fileInput"
      />
      <label for="fileInput" class="file-input-label">
        {{ fileName ? fileName : 'Загрузить файл' }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadResume',
  data() {
    return {
      fileName: '', // Store the selected file name
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name; // Update the file name
        this.$emit('file-uploaded', file); // Emit the file object
      }
    },
    triggerFileUpload() {
      this.$refs.fileInput.click(); // Programmatically trigger file input
    },
  },
};
</script>

<style scoped>
.resume-upload-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  border: 2px dashed var(--slate-300);
  cursor: pointer;
  transition: background-color 0.2s;
}

.resume-upload-container:hover {
  background-color: var(--slate-100); /* Hover effect */
}

.file-drop-area {
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.file-input-label {
  display: block;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  color: var(--slate-700);
  background-color: var(--slate-100);
  border: 1px solid var(--slate-300);
  transition: background-color 0.2s;
}

.file-input-label:hover {
  background-color: var(--slate-200); /* Hover effect */
}
</style>