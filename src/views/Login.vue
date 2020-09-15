<template>

  <el-row class="login-bg" show-alpha>
    <el-col :span="8" class="login-box">
      <h3>小优商城管理系统</h3>
      <el-form :model="forminfo" ref="form" label-width="80px">
        <el-form-item label="账号:">
          <el-input placeholder="请输入账号" v-model="forminfo.username">
            <template slot="prepend"><i class="el-icon-user"></i></template>
          </el-input>
        </el-form-item>

        <el-form-item label="密码:">
           <el-input placeholder="请输入密码" show-password v-model="forminfo.password">
            <template slot="prepend"><i class="el-icon-lock"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!-- <el-button type='primary'>默认按钮</el-button> -->
  </el-row>

</template>

<script>
export default {
  data() {
    return {
      forminfo: {
        username: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
      login(){}
  },
  components: {},
};
</script>
<style scoped>
/* scoped  表示样式只在当前页面生效 */
.login-bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/bg1.gif");
  /* background-repeat: no-repeat; */
  background-size: 100% 100%;
}
.login-box {
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 40px;
  border-radius: 5px;
  border: 1px solid #eee;
  background-color:rgba(255,255,255,0.6);

}
.login-box h3{
    text-align: center;
    line-height: 40px;
    margin-bottom: 20px;
}
.login-btn{
    display: block;
    width: 100%;
}
</style>