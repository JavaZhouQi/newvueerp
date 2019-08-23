<!--  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="人员编号" value="id"></el-option>
            <el-option label="人员名称" value="name"></el-option>
            <el-option label="英文名称" value="engName"></el-option>
            <el-option label="性别" value="memo"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button type="primary" @click="addDialog = true;updatebool = false;entity = {}">新增</el-button>
      </div>
    </div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;">
      <el-table-column prop="id" label="人员编号" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="name" label="人员名称" width="180"></el-table-column>
      <el-table-column prop="engName" label="英文名称" width="280"></el-table-column>
      <el-table-column prop="memo" label="性别" width="280"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>

    <el-dialog title="编辑人员" :visible.sync="addDialog" width="50%" :before-close="handleClose">
      <span>
        <div style="padding:0px 20px;">
          <el-form label-position="left" label-width="100px" :inline="true" size="mini">
            <el-form-item label="人员编号">
              <el-input v-model="entity.name"></el-input>
            </el-form-item>
            <el-form-item label="所属部门">
              <el-input v-model="entity.name"></el-input>
            </el-form-item>
            <el-form-item label="人员姓名">
              <el-input v-model="entity.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="entity.name" placeholder="请选择" style="width:185px;">
                  <el-option label="男" value="1"></el-option>
                  <el-option label="女" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="英文姓名">
              <el-input v-model="entity.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
              <el-input v-model="entity.name"></el-input>
            </el-form-item>
          </el-form>
          <el-tabs type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </span>
      <span slot="footer" class="dialog-footer">
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
import { Message } from 'element-ui';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    PageHelper
  },
  data() {
    //这里存放数据
    return {
      entity: {},   // 新增and修改的对象
      tableData: [],  // 显示数据
      findData: {},  // 查询数据
      select: "",   // 查询条件
      selectValue: "",
      addDialog: false, // 新增模态框
      currentPage: 1,   // 当前页
      currentSize: 10,  // 每页条数
      pagenumber: 0,     // 总条数
      updatebool:false,
      rules: {
        id: [
           { required: true, message: '编号不能为空', trigger: 'blur' },
        ],
        name: [
           { required: true, message: '名称不能为空', trigger: 'blur' },
        ]
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    // 分页组件触发的事件
    jumpPage(data) {
      this.currentPage = data.currentPage;  //当前页
      this.currentSize = data.currentSize;  //每页显示条数
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
      if(this.select != -1){
        this.findData[this.select] = this.selectValue
      }else{
        this.findData = {}
      }
      request({
        url:
          "/cominvoicetype/findPage?current=" +
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
        url: "/cominvoicetype/findOne",
        method: "post"
      }).then(result => {
        console.log(result);
      });
    },
    // 保存
    save() {
      if(!this.updatebool){
        // 新增
        request({
          url: "/cominvoicetype/add",
          method: "post",
          data: this.entity
        }).then(result => {
            Message.success(result.data.data)
            //关闭模态框
            this.addDialog = false
            this.findPage()
            this.entity = {}
        });
      }else{
        // 修改
        request({
          url: "/cominvoicetype/update",
          method: "post",
          data: this.entity
        }).then(result => {
            Message.success(result.data.data)
            //关闭模态框
            this.addDialog = false
            this.findPage()
            this.updatebool = false
            this.entity = {}
        });
      }
      
    },
    //保存后新增
    saveAddition(){
      var number = this.entity.departID
    },
    // 修改
    update(entity){
      this.updatebool = true
      this.addDialog = true
      this.entity = entity
    },
    // 删除
    del(id){
      request({
        url: "/cominvoicetype/del?id="+id,
        method: "get"
      }).then(result => {
        Message.success(result.data.data)
        this.findPage()
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
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
.el-form-item {
  margin-bottom: 5px;
}
</style>

