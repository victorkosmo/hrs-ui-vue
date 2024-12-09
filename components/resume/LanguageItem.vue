<!-- components/resume/LanguageItem.vue -->
<template>
    <div class="card-medium-fit" style="background-color: var(--slate-100); gap: 10px; max-width: 500px; padding: 16px 14px">
        <p style="font-size: 16px;">{{ formattedLanguage }}</p>
    </div>
</template>

<script>
import { formatLanguage } from "@/utils/formatLanguage";

export default {
    name: "LanguageItem",
    props: {
        code: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true
        }
    },
    computed: {
        formattedLanguage() {
            return formatLanguage({ code: this.code, level: this.level });
        }
    }
};
</script>
