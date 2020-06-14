<template>
  <div id="app">
            <router-view name='main'/>
  </div>
</template>
<script>


export default {
  mounted() {
    this.$store.dispatch("appModule/addInfoMessage", "Hello app!");
    this.$store.commit("appModule/startFetching");
    setTimeout(() => {
      this.$store.commit("appModule/endFetching");
    }, 5000);
  },
  
  errorCaptured(err, vm, info) {
    window["console"]["log"]("errorCaptured: ", err, vm, info);
    throw err;
  }
};
</script>
<style>
</style>
