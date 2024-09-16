<!-- components/DropdownItem.vue -->
<template>
    <component :is="elementType" :href="link" class="dropdown-item-div" @click="handleClick">
        <p class="dropdown-item-text">{{ text }}</p>
    </component>
</template>

<script>
export default {
    name: 'DropdownItem',
    props: {
        text: {
            type: String,
            default: 'Text'
        },
        link: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'button', // Default to button
            validator: function(value) {
                return ['link', 'button'].includes(value);
            }
        },
        action: {
            type: Function,
            default: () => {}
        }
    },
    computed: {
        elementType() {
            return this.type === 'link' ? 'a' : 'div';
        }
    },
    methods: {
        handleClick(event) {
            if (this.type === 'button') {
                event.preventDefault(); // Prevent default action for buttons
                this.action(); // Call the custom action
            }
        }
    }
}
</script>
