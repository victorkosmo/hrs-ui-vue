<!-- components/ApplicantNotes.vue -->
<template>
    <div id="notes-content" class="container-col-full" style="gap:20px;">
      <NoteAdd :viewerId="viewerId" @add="addNote" />
      <div id="notes-list" class="container-col-full" style="gap:10px;">
        <div style="width: 100%;" v-for="note in notes" :key="note.id">
          <NoteCard
            :viewerId="viewerId"
            :authorId="note.user_id"
            :authorName="note.user_name"
            :date="note.date"
            :text="note.text"
            :isEditable="note.isEditable"
            @update:isEditable="note.isEditable = $event"
            @save="saveNote(note, $event)"
            @delete="removeNote(note.id)"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NoteAdd from './resume/NoteAdd.vue';
  import NoteCard from './resume/NoteCard.vue';
  
  export default {
    name: "ApplicantNotes",
    components: {
      NoteAdd,
      NoteCard,
    },
    props: {
      notesData: {
        type: Object,
        required: true,
      },
      viewerId: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        notes: [],
      };
    },
    created() {
      this.initializeNotes();
    },
    watch: {
      notesData: {
        deep: true,
        handler(newVal) {
          this.initializeNotes();
        },
      },
    },
    methods: {
      initializeNotes() {
        this.notes = this.notesData.notes.map(note => ({
          ...note,
          isEditable: false,
        }));
      },
      addNote(newNote) {
        const newNoteWithId = {
          ...newNote,
          id: `note-${this.noteIdCounter++}`,
          date: new Date().toISOString(),
          isEditable: false,
        };
        this.notes.push(newNoteWithId);
      },
      saveNote(note, newText) {
        note.text = newText;
        note.date = new Date().toISOString();
      },
      removeNote(noteId) {
        this.notes = this.notes.filter(note => note.id !== noteId);
      },
    },
  };
  </script>