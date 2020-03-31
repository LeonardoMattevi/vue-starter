<template>
  <div
    class="w-sm-50 position-fixed"
    style="right:10px; top:80px;opacity:0.8;z-index:3333"
    v-if="appMessages && appMessages.length > 0"
  >
    <button
      style="position:absolute;z-index:1;top:2px;right:2px;"
      class="btn btn-sm"
      type="button"
      @click="clearMessages()"
    >
      <strong>&times;</strong>
    </button>
    <div
      class="alert"
      :class="getAlertClass(mess)"
      v-for="(mess, index) in appMessages"
      :key="index"
    >{{mess.message}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppMessages",
  computed: {
    messageCode() {
      return {
        info: 1000,
        success: 2000,
        warning: 3000,
        genericError: 4000,
        1000: "info",
        2000: "success",
        3000: "warning",
        4000: "genericError"
      };
    },
    ...mapState("appModule", {
      appMessages: state => state.appMessages
    })
  },
  methods: {
    clearMessages() {
      this.$store.commit("appModule/clearAppMessages");
    },
    getAlertClass(message) {
      let classes = {};
      if (!message.code || message.code >= 4000) {
        classes["alert-danger"] = 1;
      }
      if (message.code === 1000) {
        classes["alert-info"] = 1;
      }
      if (message.code === 2000) {
        classes["alert-success"] = 1;
      }
      if (message.code === 3000) {
        classes["alert-warning"] = 1;
      }
      return Object.keys(classes);
    }
  }
};
</script>
