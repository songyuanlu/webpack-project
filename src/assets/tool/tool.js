import Vue from "vue";

const tool = {
  
}

export default {
  install() {
    if (!Vue.$loading) {
      Vue.$tool = tool;
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      }
    })
  }
}