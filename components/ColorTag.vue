<template>
  <div :class="['color-tag', colorClass]">
    <span class="label-regular">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'ColorTag',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Color Tag'  // Default text if not provided
    },
    color: {
      type: String,
      default: 'blue',  // Default color is blue
      validator(value) {
        return [
          'blue', 'green', 'red', 'gray', 'orange',
          'purple', 'teal', 'lime', 'sky'
        ].includes(value);
      }
    }
  },
  computed: {
    colorClass() {
      return `color-${this.color}`;
    }
  }
};
</script>

<style scoped>
.color-tag {
  width: fit-content;
  height: fit-content;
  padding: 8px 10px;
  border-radius: 14px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.color-blue {
  background-color: #EFF6FF;
}
.color-green {
  background-color: #F0FDF4;
}
.color-red {
  background-color: #FEF2F2;
}
.color-gray {
  background-color: #F8FAFC;
}
.color-orange {
  background-color: #FFF7ED;
}
.color-purple {
  background-color: #FAF5FF;
}
.color-teal {
  background-color: #F0FDFA;
}
.color-lime {
  background-color: #F7FEE7;
}
.color-sky {
  background-color: #F0F9FF;
}

/* Text color styles */
.color-blue .label-regular {
  color: #3B82F6;
}
.color-green .label-regular {
  color: #22C55E;
}
.color-red .label-regular {
  color: #EF4444;
}
.color-gray .label-regular {
  color: #64748B;
}
.color-orange .label-regular {
  color: #F97316;
}
.color-purple .label-regular {
  color: #A855F7;
}
.color-teal .label-regular {
  color: #14B8A6;
}
.color-lime .label-regular {
  color: #84CC16;
}
.color-sky .label-regular {
  color: #0EA5E9;
}
</style>
