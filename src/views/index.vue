<template>
    <div class="view-content">
        我是首页
    </div>
</template>
<script>
export default {
  //   components: { Product },
  //   computed: {},
  data() {
    return {};
  },
  methods: {
    getList() {
      this.$http
        .get(this.$servers.getUrl("user/login"), {
          params: { foo: "bar" }
        })
        .then(
          function(resp) {
            console.log("list.json -----------");
            console.log(resp);
          },
          function(error) {
            console.log("list.json  error-----------");
            console.log(error);
          }
        );
    }
  },
  mounted() {
      this.getList();
  }
};
</script>
