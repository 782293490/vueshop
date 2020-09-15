<template>
  <div class="header">
    <div class="lt">
        <!-- 收起侧边栏 -->
      <el-button v-if="iscollapse" class="toggle-btn" type="primary" icon="el-icon-s-fold" @click="TOGGLE" size="small"></el-button>
      <el-button v-else class="toggle-btn" type="primary" icon="el-icon-s-unfold" @click="TOGGLE" size="small"></el-button>

      <!-- 面包屑 -->
      <el-breadcrumb separator="/" class="mbx">
        <!-- /是间隔符 -->
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
        <!-- 返回按钮 -->
      <el-button circle icon="el-icon-back" size="small" v-if="$route.path!='/index'" @click="$router.back()"></el-button>
    </div>

    <div>
      <el-dropdown>
        <span class="el-dropdown-link">
          伊泽瑞尔你好
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-full-screen"></i> 全屏操作</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-switch-button"></i> 退出登录</el-dropdown-item>
          
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

import { mapState,mapMutations } from "vuex"

export default {
  data() {
    return {};
  },
  computed:{
      ...mapState(['iscollapse'])
  },
  created() {},
  methods: {
      ...mapMutations(['TOGGLE'])
  },
  components: {},
};
</script>
<style scoped>
.header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.toggle-btn i {
  /* 如果图标的大小不是你想要的  可以把这个放到APP.vue去修改用font-size */
}
.header .lt {
  display: flex;
  align-items: center;
}

.header .mbx {
  margin: 0 20px;
}
</style>