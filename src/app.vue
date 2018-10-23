<template>
  <div class="test">
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Hello Word, Song !'
    }
  }
}
</script>

<style lang='less'>
.test{
  background-color: red;
  .text{
    color: blue;
  }
}
</style>


