<!--  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="物料类别编号" value="classID"></el-option>
            <el-option label="物料类别名称" value="className"></el-option>
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
      <el-table-column prop="classID" label="物料类别编号" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="className" label="物料类别名称" width="180"></el-table-column>
      <el-table-column prop="engName" label="英文名称" width="280"></el-table-column>
     <el-table-column prop="memo" label="备注" width="280"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.classID)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>

    <el-dialog title="编辑物料类别" :visible.sync="addDialog" width="30%" :before-close="handleClose">
      <span>
        <el-form :model="entity" label-position="left" label-width="120px" status-icon :rules="rules" size="medium">
          <el-form-item label="物料类别编号" prop="classID">
            <el-input v-model="entity.classID" :disabled="updatebool"></el-input>
          </el-form-item>
          <el-form-item label="物料类别名称" prop="className">
            <el-input v-model="entity.className"></el-input>
          </el-form-item>
          <el-form-item label="英文名称">
            <el-input v-model="entity.engName"></el-input>
          </el-form-item>
          <el-form-item label="存货科目">
            <el-input v-model="entity.accInventory"></el-input>
          </el-form-item>
          <el-form-item label="销售收入科目">
            <el-input v-model="entity.accSale"></el-input>
          </el-form-item>
          <el-form-item label="发出商品科目">
            <el-input v-model="entity.accSaleCost"></el-input>
          </el-form-item>
          <el-form-item label="赠品费用科目">
            <el-input v-model="entity.giftExpense"></el-input>
          </el-form-item>
          <el-form-item label="其他收入科目">
            <el-input v-model="entity.otherExpense"></el-input>
          </el-form-item>
          <el-form-item label="其他费用科目">
            <el-input v-model="entity.otherIncome"></el-input>
          </el-form-item>
          <el-form-item label="其他成本科目">
            <el-input v-model="entity.otherCost"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="entity.memo"></el-input>
          </el-form-item>
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
        classID: [
           { required: true, message: '编号不能为空', trigger: 'blur' },
        ],
        className: [
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
          "/comproductclass/findPage?current=" +
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
        url: "/comproductclass/findOne",
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
          url: "/comproductclass/add",
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
          url: "/comproductclass/update",
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
      var number = this.entity.classID
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
        url: "/comproductclass/del?id="+id,
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
</style>
