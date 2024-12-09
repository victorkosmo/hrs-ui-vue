<!-- components/resume/ResumeContentAbout.vue -->
<template>
    <div class="card-medium-full" style="background-color: var(--slate-100); gap: 14px; padding: 20px 12px;">
        <ExpandableContent :max-length="200">
            {{ description }}
        </ExpandableContent>
    </div>
</template>

<script>
import ExpandableContent from './ExpandableContent.vue';
export default {
    name: 'ResumeContentAbout',
    components: {
        ExpandableContent
    },
    props: {
        description: String
    }
};
</script>
