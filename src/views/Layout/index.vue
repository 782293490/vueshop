<template>
  <el-container class="page" >
    <el-aside :width="iscollapse ? '64px':'200px'" class="page-nav" >
      <left />
    </el-aside>

    <el-container class="page-content">
      <el-header class="page-header">
        <top />
      </el-header>
      <el-main class="page-main">
        <main />
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

  <!-- <el-container class="page">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          
        </el-main>
      </el-container>
  </el-container>-->
</template>

<script>
import Left from "./left";
import Top from "./top";
import Main from "./main";

import { mapState } from "vuex"

export default {
  data() {
    return {};
  },
  created() {},
  computed:{
      ...mapState(['iscollapse'])
  },
  methods: {},
  components: {
    Left,
    Top,
    Main,
  },
  
};
</script>
<style scoped>
.page {
  width: 100vw;
  height: 100vh;
}
.page-nav{
    height: 100%;
    background-color: #444;
}

.page-content {
  height: 100%;
  background-color: #f7f7f7;
}
.page-header {
  /* height: 80px; */
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
}
</style>