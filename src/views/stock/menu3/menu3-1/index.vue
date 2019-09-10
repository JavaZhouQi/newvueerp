<!--  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="单据日期" value="moveDate"></el-option>
            <el-option label="调出仓库名称" value="wareOutName"></el-option>
            <el-option label="调入仓库名称" value="wareName"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button type="primary" @click="addDialog = true;updatebool = false;entity = {}">新增调拨单</el-button>
      </div>
    </div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;">
      <el-table-column prop="allotId" label="单据号码" sortable width="120" column-key="date"></el-table-column>
      <el-table-column prop="moveDate" label="单据日期" width="150"></el-table-column>
      <el-table-column prop="wareOutName" label="调出仓库名称" width="150"></el-table-column>
      <el-table-column prop="wareName" label="调入仓库名称" width="150"></el-table-column>
      <el-table-column prop="maker" label="制单人" width="120"></el-table-column>
      <el-table-column prop="permitter" label="复核人" width="120"></el-table-column>
      <el-table-column prop="remark" label="备注" width="150"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.allotId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>
    <el-dialog title="编辑调拨单" :visible.sync="addDialog" width="70%" :before-close="handleClose">
      <span>
        <el-form :model="entity" label-position="left" label-width="80px" status-icon :rules="rules">
       <template>
<div class='max'>
    <el-row :gutter="20" class="a">
        <el-col :span="2"><div class="grid-content bg-purple" style="color: blue;">调出仓库</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input placeholder="调出仓库" v-model="entity.wareOutName" clearable ></el-input></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="color: blue;">单据日期</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-date-picker v-model="entity.moveDate" type="datetime" placeholder="选择日期时间" :picker-options="entity.moveDate" style="width: 100%;"></el-date-picker></div></el-col>
    </el-row>
    <el-row :gutter="20" class="a">
        <el-col :span="2"><div class="grid-content bg-purple" style="color: blue;">调入仓库</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input placeholder="调入仓库" v-model="entity.wareName" clearable ></el-input></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="color: blue;">单据号码</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input placeholder="单据号码" v-model="entity.allotId"  clearable ></el-input></div></el-col>
    </el-row>
    <el-tabs type="border-card">
        <el-tab-pane label="内容">
            <template>
    <el-table
    :data="list"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="ColumnNo"
      label="（栏号）"
      width="120">
    </el-table-column>
    <el-table-column
      prop="StockNumber"
      label="物料编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="StockName"
      label="（物料名称）"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Specifications"
      label="（规格型号）"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Unit"
      label="（单位）"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Quantity"
      label="（数量）"
      width="120">
    </el-table-column>
     <el-table-column
      prop="EntryNote"
      label="（分录备注）"
      width="120">
    </el-table-column>
     <el-table-column
      prop="EffectiveDate"
      label="（使用有效期）"
      width="120">
    </el-table-column>
  </el-table>
</template>
        </el-tab-pane>
        <el-tab-pane label="备注">
            <el-row :gutter="20" class="a">
                <el-col :span="2"><div class="grid-content bg-purple">自定栏一</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple"><el-input v-model="entity.udef1" clearable ></el-input></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple">自定栏二</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple"><el-input v-model="entity.udef2" clearable ></el-input></div></el-col>
            </el-row>
             <el-row :gutter="20" class="a">
                <el-col :span="2"><div class="grid-content bg-purple">备注</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple"><el-input type="textarea" class="bz" v-model="entity.remark"></el-input></div></el-col>
            </el-row>
        </el-tab-pane>
    </el-tabs>
    <el-row :gutter="20" class="b">
        <el-col :span="2"><div class="grid-content bg-purple">制单人员</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input  v-model="entity.maker" clearable ></el-input></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">复核人员</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input  v-model="entity.permitter" clearable ></el-input></div></el-col>
    </el-row>
    <el-dropdown>
  <el-button type="primary">
    功能<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>批号设定</el-dropdown-item>
    <el-dropdown-item>条码打印</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>
</template>
        </el-form>
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
      list: [
          {
          ColumnNo: '1',
          StockNumber: '20160503',
          StockName: '骁龙处理器850',
          Specifications: 'XLclq-8',
          Unit: '人民币',
          Quantity: 10,
          EntryNote:'备注加急',
          EffectiveDate:'2012-08-30'
        },
        {
          ColumnNo: '2',
          StockNumber: '20160504',
          StockName: '麒麟处理器850',
          Specifications: 'QLclq-8',
          Unit: '人民币',
          Quantity: 8,
          EntryNote:'备注加急',
          EffectiveDate:'2012-08-30'
        }
        ],
      entity: {
      },   // 新增and修改的对象
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
        departID: [
           { required: true, message: '编号不能为空', trigger: 'blur' },
        ],
        departName: [
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
          "/tjcallot/findPage?current=" + this.currentPage +"&size=" +this.currentSize,
        method: "post",
        data: this.findData
      }).then(result => {
        console.log("112"+result)
        this.tableData = result.data.data.rows; //查询的数据
        this.pagenumber = result.data.data.total; // 总条数
      });
    },
    // 单个查询
    findOne() {
      request({
        url: "/tjcallot/findOne",
        method: "post"
      }).then(result => {
        console.log(result);
      });
    },
    // 保存
    save() {
      this.entity.list = this.list;
      alert(JSON.stringify(this.entity));
      if(!this.updatebool){
        // 新增
        request({
          url: "/tjcallot/add",
          method: "post",
          data: this.entity,
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
          url: "/tjcallot/update",
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
        url: "/tjcallot/del?id="+id,
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
 .a{
    margin: 15px;
 }
 .b{
     margin: 15px;
 }
 .max{
     margin: 10px;
     width: 1000px;
 }
</style>
