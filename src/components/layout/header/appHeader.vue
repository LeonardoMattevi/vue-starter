<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark topbar static-top shadow mb-0">
      <button class="btn btn-primary d-md-none rounded-circle mr-3" @click="toggleAside()">
        <i class="fa fa-bars"></i>
      </button>

      <header-toolbar />
    </nav>
  </header>
</template>

<script>
import HeaderToolbar from "@/components/layout/header/headerToolbar.vue";
export default {
  name: "appHeader",
  components: {
    HeaderToolbar
  },
  methods: {
    toggleAside() {
      this.$store.commit("appModule/toggleAside");
    }
  }
};
</script>