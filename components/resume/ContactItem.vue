<!-- components/resume/ContactItem.vue -->
<template>
    <div
        class="container-row-full-split"
        style="padding-bottom: 12px; border-bottom: 1px solid var(--slate-200);"
        @click="handleClickOutside"
        ref="contactItem"
    >
        <p>{{ title }}:</p>
        <div v-if="isEditing" class="container-row-fit" style="gap: 12px;">
            <input
                type="text"
                v-model="editedValue"
                ref="inputField"
                @keydown.enter="handleSave"
                @blur="handleCancel"
                style="padding: 4px; border: 1px solid var(--slate-200); border-radius: 4px;"
            />
            <button class="save-button" @click="handleSave">Сохранить</button>
        </div>
        <div v-else class="container-row-fit" style="gap: 12px;">
            <p v-if="value">{{ value }}</p>
            <img
                v-if="value"
                src="/icons/slate/pencil-square.svg"
                alt="edit"
                style="cursor: pointer;"
                @click.stop="handleEdit"
            />
            <img
                v-else
                src="/icons/slate/plus-circle.svg"
                alt="add"
                style="cursor: pointer;"
                @click.stop="handleAdd"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactItem',
    props: {
        title: {
            type: String,
            required: true
        },
        value: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            isEditing: false, // Tracks whether the input is being edited
            editedValue: this.value || '' // Stores the current value of the input
        };
    },
    methods: {
        // Handle the "edit" icon click
        handleEdit() {
            this.isEditing = true;
            this.editedValue = this.value; // Set the input value to the current value
            this.$nextTick(() => {
                this.$refs.inputField.focus(); // Focus the input field
            });
        },
        // Handle the "add" icon click
        handleAdd() {
            this.isEditing = true;
            this.editedValue = ''; // Set the input value to empty
            this.$nextTick(() => {
                this.$refs.inputField.focus(); // Focus the input field
            });
        },
        // Handle the "Save" button click
        handleSave() {
            this.isEditing = false;
            this.$emit('save', this.title, this.editedValue); // Emit the updated value to the parent
        },
        // Handle clicking outside the input to cancel editing
        handleCancel() {
            this.isEditing = false;
            this.editedValue = this.value || ''; // Reset to the original value
        },
        // Detect clicks outside the component to cancel editing
        handleClickOutside(event) {
            if (this.isEditing && !this.$refs.contactItem.contains(event.target)) {
                this.handleCancel();
            }
        }
    }
}
</script>

<style scoped>
input {
    flex: 1;
}

.save-button {
    padding: 4px 10px;
    background-color: var(--slate-100);
    border: 1px solid var(--slate-200);
    border-radius: 4px;
    cursor: pointer;
}

.save-button:hover {
    background-color: var(--slate-200);
}
</style>