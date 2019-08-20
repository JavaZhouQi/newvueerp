<!--  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="客户编号" value="id"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button type="primary" @click="addDialog = true;updatebool = false;entity = {}">新增</el-button>
      </div>
    </div>
    
    <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;">
      <el-table-column prop="id" label="客户编号" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="fullName" label="客户名称" width="180"></el-table-column>
      <el-table-column prop="chiefName" label="负责人" width="180"></el-table-column>
      <el-table-column prop="areaID" label="地区" width="180"></el-table-column>
      <el-table-column prop="classID" label="类别" width="180"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>

    <el-dialog title="编辑客户" :visible.sync="addDialog" width="60%" :before-close="handleClose">
      <span class="bianji">
        <div style="height:240px;">
          <div  style="width:45%;float:left;">
            <el-form label-position="left" label-width="80px">
              <el-form-item label="名称2" >
                <el-input v-model="entity.fullName"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="entity.fullName"></el-input>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input v-model="entity.fullNamee"></el-input>
              </el-form-item>
               <el-form-item label="活动形式">
                <el-input v-model="entity.fullNamee"></el-input>
              </el-form-item>
               <el-form-item label="活动形式">
                <el-input v-model="entity.fullNamee"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div style="width:45%;float:right;margin-left:10px;">
            <el-form label-position="left" label-width="80px">
            <el-form-item label="名称1" >
              <el-input v-model="entity.fullName"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input v-model="entity.fullName"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input v-model="entity.fullNamee"></el-input>
            </el-form-item>
             <el-form-item label="活动形式">
                <el-input v-model="entity.fullNamee"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
          <div>
            <el-tabs  type="card">
              <el-tab-pane label="用户管理">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
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
        fullName: [
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
      this.findData.flag=1;
      request({
        url:
          "/comcustomer/findPage?current=" +
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
        url: "/comcustomer/findOne",
        method: "post"
      }).then(result => {
        console.log(result);
      });
    },
    // 保存
    save() {
      this.entity.flag = 1;
      if(!this.updatebool){
        // 新增
        request({
          url: "/comcustomer/add",
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
          url: "/comcustomer/update",
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
      var number = this.entity.id
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
        url: "/comcustomer/del?id="+id+"&flag=1",
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
.el-form-item{
  margin-bottom: 5px;
}
.el-dialog__body{
  padding-top: 10px;
}
</style>
