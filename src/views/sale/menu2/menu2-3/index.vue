<!--  -->
<template>

<div >
    <!-- 销售出库上部分 -->
<div>
<el-row :gutter="10">

     <el-form :model="formLabelAlign" :label-position="labelPosition" >


  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">客户</div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
      <el-form-item label="">
          <el-input v-model="formLabelAlign.customer"></el-input>
      </el-form-item>
   </div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">单据日期</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.date" type="date"></el-input>
      </el-form-item>
      </div></el-col>


      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">送货地址</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.address"></el-input>
      </el-form-item>
      </div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">单据号码</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.number"></el-input>
      </el-form-item>
      </div></el-col>


      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">销售出库类型</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.outtype"></el-input>
      </el-form-item>
      </div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">币别</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.moneytype"></el-input>
      </el-form-item>
      </div></el-col>


   <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">单价是否含税</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
           <el-select v-model="formLabelAlign.due" placeholder="请选择" style="width:300px" >
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </el-form-item>
      </div></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">汇率</div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.exchangerate"></el-input>
      </el-form-item>
    </div></el-col>



    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">仓库</div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
          <el-input v-model="formLabelAlign.warehouse"></el-input>
      </el-form-item>
    </div></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">国外贸易</div></el-col>
   <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
       <el-form-item label="">
           <el-select v-model="formLabelAlign.abroadtrade" placeholder="请选择" style="width:300px" disabled >
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
          <el-input v-model="formLabelAlign.documentnumber" disabled></el-input>
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
</div>
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
      width="150">
    </el-table-column>
    <el-table-column
      prop="materialnumber"
      label="物料编号"
      width="300">
    </el-table-column>
    <el-table-column
      prop="materialname"
      label="(物料名称)"
      width="300">
    </el-table-column>
    <el-table-column
      prop="specificationtype"
      label="(规格型号)"
      width="300">
    </el-table-column>
    <el-table-column
      prop="companyname"
      label="(单位名称)"
      width="120">
    </el-table-column>
    <el-table-column
      prop="number"
      label="数量"
      width="120">
    </el-table-column>
    <el-table-column
      prop="discountprice"
      label="折扣前单价"
      width="120">
    </el-table-column>
     <el-table-column
      prop="foldingnumber"
      label="折数(%)"
      width="120">
    </el-table-column>

    <el-table-column
      prop="price"
      label="单价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="amountofmoney"
      label="(金额)"
      width="120">
    </el-table-column>
    <el-table-column
      prop="taxrate"
      label="税率(%)"
      width="120">
    </el-table-column>
    <el-table-column
      prop="taxamount"
      label="税额"
      width="120">
    </el-table-column>
    <el-table-column
      prop="taxmoney"
      label="含税金额"
      width="120">
    </el-table-column>
     <el-table-column
      prop="batchnumber"
      label="(批号)"
      width="120">
    </el-table-column>
     <el-table-column
      prop="materialcombination"
      label="(物料组合)"
      width="120">
    </el-table-column>
     <el-table-column
      prop="gift"
      label="赠品"
      width="120">
    </el-table-column>
      <el-table-column
      prop="invoicedetails"
      label="(发票明细)"
      width="120">
    </el-table-column>
      <el-table-column
      prop="noinvoicenumber"
      label="(未开票数量)"
      width="120">
    </el-table-column>
      <el-table-column
      prop="remarks"
      label="分录备注"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sourcelist"
      label="(来源单别)"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sourceno"
      label="(来源单号)"
      width="120">
    </el-table-column>
    <el-table-column
      prop="customerorders"
      label="客户订单"
      width="120">
    </el-table-column>
  </el-table>
  </el-tab-pane>
  
  <el-tab-pane label="账款">
      <el-row :gutter="10">
            <el-form :model="credit" >

                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">账款归属</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-input v-model="credit.creditbelong"></el-input>
                    </el-form-item>
                </div></el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" >收款日期</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-input v-model="credit.creditdate" type="date"></el-input>
                </el-form-item>
      </div></el-col>

                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">收款条件</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-select v-model="credit.creditcondition" placeholder="请选择" style="width:150px" >
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                        </el-select>
                        <el-input v-model="credit.creditday" placeholder="天" style="width:120px"></el-input>
                    </el-form-item>
                    </div></el-col>

                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">账款月份</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                            <el-date-picker
                            v-model="credit.creditmonth"
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
            <el-form :model="checkoutremark">
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">自定栏一</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                        <el-form-item label="">
                            <el-input v-model="checkoutremark.customone"></el-input>
                        </el-form-item>
                        </div></el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">自定栏二</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                        <el-form-item label="">
                            <el-input v-model="checkoutremark.customtwo"></el-input>
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
    <!-- 销售出库的底部部分 -->
    <div class="checkoutbottom">
        <el-row :gutter="10">
            <el-form :model="formLabelAlign">
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">业务人员</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                        <el-form-item label="">
                            <el-input v-model="formLabelAlign.businesspeople"></el-input>
                        </el-form-item>
                        </div></el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">制单人员</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                        <el-form-item label="">
                            <el-input v-model="formLabelAlign.systempersonnel" placeholder="admin" disabled="true"></el-input>
                        </el-form-item>
                    </div></el-col>

                     <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">所属部门</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                        <el-form-item label="">
                            <el-input v-model="formLabelAlign.belongparton"></el-input>
                        </el-form-item>
                        </div></el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">复核人员</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                        <el-form-item label="">
                            <el-input v-model="formLabelAlign.reviewpersonnel"></el-input>
                        </el-form-item>
                    </div></el-col>

                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">所属项目</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                        <el-form-item label="">
                            <el-input v-model="formLabelAlign.belongproject"></el-input>
                        </el-form-item>
                        </div></el-col>      
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    </div></el-col>        
            </el-form>
       </el-row>
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

</div>


</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import historydeal from '@/components/historydeal'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    /* 这是表单元素里对应值的表达 */
     labelPosition: 'left',
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
          businesspeople:'',
          systempersonnel:'',
          belongparton:'',
          reviewpersonnel:'',
          belongproject:''
        },
        credit:{
        creditbelong:'',
        creditdate:'',
        creditcondition:'',
        creditmonth:'',
        creditday:''
        },
        checkoutremark:{
            customone:'',
            customtwo:''
        },
       /* 这是内容部分的数据渲染 */ 
       tableData: [{
          columnnumber: '1',
          materialnumber: 'C01-W-HP-DC7900-307',
          materialname: '上海',
          specificationtype: '普陀区',
          companyname: '普陀区',
          number: '普陀区',
          discountprice: '普陀区',
          foldingnumber: '普陀区',
          price: '普陀区',
          amountofmoney: '普陀区',
          taxrate: '普陀区',
          taxamount: '上海市普陀区金沙江路 1518 弄',
          taxmoney: '普陀区',
          batchnumber: '普陀区',
          materialcombination : '普陀区',
          gift: '普陀区',
          invoicedetails: '普陀区',
          noinvoicenumber:'普陀区',
          tanoinvoicenumberxrate: '普陀区',
          remarks: '普陀区',
          sourcelist: '普陀区',
          sourceno: '普陀区',
          customerorders: '普陀区'
        },{
            columnnumber: '2',
          materialnumber: 'C01-W-HP-DC7900-307',
          materialname: '上海',
          specificationtype: '普陀区',
          companyname: '普陀区',
          number: '普陀区',
          discountprice: '普陀区',
          foldingnumber: '普陀区',
          price: '普陀区',
          amountofmoney: '普陀区',
          taxrate: '普陀区',
          taxamount: '上海市普陀区金沙江路 1518 弄',
          taxmoney: '普陀区',
          batchnumber: '普陀区',
          materialcombination : '普陀区',
          gift: '普陀区',
          invoicedetails: '普陀区',
          noinvoicenumber:'普陀区',
          tanoinvoicenumberxrate: '普陀区',
          remarks: '普陀区',
          sourcelist: '普陀区',
          sourceno: '普陀区',
          customerorders: '普陀区'
        }
        ]
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
    }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
<style>
    .checkoutbottom{
        margin-top: 20px
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

</style>