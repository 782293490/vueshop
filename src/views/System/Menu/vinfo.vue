<template>
  <el-dialog :title="info.isAdd ? '添加':'修改'" :visible.sync="info.isShow" width="40%" center>
    <el-form :model="frominfo" ref="form" :rules="rules" label-width="140px">
      <el-form-item label="菜单类型:">
        <el-radio-group v-model="frominfo.type">
          <el-radio :label="1">目录</el-radio>
          <el-radio :label="2">菜单</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上级目录" v-if="frominfo.type==2">
        <el-select v-model="frominfo.pid" placeholder="请选择">
          <el-option label="顶级目录" :value="0"></el-option>
          <el-option
            v-for="item in menulist"
            v-if="item.type==1"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="frominfo.type==1?'目录名称':'菜单名称'" prop="title">
        <el-input v-model="frominfo.title" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="目录图标" v-if="frominfo.type==1" prop="icon">
        <el-input v-model="frominfo.icon" placeholder="请输入图标class"></el-input>
      </el-form-item>
      <el-form-item label="菜单地址" v-if="frominfo.type==2" prop="url">
        <el-input v-model="frominfo.url" placeholder="请输入地址"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-switch
          v-model="frominfo.status"
          active-color="#13ce66"
          inactive-color="#ff4949"
          :active-value="1"
          :inactive-value="2"
        ></el-switch>
      </el-form-item>
      <el-form-item label>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button type="warning" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- <span slot="footer" class="dialog-footer">
      <el-button @click="info.isShow = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>-->
  </el-dialog>
</template>

<script>
import { addMenu, editMenu } from "@/request/menu";
import { mapGetters, mapActions } from "vuex";
let defaultItem = {
  pid: 0,
  title: "",
  icon: "",
  type: 1,
  url: "",
  status: 1,
};
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          isAdd: true,
          isShow: false,
        };
      },
    },
  },
  data() {
    return {
      frominfo: {
        ...defaultItem
      },
      // dialogVisible:true,
      rules: {
        //验证规则对象！
        title: [{ required: true, message: "必填", trigger: "blur" }],
        icon: [{ required: true, message: "必填", trigger: "blur" }],
        url: [{ required: true, message: "必填", trigger: "blur" }],
      },
    };
  },
  created() {},
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
      get_menu_list: "menu/get_menu_list",
    }),
    async submit() {
      //表单验证
      let valid = await this.$refs.form.validate(async (valid) => {
        if (valid) {
          //如果验证通过
          let res;
          if (this.info.isAdd) {
            //添加还是修改
            res = await addMenu(this.frominfo);
          } else {
            await editMenu(this.frominfo);
          }
          if (res.code == 200) {
            this.$message.success(res.msg);
            this.info.isShow = false;
            this.get_menu_list(); //在次获取列表 让里面的数据保持最新的
            this.reset();
          } else {
            this.$message.error(res.msg);
          }
        }
      });

      // this.info.isShow = false;
    },
    infoform() {},
    reset() {
      // this.$refs.form.resetFields();
      this.frominfo ={...defaultItem}
    },
  },
  components: {},
};
</script>
<style scoped>
</style>