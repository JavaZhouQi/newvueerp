<!--  -->
<template>
<div class=''>
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


            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">来源别</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-select v-model="formLabelAlign.resourcetype" placeholder="请选择" style="width:150px" >
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                        </el-select>
                        <el-input v-model="formLabelAlign.resourcenumber"  style="width:120px"></el-input>
                    </el-form-item>
                    </div></el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">单据号码</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-input v-model="formLabelAlign.billnumber"></el-input>
                    </el-form-item>
                </div></el-col>

            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" style="color:blue">币别</div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
            <el-form-item label="">
                <el-input v-model="formLabelAlign.moneytype"></el-input>
            </el-form-item>
            </div></el-col>   
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">汇率</div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
            <el-form-item label="">
                <el-input v-model="formLabelAlign.exchangerate"></el-input>
            </el-form-item>
            </div></el-col>


             <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">发票编号</div></el-col>
                 <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                     <el-form-item label="">
                        <el-input v-model="formLabelAlign.invoicecoding"></el-input>
                    </el-form-item>
            </div></el-col>
             <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">凭证编号</div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
            <el-form-item label="">
                <el-input v-model="formLabelAlign.documentnumber" disabled></el-input>
            </el-form-item>
            </div></el-col>
        </el-form>
    </el-row>

<!-- 中间选项卡部分 -->
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
      prop="number"
      label="编号"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="(名称)"
      width="300">
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
      prop="subjectnumber"
      label="科目编号"
      width="120">
    </el-table-column>
     <el-table-column
      prop="subjectname"
      label="(科目名称)"
      width="120">
    </el-table-column>
     <el-table-column
      prop="remark"
      label="备注"
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
                                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">结算方式一</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-input v-model="credit.payway" placeholder="01   现金" style="width:150px"></el-input>
                        <el-input v-model="credit.paymuch" placeholder="0.00" style="width:150px"></el-input>
                    </el-form-item>
                    </div></el-col>

                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">收款条件</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-select v-model="credit.creditcondition" placeholder="货到" style="width:150px" >
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
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">结算方式二</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-input v-model="credit.paywaytwo" placeholder="02   信用卡" style="width:150px"></el-input>
                        <el-input v-model="credit.paymuchtwo" placeholder="0.00" style="width:150px"></el-input>
                    </el-form-item>
                    </div></el-col>

                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" >收款日期</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-input v-model="credit.creditdate" type="date"></el-input>
                </el-form-item>
                </div></el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">结算方式三</div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                        <el-input v-model="credit.paywaythree"  style="width:150px"></el-input>
                        <el-input v-model="credit.paymuchthree" placeholder="0.00" style="width:150px"></el-input>
                    </el-form-item>
                    </div></el-col>

                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">账款月份</div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                            <el-date-picker
                            v-model="credit.creditmonth"
                            type="month"
                            placeholder="选择月"
                            style="width:550px"
                             >
                            </el-date-picker>
                    </el-form-item>
                    </div></el-col>    
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple" ></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
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

   <!-- 账款明细表的底部部分 -->
    <div class="returngoodsbottom">
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
                    <el-dropdown-item >单据状况查询</el-dropdown-item>
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

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    checkoutremark:{
            customone:'',
            customtwo:''
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
     formLabelAlign: {
          customer:'',
          date:'',
          resourcetype:'',
          resourcenumber:'',
          billnumber:'',
          moneytype:'',
          exchangerate:'',
          invoicecoding:'',
          documentnumber:''
     },
      tableData: [{
          columnnumber:'黄小虎',
          number:'黄小虎',
          name:'黄小虎',
          amountofmoney:'黄小虎',
          taxrate:'黄小虎',
          taxamount:'黄小虎',
          taxmoney:'黄小虎',
          subjectnumber:'黄小虎',
          subjectname:'黄小虎',
          remark:'黄小虎',
        }]

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
         if (index === 3) {
            sums[index] = '总金额:';
            return;
          }
        if (index === 5) {
            sums[index] = '总税额:';
            return;
          }
        if (index === 6) {
            sums[index] = '总含税额:';
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
<style >
        .bg-purple {
        margin-top: 5px;
    }
         textarea{
    resize:none;
    }
    .returngoodsbottom{
        margin-top: 20px
    }
</style>