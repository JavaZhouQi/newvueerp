<!--  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="物料编号" value="prodID"></el-option>
            <el-option label="物料名称" value="prodName"></el-option>
            <el-option label="英文名称" value="engName"></el-option>
            <el-option label="备注" value="prodDesc"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button type="primary" @click="addDialog = true;updatebool = false;entity = {}">新增</el-button>
      </div>
    </div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;">
      <el-table-column prop="prodID" label="物料编号" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="prodName" label="物料名称" width="180"></el-table-column>
      <el-table-column prop="engName" label="英文名称" width="280"></el-table-column>
      <el-table-column prop="prodDesc" label="备注" width="280"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.prodID)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>

    <el-dialog title="编辑物料" :visible.sync="addDialog" width="45%" :before-close="handleClose">
      <span>
        <div style="padding:0px 20px;">
          <el-form label-position="left" label-width="100px" :inline="true" size="mini">
            <el-form-item label="物料编号">
              <el-input v-model="entity.prodID" :disabled="updatebool"></el-input>
            </el-form-item>
            <el-form-item label="物料类别">
              <el-select v-model="entity.classID" placeholder="请选择" style="width:185px;">
                <el-option
                  v-for="entity in comprodClassList"
                  :label="entity.className"
                  :value="entity.classID"
                  :key="entity.classID"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="物料名称">
              <el-input v-model="entity.prodName"></el-input>
            </el-form-item>
            <el-form-item label="计量单位">
              <el-select v-model="entity.unitID" placeholder="请选择" style="width:185px;">
                <el-option
                  v-for="entity in comstdunitList"
                  :label="entity.unitName"
                  :value="entity.unitID"
                  :key="entity.unitID"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="规格型号">
              <el-input v-model="entity.prodSize"></el-input>
            </el-form-item>
            <el-form-item label="条形编码">
              <el-input v-model="entity.barCodeID"></el-input>
            </el-form-item>
            <el-form-item label="英文名称">
              <el-input v-model="entity.engName"></el-input>
            </el-form-item>
          </el-form>
          <div style="height:10px;"></div>
          <el-tabs type="card">
            <el-tab-pane label="基本资料">
              <el-form label-position="left" label-width="100px" :inline="true" size="mini">
                <el-form-item label="建议售价">
                  <el-input v-model="entity.suggestPrice"></el-input>
                </el-form-item>
                <el-form-item label="使用币别">
                  <el-select v-model="entity.currID" placeholder="请选择" style="width:185px;">
                    <el-option label="RMB" value="RMB"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="售价A">
                  <el-input v-model="entity.salesPriceA"></el-input>
                </el-form-item>
                <el-form-item label="物态类型">
                  <el-select v-model="entity.prodForm" placeholder="请选择" style="width:185px;">
                    <el-option label="成品" value="1"></el-option>
                    <el-option label="半成品" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="售价B">
                  <el-input v-model="entity.salesPriceB"></el-input>
                </el-form-item>
                <el-form-item label="单价是否含税">
                  <el-select
                    v-model="entity.doesItIncludeTax"
                    placeholder="请选择"
                    style="width:185px;"
                  >
                    <el-option label="含税" value="含税"></el-option>
                    <el-option label="未税" value="未税"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="售价C">
                  <el-input v-model="entity.salesPriceC"></el-input>
                </el-form-item>
                <el-form-item label="税目">
                  <el-input v-model="entity.taxItemsID"></el-input>
                </el-form-item>
                <el-form-item label="售价D">
                  <el-input v-model="entity.salesPriceD"></el-input>
                </el-form-item>
                <el-form-item label="税率(%)">
                  <el-input v-model="entity.busiTaxRate"></el-input>
                </el-form-item>
                <el-form-item label="售价E">
                  <el-input v-model="entity.salesPriceE"></el-input>
                </el-form-item>
                <el-form-item label="采购提前期">
                  <el-input v-model="entity.advanceDays"></el-input>
                </el-form-item>
                <el-form-item label="标准进价">
                  <el-input v-model="entity.stdPrice"></el-input>
                </el-form-item>
                <el-form-item label="主供应商">
                  <el-input v-model="entity.majorSupplier"></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="存量总信息">
              <el-form label-position="left" label-width="100px" :inline="true" size="mini">
                <el-form-item label="安全存量">
                  <el-input v-model="entity.safeQty"></el-input>
                </el-form-item>
                <el-form-item label="低于安全存量">
                  <el-input v-model="entity.csafeAllstk"></el-input>
                </el-form-item>
                <el-form-item label="期初总数量">
                  <el-input v-model="entity.ballAmt"></el-input>
                </el-form-item>
                <el-form-item label="现有总数量">
                  <el-input v-model="entity.ccurrStock"></el-input>
                </el-form-item>
                <el-form-item label="平均成本">
                  <el-input v-model="entity.bavgCost"></el-input>
                </el-form-item>
                <el-form-item label="现行平均成本">
                  <el-input v-model="entity.cavgCost"></el-input>
                </el-form-item>
                <el-form-item label="标准成本">
                  <el-input v-model="entity.bstdCost"></el-input>
                </el-form-item>
                <el-form-item label="标准总成本">
                  <el-input v-model="entity.cstdCost"></el-input>
                </el-form-item>
                <el-form-item label="期初总成本">
                  <el-input v-model="entity.ballCost"></el-input>
                </el-form-item>
                <el-form-item label="现行总成本">
                  <el-input v-model="entity.callCost"></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="存量明细信息">
              <el-table :data="tableData" height="200" border style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="交易资料">
              <el-form label-position="left" label-width="100px" :inline="true" size="mini">
                <el-form-item label="最初出库日">
                  <el-date-picker v-model="entity.boutStockDay" type="date" placeholder="选择日期" style="width:185px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="最近出库日">
                  <el-date-picker v-model="entity.coutStockDay" type="date" placeholder="选择日期" style="width:185px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="最初入库日">
                  <el-date-picker v-model="entity.binStockDay" type="date" placeholder="选择日期" style="width:185px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="最近入库日">
                  <el-date-picker v-model="entity.cinStockDay" type="date" placeholder="选择日期" style="width:185px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="呆滞起计天数">
                  <el-input v-model="entity.sluggishDays"></el-input>
                </el-form-item>
                <el-form-item label="停用日期">
                  <el-date-picker v-model="entity.invaliDate" type="date" placeholder="选择日期" style="width:185px;"></el-date-picker>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="物料描述">
              <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="entity.prodDesc"></el-input>
            </el-tab-pane>
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
import { Message } from "element-ui";

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
        prodID: [{ required: true, message: "编号不能为空", trigger: "blur" }],
        prodName: [{ required: true, message: "名称不能为空", trigger: "blur" }]
      },
      comprodClassList:[],
      comstdunitList:[]
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
          "/comproduct/findPage?current=" +
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
        url: "/comproduct/findOne",
        method: "post"
      }).then(result => {
        console.log(result);
      });
    },
    // 保存
    save() {
      if (!this.updatebool) {
        // 新增
        request({
          url: "/comproduct/add",
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
          url: "/comproduct/update",
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
      var number = this.entity.prodID;
    },
    // 修改
    update(entity) {
      this.updatebool = true;
      this.addDialog = true;
      this.entity = entity;
    },
    // 删除
    del(id) {
      request({
        url: "/comproduct/del?id=" + id,
        method: "get"
      }).then(result => {
        Message.success(result.data.data);
        this.findPage();
      });
    },
    // 查询物料类别
    findComproductclass() {
      request({
        url: "/comproductclass/findAll",
        method: "get"
      }).then(result => {
        this.comprodClassList = result.data.data;
      });
    },
    // 查询物料类别
    findComstdunit() {
      request({
        url: "/comstdunit/findAll",
        method: "get"
      }).then(result => {
        this.comstdunitList = result.data.data;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.findPage();
    this.findComproductclass();
    this.findComstdunit();
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
