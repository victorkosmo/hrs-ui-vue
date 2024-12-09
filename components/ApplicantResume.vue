<!-- components/ApplicantResume.vue -->
<template>
    <div class="resume-wrapper">
        <div class="resume-scroll-container" ref="scrollableContainer">
            <div class="resume-content-container">
                <!-- Experience Section starts-->
                <div id="resume-exp" class="container-col-full">
                    <div id="resume-exp-title" class="container-row-fit" style="padding-bottom: 10px;">
                        <h3 style="color: var(--slate-500);">Опыт работы</h3>
                        <p style="padding: 8px 16px; background-color: var(--slate-100); border-radius: 10px; margin-left: 4px;" v-if="resumeData.work_experience?.total_months">
                            {{ formatWorkExperience(resumeData.work_experience.total_months) }}
                        </p>
                    </div>
                    <div id="resume-exp-content" class="container-col-full">
                        <ResumeContentExpirience 
                            v-for="(position, index) in resumeData.work_experience?.positions"
                            :key="index"
                            :company="position.company" 
                            :title="position.title" 
                            :period="position.period" 
                            :description="position.description" 
                        />
                    </div>
                </div>
                <!-- Experience Section ends-->

                <!-- About Section starts-->
                <div v-if="resumeData.work_experience?.about" id="resume-about" class="container-col-full" style="align-items: flex-start;">
                    <div id="resume-about-title" class="container-row-full-split" style="padding-bottom: 10px;">
                        <h3 style="color: var(--slate-500);">О себе</h3>
                    </div>
                    <div id="resume-about-content" class="container-col-full">
                        <ResumeContentAbout :description="resumeData.work_experience?.about" />
                    </div>
                </div>
                <!-- About Section ends-->

                <!-- Education Section starts-->
                <div v-if="resumeData.education" id="resume-education" class="container-col-full" style="align-items: flex-start;">
                        <div id="resume-education-title" class="container-row-full-split" style="padding-bottom: 10px;">
                            <h3 style="color: var(--slate-500);">Образование</h3>
                        </div>
                        <!-- Main Education Subsection starts -->
                        <div v-if="mainEducation.length" id="resume-education-main" class="container-col-full" style="padding-bottom: 6px; align-items: flex-start;">
                            <p class="section-title">Основное</p>
                            <div id="resume-education-main-content" class="container-wrap-full">
                                <EducationItem 
                                    v-for="(entry, index) in mainEducation" 
                                    :key="index" 
                                    :institution="entry.institution" 
                                    :title="entry.title" 
                                    :period="entry.period" 
                                    :description="entry.description" 
                                />
                            </div>
                        </div>
                        <!-- Main Education Subsection ends -->
                        <!-- Misc Education Subsection starts -->
                        <div v-if="miscEducation.length" id="resume-education-misc" class="container-col-full" style="padding-bottom: 6px; align-items: flex-start;">
                            <p>Дополнительное</p>
                            <div id="resume-education-misc-content" class="container-wrap-full">
                                <EducationItem 
                                    v-for="(entry, index) in miscEducation" 
                                    :key="index" 
                                    :institution="entry.institution" 
                                    :title="entry.title" 
                                    :period="entry.period" 
                                    :description="entry.description" 
                                />
                            </div>
                        </div>
                        <!-- Misc Education Subsection ends -->
                        <!-- Certs Education Subsection starts -->
                        <div v-if="certEducation.length" id="resume-education-certs" class="container-col-full" style="padding-bottom: 6px; align-items: flex-start;">
                            <p>Сертификаты</p>
                            <div id="resume-education-certs-content" class="container-wrap-full">
                                <EducationItem 
                                    v-for="(entry, index) in certEducation" 
                                    :key="index" 
                                    :institution="entry.institution" 
                                    :title="entry.title" 
                                    :period="entry.period" 
                                    :description="entry.description" 
                                />
                            </div>
                        </div>
                        <!-- Certs Education Subsection ends -->
                    </div>
                    <!-- Education Section ends-->
            
                    <!-- Languages Section starts-->
                    <div v-if="resumeData.languages" id="resume-languages" class="container-col-full" style="align-items: flex-start;">
                        <div id="resume-languages-title" class="container-row-full-split" style="padding-bottom: 10px;">
                            <h3 style="color: var(--slate-500);">Языки</h3>
                        </div>
                        <div id="resume-languages-content" class="container-wrap-full">
                            <LanguageItem 
                                v-for="(language, index) in resumeData.languages" 
                                :key="index" 
                                :code="language.code" 
                                :level="language.level" 
                            />
                        </div>
                    </div>
                    <!-- Languages Section ends-->
             </div>
        </div>
    </div>
</template>

<script>
import ResumeContentExpirience from './resume/ResumeContentExpirience.vue';
import ResumeContentAbout from './resume/ResumeContentAbout.vue';
import EducationItem from './resume/EducationItem.vue';
import LanguageItem from './resume/LanguageItem.vue';
import { formatWorkExperience } from '~/utils/formatWorkExperience'; // helper function for formatting work experience

export default {
    name: "ApplicantResume",
    components: {
        EducationItem,
        ResumeContentExpirience,
        LanguageItem
    },
    props: {
        resumeData: {
            type: Object,
            required: true, // Fail fast if resume data isn't provided
        },
    },
    computed: {
        mainEducation() {
            return this.resumeData.education.filter(entry => entry.type === 'university');
        },
        miscEducation() {
            return this.resumeData.education.filter(entry => entry.type === 'course');
        },
        certEducation() {
            return this.resumeData.education.filter(entry => entry.type === 'certification');
        },
    },
    mounted() {
        // Force initial scroll container setup
        this.$nextTick(() => {
            if (this.$refs.scrollableContainer) {
                this.$refs.scrollableContainer.style.overflow = 'auto';
            }
        });
    }
};
</script>