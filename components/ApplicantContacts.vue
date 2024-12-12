<!-- components/ApplicantContacts.vue -->
<template>
    <div class="container-col-full" style="gap: 12px;">
        <!-- Dynamically render non-null contacts at the top -->
        <template v-for="(contact, key) in sortedContacts" :key="key">
            <ContactItem
                :title="key.charAt(0).toUpperCase() + key.slice(1)"
                :value="contact"
                @save="handleSave"
            />
        </template>
    </div>
</template>

<script>
import ContactItem from './resume/ContactItem.vue';

export default {
    name: "ApplicantContacts",
    components: {
        ContactItem
    },
    props: {
        phone: {
            type: String,
            required: true,
            default: ''
        },
        email: {
            type: String,
            required: true,
            default: ''
        },
        whatsapp: {
            type: String,
            required: true,
            default: ''
        },
        telegram: {
            type: String,
            required: true,
            default: ''
        }
    },
    data() {
        return {
            contacts: {
                phone: this.phone,
                email: this.email,
                whatsapp: this.whatsapp,
                telegram: this.telegram
            }
        };
    },
    computed: {
        // Computed property to sort contacts with non-null values at the top
        sortedContacts() {
            return Object.keys(this.contacts)
                .sort((a, b) => (this.contacts[b] ? 1 : 0) - (this.contacts[a] ? 1 : 0))
                .reduce((sorted, key) => {
                    sorted[key] = this.contacts[key];
                    return sorted;
                }, {});
        }
    },
    methods: {
        // Handle the "save" event from ContactItem
        handleSave(contactType, newValue) {
            console.log(`Saving ${contactType}: ${newValue}`);
            this.contacts[contactType.toLowerCase()] = newValue; // Update the contact value
            // Emit an event to the parent component if needed
            this.$emit('update', contactType.toLowerCase(), newValue);
        }
    }
}
</script>