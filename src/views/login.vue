<template>
    <div class="view-login">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px">
            <el-form-item label="活动名称" prop="username">
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="活动名称" prop="password">
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login('loginForm')">loginForm</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch("user/setSessionId", this.loginForm.username);
          console.log(this.$store.state.user.sessionId);
          //   this.$router.push('index');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    list() {
      return this.$store.state.productList;
    },
    ...mapState({
      info: state => state.user.info
    }),
    ...mapGetters("user", {
      username: "getName"
    })
  },
  mounted() {
    console.log(this.info);
    console.log(this.username);
    console.log(this.$store.state.user.sessionId);
  }
};
</script>

