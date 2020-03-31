<template>
  <div class="home">
    <HomePage msg="Welcome to Your Vue.js App" />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    HomePage
  }
};
</script>
