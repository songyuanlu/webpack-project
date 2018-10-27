<template>
    <div class="view-body">
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getCartList();
  },
  methods: {
    getCartList() {
      
    }
  }
};
</script>

