<!-- components/resume/ResumeContentExpirience.vue -->
<template>
    <div class="card-medium-full" style="background-color: var(--slate-100); gap: 14px; padding: 14px 12px;">
        <div class="container-row-full-split" style="border-bottom: 1px solid var(--slate-200); padding-bottom: 10px;">
            <div class="container-col-fit">
                <p class="text-semibold">{{ company }}</p>
                <p>{{ title }}</p>
            </div>
            <p v-html="formattedPeriod" style="text-align: right; color: var(--slate-500); font-size: 15px;"></p>
        </div>
        <ExpandableContent 
            :max-length="200">
            {{ description }}
        </ExpandableContent>
    </div>
</template>

<script>
import ExpandableContent from './ExpandableContent.vue';
import { formatPeriod } from '@/utils/formatPeriod';

export default {
    name: 'ResumeContentExperience',
    components: {
        ExpandableContent
    },
    props: {
        company: String,
        title: String,
        period: Object,
        description: String
    },
    computed: {
        formattedPeriod() {
            return formatPeriod(this.period);
        }
    }
};
</script>
