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
            <el-input v-model="smlordbillmain.customerID" @dblclick.native="storageDetail"  :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单据日期" prop="billDate">
            <el-date-picker v-model="smlordbillmain.billDate" value-format="yyyy-MM-dd" @change="changeDate" :disabled="isWriter"  align="right" type="date" placeholder="选择日期"> </el-date-picker>
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
            <vxe-table height="160" resizable highlight-hover-row class="vxe-table-element" :data.sync="smlordbillmain.subList" :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}" >
              <vxe-table-column title>
                <template v-slot="{ row }" style="padding:10px;">
                  <i class="el-icon-remove"></i>
                </template>
              </vxe-table-column>
              <vxe-table-column type="index" field="rowNO" title="栏号" width="100" ></vxe-table-column>
              <vxe-table-column field="prodID" title="物料编号" width="140" :edit-render="{name: 'input'}" ></vxe-table-column>
              <vxe-table-column
                field="prod.name"
                title="物料名称"
                width="140"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="prod.prodSize"
                title="规格型号"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="unit"
                title="单位名称"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="quantity"
                title="数量"
                width="140"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="oldPrice"
                title="折扣前单价"
                width="110"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="discount"
                title="折数(%)"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column field="price" title="单价" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
              <vxe-table-column
                field="amount"
                title="金额"
                width="100"
                :edit-render="{name: 'input'}"
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
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="telephone"
                title="含税金额"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="isGift"
                title="赠品"
                width="140"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
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
          <el-form-item label="业务人员" prop="name">
            <el-input v-model="smlordbillmain.makerID" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="制单人员" prop="name">
            <el-input v-model="smlordbillmain.makerID" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="所属部门" prop="name">
            <el-input v-model="smlordbillmain.name" :disabled="isWriter"></el-input>
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

    <el-dialog title="单选--客户主文件设定" :visible.sync="dialogcustomer" style="z-index='2004'">
      <el-row>
      <el-col :span="10">
          <el-select v-model="formData.select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="客户编号" value="customerID"></el-option>
            <el-option label="客户名称" value="fullName"></el-option>
          </el-select>
      </el-col>
      <el-col :span="10"><el-input placeholder="请输入内容" v-model="formData.selectValue" class="input-with-select"></el-input></el-col>
      <el-col :span="4"><el-button slot="append" icon="el-icon-search" @click="findPage">取回</el-button></el-col>
    </el-row>
    <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;">
      <el-table-column prop="departID"  width="50" label="客户编号"  type="index"></el-table-column>
      <el-table-column prop="departID" label="客户名称" sortable width="180" column-key="date"></el-table-column>
    </el-table>
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
  components: {},
  data() {
    //这里存放数据
    return {
      isWriter: false,
      savebtn: true, //是否保存
      tableData:[],
      formData:{},
      dialogcustomer:false,
      test: {
            flag:"1" ,
            billNo:"",
            customerID:"",
            comcustomer:{
                id:"",
                fullName:""
            },
            currID:"RMB",
            billDate:new Date(),
            hasCheck:0,
            auditStatus:0,
            priceOfTax:0,
            tax:"0",
            subList:[
                {
                  rowNO:"",
                  prodID:"",
                  Comproduct:{
                    ProdName:""
                  },
                  quantity:"",


                }
               
            ]
      },
      smlordbillmain: {
            flag:"1" ,
            billNo:"",
            customerID:"001",
            comcustomer:{
                id:"",
                fullName:""
            },
            currID:"RMB",
            billDate:new Date(),
            auditStatus:0,
            hasCheck:0,
            tax:"0",
            priceOfTax:0,
            subList:[
                {
                  rowNO:"",
                  prodID:"",
                  Comproduct:{
                    ProdName:""
                  },
                  quantity:"",


                }
               
            ]
      }
      ,rules: {
          name: [
            { required: true, message: '双击选择客户', trigger: 'blur' }
          ]
        }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to,from){
      this.isWriter=false;
      this.savebtn=true;
    //   alert("我进来了");
    // console.log(to.path);
    this.smlordbillmain=this.test;
    if(to.query.billNO!=undefined){
      this.smlordbillmain.billNo=to.query.billNO;
      this.smlordbillmain.flag=1;
        this.query_one()
        
    }else{
      this.isWriter=false;
    }
  }
  },
  //方法集合
  methods: {
    //根据单号和flag查询对象
    query_one(){
      console.log(this.smlordbillmain);
      request({
        url:"/smlordbillmain/queryOne",
        method: "post",
        data:this.smlordbillmain
      }).then(result => {
      //  console.log(result.data.data);
      this.smlordbillmain=result.data.data;
      // console.log(this.smlordbillmain.priceOfTax);
      if(this.smlordbillmain.auditStatus==1){
        this.isWriter=true;
        this.savebtn = false;
      }
      });
    },
    //双击弹出客户
    storageDetail(){
      this.dialogcustomer=true;
    },
     //查询所有的客户
    findPage(){
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

      // console.log(this.smlordbillmain);
      // return;
      //新增方法
      if(this.$route.query.type==1){
           request({
              url:"/smlordbillmain/add",
              method:"post",
              data:this.smlordbillmain
            }).then(result=>{
              console.log(result.data.data);
              if(result.data.data){
                Message.success("保存成功");
                this.isWriter = true;
                this.savebtn = false;
              }else{
                Message.success("保存失败");
              }
              // Message.success(result.data.data)
            })
      }else{
        //修改方法
         request({
              url:"/smlordbillmain/update",
              method:"post",
              data:this.smlordbillmain
            }).then(result=>{
              // console.log(result.data.data);
              if(result.data.data){
                Message.success("保存成功");
                this.isWriter = true;
                this.savebtn = false;
              }else{
                Message.success("保存失败");
              }
              // Message.success(result.data.data)
            })
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
        params:{
          billNo:this.smlordbillmain.billNo,
          flag:1,
          auditStatus:1,
        }
      }).then(result => {
        if(result.data.data){
          Message.success("审核成功");
          this.smlordbillmain.auditStatus = 1;
        }else{
          Message.success("审核失败");
          this.smlordbillmain.auditStatus = 0;
        }
      });
      } else {
        //取消审核
          request({
        url: "/smlordbillmain/audit",
        method: "post",
        params:{
          billNo:this.smlordbillmain.billNo,
          flag:1,
          auditStatus:0,
        }
      }).then(result => {
        if(result.data.data=="true"){
          Message.success("取消审核成功");
          this.smlordbillmain.auditStatus =0;
          this.isWriter = false;
          this.savebtn = true;
        }else{
          Message.success("取消审核失败,"+result.data.data);
          this.smlordbillmain.auditStatus = 1;
        }
      });
      }
      
    }
    ,lishi(){
      // console.log(this.$router);
      this.$emit("update:dialogTableVisible",true);
      // this.dialogTableVisible=true;
      // this.$router.push({page:"/sale/menu2/menu2-1/lishi"});
      
    },
    
    query_num(){
      // var smlordbillmain_ =this.smlordbillmain;
      request({
        url:"/smlordbillmain/querynum",
        method:"post",
        data:this.smlordbillmain
      }).then(result=>{
          this.smlordbillmain.billNo=result.data.data;
          // alert(this.smlordbillmain.billNo);
      })
    },
    changeDate(){
       this.query_num();
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.smlordbillmain=this.test;
      this.isWriter=false;
      this.savebtn=true;
      if(this.$route.query.billNO!=undefined){
        this.smlordbillmain.billNo=this.$route.query.billNO;
        this.smlordbillmain.flag=1;
          this.query_one()
      }else{
          this.query_num();
      }
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
</style>