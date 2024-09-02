<template>
  <a class="user-tab" href="/settings_main">
    <div class="user-info-col">
      <div class="user-name text-semibold">{{ userName }}</div>
      <div class="org-title input-regular">{{ orgTitle }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: "UserTab",
  props: {
    userName: {
      type: String,
      required: true,
      default: "Ivan Ivanov",
    },
    orgTitle: {
      type: String,
      required: true,
      default: "My Company",
    },
  },
};
</script>

<style scoped>
.user-tab {
  width: 100%;
  padding: 8px 20px;
  border-radius: 8px;
  border: 1px solid var(--slate-200);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  box-sizing: border-box;
  height: fit-content;
  transition: border-color 0.4s ease, background-color 0.5s ease;
}

.user-tab:hover {
  border-color: var(--blue-300);
}

.user-info-col {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
}

.user-name {
  color: var(--slate-700);
  word-wrap: break-word;
}

.org-title {
  color: var(--slate-400);
  word-wrap: break-word;
}
</style>
