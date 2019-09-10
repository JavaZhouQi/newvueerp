<!-- 发票页面  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="供应商名称" value="0"></el-option>
            <el-option label="发票单据" value=" "></el-option>
            <el-option label="单据日期" value="departName"></el-option>
            <el-option label="是否审核" value="memo"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button type="primary" @click="addDialog = true;updatebool = false;entity = {}">新增</el-button>
      </div>
    </div>
    <el-table ref="filterTable" :data="tableData4" style="width: 100%;margin-top:10px;">
        <el-table-column width="50"  type="index"></el-table-column>
        <el-table-column prop="fundBillNo" label="发票单据" sortable width="180" column-key="date"></el-table-column>
        <el-table-column prop="fullName" label="供应商名称" width="180"></el-table-column>
        <el-table-column prop="billDate" label="单据日期" width="280"></el-table-column>
        <el-table-column prop="affirmState" label="审核状态" width="280"></el-table-column>
        <el-table-column label="操作" width="280">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-search" circle @click="findOne(scope.row.fundBillNo)" ></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.row.fundBillNo)"></el-button>
          </template>
        </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>

    <el-dialog width="800px" title="发票详情" :visible.sync="addDialog"  :before-close="handleClose">
        <el-button class="shenghe" >审核</el-button>
        <img src="@/assets/he.png" class="img" v-if="sale_quotation.audit">
        <el-form :model="sale_quotation" size="mini" :label-position="'left'"   ref="sale_quotation" label-width="100px" class="demo-ruleForm">
        <el-row>
            <el-col :span="12">
               <el-form-item label="供应商"  prop="fullName">  <el-input v-model="entity.fullName"></el-input> </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="单据日期"  prop="billDate" >
                    <el-date-picker class="xiala"  type="datetime" placeholder="选择日期时间" v-model="entity.billDate"> </el-date-picker> 
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
               <el-form-item label="单据类型"   prop="BillTypeID"  class="xiala"> 
                   <el-select v-model="entity.billTypeID"  class="xiala"  placeholder="采购发票">
                    <el-option label="采购发票" value="0" ></el-option>
                    <el-option label="退货及折让证明" value="1"></el-option>
                   </el-select>
               </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="单据号码"  prop="fundBillNo"> <el-input v-model="entity.fundBillNo"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="单价是否含税"   prop="billTypeID"  > 
                   <el-select v-model="entity.billTypeID" class="xiala" placeholder="未税" >
                    <el-option label="未税" value="0"  ></el-option>
                    <el-option label="含税" value="1"></el-option>
                   </el-select>
               </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="发票号码"  prop="invoiceNo"> <el-input v-model="entity.billTypeID"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
               <el-form-item label="采购核对状态"   prop="affirmStateID" class="xiala"> 
                   <el-select v-model="entity.affirmStateID" class="xiala" placeholder="未核对">
                    <el-option label="已核对" value="0" ></el-option>
                    <el-option label="未核对" value="1"></el-option>
                   </el-select>
               </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="发票类型"  prop="invotypeName"> <el-input v-model="entity.invotypeName"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="凭证编号"  prop="voucherNo"> <el-input v-model="entity.voucherNo"></el-input> </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="币别"  prop="currencyName"> <el-input v-model="entity.currencyName"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="差价凭证编号"  prop="cVoucherNo"> <el-input v-model="entity.cVoucherNo"></el-input> </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="汇率"  prop="exchRate"> <el-input v-model="entity.exchRate"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <div class="details">
            <el-tabs  type="card" >
                <el-tab-pane :key="1"  label="内容" class="tab" >
                    <el-table :data="sale_quotation.details" height="150" size="mini" max-height="250" border style="width: 100%">
                        <el-table-column fixed  prop="date"  width="30">
                            <el-checkbox v-model="checked" class="checked"></el-checkbox>
                        </el-table-column>
                        <el-table-column fixed  prop="date" label="栏号" width="50"></el-table-column>
                        <el-table-column prop="name" label="物料编号" width="150"></el-table-column>
                        <el-table-column prop="province" label="物料名称" width="150"></el-table-column>
                        <el-table-column prop="city" label="规格型号" width="100"></el-table-column>
                        <el-table-column prop="address" label="（单位名称）" width="100"></el-table-column>
                        <el-table-column prop="zip" label="数量" width="100"></el-table-column><el-table-column prop="zip" label="单价" width="100"></el-table-column>
                        <el-table-column prop="zip" label="金额" width="100"></el-table-column>
                        <el-table-column prop="zip" label="税率(%)" width="100"></el-table-column>
                        <el-table-column prop="zip" label="税额" width="100"></el-table-column>
                        <el-table-column prop="zip" label="（含税金额）" width="100"></el-table-column>
                        <el-table-column prop="zip" label="（未进数量）" width="100"></el-table-column>
                        <el-table-column prop="zip" label="（采购订单号）" width="110"></el-table-column>
                        <el-table-column prop="zip" label="分录备注" width="200"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :key="2"  label="清单" class="tab" >
                    <el-table :data="sale_quotation.details" height="150" size="mini" max-height="250" border style="width: 100%">
                        <el-table-column fixed  prop="date"  width="30">
                            <el-checkbox v-model="checked" class="checked"></el-checkbox>
                        </el-table-column>
                        <el-table-column fixed  prop="date" label="栏号" width="50"></el-table-column>
                        <el-table-column prop="name" label="物料编号" width="150"></el-table-column>
                        <el-table-column prop="province" label="物料名称" width="150"></el-table-column>
                        <el-table-column prop="city" label="规格型号" width="100"></el-table-column>
                        <el-table-column prop="address" label="（单位名称）" width="100"></el-table-column>
                        <el-table-column prop="zip" label="数量" width="100"></el-table-column><el-table-column prop="zip" label="单价" width="100"></el-table-column>
                        <el-table-column prop="zip" label="金额" width="100"></el-table-column>
                        <el-table-column prop="zip" label="税率(%)" width="100"></el-table-column>
                        <el-table-column prop="zip" label="税额" width="100"></el-table-column>
                        <el-table-column prop="zip" label="（含税金额）" width="100"></el-table-column>
                        <el-table-column prop="zip" label="（汇差）" width="100"></el-table-column>
                        <el-table-column prop="zip" label="（价差）" width="100"></el-table-column>
                        <el-table-column prop="zip" label="（价差本位币）" width="100"></el-table-column>
                        <el-table-column prop="zip" label="(差额合计)" width="100"></el-table-column>
                        <el-table-column prop="zip" label="（来源单别）" width="110"></el-table-column>
                        <el-table-column prop="zip" label="（来源单号）" width="110"></el-table-column>
                        <el-table-column prop="zip" label="分录备注" width="200"></el-table-column>
                    </el-table>
                </el-tab-pane>
                 <el-tab-pane :key="3"  label="账款"  class="tab">
                    <el-row>
                       <el-col :span="12">
                           <el-form-item label="账款归属"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
                       </el-col>
                        <el-col :span="12"> 
                            <el-form-item label="结算方式一"  prop="name">
                                <el-col :span="12">
                                    <el-input v-model="sale_quotation.name"></el-input>
                                </el-col>
                                <el-col :span="12">
                                    <el-input v-model="sale_quotation.name"></el-input>
                                </el-col>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="12">
                            <el-form-item label="付款条件"  prop="name">
                                <el-col :span="12">
                                    <el-select v-model="sale_quotation.tax">
                                        <el-option label="货到" value="0" ></el-option>
                                        <el-option label="次月" value="1"></el-option>
                                        <el-option label="月结" value="2"></el-option>
                                        <el-option label="其他" value="3"></el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="12">
                                    <el-input v-model="sale_quotation.name"></el-input>
                                </el-col>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                           <el-form-item label="结算方式二"  prop="name" >
                                <el-col :span="12">
                                    <el-input v-model="sale_quotation.name"></el-input>
                                </el-col>
                                <el-col :span="12">
                                    <el-input v-model="sale_quotation.name"></el-input>
                                </el-col>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                       <el-col :span="12">
                           <el-form-item label="付款日期"  prop="name"> <el-date-picker class="xiala"  type="datetime" placeholder="选择日期时间"> </el-date-picker></el-form-item>
                       </el-col>
                       <el-col :span="12">
                           <el-form-item label="结算方式三"  prop="name">
                            <el-col :span="12">
                                <el-input v-model="sale_quotation.name"></el-input>
                            </el-col>
                            <el-col :span="12">
                                <el-input v-model="sale_quotation.name"></el-input>
                            </el-col>
                        </el-form-item>
                       </el-col>
                    </el-row>
                    <el-row>
                       <el-col :span="12">
                           <el-form-item label="账款月份"  prop="name"> <el-date-picker class="xiala"  type="datetime" placeholder="选择日期时间"> </el-date-picker></el-form-item>
                       </el-col>
                    </el-row>
                </el-tab-pane>
                <el-row>
                        <el-col :span="12">
                        <el-form-item label="采购人员"   prop="name"> 
                            <el-input v-model="sale_quotation.name"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="制单人员"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="所属部门"   prop="name"> 
                            <el-input v-model="sale_quotation.name"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="复核人员"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="所属项目"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            &nbsp;
                        </el-col>
                        <el-col :span="6">
                           &nbsp;
                        </el-col>
                        <el-col :span="3">
                           <el-button type="success" @click="save()">保存</el-button>
                        </el-col>
                        <el-col :span="3">
                           <el-button type="reset" >重置</el-button> 
                      </el-col>
                    </el-row>
            </el-tabs>
        </div>
        
</el-form>
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
      entity: {
          // 新增and修改的对象

      }, 
      tableData4: [
      
        
      ], // 显示数据
      findData: {}, // 查询数据
      select: "", // 查询条件
      selectValue: "",
      shenghe:false,
      checked:"",
      addDialog: false, // 新增模态框
      currentPage: 1, // 当前页
      currentSize: 10, // 每页条数
      pagenumber: 0, // 总条数
      updatebool: true,
      sale_quotation:{},
      rules: {
        id: [{ required: true, message: "编号不能为空", trigger: "blur" }],
        username: [
          { required: true, message: "名称不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        role: [{ required: true, message: "角色不能为空", trigger: "blur" }]
      },
      value: ""
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
          "/lypurchaseinvoice/findPage?current=" +
          this.currentPage +
          "&size=" +
          this.currentSize,
        method: "post",
        data: this.findData
      }).then(result => {
        // console.log(result.data.data);

        this.tableData4 = result.data.data.rows; //查询的数据
        console.log("---------------------tableData4")
        console.log(this.tableData4)
       
        this.pagenumber = result.data.data.total; // 总条数
      });
    },
    // 单个查询
    findOne(id) {
      
      request({
        url: "/lypurchaseinvoice/findOne?id="+id,
        method: "post"
      }).then(result => {
        console.log(result.data.data);
       
        this.entity=result.data.data;
         this.updatebool = true;
        this.addDialog = true;
        console.log(this.entity);
      });
    },
    // 保存
    save() {
      if (!this.updatebool) {
        // 新增
        console.log("--------------------- 新增")
        request({
          url: "/lypurchaseinvoice/add",
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
         console.log(this.entity);
        request({
          url: "/lypurchaseinvoice/update",
          method: "post",
          data: this.entity
        }).then(result => {
          Message.success(result.data.data);
          // console.log(result.data.data);
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
    update(id) {

      this.updatebool = true;
      this.addDialog = true;
      this.entity = entity;
    },
    // 删除
    del(id) {
      request({
        url: "/lypurchaseinvoice/del?id=" + id,
        method: "get"
      }).then(result => {
        Message.success(result.data.data);
        this.findPage();
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.findPage();
          this.entity={};
  }
};
</script>
<style lang='scss' scoped>
    .shenghe{
        position: absolute;
        top:20px;
        right: 80px;
    }
     .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
        margin-top: 5px;
        margin-bottom: 0px;
        margin-right: 20px;
        margin-left: 10px;
    }
    .details{
        margin-top: 10px;
        width: 750px;
        margin: 10px auto;
    }
    .el-tabs__item {
        /* padding: 0 10px; */
        /* height: 30px;
        line-height: 30px; */
    }
    .xiala{
        width: 250px;
    }
    .xuanxinag{
        border: 2px solid red ;
    }
    .checked{
        background-color: white
    }
    .tab{
        height: 150px;
       
    }
    .img{
         position: absolute;
        top:90px;
        right: 50px;
        z-index: 100;
        
    }
</style>
