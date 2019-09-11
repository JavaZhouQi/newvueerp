<!--  -->
<template>
  <div class>

    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="单据号码" value="billNo"></el-option>
            <el-option label="客户" value="custShortName"></el-option>
            <el-option label="单据日期" value="billDate"></el-option>
            <el-option label="仓库" value="wareName"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button type="primary" @click="addDialog = true;updatebool = false;formLabelAlign = {}">新增</el-button>
      </div>
    </div>

    <el-table ref="filterTable" :data="tableData" style="margin-top:10px;">
      <el-table-column prop="billNo" label="单据号码" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="custShortName" label="客户" width="180"></el-table-column>
      <el-table-column prop="billDate" label="单据日期" width="280"></el-table-column>
      <el-table-column prop="wareName" label="仓库" width="280"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.billNo)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>

    <el-dialog title="销售出库" width="60%" :visible.sync="addDialog" :before-close="handleClose">
      <span>
        <div>
            <el-row :gutter="10">
     <el-form :model="formLabelAlign" :label-position="labelPosition" >

  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">客户</div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
      <el-form-item label="" prop="custShortName">
          <el-input v-model="formLabelAlign.custShortName"></el-input>
      </el-form-item>
   </div></el-col>

  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">单据日期</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="" prop="billDate">
          <el-input v-model="formLabelAlign.billDate" type="date"></el-input>
      </el-form-item>
      </div></el-col>


      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">送货地址</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.custAddress"></el-input>
      </el-form-item>
      </div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">单据号码</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.billNo"></el-input>
      </el-form-item>
      </div></el-col>


      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">销售出库类型</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.outtype" disabled></el-input>
      </el-form-item>
      </div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">币别</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.moneytype" disabled></el-input>
      </el-form-item>
      </div></el-col>


   <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">单价是否含税</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
           <el-select v-model="formLabelAlign.priceOfTax" placeholder="请选择" style="width:300px" >
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
                </el-option>
            </el-select>
      </el-form-item>
      </div></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">汇率</div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.exchangerate" disabled></el-input>
      </el-form-item>
    </div></el-col>

    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">仓库</div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.wareName"></el-input>
      </el-form-item>
    </div></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">国外贸易</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
           <el-select v-model="formLabelAlign.hasForeignTrade" placeholder="请选择" style="width:300px" disabled >
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </el-form-item>
      </div></el-col>



          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">凭证编号</div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
          <el-form-item label="">
              <el-input v-model="formLabelAlign.voucherNo" disabled></el-input>
          </el-form-item>
        </div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="1"><div >复审后自动生成发票</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="1" :xl="1"><div >
          <el-form-item label="">
              <el-checkbox label=""></el-checkbox>
          </el-form-item>
          </div></el-col>
        </el-form>
        </el-row>


<!-- 销售出库的中间部分 -->
<el-tabs type="border-card">
  <el-tab-pane label="内容">
    <el-table
    :data="tableData"
    border
    stripe
    :summary-method="getSummaries"
    show-summary
    style="width: 100%">
    <el-table-column
      prop="columnnumber"
      label="（栏号）"
      width="150"
      show-overflow-tooltip>
    <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="materialnumber"
      label="物料编号"
      width="300"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="materialname"
      label="(物料名称)"
      width="300"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="specificationtype"
      label="(规格型号)"
      width="300"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="companyname"
      label="(单位名称)"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="number"
      label="数量"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="discountprice"
      label="折扣前单价"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

     <el-table-column
      prop="foldingnumber"
      label="折数(%)"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="price"
      label="单价"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="amountofmoney"
      label="(金额)"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="taxrate"
      label="税率(%)"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="taxamount"
      label="税额"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="taxmoney"
      label="含税金额"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

     <el-table-column
      prop="batchnumber"
      label="(批号)"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

     <el-table-column
      prop="materialcombination"
      label="(物料组合)"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

     <el-table-column
      prop="gift"
      label="赠品"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

      <el-table-column
      prop="invoicedetails"
      label="(发票明细)"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

      <el-table-column
      prop="noinvoicenumber"
      label="(未开票数量)"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

      <el-table-column
      prop="remarks"
      label="分录备注"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="sourcelist"
      label="(来源单别)"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="sourceno"
      label="(来源单号)"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>

    <el-table-column
      prop="customerorders"
      label="客户订单"
      width="120"
       show-overflow-tooltip>
       <template >
      <div class="input-box">
         <el-input size="small" @blur="handleInputBlur"></el-input>
      </div>
      <span></span>
   </template>
    </el-table-column>
  </el-table>
  </el-tab-pane>
  
  <el-tab-pane label="账款">
      <el-row :gutter="10">
            <el-form :model="formLabelAlign" >

                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">账款归属</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-input v-model="formLabelAlign.dueTo"></el-input>
                    </el-form-item>
                </div></el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" >收款日期</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-input v-model="formLabelAlign.prepayDay" type="date"></el-input>
                </el-form-item>
      </div></el-col>

                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">收款条件</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-select v-model="formLabelAlign.recvWay" placeholder="请选择" style="width:150px" >
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                        </el-select>
                        <el-input v-model="formLabelAlign.gatherDelay" placeholder="天" style="width:120px"></el-input>
                    </el-form-item>
                    </div></el-col>

                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">账款月份</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                            <el-date-picker
                            v-model="formLabelAlign.accMonth"
                            type="month"
                            placeholder="选择月"
                            style="width:300px"
                             >
                            </el-date-picker>
                    </el-form-item>
                    </div></el-col>


            </el-form>
      </el-row>
  </el-tab-pane>

  <el-tab-pane label="备注">
      <el-row :gutter="10">
            <el-form :model="formLabelAlign">
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">自定栏一</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                        <el-form-item label="">
                            <el-input v-model="formLabelAlign.UDef1"></el-input>
                        </el-form-item>
                        </div></el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">自定栏二</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                        <el-form-item label="">
                            <el-input v-model="formLabelAlign.UDef2"></el-input>
                        </el-form-item>
                    </div></el-col>
            </el-form>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">备注</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="2" :xl="11"><div class="grid-content bg-purple-light">
                        <textarea rows="20" style="width:1035px">
                          
                        </textarea>
                    </div></el-col>
       </el-row>
  </el-tab-pane>
    
  </el-tabs>

<!-- 底部部分 -->
        <div style="height:180px;padding: 10px 10px;">
            <div style="width:45%;float:left;">
             <el-form label-position="left" label-width="80px" size="mini">
              <el-form-item label="业务人员">
                <el-input v-model="formLabelAlign.salesName"></el-input>
              </el-form-item>
              <el-form-item label="所属部门">
                <el-input v-model="formLabelAlign.departName"  ></el-input>
              </el-form-item>
              <el-form-item label="所属项目">
                <el-input v-model="formLabelAlign.projectName" disabled></el-input>
              </el-form-item>
            </el-form>
            </div>

            <div style="width:45%;float:right;margin-left:10px;">
            <el-form label-position="left" label-width="100px" size="mini">
              <el-form-item label="制单人员">
                <el-input v-model="formLabelAlign.maker" placeholder="admin" disabled="true">admin</el-input>
              </el-form-item>
              <el-form-item label="复核人员">
                <el-input v-model="formLabelAlign.permitter"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>


              <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6"><div class="grid-content bg-purple">
                <el-dropdown size="medium" split-button type="primary">
                查询
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item> <router-link to="history">历史交易查询</router-link></el-dropdown-item>
                    <el-dropdown-item>单据状况查询</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </div></el-col>
            <el-col :span="6"><div >
                <el-dropdown size="medium" split-button type="primary">
                转单
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>销售报价转入</el-dropdown-item>
                    <el-dropdown-item>销售订单转入</el-dropdown-item>
                    <el-dropdown-item>商业发票转入</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
                <el-dropdown size="medium" split-button type="primary">
                功能
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>物料组合设定</el-dropdown-item>
                    <el-dropdown-item>批号设定</el-dropdown-item>
                    <el-dropdown-item>条码打印</el-dropdown-item>
                    <el-dropdown-item>批次变更单价</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </div></el-col>
            </el-row>
            


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
      //下拉菜单之是否含税
       options: [{
          value: '是',
          label: '是'
        }, {
          value: '否',
          label: '否'
        }],
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
      },
       labelPosition: 'left',
        formLabelAlign: {
         
        },
       /* 这是内容部分的数据渲染 */ 
       tableData: [{
          
        }
        ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: { 
    getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '合计:';
            return;
          }
         if (index === 5) {
            sums[index] = '总量:';
            return;
          }
        if (index === 9) {
            sums[index] = '总金额:';
            return;
          }
        if (index === 11) {
            sums[index] = '税额数:';
            return;
          }
        if (index === 12) {
            sums[index] = '含税总金额:';
            return;
          }
        });   
        return sums;
    },


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
          "/yzqsellissueorder/findPage?current=" +
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
        url: "/yzqsellissueorder/findOne",
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
          url: "/yzqsellissueorder/add",
          method: "post",
          data: this.formLabelAlign
        }).then(result => {
            Message.success(result.data.data)
            //关闭模态框
            this.addDialog = false
            this.findPage()
            this.formLabelAlign = {}
        });
      }else{
        // 修改
        request({
          url: "/yzqsellissueorder/update",
          method: "post",
          data: this.formLabelAlign
        }).then(result => {
            Message.success(result.data.data)
            //关闭模态框
            this.addDialog = false
            this.findPage()
            this.updatebool = false
            this.formLabelAlign = {}
        });
      }
      
    },
    //保存后新增
    saveAddition(){
      var number = this.formLabelAlign.billNo
    },
    // 修改
    update(formLabelAlign){
      this.updatebool = true
      this.addDialog = true
      this.formLabelAlign = formLabelAlign
    },
    // 删除
    del(id){
      request({
        url: "/yzqsellissueorder/del?id="+id,
        method: "get"
      }).then(result => {
        Message.success(result.data.data)
        this.findPage()
      });
    },

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.findPage();

  }
};
</script>
<style>
.tb-edit .input-box {
   display: none
}

.tb-edit .current-cell .input-box {
   display: block;
   margin-left: -15px;
}



     textarea{
    resize:none;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        margin-top: 5px;
    }
    .bg-purple-light {
        width: 300px;
    }
    .grid-content {
        margin-left: -15px;
        min-height: 36px;
    }






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
