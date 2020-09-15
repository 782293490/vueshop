<template>
  <div >
    <h3 v-if="!iscollapse" class="logo">小优商城后台</h3>
    <i v-else class="logo-img"><img src="@/assets/img/logo.gif" alt=""></i>
    <!-- 菜单组件 -->
    <el-menu 
   
    class="page-menu"
    background-color='#444' 
    text-color="#fff" 
    router
    :default-active="$route.path"
    :collapse="iscollapse"
    :collapse-transition="false"
    >
      <el-menu-item index="/index"><i class="el-icon-s-home"></i><span slot="title">后台首页</span></el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-setting"></i> <span slot="title">系统设置</span></template>
        <el-menu-item index="/menu"><span>菜单管理</span></el-menu-item>
        <el-menu-item index="/role"><span>角色管理</span></el-menu-item>
        <el-menu-item index="/user"><span>管理员管理</span></el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-goods"></i> <span slot="title">商城管理</span></template>
        <el-menu-item index="3.1"><span>分类管理</span></el-menu-item>
        <el-menu-item index="3.2"><span>规格管理</span></el-menu-item>
        <el-menu-item index="3.3"><span>商品管理</span></el-menu-item>
        <el-menu-item index="3.4"><span>会员管理</span></el-menu-item>
        <el-menu-item index="3.5"><span>轮播图管理</span></el-menu-item>
        <el-menu-item index="3.6"><span>秒杀管理</span></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {};
  },
  computed:{
      ...mapState(['iscollapse'])
  },
  created() {},
  methods: {},
  components: {},
};
</script>
<style scoped>
.logo {
  line-height: 60px;
  text-align: center;
  color: #fff;
  background-color: #666;
}
.page-menu{
    border-right: none;
}
.logo-img img{
    width: 64px;
    height: 60px;
}
</style>