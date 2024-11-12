<!-- components/ApplicantItem.vue -->
<template>
    <div :id="id" class="applicant-item">
      <!-- Column 1: Key-Value Text -->
      <div class="col col-1">
        <div class="applicant-key-value-text">
          <p class="key-value-wrapper" style="font-weight: 500; font-size: 15.5px;">{{ keyText }}</p>
          <p class="key-value-wrapper" style="color: var(--slate-400); font-size: 15px;">{{ valueText }}</p>
        </div>
      </div>
      
      <!-- Column 2: Description -->
      <div class="col col-2">
        <p class="label-regular" style="color: var(--slate-600);">{{ col2Text }}</p>
      </div>
      
      <!-- Column 3: Additional Text -->
      <div class="col col-3">
        <p class="label-regular" style="color: var(--slate-400);">{{ col3Text }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ApplicantItem",
    props: {
      id: {
        type: String,
        required: true,
      },
      keyText: {
        type: String,
        default: "Анонимное резюме", // Default text if keyText is not provided
      },
      valueText: {
        type: String,
        required: true,
      },
      col2Text: {
        type: String,
        required: true,
      },
      col3Text: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .applicant-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 8px 20px;
    box-sizing: border-box;
    cursor: pointer;
  }
  
  .applicant-item:hover {
    background-color: var(--slate-50);
  }
  
  .col {
    display: flex;
    align-items: center;
  }
  
  .col-1 {
    width: 50%;
  }
  
  .col-2 {
    width: 20%;
  }
  
  .col-3 {
    width: 30%;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  }
  
  .applicant-key-value-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  .text-wrapper {
    font-weight: bold;
    color: var(--slate-700);
  }
  
  .value-wrapper {
    color: var(--slate-500);
  }
  
  .icon-instance {
    height: 24px;
    width: 24px;
  }
  
  .key-value-wrapper {
    display: inline-block;
    padding: 0;
    margin: 0;
    line-height: normal;
  }
  </style>
