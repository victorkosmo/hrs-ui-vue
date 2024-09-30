<template>
  <!-- The entire card is a clickable link -->
  <router-link :to="`/vacancy/${id}`" class="vacancy-card">
    <div class="vacancy-content">
      <!-- Title Column -->
      <div class="vacancy-title-col">
        <p style="color: var(--slate-600)">{{ title }}</p>
      </div>

      <!-- Stats Column -->
      <div class="vacancy-stats-col">
        <div class="icon-and-text">
          <img src="/public/icons/slate/user-group.svg" alt="Users Icon">
          <p style="color: var(--slate-500)">{{ applicantsTotal }}</p>
        </div>
        <div class="icon-and-text">
          <img src="/public/icons/slate/arrows-right-left.svg" alt="Chart Icon">
          <p style="color: var(--slate-500)">{{ applicantsOnStage }}</p>
        </div>
      </div>

      <!-- Tags Column -->
      <div class="vacancy-tags-col">
        <template v-if="tags.length > 0">
          <ColorTag
            v-for="(tag, index) in tags"
            :key="index"
            :text="tag.text"
            color="gray"
          />
        </template>
        <template v-else>
          <!-- Placeholder for empty tags -->
        </template>
      </div>

      <!-- Vacancy Status -->
      <div class="vacancy-status-col">
        <ColorTag :text="statusText" :color="statusColor" />
      </div>
    </div>
  </router-link>
</template>

<script>
import ColorTag from '../components/ColorTag.vue';

export default {
  name: 'VacancyCard',
  components: {
    ColorTag
  },
  props: {
    id: {
      type: [String, Number], // ID can be a string or number
      required: true
    },
    title: {
      type: String,
      default: 'Vacancy Title'
    },
    applicantsTotal: {
      type: Number,
      default: 100
    },
    applicantsOnStage: {
      type: Number,
      default: 5
    },
    tags: {
      type: Array,
      default: () => []
    },
    status: {
      type: String,
      default: 'draft' // Default to 'draft'
    }
  },
  computed: {
    statusColor() {
      const statusColors = {
        active: 'green',
        paused: 'orange',
        closed: 'gray',
        draft: 'sky'
      };
      return statusColors[this.status] || 'gray';
    },
    statusText() {
      const statusTexts = {
        active: 'В работе',
        paused: 'На паузе',
        closed: 'Закрыта',
        draft: 'Черновик'
      };
      return statusTexts[this.status] || statusTexts['draft']; // Default to 'Черновик'
    }
  }
};
</script>
