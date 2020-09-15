<template>
  <el-table :data="menulist" style="width: 100%" border row-key="id" :tree-props="{children: 'children'}" class="table-bg">
    <el-table-column prop="id" label="ID" width="180"></el-table-column>
    <el-table-column prop="title" label="菜单名称" width="180"></el-table-column>
    <el-table-column label="图标">
      <template slot-scope="scope">
      <i :class="scope.row.icon"></i>
      </template>
    </el-table-column>
    <el-table-column prop="type" label="类型">
      <template slot-scope="scope">
      <el-tag type="success" v-if="scope.row.type==1">目录</el-tag>
      <el-tag type="warning" v-if="scope.row.type==2">菜单</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="url" label="地址"></el-table-column>
    <el-table-column prop="status" label="状态"></el-table-column>
    <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button type="primary" circle size="small" @click="edit(scope.row)" icon="el-icon-edit"></el-button>
            <el-button type="danger" circle size="small" @click="del(scope.row.id)" icon="el-icon-delete"></el-button>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { delMenu } from "@/request/menu"
export default {
  data() {
    return {
        
    };
  },
  computed: {
    ...mapGetters({
      menulist: "menu/menulist",
    }),
  },
  mounted() {
    if (!this.menulist.length) {
      this.get_menu_list()
    }
  },
  methods: {
    ...mapActions({
      get_menu_list:'menu/get_menu_list'
    }),
      edit(){

      },
      async del(id){
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

          let res = await delMenu(id);
          if(res.code==200){
            this.$message.success(res.msg)
            this.get_menu_list();//重新获取列表
          }else{
            this.$message.error(res.msg)
          }
      }
  },
  
  components: {},
  
};
</script>
<style scoped>
</style>