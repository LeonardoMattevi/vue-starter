<template>
  <div id="app">
    <app-messages />
    <div class="d-flex">
      <aside id="aside-menu-box" class="bg-primary" :class="{ 'opened': asideIsOpened }">
        <span v-show="appIsFetching" style="position:absolute;right:10px;top:10px;z-index:3334">
          <i class="fa fa-spinner fa-spin text-white"></i>
        </span>
        <app-menu />
      </aside>
      <div class="d-flex flex-column w-100">
        <app-header />
        <main style="min-height: calc(100vh - 131px);">
          <div class="container-fluid p-4">
            <router-view name="page"/>
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
  name: 'layout',
   components: {
    AppMessages,
    AppMenu,
    AppHeader,
    AppFooter
  },
    computed: {
    appIsFetching() {
      return this.$store.getters["appModule/appIsFetching"];
    },
    asideIsOpened() {
      return this.$store.getters["appModule/asideIsOpened"];
    }
  }
}

</script>