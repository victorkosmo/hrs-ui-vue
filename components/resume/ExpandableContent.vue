<!-- components/resume/ExpandableContent.vue -->
<template>
    <div class="expandable-content">
        <div :class="{ content: true, expanded: expanded }">
            <p v-if="!expanded" v-html="formattedTruncatedContent" style="font-size: 15.5px; color: var(--slate-500);"></p>
            <p v-else ref="fullContent" v-html="formattedFullContent" style="font-size: 15.5px; color: var(--slate-500);"></p>
        </div>
        <div v-if="shouldShowButton" class="expand-button">
            <div @click="handleExpand" class="resume-block-toggle">
                <p style="color: var(--slate-500); font-size: 14.5px;">{{ expanded ? 'Свернуть' : 'Раскрыть' }}</p>
                <img 
                    :src="expanded ? '/icons/slate/chevron-up.svg' : '/icons/slate/chevron-down.svg'" 
                    alt="Toggle Icon" 
                    class="icon" 
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExpandableContent',
    props: {
        maxLength: {
            type: Number,
            default: 100
        }
    },
    data() {
        return {
            expanded: false // Controls content expansion state
        };
    },
    computed: {
        truncatedContent() {
            const content = this.$slots.default ? this.$slots.default()[0].children : '';
            return content.length <= this.maxLength ? content : content.slice(0, this.maxLength) + '...';
        },
        formattedTruncatedContent() {
            return this.formatNewlines(this.truncatedContent);
        },
        formattedFullContent() {
            const fullContent = this.$slots.default ? this.$slots.default()[0].children : '';
            return this.formatNewlines(fullContent);
        },
        shouldShowButton() {
            const content = this.$slots.default ? this.$slots.default()[0].children : '';
            return content.length > this.maxLength;
        }
    },
    methods: {
        handleExpand() {
            this.expanded = !this.expanded;
            this.$nextTick(() => {
                if (this.expanded) {
                    this.$refs.fullContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        },
        formatNewlines(text) {
            return text.replace(/\n/g, '<br>');
        }
    }
};
</script>
