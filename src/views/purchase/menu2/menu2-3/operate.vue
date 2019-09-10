<template>
<div class='div'>
  <div id="fht" v-if="he" style="position: absolute;float: inherit; right: 30px;top: 30px;z-index:100;"><img src="@/static/images/he.png"></div>
  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>供应商：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity1.custShortName"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>单据日期：</span></el-col>
    <el-col :span="8"><el-date-picker type="date" placeholder="选择日期" size="mini" style="width: 100%;" v-model="entity1.billDate"  @change="bNo"></el-date-picker></el-col>
  </el-row>

  <el-row :gutter="20" class="bj">
    <el-col :span="4"><span>供应商地址：</span></el-col>
    <el-col :span="8" style="margin-left: -32px"><el-input  size="mini" v-model="entity1.custAddress"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>单据号码：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity1.billNO" disabled></el-input></el-col>
  </el-row>

  <el-row :gutter="20" class="bj">
    <el-col :span="4"><span>采购订单类型：</span></el-col>
    <el-col :span="8" style="margin-left: -32px"><el-input size="mini" v-model="entity1.billStyleName"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>币别：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity1.curr"></el-input></el-col>
  </el-row>

  <el-row :gutter="20" class="bj">
    <el-col :span="4"><span>单价是否含税：</span></el-col>
    <el-col :span="8" style="margin-left: -32px">
      <el-select v-model="entity1.priceOfTax" placeholder="请选择" size="mini"  style="width: 100%;">
              <el-option
                v-for="item in priceOfTax"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
      </el-select>
    </el-col>
    <el-col :span="3" :offset="1"><span>汇率：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity1.exchRate"></el-input></el-col>
  </el-row>

  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>单况：</span></el-col>
    <el-col :span="8">
      <el-select v-model="entity1.billStatus" placeholder="请选择" size="mini"  style="width: 100%;">
              <el-option
                v-for="item in billStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
      </el-select>
    </el-col>
    <el-col :span="3" :offset="1"><span>送货地址：</span></el-col>
    <el-col :span="8"><el-input v-model="entity1.OutAddress"  size="mini"></el-input></el-col>
  </el-row>


  <el-tabs type="border-card" style="width: 95%;margin-top: 20px;box-shadow: 0 0px 0px rgba(0,0,0,0);">
    <el-tab-pane label="内容">
      <div style="height:180px; width: 105%;" @dblclick="addTable">
        <template>
          <vxe-table
            :data.sync="entity1.yxpurchasedetails"
            height="200"
            border
            show-footer
            show-overflow
            ref="xTable"
            style="margin-top: -15px; margin-left: -15px;font-size: 3px;" class="elTable"
            :edit-config="{trigger: 'click', mode: 'cell'}">
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="serNO"
              title="（栏号）"
              width="85">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="prodID"
              title="物料编号"
              width="100">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="prodName"
              title="（物料名称）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="prodSize"
              title="（规格型号）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="SUnit"
              title="（单位名称）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="sQuantity"
              title="数量"
              width="65">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="oldPrice"
              title="折扣前单价"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="discount"
              title="折数（%）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="sPrice"
              title="单价"
              width="65">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="amount"
              title="金额"
              width="65">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="taxRate"
              title="税率（%）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="taxAmt"
              title="税额"
              width="65">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="vFTotal"
              title="（含税金额）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="preInDate"
              title="预入库日"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="qtyRemein"
              title="（未入库量）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="isGift"
              title="赠品"
              width="65">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="itemRemark"
              title="分录备注"
              width="100">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="tranType"
              title="（来源单别）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="fromNO"
              title="（来源单号）"
              width="115">
            </vxe-table-column>
          </vxe-table>
        </template>
      </div>
    </el-tab-pane>
    <el-tab-pane label="账款">
      <div style="height:150px;">
        <el-row :gutter="20" class="bj">
          <el-col :span="4"><span>账款归属：</span></el-col>
          <el-col :span="7"><el-input size="mini" v-model="entity1.factFundsAttribution"></el-input></el-col>
          <el-col :span="4" :offset="2"><span>付款日期：</span></el-col>
          <el-col :span="7">
            <el-date-picker type="date" placeholder="选择日期" size="mini" style="width: 100%;" v-model="entity1.prepayDay"></el-date-picker>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="bj">
          <el-col :span="4"><span>账款条件：</span></el-col>
          <el-col :span="7"><el-input size="mini" v-model="entity1.gatherStyle"></el-input></el-col>
          <el-col :span="4" :offset="2"><span>账款月份：</span></el-col>
          <el-col :span="7">
            <el-date-picker type="month" placeholder="选择月" size="mini" style="width: 100%;" v-model="entity1.accMonth"></el-date-picker>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
    <el-tab-pane label="备注">
      <div style="height:150px;">
        <el-row :gutter="20" class="bj">
          <el-col :span="4"><span>自定栏一：</span></el-col>
          <el-col :span="7"><el-input size="mini"></el-input></el-col>
          <el-col :span="4" :offset="2"><span>自定栏二：</span></el-col>
          <el-col :span="7"><el-input size="mini"></el-input></el-col>
        </el-row>
        <el-row :gutter="20" class="bj">
          <el-col :span="4"><span>备注：</span></el-col>
          <el-col :span="20">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="entity1.remark">
            </el-input>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
  </el-tabs>

  <el-row :gutter="20" class="bj" style="margin-top: 30px;">
    <el-col :span="3"><span>采购人员：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity1.salesName"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>制单人员：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity1.maker"></el-input></el-col>
  </el-row>

  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>所属部门：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity1.departName"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>复核人员：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity1.permitter"></el-input></el-col>
  </el-row>

  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>所属项目：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity1.projectName"></el-input></el-col>
  </el-row>


  <el-dropdown trigger="click" style="margin-top: 20px;">
    <span class="el-dropdown-link">
      查询
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>历史交易查询</el-dropdown-item>
      <el-dropdown-item>转单记录查询</el-dropdown-item>
      <el-dropdown-item>定金查询</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

  <el-dropdown trigger="click" style="margin-left: 30px;">
    <span class="el-dropdown-link">
      转单
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>采购询价转入</el-dropdown-item>
      <el-dropdown-item>采购请购转入</el-dropdown-item>
      <el-dropdown-item>销售订单转入</el-dropdown-item>
      <el-dropdown-item>入采购入库单</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

  <el-dropdown trigger="click" style="margin-left: 30px;">
    <span class="el-dropdown-link">
      功能
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>批次变更单价</el-dropdown-item>
      <el-dropdown-item>单况状态切换</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
        
  <el-link :underline="false" style="margin-left:355px;" type="primary" @click="shenghe">审核</el-link>
  <el-button style="margin-left:30px;" size="mini" @click="addRD">保存</el-button>   
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import request from "@/api/request";
import { Message } from 'element-ui';
export default {
  props:["addDialog"],
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  he:false,
  entity1: {billNO:"",priceOfTax:"2",billStatus:"1",yxpurchasedetails:[]},
  priceOfTax:[{"value":"1","label":"是"},{"value":"2","label":"否"}],
  billStatus:[{"value":"1","label":"未结案"},{"value":"2","label":"已结案"},{"value":"3","label":"无效"}],
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
  '$route':function(){
    if(this.$route.query.id==" "){
        this.entity1={billNO:"",priceOfTax:"2",billStatus:"1",yxpurchasedetails:[]};
        this.he=false;
    }else{
      this.getRequisitions();
    }
  }
},
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
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = '';
          }
        });
        return sums;
  },
  addTable(){
    this.entity1.yxpurchasedetails.push({});
  },
  bNo(){
    //if(this.$route.query.id==" "){
      var time=this.entity1.billDate;
      time.setHours(-new Date().getTimezoneOffset()/60);
      request({
        url: "/yxpurchaseorder/selectLikeBillNO",
        method: "get",
        params:{
          billDate:time
        }
      }).then(result => {
        console.log(result);
        this.entity1.billNO=result.data.data;
      });
    //}
  },
  //if（新增）else(修改)
  addRD(){
    if(this.$route.query.id==" "){
      console.log(JSON.stringify(this.entity1)+"............")
        request({
          url:"/yxpurchaseorder/insertPDs",
          method:"post",
          data:this.entity1
        }).then(result=>{
          Message.success("新增成功")
          console.log(result);
        });
    }else{
      if(this.he==true){
        this.$message({
          showClose: true,
          message: '单据已审核',
          type: 'warning'
        });
      }else{
        request({
          url: "/yxpurchaseorder/deleteRDs",
          method: "get",
          params:{
            billNO:this.$route.query.id
          }
        }).then(result => {
            request({
              url:"/yxpurchaseorder/insertPDs",
              method:"post",
              data:this.entity1
            }).then(result=>{
              Message.success("修改成功")
              console.log(result);  
            });
        });
      }
    }
  }, 
  getRequisitions:function(){
    console.log(this.$route.query.id)
    request({
      url:"/yxpurchaseorder/selectBillNO",
      method:"get",
      params:{
        billNO:this.$route.query.id
      }
    }).then(result=>{
      console.log(result.data.data);
      this.entity1=result.data.data;

      if(this.entity1.permitter==undefined || this.entity1.permitter==""){
        this.he=false;
      }else{
        this.he=true;
      }
    })
  },
  //审核
  shenghe(){
    console.log(this.entity1.permitter);
    if(this.he==false){
      //if(this.entity.permitter==undefined || this.entity.permitter==""){
        this.he=true;
        request({
          url: "/yxpurchaseorder/deleteRDs",
          method: "get",
          params:{
            billNO:this.$route.query.id
          }
        }).then(result => {
            request({
              url:"/yxpurchaseorder/insertPDs",
              method:"post",
              data:this.entity1
            }).then(result=>{
              console.log(result);
              this.$message({
                showClose: true,
                message: '已审核',
                type: 'success'
              });
            });
        });
      //}
    }else{
        this.he=false;
        this.entity1.permitter=""
            
        request({
          url: "/yxpurchaseorder/deleteRDs",
          method: "get",
          params:{
            billNO:this.$route.query.id
          }
        }).then(result => {
            request({
              url:"/yxpurchaseorder/insertPDs",
              method:"post",
              data:this.entity1
            }).then(result=>{
              console.log(result);
              this.$message({
                showClose: true,
                message: '反审核',
                type: 'success'
              });
            });
        });
    }
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  if(this.$route.query.id==" "){
      this.entity1={billNO:"",priceOfTax:"2",billStatus:"1",yxpurchasedetails:[]}
  }else{
      this.getRequisitions();
  };
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.div{
  margin-top: -30px;
  padding-left: 25px;
}
.bj{
  margin-bottom: 5px;
}
span{
  size: 15px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
</style>

<style>
.el-dialog__title {
    line-height: 24px;
    font-size: 15px;
    color: #303133;
}
el-table .el-table thead {
    color: #909399;
    font-weight: 500;
}
el-table{
  height: 10px;
}
.vxe-table.fixed--left .vxe-body--column, .vxe-table.fixed--right .vxe-body--column, .vxe-table.vxe-editable .vxe-body--column {
    height: 35px;
}
.vxe-table .vxe-default-input{
    height: 30px;
}
.elTable th{
  padding: 3px 0!important;
}
.elTable td{
  /*max-height: 1px!important;*/
  padding: 2px 0!important;
  overflow:  auto !important;
}
</style>