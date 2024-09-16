<template>
  <div id="user-tab-container" class="user-tab-container">
    <Dropdown style="width: 100%">
      <template #trigger>
        <div class="user-tab">
          <p class="text-semibold" style="margin: 0; color: var(--slate-600)">{{ userName }}</p>
          <p class="text-regular" style="margin: 0; color: var(--slate-400)">{{ orgTitle }}</p>
        </div>
      </template>
      <template #content>
        <ul class="dropdown-list">
          <li><DropdownItem text="Настройки" type="link" link="/settings_main"/></li>
          <li><DropdownItem text="Выход" type="link" link="/login_page"/></li>
        </ul>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from '../components/Dropdown.vue';
import DrowdownItem from '../components/DropdownItem.vue';
export default {
  components: { Dropdown },
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
/* Ensure the parent container spans the full width */
.user-tab-container {
  display: flex;
  width: 100%;
}


.user-tab {
  flex: 1;
  padding: 8px 20px;
  border-radius: 8px;
  border: 1px solid var(--slate-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  transition: border-color 0.4s ease, background-color 0.5s ease;
  box-sizing: border-box;
}

.user-tab:hover {
  border-color: var(--blue-300);
}
</style>
