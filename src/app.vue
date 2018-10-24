<template>
    <div>
        <div class="header">
            <router-link to="/list" class="header-title">电商网站示例</router-link>
            <div class="header-menu">
                <router-link to="/cart" class="header-menu-cart">
                    购物车
                    <span v-if="cartList.length">{{ cartList.length }}</span>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
        <!-- <loading show="true" msg="来一发" duration="1"></loading> -->
    </div>
</template>
<script>
import $ from "./utils/request.js";
// import loading from "./components/loading/loading.vue";

export default {
  // components: {
  //   loading: loading
  // },
  data() {
    return {
      cartList: 0
    };
  },
  // computed: {
  //     cartList () {
  //         return this.$store.state.cartList;
  //     }
  // },
  mounted() {
    this.getCartList();
  },
  methods: {
    getCartList() {
      this.$loading.show({
        show: true,
        msg: "fsa"
      });
      let self = this;
      setTimeout(function() {
        self.$loading.hide();
        self.$loading.add();
      }, 2000);
      setTimeout(function() {
        self.$loading.show({
          show: true,
          msg: "3333"
        });
      }, 5000);

      this.$http
        .get("list.json", {
          params: { foo: "bar" },
          headers: { "X-Custom": "song" }
        })
        .then(
          function(resp) {
            console.log(resp);
            console.log(JSON.parse(resp.bodyText));
          },
          function(error) {
            console.log(error);
          }
        );
      this.$http
        .post(
          "auth/stock",
          { name: "song", id: 111 },
          { params: { foo: "bar" }, headers: { "X-Custom": "song" } }
        )
        .then(
          function(resp) {
            console.log(resp);
          },
          function(error) {
            console.log(error);
          }
        );
      // $.ajax
      //   .get("themes")
      //   .then(res => {
      //     this.this.$store.state.cartList;
      //   })
    }
  }
};
</script>