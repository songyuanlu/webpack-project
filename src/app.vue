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
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cartList: 0,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  mounted() {
    this.getCartList();
  },
  methods: {
    getCartList() {
      // this.$loading.show({
      //   show: true,
      //   msg: "fsa"
      // });
      // let self = this;
      // setTimeout(function() {
      //   self.$loading.hide();
      //   self.$loading.add();
      // }, 2000);
      // setTimeout(function() {
      //   self.$loading.show({
      //     show: true,
      //     msg: "3333"
      //   });
      // }, 5000);

      this.$http
        .get("list.json", {
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
      this.$http
        .post(
          "auth/stock",
          { name: "song", id: 111 },
          { params: { foo: "bar" } }
        )
        .then(
          function(resp) {
            console.log("auth/stock ------------");
            console.log(resp);
          },
          function(error) {
            console.log("auth/stock error------------");
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