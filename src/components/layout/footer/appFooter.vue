<template>
  <footer class="bg-secondary p-3">footer</footer>
</template>

<script>
export default {
  name: "appHeader",
  methods: {
    toggleAside() {
      this.$store.commit("appModule/toggleAside");
    }
  }
};
</script>