<!--  -->
<template>
<div class=''>
    <el-form :model="sale_quotation" size="mini" :label-position="'left'"   ref="sale_quotation" label-width="100px" class="demo-ruleForm">
        <el-row>
            <el-col :span="12">
                 <el-form-item label="供应商"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="日期"  prop="name"> <el-date-picker class="xiala"  type="datetime" placeholder="选择日期时间"> </el-date-picker></el-form-item>
            </el-col>
        </el-row>
        <el-row>
           
            <el-col :span="12">
              <el-form-item label="计算方式一"  prop="name">
                  <el-col :span="12">
                      <el-input v-model="sale_quotation.name"></el-input>
                  </el-col>
                  <el-col :span="12">
                      <el-input v-model="sale_quotation.name"></el-input>
                  </el-col>
              </el-form-item>
            </el-col>
             <el-col :span="12">
                <el-form-item label="单据号码"  prop="name"><el-input v-model="sale_quotation.name"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            
            <el-col :span="12">
              <el-form-item label="计算方式二"  prop="name">
                  <el-col :span="12">
                      <el-input v-model="sale_quotation.name"></el-input>
                  </el-col>
                  <el-col :span="12">
                      <el-input v-model="sale_quotation.name"></el-input>
                  </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="币别"  prop="name"><el-input v-model="sale_quotation.name"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            
            <el-col :span="12">
              <el-form-item label="计算方式三"  prop="name">
                  <el-col :span="12">
                      <el-input v-model="sale_quotation.name"></el-input>
                  </el-col>
                  <el-col :span="12">
                      <el-input v-model="sale_quotation.name"></el-input>
                  </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="汇率"  prop="name"><el-input v-model="sale_quotation.name"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="折扣率(%)"  prop="name"><el-input v-model="sale_quotation.name"></el-input> </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="应付冲款类型"   prop="name"  > 
                  <el-input placeholder="应付冲款" v-model="input" :disabled="true"></el-input>
               </el-form-item>
            </el-col>
            
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="终止账月"  prop="name"><el-date-picker class="xiala"  type="datetime" placeholder="选择日期时间"></el-date-picker></el-form-item>
            </el-col>
              <el-col :span="12">
                <el-form-item label="凭证编号"  prop="name"><el-input v-model="sale_quotation.name"></el-input> </el-form-item>
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
                    <el-col :span="4">
                        <el-dropdown size="mini" split-button type="primary">查询
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>单据状况查询</el-dropdown-item>
                                <el-dropdown-item>历史交易查询</el-dropdown-item>
                                <el-dropdown-item>成本差额查询</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="4">
                        <el-dropdown size="mini" split-button type="primary">转单
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>采购订单转入</el-dropdown-item>
                                <el-dropdown-item>转采购入库</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="4">
                        <el-dropdown size="mini" split-button type="primary">查询
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>单据状况查询</el-dropdown-item>
                                <el-dropdown-item>历史交易查询</el-dropdown-item>
                                <el-dropdown-item>成本差额查询</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
        </el-tabs>
    </div>
</el-form>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
mode:'history',//去掉路径中的#
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
        sale_quotation:{
            consumer:{
                name:""
            },
            tax:"0",
            details:[
                {
                    name:"hahha"
                }
               
            ]
        }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
<style  scoped>
    .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
        margin-top: 5px;
        margin-bottom: 0px;
        margin-right: 20px;
        margin-left: 10px;
    }
    .details{
        /* border: 1px solid red; */
        margin-top: 10px;
        width: 1030px;
        margin: 10px auto;
    }
    .el-tabs__item {
        /* padding: 0 10px; */
        /* height: 30px;
        line-height: 30px; */
    }
    .xiala{
        width: 385px;
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
    .tab1{
        height: 200px;
    }
</style>
