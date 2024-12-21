<!-- components/PaginationControls.vue -->
<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 50,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    scrollToTopEnabled: {
      type: Boolean,
      default: false, 
    },
  },
  data() {
    return {
      isTransitioning: false,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.pageSize);
    },
  },
  methods: {
    async changePage(newPage) {
      if (this.isTransitioning) return;
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.isTransitioning = true;
        
        try {
          // Emit the page change event
          this.$emit("pageChanged", newPage);
          
          // Wait for the DOM to update
          await this.$nextTick();
          
          // Add a small delay to ensure content has rendered
          await new Promise(resolve => setTimeout(resolve, 50));
          
          // Focus on controls with more robust element finding
          this.focusOnControls();
        } finally {
          this.isTransitioning = false;
        }
      }
    },

    focusOnControls() {
      const attemptFocus = () => {
        const navigationControls = this.$el.querySelector('#navigation-controls');
        if (navigationControls) {
          // Calculate the element's position relative to the viewport
          const rect = navigationControls.getBoundingClientRect();
          const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );

          if (!isVisible) {
            navigationControls.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'nearest'
            });
          }
          
          // Ensure the element is properly positioned
          const parentContainer = this.findScrollableParent(navigationControls);
          if (parentContainer) {
            const containerRect = parentContainer.getBoundingClientRect();
            const elementRect = navigationControls.getBoundingClientRect();
            
            if (elementRect.bottom > containerRect.bottom) {
              parentContainer.scrollBy({
                top: elementRect.bottom - containerRect.bottom + 20,
                behavior: 'smooth'
              });
            }
          }
        }
      };

      // Try multiple times to ensure focus
      attemptFocus();
      setTimeout(attemptFocus, 100);
      setTimeout(attemptFocus, 300);
    },

    findScrollableParent(element) {
      let parent = element.parentElement;
      
      while (parent) {
        const style = window.getComputedStyle(parent);
        const overflow = style.getPropertyValue('overflow-y');
        
        if (overflow === 'auto' || overflow === 'scroll') {
          return parent;
        }
        parent = parent.parentElement;
      }
      return null;
    },

    scrollToTop() {
      const scrollableParent = this.findScrollableParent(this.$el);
      if (scrollableParent) {
        scrollableParent.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
  },
  
  // Watch for changes in total items to handle list length changes
  watch: {
    totalItems() {
      this.$nextTick(() => {
        this.focusOnControls();
      });
    }
  }
};
</script>

<template>
  <div id="pagination-controls" class="container-row-fit" style="gap: 20px; padding: 8px 16px;">
    <div id="navigation-controls" class="container-row-fit" style="gap: 12px;">
      <div 
        class="pagination-button-container" 
        :class="{ 'pagination-button-disabled': currentPage === 1 }" 
        @click="changePage(currentPage - 1)"
      >
        <img src="/icons/slate/chevron-left.svg" alt="Previous" />
      </div>
      
      <p style="color: var(--slate-500); font-size: 16.5px;">
        {{ currentPage }} / {{ totalPages }}
      </p>
      
      <div 
        class="pagination-button-container" 
        :class="{ 'pagination-button-disabled': currentPage === totalPages }" 
        @click="changePage(currentPage + 1)"
      >
        <img src="/icons/slate/chevron-right.svg" alt="Next" />
      </div>
    </div>
    <div 
      id="scroll-to-top-button"
      class="pagination-button-container"
      @click="scrollToTop"
      v-if="scrollToTopEnabled"
    >
      <img src="/icons/slate/chevron-up.svg" alt="Scroll to top" />
    </div>
  </div>
</template>