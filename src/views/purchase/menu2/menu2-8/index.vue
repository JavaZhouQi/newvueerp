<!--  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="物料名称" value="ProdName"></el-option>
            <el-option label="规格型号" value="ProdSize"></el-option>
            <el-option label="英文名称" value="engName"></el-option>
            <el-option label="备注" value="memo"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button type="primary" @click="addDialog = true;updatebool = false;entity = {}">新增</el-button>
      </div>
    </div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;">
      <el-table-column prop="ProdID" label="物料编号" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="ProdName" label="物料名称" width="180"></el-table-column>
      <el-table-column prop="ProdSize" label="规格型号" width="280"></el-table-column>
      <el-table-column prop="SQuantity" label="数量" width="200"></el-table-column>
       <el-table-column prop="Sprice" label="单价" width="200"></el-table-column>
        <el-table-column prop="Amount" label="金额" width="200"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.ProdID)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>
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
        url:"/zwjwarehousingdetail/warehousingdetailquery",
        method: "post",
        data: this.findData
      }).then(result => {
       
      });
    },
    // 单个查询
    findOne() {
      request({
        url: "/comdepartment/findOne",
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
          url: "/comdepartment/add",
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
          url: "/comdepartment/update",
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
        url: "/comdepartment/del?id="+id,
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
</style>
