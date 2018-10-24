<template>
  <div class="com-loading" v-if="show">加载中...</div>
</template>


<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
.com-loading{
  position:fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.3);
}
</style>
