<!-- src/components/ResumeFileFlow.vue -->
<template>
  <div>
    <div v-if="loading" class="spinner-container">
      <Spinner/>
    </div>
    <UploadResume v-else-if="!uploadedFile" @file-uploaded="handleFileUpload" />
    <UploadedResume v-else-if="uploadedFile" :file="uploadedFile" @delete-file="handleFileDelete" />
    <div v-else style="display: none;">
        <div class="error-container"></div>  <!-- Error div for production -->
      </div>    
  </div>
</template>

<script>
import UploadResume from './UploadResume.vue';
import UploadedResume from './UploadedResume.vue';
import Spinner from './Spinner.vue';

export default {
  components: {
    UploadResume,
    UploadedResume,
    Spinner
  },
  data() {
    return {
      uploadedFile: null,
      loading: false,    // Loading flag
    };
  },
  methods: {
    async handleFileUpload(file) {
    console.log('File selected in ResumeFlow:', file);
    this.loading = true;

    // Simulate API Call for file upload (not actual, just emulation)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Hardcoded file path (relative to the static folder)
    const hardcodedFilePath = '/data/samples/resume4.pdf';
    // Simulate fetching the file
    fetch(hardcodedFilePath)
      .then(response => response.blob())
      .then(blob => {
        // Create a Blob URL
        const blobUrl = URL.createObjectURL(blob);

        this.uploadedFile = {
          name: file.name,
          url: blobUrl, // In real App it will be a backend file URL
        };
        this.loading = false;
      })
      .catch(error => {
        console.error('Error fetching the file:', error);
        this.loading = false;
      });

    },
    handleFileDelete() {
      console.log('File deleted');
      URL.revokeObjectURL(this.uploadedFile.url)
      this.uploadedFile = null;
    },
  },
};
</script>
<style scoped>
.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px; /* Keep a min size*/
}
</style>
