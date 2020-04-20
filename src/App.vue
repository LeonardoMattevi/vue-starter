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
      <div class="d-flex flex-column w-100">
        <app-header />
        <main style="min-height: calc(100vh - 131px);">
          <div class="container-fluid p-4">
            <router-view />
          </div>
        </main>
        <AppFooter />
      </div>
    </div>
  </div>
</template>
<script>
import AppMenu from "@/components/layout/aside/appMenu.vue";
import AppMessages from "@/components/layout/appMessages.vue";
import AppHeader from "@/components/layout/header/appHeader.vue";
import AppFooter from "@/components/layout/footer/appFooter.vue";

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
    AppHeader,
    AppFooter
  },
  errorCaptured(err, vm, info) {
    window["console"]["log"]("errorCaptured: ", err, vm, info);
    throw err;
  }
};
</script>
<style>
</style>
