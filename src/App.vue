<template>
  <div id="app">
    <app-messages />
    <div class="d-flex">
      <aside class="bg-primary position-relative" :class="{ 'opened': asideIsOpened }">
        <span v-show="appIsFetching" style="position:absolute;right:10px;top:10px;z-index:3334">
          <i class="fa fa-spinner fa-spin"></i>
        </span>
        <app-menu />
      </aside>
      <div class="d-flex flex-column w-100 bg-light">
        <app-header />
        <main style="min-height: calc(100vh - 131px);">
          <div class="container-fluid p-4">
            <router-view />
          </div>
        </main>
        <footer class="bg-secondary p-3">footer</footer>
      </div>
    </div>
  </div>
</template>
<script>
import AppMenu from "@/components/shared/appMenu.vue";
import AppMessages from "@/components/shared/appMessages.vue";
import AppHeader from "@/components/shared/header/appHeader.vue";

export default {
  mounted() {
    this.$store.dispatch("appModule/addInfoMessage", "Hello app!");
    this.$store.commit("appModule/startFetching");
    setTimeout(() => {
      this.$store.commit("appModule/endFetching");
    }, 5000);
  },
  computed: {
    appIsFetching() {
      return this.$store.getters["appModule/appIsFetching"];
    },
    asideIsOpened() {
      return this.$store.getters["appModule/asideIsOpened"];
    }
  },
  components: {
    AppMessages,
    AppMenu,
    AppHeader
  }
};
</script>
<style>
</style>
