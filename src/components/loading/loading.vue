<template>
  <div id="com-loading" class="com-loading" v-if="show" @touchmove.stop.prevent>{{ msg }}</div>
</template>


<script>
export default {
  props: {
    show: Boolean,
    msg: {
      type: String,
      default: "正在加载中..."
    }
  },
  data() {
    return {
      amount: 0
    };
  },
  methods: {
  }
};
</script>

<style>
.com-loading {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  line-height: 100px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
