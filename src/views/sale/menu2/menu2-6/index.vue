<!--  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="客户编号" value="billNo"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button
          type="primary"
          @click="addDialog = true;updatebool = false;entity = {chlsmbinvoicesubList:[],comcusttrade:{},comcustdesc:{}}"
        >新增</el-button>
      </div>
    </div>

     <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;">
      <el-table-column prop="billNo" label="客户编号" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="exportID" label="负责人" width="180"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.billNo)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>

    <el-dialog title="编辑销售发票" :visible.sync="addDialog" width="50%" :before-close="handleClose">
      <span>
        <div style="height:180px;padding: 0px 20px;">
          <div style="width:45%;float:left;">
            <el-form label-position="left" label-width="80px" size="mini">
              <el-form-item label="客户编号">
                <el-input v-model="entity.billNo"></el-input>
              </el-form-item>
              <el-form-item label="单据类型">
                 <el-select v-model="entity.billType" clearable placeholder="请选择" style="width:205px;">
                      <el-option label="销售发票" value="0" ></el-option>
                      <el-option label="退货及折让证明" value="1"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="单价是否含税">
                 <el-select v-model="entity.payTerm" clearable placeholder="请选择" style="width:205px;">
                      <el-option label="含税" value="0" ></el-option>
                      <el-option label="未含税" value="1"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="核对状态">
                 <el-select v-model="entity.affirmState" clearable placeholder="请选择" style="width:205px;">
                      <el-option label="已核对" value="0" ></el-option>
                      <el-option label="未核对" value="1"></el-option>
                  </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div style="width:45%;float:right;margin-left:10px;">
            <el-form label-position="left" label-width="100px" size="mini">
               <el-form-item label="单据日期">
                <el-input v-model="entity.exportDate"></el-input>
              </el-form-item>
              <el-form-item label="单据号码">
                <el-input v-model="entity.delayDays"></el-input>
              </el-form-item>
              <el-form-item label="发票类型">
                <el-input v-model="entity.invoTypeId"></el-input>
              </el-form-item>
              <el-form-item label="币别">
                <el-input v-model="entity.gatherOther"></el-input>
              </el-form-item>
              <el-form-item label="导出人员">
                <el-input v-model="entity.exportID"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div style="padding: 0px 10px;">
          <el-tabs type="card">
            <el-tab-pane :key="1"  label="内容" class="tab" >
                    <el-table :data="entity.chlsmbinvoicesub" height="150" size="mini" max-height="250" border style="width: 100%">
                        <el-table-column fixed  prop="serNo"  width="30">
                            <el-checkbox  class="checked"></el-checkbox>
                        </el-table-column>
                        <el-table-column fixed  prop="serNo" label="栏号" width="50"></el-table-column>
                        <el-table-column prop="prodId" label="物料编号" width="150"></el-table-column>
                        <el-table-column prop="prodName" label="物料名称" width="150"></el-table-column>
                        <el-table-column prop="prodSize" label="规格型号" width="100"></el-table-column>
                        <el-table-column prop="unitRelation" label="（单位名称）" width="100"></el-table-column>
                        <el-table-column prop="quantity" label="数量" width="100"></el-table-column><el-table-column prop="zip" label="单价" width="100"></el-table-column>
                        <el-table-column prop="amount" label="金额" width="100"></el-table-column>
                        <el-table-column prop="taxRate" label="税率(%)" width="100"></el-table-column>
                        <el-table-column prop="taxAmt" label="税额" width="100"></el-table-column>
                        <el-table-column prop="amountWithTax" label="（含税金额）" width="100"></el-table-column>
                        <el-table-column prop="lQty" label="（未进数量）" width="100"></el-table-column>
                        <el-table-column prop="zip" label="（销售订单号）" width="110"></el-table-column>
                        <el-table-column prop="remark" label="分录备注" width="200"></el-table-column>
                    </el-table>
                </el-tab-pane>
            <el-tab-pane label="清单">
              <el-table :data="chlsmbinvoicesub" height="150" size="mini" max-height="250" border style="width: 100%">
                        <el-table-column fixed  prop="serNo"  width="30">
                            <el-checkbox v-model="checked" class="checked"></el-checkbox>
                        </el-table-column>
                        <el-table-column fixed  prop="serNo" label="栏号" width="50"></el-table-column>
                        <el-table-column prop="prodId" label="物料编号" width="150"></el-table-column>
                        <el-table-column prop="prodName" label="物料名称" width="150"></el-table-column>
                        <el-table-column prop="prodSize" label="规格型号" width="100"></el-table-column>
                        <el-table-column prop="unitRelation" label="（单位名称）" width="100"></el-table-column>
                        <el-table-column prop="quantity" label="数量" width="100"></el-table-column><el-table-column prop="zip" label="单价" width="100"></el-table-column>
                        <el-table-column prop="amount" label="金额" width="100"></el-table-column>
                        <el-table-column prop="taxRate" label="税率(%)" width="100"></el-table-column>
                        <el-table-column prop="taxAmt" label="税额" width="100"></el-table-column>
                        <el-table-column prop="amountWithTax" label="（含税金额）" width="100"></el-table-column>
                        <el-table-column prop="fromRow" label="（来源单别）" width="110"></el-table-column>
                        <el-table-column prop="fromNo" label="（来源单号）" width="110"></el-table-column>
                        <el-table-column prop="remark" label="分录备注" width="200"></el-table-column>
                    </el-table>
            </el-tab-pane>
            <el-tab-pane label="账款">
              <el-form label-position="left" label-width="100px" :inline="true" size="mini">
                <el-form-item label="账款额度">
                  <el-input v-model="entity.amountQuota"></el-input>
                </el-form-item>
                <el-form-item label="期初预收款">
                  <el-input v-model="entity.billQuota"></el-input>
                </el-form-item>
                <el-form-item label="剩余额度">
                  <el-input v-model="entity.unEnCashQuota"></el-input>
                </el-form-item>
                <el-form-item label="期末应收款">
                  <el-input v-model="entity.noChkUnEnCashQuota"></el-input>
                </el-form-item>
                <el-form-item label="收款条件">
                  <el-select v-model="entity.dayOfClose" clearable placeholder="请选择" style="width:82px;">
                    <el-option value="1" label="货到"></el-option>
                    <el-option value="2" label="次月"></el-option>
                    <el-option value="3" label="月结"></el-option>
                    <el-option value="4" label="其他"></el-option>
                  </el-select>
                  <el-input v-model="entity.dayOfRecv" style="width:100px;"></el-input>
                </el-form-item>
                <el-form-item label="期末预收款">
                  <el-input v-model="entity.endreceivables"></el-input>
                </el-form-item>
                <el-form-item label="每月结账日">
                  <el-input v-model="entity.distDays"></el-input>
                </el-form-item>
                <el-form-item label="期初应收款">
                  <el-input v-model="entity.initialreceivables"></el-input>
                </el-form-item>
                <el-form-item label="信用等级">
                  <el-select v-model="entity.creditLevel" clearable placeholder="请选择" style="width:185px;">
                    <el-option value="A" label="A"></el-option>
                    <el-option value="B" label="B"></el-option>
                    <el-option value="C" label="C"></el-option>
                    <el-option value="D" label="D"></el-option>
                    <el-option value="E" label="E"></el-option>
                    <el-option value="F" label="F"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="预收账款科目">
                  <el-input v-model="entity.accBillRecv"></el-input>
                </el-form-item>
                <el-form-item label="发票类型">
                  <el-input v-model="entity.invoiceType"></el-input>
                </el-form-item>
                <el-form-item label="应收账款科目">
                  <el-input v-model="entity.taxKind"></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label">
                备注
                <i class="el-icon-circle-plus-outline" @click="addAddress"></i>
              </span>
              <vxe-table
                border
                resizable
                highlight-hover-row
                class="vxe-table-element"
                height="200"
                :data.sync="entity.chlsmbinvoicesubList"
                :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
              >
                <vxe-table-column title="删除">
                  <template v-slot="{ row }" style="padding:10px;">
                    <i class="el-icon-remove" @click="chlsmbinvoicesubRemove(row)"></i>
                  </template>
                </vxe-table-column>
              </vxe-table>
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
      entity: {comcusttrade:{},comcustdesc:{}}, // 新增and修改的对象
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
        billNo: [{ required: true, message: "编号不能为空", trigger: "blur" }],
        exportID: [{ required: true, message: "名称不能为空", trigger: "blur" }]
      },
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
      this.findData.flag = 1;
      request({
        url:
          "/chlsmbinvoicemain/findPage?current=" +
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
        url: "/chlsmbinvoicemain/findOne",
        method: "post"
      }).then(result => {
        console.log(result);
      });
    },
    // 保存
    save() {
      this.entity.flag = 1;
      if (!this.updatebool) {
        // 新增
        request({
          url: "/chlsmbinvoicemain/add",
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
          url: "/chlsmbinvoicemain/update",
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
      var number = this.entity.billNo;
    },
    // 修改
    update(entity) {
      this.updatebool = true;
      this.addDialog = true;
      this.entity = entity;
    },
    // 删除
    del(billNo) {
      
      request({
        url: "/chlsmbinvoicemain/del?billNo=" + billNo + "&flag=1",
        method: "get"
      }).then(result => {
        Message.success(result.data.data);
        this.findPage();
      });
    },
    // 新增一行内容
    addAddress() {
      this.entity.chlsmbinvoicesubList.push({});
    },
   
    
    // 删除当前内容
    chlsmbinvoicesubRemove(row){
      this.entity.chlsmbinvoicesubList.splice(this.entity.chlsmbinvoicesubList.indexOf(row),1)
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
.el-dialog__body {
  padding-top: 10px;
}
</style>
