<template>
  <div class="dropdown" v-click-outside="closeDropdown">
    <span class="nav-link dropdown-toggle" @click="showBody=!showBody" style="cursor: pointer;">
      <slot name="label"></slot>
    </span>
    <!-- Dropdown - User Information -->
    <div class="dropdown-menu dropdown-menu-right shadow" :class="{'show': showBody}">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CmpDropdown",
  props: {
    showBody: { type: Boolean, default: false }
  },
  methods: {
    closeDropdown() {
      this.showBody = false;
    }
  }
};
</script>

<style scoped>
.dropdown .dropdown-menu {
  width: 40vw;
}
</style>