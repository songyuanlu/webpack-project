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
    </div>
</template>
<script>
import $ from "./utils/request.js";

export default {
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
      $.ajax
        .get("themes")
        .then(res => {
          this.this.$store.state.cartList;
        })
       
    }
  }
};
</script>