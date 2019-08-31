<!--  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="角色ID" value="id"></el-option>
            <el-option label="角色名称" value="role"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button
          type="primary"
          @click="addDialog = true;updatebool = false;entity = {};value = []"
        >新增</el-button>
      </div>
    </div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;" border>
      <el-table-column prop="id" label="角色编号" sortable width="210" column-key="date"></el-table-column>
      <el-table-column prop="role" label="角色名称" width="210"></el-table-column>
      <el-table-column prop="description" label="角色描述" width="310"></el-table-column>
      <el-table-column label="角色权限" width="330">
        <template slot-scope="scope">
          <span v-for="entity in scope.row.permissionsList.slice(0, 2)">{{entity.description}}</span>
          <samp v-if="scope.row.permissionsList.length > 3">...</samp>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="400">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>

    <el-dialog title="编辑角色" :visible.sync="addDialog" width="45%" :before-close="handleClose">
      <span>
        <el-form
          :model="entity"
          label-position="left"
          label-width="80px"
          status-icon
          :rules="rules"
        >
          <el-form-item label="角色名称" prop="role">
            <el-input v-model="entity.role"></el-input>
          </el-form-item>
          <el-form-item label="角色描述">
            <el-input v-model="entity.description"></el-input>
          </el-form-item>
          <el-form-item label="角色权限">
            <el-tree
              :data="permissionListTwo"
              show-checkbox
              node-key="id"
              ref="tree"
              :default-checked-keys="value"
              :props="{
                children: 'children',
                label: 'label'
              }"
            ></el-tree>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="getCheckedKeys">获取</el-button>
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveAddition" v-if="!updatebool">保存后新增</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import request from "@/api/request";
import PageHelper from "@/components/PageHelper";
import { Message } from "element-ui";
import { constants } from "fs";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    PageHelper
  },
  data() {
    //这里存放数据
    return {
      entity: {}, // 新增and修改的对象
      tableData: [], // 显示数据
      findData: {}, // 查询数据
      select: "", // 查询条件
      selectValue: "",
      addDialog: false, // 新增模态框
      currentPage: 1, // 当前页
      currentSize: 10, // 每页条数
      pagenumber: 0, // 总条数
      updatebool: false,
      rules: {
        id: [{ required: true, message: "编号不能为空", trigger: "blur" }],
        role: [{ required: true, message: "名称不能为空", trigger: "blur" }]
      },
      value: [],
      permissionList: [],
      permissionListTwo: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    filterMethod(query, item) {
      return item.description.indexOf(query) > -1;
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    // 分页组件触发的事件
    jumpPage(data) {
      this.currentPage = data.currentPage; //当前页
      this.currentSize = data.currentSize; //每页显示条数
      this.findPage();
    },
    //关闭模态框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //分页带条件查询
    findPage() {
      if (this.select != -1) {
        this.findData[this.select] = this.selectValue;
      } else {
        this.findData = {};
      }
      request({
        url:
          "/sysRoles/findPage?current=" +
          this.currentPage +
          "&size=" +
          this.currentSize,
        method: "post",
        data: this.findData
      }).then(result => {
        this.tableData = result.data.data.rows; //查询的数据
        this.pagenumber = result.data.data.total; // 总条数
      });
    },
    // 单个查询
    findOne() {
      request({
        url: "/sysPermissions/findAll",
        method: "get"
      }).then(result => {
        console.log(result.data.data);
      });
    },
    // 保存
    save() {
      this.entity.permissionsIdList = this.$refs.tree.getCheckedKeys();
      if (!this.updatebool) {
        // 新增
        request({
          url: "/sysRoles/add",
          method: "post",
          data: this.entity
        }).then(result => {
          Message.success(result.data.data);
          //关闭模态框
          this.addDialog = false;
          this.findPage();
          this.entity = {};
        });
      } else {
        // 修改
        request({
          url: "/sysRoles/update",
          method: "post",
          data: this.entity
        }).then(result => {
          Message.success(result.data.data);
          //关闭模态框
          this.addDialog = false;
          this.findPage();
          this.updatebool = false;
          this.entity = {};
        });
      }
    },
    //保存后新增
    saveAddition() {
      var number = this.entity.departID;
    },
    // 修改
    update(entity) {
      this.updatebool = true;
      this.addDialog = true;
      this.entity = entity;
      this.value = [];
      this.entity.permissionsList.forEach(item => {
        this.value.push(item.id);
      });
    },
    // 删除
    del(id) {
      request({
        url: "/sysRoles/del?id=" + id,
        method: "get"
      }).then(result => {
        Message.success(result.data.data);
        this.findPage();
      });
    },
    // 查询所有权限
    findPermissionsList() {
      request({
        url: "/sysPermissions/findAll",
        method: "get"
      }).then(result => {
        this.permissionList = result.data.data;
        //  获取路由
        this.$router.options.routes.forEach(element => {
          if (element.meta) {
            // 第一层
            let children1 = {
              id: this.addPermissionId(element),
              label: element.meta.title,
              children: []
            };
            element.children.forEach(children => {
              if (children.meta) {
                // 第二层
                let children2 = {
                  id: this.addPermissionId(children),
                  label: children.meta.title,
                  children: []
                };
                children.children.forEach(childrens => {
                  if (childrens.meta) {
                    // 第三层
                    children2.children.push({
                      id: this.addPermissionId(childrens),
                      label: childrens.meta.title
                    });
                  }
                });
                children1.children.push(children2);
              }
            });
            this.permissionListTwo.push(children1);
          }
        });
      });
    },
    addPermissionId(entity) {
      let id = "";
      this.permissionList.forEach(item => {
        if (entity.meta.permissions === item.permission) {
          id = item.id;
          return id;
        }
      });
      return id;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.findPermissionsList();
    this.findPage();
  }
};
</script>
<style lang='scss' scoped>
.el-select .el-input,
.el-select {
  width: 120px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
