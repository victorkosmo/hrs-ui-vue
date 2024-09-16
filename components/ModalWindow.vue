<!-- components/ModalWindow.vue -->
<template>
  <div>
    <slot name="trigger" :openModal="openModal">
      <div style="cursor: pointer" @click="openModal">Open Modal</div>
    </slot>

    <Teleport to="body">
      <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-container" @click.stop>
          <SectionCard>
            <div class="modal-header">
              <h3 style="color: var(--slate-500)">{{ modalTitle }}</h3>
              <img src="/icons/slate/x-mark.svg" alt="close" @click="closeModal"/>
            </div>
            <slot name="content"></slot>
          </SectionCard>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
import SectionCard from './SectionCard.vue';

export default {
  name: 'ModalWindow',
  components: {
    SectionCard,
  },
  props: {
    modalTitle: String,
  },
  setup() {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      isModalOpen.value = false;
      document.body.style.overflow = '';
    };

    return {
      isModalOpen,
      openModal,
      closeModal,
    };
  },
};
</script>