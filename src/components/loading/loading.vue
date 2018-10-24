<template>
  <div class="com-loading" v-if="show">{{ msg }}</div>
</template>


<script>
export default {
  props: {
    msg: {
      type: String
    },
    duration: {
      type: String,
      default: "1s" //默认1s
    }
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    show () {
      this.show = true;
    },
    hide() {
      this.show = false;
    }
  }
};
</script>

<style>
.com-loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
