<template>
  <div>
      <!-- 菜单管理 -->
      <el-button type="primary" @click="add"><i class="el-icon-circle-plus-outline"></i>添加菜单</el-button>
      <!-- 列表组件 -->
      <v-list></v-list>
      <!-- 添加/修改组件 -->
      <v-info :info="info" ></v-info>
      </div>
</template>

<script>
import VList from "./vlist";
import VInfo from "./vinfo";

export default {
  data() {
    return {
      info:{
        isAdd:false,
        isShow:false
      }
    };
  },
  created() {},
  components: {
    VList,
    VInfo,
  },
  methods: {
    add(){
      this.info.isAdd = this.info.isShow = true;
    }
  },
};
</script>
<style scoped>
</style>