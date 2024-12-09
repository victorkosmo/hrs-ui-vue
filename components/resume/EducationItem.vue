<!-- components/resume/EducationItem.vue -->
<template>
    <div class="card-medium-fit" style="background-color: var(--slate-100); gap: 10px; max-width: 500px; padding: 16px 14px">
        <p>{{ title }}</p>
        <p class="text-semibold" style="font-size: 16px;">{{ institution }}</p>
        <p style="font-size: 15px;">{{ formattedPeriod }}</p>
    </div>
</template>

<script>
import { formatEducationPeriod } from '../../utils/formatEducationPeriod';

export default {
    name: "EducationItem",
    props: {
        institution: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        period: {
            type: Object,
            required: true,
            validator: (value) => {
                return ['start', 'end', 'is_current'].some(key => value.hasOwnProperty(key));
            }
        }
    },
    computed: {
        formattedPeriod() {
            return formatEducationPeriod(this.period);
        }
    }
}
</script>
