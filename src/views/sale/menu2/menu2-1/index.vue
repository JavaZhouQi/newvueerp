<!--  -->
<template>
  <div class>
    <el-button class="baocun" type="success" @click="save" size="small">保存</el-button>
    <el-button type="primary" class="shenghe" @click="shenghe" size="small " :disabled="savebtn">审核</el-button>
    <img src="@/assets/he.png" width="80px" class="img" v-if="smlordbillmain.auditStatus==1" />
    <el-form
      :model="smlordbillmain"
      size="mini"
      :rules="rules"
      :label-position="'left'"
      ref="smlordbillmain"
      label-width="100px"
      class="demo-smlordbillmain"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="正式客户" prop="name">
            <el-input
              v-model="smlordbillmain.customerName"
              @dblclick.native="storageDetail"
              :disabled="isWriter"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单据日期" prop="billDate">
            <el-date-picker
              v-model="smlordbillmain.billDate"
              value-format="yyyy-MM-dd"
              @change="changeDate"
              :disabled="isWriter"
              align="right"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="送货地址" prop="custAddres">
            <el-col :span="11">
              <el-input v-model="smlordbillmain.custAddres" :disabled="isWriter"></el-input>
            </el-col>
            <el-col class="line" :span="2">&nbsp;&nbsp;</el-col>
            <el-col :span="11">
              <el-input v-model="smlordbillmain.custAddres" :disabled="isWriter"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单据号码" prop="billNo">
            <el-input v-model="smlordbillmain.billNo" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="有效日期" prop="validDate">
            <el-date-picker
              v-model="smlordbillmain.validDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              :disabled="isWriter"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="币别" prop="currID">
            <el-input v-model="smlordbillmain.currID" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="单价是否含税" prop="priceOfTax">
            <el-select v-model="smlordbillmain.priceOfTax">
              <el-option label="未税" :value="0" :disabled="isWriter"></el-option>
              <el-option label="含税" :value="1" :disabled="isWriter"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="汇率" prop="exchrRate">
            <el-input v-model="smlordbillmain.exchrRate" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="details">
        <el-tabs type="card">
          <el-tab-pane label="内容">
            <vxe-table
              height="160"
              resizable
              highlight-hover-row
              class="vxe-table-element"
              :data.sync="smlordbillmain.subList"
              :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
            >
              <vxe-table-column title>
                <template v-slot="{ row }" style="padding:10px;">
                  <i class="el-icon-remove"></i>
                </template>
              </vxe-table-column>
              <vxe-table-column type="index" field="rowNO" title="栏号" width="100"></vxe-table-column>
              <vxe-table-column  
                field="prodID"
                title="物料编号"
                width="140"
                
              >
                <template slot-scope="scope">
                  <el-input class="sml-input" v-model="scope.row.prodID" @dblclick.native="storageprodID" :disabled="true" placeholder=""></el-input>
                </template>
              </vxe-table-column>
              <vxe-table-column
                field="prodName"
                title="物料名称"
                width="140"
              ></vxe-table-column>
              <vxe-table-column
                field="prodSize"
                title="规格型号"
                width="100"
              ></vxe-table-column>
              <vxe-table-column
                field="unit"
                title="单位名称"
                width="100"
              ></vxe-table-column>
              <vxe-table-column
                field="quantity"
                title="数量"
                width="140"
              >
                  <template slot-scope="scope">
                    <el-input class="sml-input" v-model="scope.row.quantity" @blur="calculate(scope.row)" :disabled="isWriter" ></el-input>
                  </template>
              </vxe-table-column>
              <vxe-table-column
                field="oldPrice"
                title="折扣前单价"
                width="110"
              ></vxe-table-column>
              <vxe-table-column
                field="discount"
                title="折数(%)"
                width="100"
              ></vxe-table-column>
              <vxe-table-column field="price" title="单价" width="100"  >
                  <template slot-scope="scope">
                    <el-input class="sml-input" v-model="scope.row.price" @blur="calculate(scope.row)" :disabled="isWriter"></el-input>
                  </template>
              </vxe-table-column>
              <vxe-table-column
                field="amount"
                title="金额"
                width="100"
              ></vxe-table-column>
              <vxe-table-column
                field="taxRate"
                title="税率(%)"
                width="130"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="taxAmt"
                title="税额"
                width="100"
              ></vxe-table-column>
              <vxe-table-column
                field="telephone"
                title="含税金额"
                width="100"
              ></vxe-table-column>
              <vxe-table-column
                field="isGift"
                title="赠品"
                width="140"
              >
                  <template slot-scope="scope">
                      <el-checkbox v-model="scope.row.isGift" @change="changeIsGift(scope.row)"></el-checkbox>
                  </template>
              </vxe-table-column>
              <vxe-table-column
                field="itemRemark"
                title="分录备注"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
            </vxe-table>
          </el-tab-pane>
          <el-tab-pane label="备注">
            <el-row>
              <el-col :span="12">
                <el-form-item label="表头条文" prop="name">
                  <el-input v-model="smlordbillmain.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="自定义栏一" prop="name">
                  <el-input v-model="smlordbillmain.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="表尾条文" prop="name">
                  <el-input v-model="smlordbillmain.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="自定义栏二" prop="name">
                  <el-input v-model="smlordbillmain.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="备注" prop="name">
                  <el-input type="textarea" :rows="4"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="业务人员" prop="salesMan">
            <el-select v-model="smlordbillmain.salesMan" @change="changeSalesMan" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.personID"
                :label="item.personName"
                :value="item.personID">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="制单人员" >
            <el-input v-model="smlordbillmain.makerID" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="所属部门" prop="name">
            <el-input v-model="smlordbillmain.departName" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="复核人员" prop="name">
            <el-input v-model="smlordbillmain.permitterID" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              查询
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" split-button="true">
              <el-dropdown-item @click.native="lishi">历史交易查询</el-dropdown-item>
              <el-dropdown-item>利润预估查询</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              功能
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :disabled="isWriter">批次变更单价</el-dropdown-item>
              <el-dropdown-item>发送Email</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="18">&nbsp;</el-col>
      </el-row>
    </el-form>

    <el-dialog title="单选--客户主文件设定" :visible.sync="dialogcustomer" width="35%">
      <span>
        <el-row :gutter="10">
          <el-col :span="24" style="padding:3px;height:48px;margin-bottom: 5px;">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item>
                <el-select v-model="union.coumn">
                  <el-option
                    v-for="entity,index in union.coumnList"
                    :label="entity.name"
                    :value="entity.value"
                    :key="index"
                  ></el-option>
                </el-select>
                <el-input-number v-model="union.num" :min="1" :max="10" style="width:130px;"></el-input-number>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="5" style="height:200px;">
            <div>
              <ul style="height:200px;">
                <li v-for="coumn in union.list" @click="selectCoumn(coumn)">{{ coumn }}</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="19" style="padding:3px;height:200px;">
            <el-table
              ref="singleTable"
              :data="union.tableData"
              highlight-current-row
              @current-change="handleCurrentChange"
              style="width: 100%"
              height="200"
            >
              <el-table-column
                v-for="entity in union.coumnList"
                :property="entity.value"
                :label="entity.name"
                width="120"
                :key="entity.value"
              ></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogcustomer = false">取 消</el-button>
        <el-button type="primary" @click="dialogcustomer = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="多选--物料主文件设定" :visible.sync="dialogMaterials" width="35%">
      <span>
        <el-row :gutter="10">
          <el-col :span="24" style="padding:3px;height:48px;margin-bottom: 5px;">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item>
                <el-select v-model="union2.coumn">
                  <el-option
                    v-for="entity,index in union2.coumnList"
                    :label="entity.name"
                    :value="entity.value"
                    :key="index"
                  ></el-option>
                </el-select>
                <el-input-number v-model="union2.num" :min="1" :max="10" style="width:130px;"></el-input-number>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="5" style="height:200px;">
            <div>
              <ul style="height:200px;">
                <li v-for="coumn in union2.list" @click="selectCoumn2(coumn)">{{ coumn }}</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="19" style="padding:3px;height:200px;">
            <el-table
              ref="singleTable"
              :data="union2.tableData"
              highlight-current-row
              @selection-change="handleSelectionChange"
              style="width: 100%"
              height="200"
            >
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                v-for="entity in union2.coumnList"
                :property="entity.value"
                :label="entity.name"
                width="120"
                :key="entity.value"
              ></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogMaterials = false">取 消</el-button>
        <el-button type="primary" @click="dialogMaterials = false">确 定</el-button>
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
  components: {},
  data() {
    //这里存放数据
    return {
      isWriter: false,
      savebtn: true, //是否保存
      tableData: [],
      formData: {},
      dialogcustomer: false,
      dialogMaterials:false,
      test: {
        flag: "1",
        billNo: "",
        customerID: "",
        customerName:"",
        comcustomer: {
          id: "",
          fullName: ""
        },
        currID: "RMB",
        billDate: new Date(),
        auditStatus: 0,
        hasCheck: 0,
        tax: "0",
        priceOfTax: 0,
        subList: [
          {
            rowNO: "",
            prodID: "",
            Comproduct: {
              prodName: ""
            },
            test:{
            },
            quantity: "",
            isGift:0,
          }
        ]
      },
      smlordbillmain: {
        flag: "1",
        billNo: "",
        customerID: "",
        customerName:"",
        comcustomer: {
          id: "",
          fullName: ""
        },
        currID: "RMB",
        billDate: new Date(),
        auditStatus: 0,
        hasCheck: 0,
        tax: "0",
        priceOfTax: 0,
        subList: [
          {
            rowNO: "",
            prodID: "",
            Comproduct: {
              prodName: ""
            },
            test:{
            },
            quantity: "",
            isGift:0,
          }
        ]
      },
      rules: {
        2: [{ required: true, message: "双击选择客户", trigger: "blur" }]
      },
      union: {
        // 列名
        coumnList: [
          {
            name: "编号",
            value: "id"
          },
          {
            name: "名称",
            value: "fullName"
          },
          {
            name: "英文名",
            value: "engFullName"
          }
        ],
        // 查询的条件
        selectName: {},
        tableName: "comcustomer", // 表名
        num: 1, // 截取数量
        list: [],
        coumn: "id", // 查询的列名 写name（名称）就可以了
        tableData: []
      },
      union2: {
        // 列名
        coumnList: [
          {
            name: "编号",
            value: "prodID"
          },
          {
            name: "名称",
            value: "prodName"
          },
          {
            name: "英文名",
            value: "engName"
          }
        ],
        // 查询的条件
        selectName: {},
        tableName: "comproduct", // 表名
        num: 1, // 截取数量
        list: [],
        coumn: "ProdID", // 查询的列名 写name（名称）就可以了
        tableData: []
      },
      testnum:{},
      options:[],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to, from) {
      this.isWriter = false;
      this.savebtn = true;
      //   alert("我进来了");
      // console.log(to.path);
      this.smlordbillmain = this.test;
      if (to.query.billNO != undefined) {
        this.smlordbillmain.billNo = to.query.billNO;
        this.smlordbillmain.flag = 1;
        this.query_one();
      } else {
        this.isWriter = false;
      }
    },
    //客户选择
    "union.coumn": function() {
      this.findByCoumnAndSize();
    },
    "union.num": function() {
      this.findByCoumnAndSize();
    },
    
    dialogcustomer(){
      // this.smlordbillmain.customerID=this.$store.state.saleCustomer.id;
      //  this.smlordbillmain.customerName=this.$store.state.saleCustomer.id+"         "+this.$store.state.saleCustomer.fullName;
      // //  alert(this.smlordbillmain.customerName);
      // console.log(this.smlordbillmain.customerID);
    },
       //物料选择
    "union2.coumn": function() {
      this.findByCoumnAndSize2();
    },
    "union2.num": function() {
      this.findByCoumnAndSize2();
    },
    dialogMaterials(){
      // this.smlordbillmain.customerID=this.$store.state.saleComproduct.id;
      //  this.smlordbillmain.subList.prodID=this.$store.state.saleComproduct.id;
      //  alert(this.smlordbillmain.customerName);
      // console.log(this.smlordbillmain.customerID);
    },
  },
  //方法集合
  methods: {
      changeSalesMan(obj){
        for (let index = 0; index < this.options.length; index++) {
          if(obj==this.options[index].personID){
            this.smlordbillmain.departID=this.options[index].comdepartment.departID;
            this.smlordbillmain.departName=this.options[index].comdepartment.departName;
          }
          
        }
      },
      getComperson(){
        request({
          url: "/comperson/findAll",
          method: "post",
        }).then(result => {
           console.log(result.data.data);
          this.options=result.data.data;
        });
      },
    //双击选物料
    storageprodID(){
      this.dialogMaterials=true;
      this.findByCoumnAndSize2();
    },
    choiceDialog(){
      this.dialogcustomer=false;
    },
    //根据单号和flag查询对象
    query_one() {
      request({
        url: "/smlordbillmain/queryOne",
        method: "post",
        data: this.smlordbillmain
      }).then(result => {
        //  console.log(result.data.data);
        this.smlordbillmain = result.data.data;
       this.smlordbillmain.customerName=this.smlordbillmain.comcustomer.id+"         "+this.smlordbillmain.comcustomer.fullName;
      for (let index = 0; index < this.options.length; index++) {
          // alert(this.smlordbillmain.departID+"                    "+this.options[index].comdepartment.departID);
          if(this.smlordbillmain.departID==this.options[index].comdepartment.departID){
            this.smlordbillmain.departName=this.options[index].comdepartment.departName;
          }
        }
        console.log(this.smlordbillmain);
        if (this.smlordbillmain.auditStatus == 1) {
          this.isWriter = true;
          this.savebtn = false;
        }
      });
    },
    //双击弹出客户
    storageDetail() {
      this.dialogcustomer = true;
      this.findByCoumnAndSize();
    },
    //查询所有的客户
    findPage() {
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

    // 保存
    save() {
      if(this.smlordbillmain.customerID==""||this.smlordbillmain.customerID==undefined){
        Message.error("请先选择客户");
        return;
      }
      if(this.smlordbillmain.subList[0].prodID==""){
        Message.error("请先至少选择一种物料");
        return;
      }
      if(this.smlordbillmain.salesMan==""||this.smlordbillmain.salesMan==undefined){
        Message.error("请选择业务人员");
        return;
      }
      for (let index = 0; index < this.smlordbillmain.subList.length; index++) {
        if(this.smlordbillmain.subList[index].quantity==""||this.smlordbillmain.subList[index].quantity==undefined){
          Message.error("请输入物料的数量");
          return;
        } 
        if(isNaN(parseInt(this.smlordbillmain.subList[index].quantity))){
          Message.error("请输入正确的数量");
          return;
        }
      }
      //新增方法
      if (this.$route.query.type == 1) {
        request({
          url: "/smlordbillmain/add",
          method: "post",
          data: this.smlordbillmain
        }).then(result => {
          // console.log(result.data.data);
          if (result.data.data) {
            Message.success("保存成功");
            this.isWriter = true;
            this.savebtn = false;
          } else {
            Message.success("保存失败");
          }
          // Message.success(result.data.data)
        });
      } else {
        //修改方法
        request({
          url: "/smlordbillmain/update",
          method: "post",
          data: this.smlordbillmain
        }).then(result => {
          // console.log(result.data.data);
          if (result.data.data) {
            Message.success("保存成功");
            this.isWriter = true;
            this.savebtn = false;
          } else {
            Message.success("保存失败");
          }
          // Message.success(result.data.data)
        });
      }
    },
    //保存后新增
    saveAddition() {
      var number = this.entity.departID;
    },
    shenghe() {
      if (this.smlordbillmain.auditStatus == 0) {

        //审核
        request({
          url: "/smlordbillmain/audit",
          method: "post",
          params: {
            billNo: this.smlordbillmain.billNo,
            flag: 1,
            auditStatus: 1,
            maker:sessionStorage.getItem("userId"),
          }
        }).then(result => {
          if (result.data.data) {
            Message.success("审核成功");
            this.smlordbillmain.auditStatus = 1;
            this.smlordbillmain.makerID=sessionStorage.getItem("userId");
          } else {
            Message.success("审核失败");
            this.smlordbillmain.auditStatus = 0;
          }
        });
      } else {
        //取消审核
        request({
          url: "/smlordbillmain/audit",
          method: "post",
          params: {
            billNo: this.smlordbillmain.billNo,
            flag: 1,
            auditStatus: 0
          }
        }).then(result => {
          if (result.data.data == "true") {
            Message.success("取消审核成功");
            this.smlordbillmain.auditStatus = 0;
            this.isWriter = false;
            this.savebtn = true;
          } else {
            Message.success("取消审核失败," + result.data.data);
            this.smlordbillmain.auditStatus = 1;
          }
        });
      }
    },
    lishi() {
      // console.log(this.$router);
      this.$emit("update:dialogTableVisible", true);
      // this.dialogTableVisible=true;
      // this.$router.push({page:"/sale/menu2/menu2-1/lishi"});
    },

    query_num() {
      // var smlordbillmain_ =this.smlordbillmain;
      request({
        url: "/smlordbillmain/querynum",
        method: "post",
        data: this.smlordbillmain
      }).then(result => {
        this.smlordbillmain.billNo = result.data.data;
        // alert(this.smlordbillmain.billNo);
      });
    },
    changeDate() {
      this.query_num();
    },
    // 联合查询方法
    findByCoumnAndSize() {
      request({
        url:
          "/currency/find?coumn=" +
          this.union.coumn +
          "&size=" +
          this.union.num +
          "&table=" +
          this.union.tableName+" where flag = 1",
        method: "get"
      }).then(result => {
        this.union.list = result.data.data;
        this.union.selectName[this.union.coumn] = result.data.data[0];
        this.findTable();
      });
    },
    // 查询条件
    selectCoumn(coumn) {
      this.union.selectName[this.union.coumn] = coumn;
      this.findTable();
    },
    // 联合查询方法
    findByCoumnAndSize2() {
      request({
        url:
          "/currency/find?coumn=" +
          this.union2.coumn +
          "&size=" +
          this.union2.num +
          "&table=" +
          this.union2.tableName,
        method: "get"
      }).then(result => {
        this.union2.list = result.data.data;
        this.union2.selectName[this.union2.coumn] = result.data.data[0];
        this.findTable2();
      });
    },
    // 查询条件
    selectCoumn2(coumn) {
      this.union2.selectName[this.union2.coumn] = coumn;
      this.findTable2();
    },
    // 查询数据详情
    findTable() {
      this.union.selectName.flag = 1;
      request({
        url: "/" + this.union.tableName + "/findByTable",
        method: "post",
        data: this.union.selectName
      }).then(result => {
        this.union.tableData = result.data.data;
        this.union.selectName = {};
      });
    },
    // 获取选中的数据
    handleCurrentChange(val) {
      // this.entity.bankClsID = val.wareHouseID;
      // this.$store.state.saleCustomer = val;
      // console.log(val);
       this.smlordbillmain.customerID=val.id;
       this.smlordbillmain.customerName=val.id+"         "+val.fullName;
      
    },
    // 查询数据详情
    findTable2() {
      request({
        url: "/" + this.union2.tableName + "/findByTable",
        method: "post",
        data: this.union2.selectName
      }).then(result => {
        this.union2.tableData = result.data.data;
        console.log(this.union2.tableData);
        this.union2.selectName = {};
      });
    },
    // 获取选中的数据
    handleSelectionChange(val) {
      // this.entity.bankClsID = val.wareHouseID;
      // this.$store.state.saleCustomer = val;
      console.log(val);
      this.smlordbillmain.subList=val;
      for (let index = 0; index < this.smlordbillmain.subList.length; index++) {
        this.smlordbillmain.subList[index].oldPrice=this.smlordbillmain.subList[index].salesPriceA;
        this.smlordbillmain.subList[index].price=this.smlordbillmain.subList[index].salesPriceA;
      }
    }
    ,calculate(obj){
      // alert("进来了");
        obj.amount=parseInt(obj.quantity)*parseFloat(obj.price);
        obj.discount=(parseFloat(obj.price)/parseFloat(obj.oldPrice)*100).toPrecision(4);
    },
    changeIsGift(obj){
      if(obj.isGift){
              obj.amount2=obj.amount;
              obj.discount2=obj.discount;
              obj.price2=obj.price;
              obj.oldPrice2=obj.oldPrice;
              obj.amount=0;
              obj.discount=0;
              obj.price=0;
              obj.oldPrice=0;
      }else{
              obj.amount=obj.amount2;
              obj.discount=obj.discount2;
              obj.price=obj.price2;
              obj.oldPrice=obj.oldPrice2;
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.smlordbillmain = this.test;
    this.isWriter = false;
    this.savebtn = true;
    this.smlordbillmain.makerID=sessionStorage.getItem("userId");
    if (this.$route.query.billNO != undefined) {
      this.smlordbillmain.billNo = this.$route.query.billNO;
      this.smlordbillmain.flag = 1;
      for (let index = 0; index < this.options.length; index++) {
          alert(this.smlordbillmain.salesMan+"      "+this.options[index].personID);
          if(this.smlordbillmain.salesMan==this.options[index].personID){
            this.smlordbillmain.departName=this.options[index].comdepartment.departName;
          }
      }
      this.query_one();
    } else {
      this.query_num();
    }
    this.getComperson();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
* {
}

.el-select .el-input,
.el-select {
  width: 120px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input__inner {
  width: 98%;
}
.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-top: 5px;
  margin-bottom: 8px;
  margin-right: 20px;
  margin-left: 10px;
}
.details {
  /* border: 1px solid red; */
  margin-top: 10px;
  width: 100%;
  margin: 10px auto;
  height: 206px;
}
.el-tabs__item {
  /* padding: 0 10px; */
  /* height: 30px;
        line-height: 30px; */
  background-color: white;
}
.el-table {
  margin: 0px auto;
}
.vxe-table {
  margin: 0px 20px 0px 10px;

}
.el-dropdown {
  display: inline-block;
  /* position: relative;
        color: #606266; */
  /* font-size: 14px; */
  /* height: 30px;
        line-height: 30px; */
  padding: 0px 10px;
  /* height: 30px; */
  margin: 5px 5px;
  border: 1px solid black;
  background-color: #a5c5f4;
}
form {
  // border: 1px solid #A5C5F4;
  background-color: #d7e7ff;
  height: 100%;
  // width: 43%;
}
.el-dropdown span,
.el-dropdown i {
  background-color: #a5c5f4;
}
.el-dropdown-menu {
  background-color: #fff;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: 1px solid black;
  /* border-bottom: none;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box; */
}
.shenghe {
  position: absolute;
  top: 37px;
  right: 50px;
}
.baocun {
  position: absolute;
  top: 37px;
  right: 125px;
}
.img {
  position: absolute;
  top: 90px;
  right: 50px;
  z-index: 100;
}
ul {
  padding: 0px;
  margin: 0px;
}
.el-dialog li {
  list-style: none;
  padding: 4px;
  font-size: 14px;
  border: 1px solid #d7dae2;
  text-align: center;
}
// .sml-input{
//   border: 0px;
// }
</style>