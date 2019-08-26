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
        <el-button
          type="primary"
          @click="addDialog = true;updatebool = false;entity = {comcustaddressList:[],comcusttrade:{},comcustdesc:{}}"
        >新增</el-button>
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

    <el-dialog title="编辑客户" :visible.sync="addDialog" width="50%" :before-close="handleClose">
      <span>
        <div style="height:180px;padding: 0px 20px;">
          <div style="width:45%;float:left;">
            <el-form label-position="left" label-width="80px" size="mini">
              <el-form-item label="客户编号">
                <el-input v-model="entity.id"></el-input>
              </el-form-item>
              <el-form-item label="客户全称">
                <el-input v-model="entity.fullName"></el-input>
              </el-form-item>
              <el-form-item label="客户简称">
                <el-input v-model="entity.shortName"></el-input>
              </el-form-item>
              <el-form-item label="英文全称">
                <el-input v-model="entity.engFullName"></el-input>
              </el-form-item>
              <el-form-item label="英文简称">
                <el-input v-model="entity.engShortName"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div style="width:45%;float:right;margin-left:10px;">
            <el-form label-position="left" label-width="100px" size="mini">
              <el-form-item label="账款归属">
                <el-input v-model="entity.fundsAttribution"></el-input>
              </el-form-item>
              <el-form-item label="类别">
                 <el-select v-model="entity.classID" clearable placeholder="请选择" style="width:205px;">
                    <el-option
                      v-for="item in comcustclassList"
                      :key="item.classID"
                      :label="item.className"
                      :value="item.classID"
                    ></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="地区">
                 <el-select v-model="entity.areaID" clearable placeholder="请选择" style="width:205px;">
                    <el-option
                      v-for="item in addressList"
                      :key="item.areaID"
                      :label="item.areaName"
                      :value="item.areaID"
                    ></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="币别">
                <el-input v-model="entity.currencyID"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div style="padding: 0px 10px;">
          <el-tabs type="card">
            <el-tab-pane label="基本资料">
              <el-form label-position="left" label-width="100px" :inline="true" size="mini">
                <el-form-item label="负责人">
                  <el-input v-model="entity.chiefName"></el-input>
                </el-form-item>
                <el-form-item label="业务人员">
                  <el-input v-model="entity.personID"></el-input>
                </el-form-item>
                <el-form-item label="联系人">
                  <el-input v-model="entity.linkMan"></el-input>
                </el-form-item>
                <el-form-item label="税务登记号">
                  <el-input v-model="entity.taxNo"></el-input>
                </el-form-item>
                <el-form-item label="联系电话一">
                  <el-input v-model="entity.telephone1"></el-input>
                </el-form-item>
                <el-form-item label="资本额">
                  <el-input v-model="entity.capitalization"></el-input>
                </el-form-item>
                <el-form-item label="联系电话二">
                  <el-input v-model="entity.telephone2"></el-input>
                </el-form-item>
                <el-form-item label="行业别">
                  <el-input v-model="entity.industrialClass"></el-input>
                </el-form-item>
                <el-form-item label="联系电话三">
                  <el-input v-model="entity.telephone3"></el-input>
                </el-form-item>
                <el-form-item label="电子邮件">
                  <el-input v-model="entity.email"></el-input>
                </el-form-item>
                <el-form-item label="移动电话">
                  <el-input v-model="entity.mobileTel"></el-input>
                </el-form-item>
                <el-form-item label="网址">
                  <el-input v-model="entity.webAddress"></el-input>
                </el-form-item>
                <el-form-item label="银行账号">
                  <el-input v-model="entity.faxNo"></el-input>
                </el-form-item>
                <el-form-item label="开户银行">
                  <el-input v-model="entity.bankId"></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="销售信息">
              <el-form label-position="left" label-width="120px" :inline="true" size="mini">
                <el-form-item label="最初销售出库日">
                  <el-date-picker v-model="entity.earliestTradeDate" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="折数(%)">
                  <el-input v-model="entity.rateOfDiscount"></el-input>
                </el-form-item>
                <el-form-item label="最初销售退货日">
                  <el-date-picker v-model="entity.firstTradeDate" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="售价等级">
                  <el-input v-model="entity.priceRank"></el-input>
                </el-form-item>
                <el-form-item label="最近销售出库日">
                  <el-date-picker v-model="entity.latelyTradeDate" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="单价是否含税">
                  <el-input v-model="entity.invoTax"></el-input>
                </el-form-item>
                <el-form-item label="最近销售退货日">
                  <el-date-picker v-model="entity.latelyReturnDate" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="潜在客户编号">
                  <el-input v-model="entity.custIntro"></el-input>
                </el-form-item>
                <el-form-item label="最近拜访日">
                  <el-date-picker v-model="entity.lastVisitDate" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="客户建立日期">
                  <el-date-picker v-model="entity.buildUpDate" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="预约拜访日">
                  <el-date-picker v-model="entity.bookVisitDate" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="终止交易日">
                  <el-date-picker v-model="entity.finalTradeDate" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="收款信息">
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
                地址
                <i class="el-icon-circle-plus-outline" @click="addAddress"></i>
              </span>
              <vxe-table
                border
                resizable
                highlight-hover-row
                class="vxe-table-element"
                height="200"
                :data.sync="entity.comcustaddressList"
                :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
              >
                <vxe-table-column title="删除">
                  <template v-slot="{ row }" style="padding:10px;">
                    <i class="el-icon-remove" @click="comcustaddressRemove(row)"></i>
                  </template>
                </vxe-table-column>
                <vxe-table-column field="id" title="地址编号" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
                <vxe-table-column field="address" title="地址"  width="160" :edit-render="{name: 'input'}"></vxe-table-column>
                <vxe-table-column field="zipCode" title="邮政编码" width="160" :edit-render="{name: 'input'}"></vxe-table-column>
                <vxe-table-column field="linkMan" title="联系人" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
                <vxe-table-column field="linkManProf" title="联系人职称" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
                <vxe-table-column field="telephone" title="联系电话" width="140" :edit-render="{name: 'input'}"></vxe-table-column>
                <vxe-table-column field="faxNo" title="传真号码" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
                <vxe-table-column field="walkAddr" title="行走路线" width="180"  :edit-render="{name: 'input'}"></vxe-table-column>
                <vxe-table-column field="memo" title="备注" width="180"  :edit-render="{name: 'input'}"></vxe-table-column>
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
        id: [{ required: true, message: "编号不能为空", trigger: "blur" }],
        fullName: [{ required: true, message: "名称不能为空", trigger: "blur" }]
      },
      addressList:[], // 地区
      comcustclassList:[] // 客户类别
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
      if (!this.updatebool) {
        // 新增
        request({
          url: "/comcustomer/add",
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
          url: "/comcustomer/update",
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
      var number = this.entity.id;
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
        url: "/comcustomer/del?id=" + id + "&flag=1",
        method: "get"
      }).then(result => {
        Message.success(result.data.data);
        this.findPage();
      });
    },
    // 新增一行地址栏
    addAddress() {
      this.entity.comcustaddressList.push({});
    },
    // 获取所有地区
    findAddress(){
      request({
        url: "/comarea/findAll",
        method: "get"
      }).then(result => {
        this.addressList = result.data.data;
      });
    },
    // 获取所有类别
    findByFlagComcustclassList(){
      request({
        url: "/comcustclass/findByFlag?flag=1",
        method: "get"
      }).then(result => {
        this.comcustclassList = result.data.data;
      });
    },
    // 删除当前地址
    comcustaddressRemove(row){
      this.entity.comcustaddressList.splice(this.entity.comcustaddressList.indexOf(row),1)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.findPage();
    this.findAddress();
    this.findByFlagComcustclassList();
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
