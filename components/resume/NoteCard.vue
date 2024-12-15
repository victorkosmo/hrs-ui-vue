<!-- components/resume/NoteCard.vue -->
<template>
  <div class="card-medium-full" :class="{ 'editable-mode': isEditable }" style="background-color: var(--slate-100);">
    <!-- View Mode -->
    <div v-if="!isEditable" class="view-mode">
      <div id="note-card-header" class="container-row-full-split" style="padding-bottom: 8px;">
        <p class="text-semibold" v-if="isAuthor">Ваша заметка</p>
        <p class="text-semibold" v-else>{{ authorName }}</p>
        <p class="label-regular" style="color: var(--slate-400);">{{ displayedDate }}</p>
      </div>
      <p class="note-text">{{ text }}</p>
      <div v-if="isAuthor" class="container-row-full" style="justify-content: end;">
        <a href="#" @click="editNote">Изменить</a>
        <a href="#" @click="deleteNote">Удалить</a>
      </div>
    </div>

    <!-- Edit Mode -->
    <div v-else class="edit-mode">
      <textarea v-model="editedText" rows="5" style="width: 100%; border: 1px solid var(--slate-300); border-radius: 4px; padding: 8px;"></textarea>
      <div class="container-row-full" style="justify-content: end; gap: 10px;">
        <button @click="saveNote" class="save-button">Save</button>
        <button @click="cancelEdit" class="cancel-button">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { formatNoteDate } from '@/utils/formatNoteDate';

export default {
  name: "NoteCard",
  props: {
    viewerId: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editedText: this.text,
    };
  },
  computed: {
    isAuthor() {
      return this.viewerId === this.authorId;
    },
    displayedDate() {
      return formatNoteDate(this.date);
    },
  },
  methods: {
    editNote() {
      this.$emit('update:isEditable', true);
    },
    saveNote() {
      this.$emit('save', this.editedText);
      this.$emit('update:isEditable', false);
    },
    cancelEdit() {
      this.editedText = this.text;
      this.$emit('update:isEditable', false);
    },
    deleteNote() {
      this.$emit('delete');
    },
  },
};
</script>