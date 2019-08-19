<!--  -->
<template>
<div class='haha'>
  
    <el-form :model="sale_quotation" size="mini" :label-position="'left'"   ref="sale_quotation" label-width="100px" class="demo-ruleForm">
        <el-row>
            <el-col :span="12">
               <el-form-item label="客户" class="blue"  prop="name"> <el-input v-model="sale_quotation.consumer.name"></el-input> </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="单据日期"  prop="name"> <el-date-picker  type="datetime" placeholder="选择日期时间"> </el-date-picker> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
               <el-form-item label="送货地址"  prop="name"> 
                   <el-col :span="11"> <el-input v-model="sale_quotation.name"> </el-input></el-col>
                   <el-col class="line" :span="2">&nbsp;&nbsp;</el-col>
                   <el-col :span="11"> <el-input v-model="sale_quotation.name"> </el-input></el-col>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="单据号码"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
               <el-form-item label="销售订单类型"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="客户订单"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
               <el-form-item label="单价是否含税"   prop="name"> 
                   <el-select v-model="sale_quotation.tax">
                    <el-option label="未税" value="0" ></el-option>
                    <el-option label="含税" value="1"></el-option>
                   </el-select>
               </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="币别"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
               <el-form-item label="单况"   prop="name"> 
                   <el-select v-model="sale_quotation.tax">
                    <el-option label="未结案" value="0" ></el-option>
                    <el-option label="已结案" value="1"></el-option>
                    <el-option label="无效" value="2"></el-option>
                   </el-select>
               </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="汇率"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
            </el-col>
        </el-row>
        <div class="details">
            <el-tabs  type="card">
                <el-tab-pane label="内容" >
                    <el-table :data="sale_quotation.details" height="150" size="mini" max-height="250" border style="width: 97%">
                            <el-table-column fixed prop="date"  width="20">
                            </el-table-column>
                            <el-table-column  prop="date" label="栏号" width="100">
                            </el-table-column>
                            <el-table-column prop="name" label="物料编号" width="150">
                            </el-table-column>
                            <el-table-column prop="province" label="物料名称" width="150">
                            </el-table-column>
                            <el-table-column prop="city" label="规格型号" width="100">
                            </el-table-column>
                            <el-table-column prop="address" label="单位名称" width="100">
                            </el-table-column>
                            <el-table-column prop="zip" label="数量" width="100">
                            </el-table-column>
                            <el-table-column prop="zip" label="折扣前单价" width="100">
                            </el-table-column>
                            <el-table-column prop="zip" label="折数(%)" width="100">
                            </el-table-column>
                            <el-table-column prop="zip" label="单价" width="100">
                            </el-table-column>
                            <el-table-column prop="zip" label="金额" width="100">
                            </el-table-column>
                            <el-table-column prop="zip" label="税率(%)" width="100">
                            </el-table-column>
                            <el-table-column prop="zip" label="税额" width="100">
                            </el-table-column>
                            <el-table-column prop="zip" label="含税金额" width="100">
                            </el-table-column>
                            <el-table-column prop="zip" label="赠品" width="100">
                            </el-table-column>
                            <el-table-column prop="zip" label="分录备注" width="200">
                            </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="账款" >
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="账款归属"   prop="name"> 
                            <el-input v-model="sale_quotation.name"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="收款日期"  prop="name"> <el-date-picker  type="datetime" placeholder="选择日期时间"> </el-date-picker> </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="收款条件"   prop="name"> 
                            <el-input v-model="sale_quotation.name"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="账款月份"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
                        </el-col>
                    </el-row>
                    
                </el-tab-pane>
                <el-tab-pane label="备注" >
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="表头条文"   prop="name"> 
                            <el-input v-model="sale_quotation.name"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="自定义栏一"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="表尾条文"   prop="name"> 
                            <el-input v-model="sale_quotation.name"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="自定义栏二"  prop="name"> <el-input v-model="sale_quotation.name"></el-input> </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                        <el-form-item label="备注"   prop="name"> 
                          <el-input type="textarea" :rows="4" :autosize="{ minRows: 4, maxRows: 4}" > </el-input>
                        </el-form-item>
                        </el-col>
                        
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </div>
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="业务人员"   prop="name"> 
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
                        <el-col :span="3">
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    查询<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item >历史交易查询</el-dropdown-item>
                                    <el-dropdown-item >利润预估查询</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                        <el-col :span="3">
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    功能<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item >批次变更单价</el-dropdown-item>
                                    <el-dropdown-item >发送Email</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                        <el-col :span="18">
                            &nbsp;
                        </el-col>
                    </el-row>

        
        
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
     *{
        
    }
    .haha{
      width: 1249px;
      /* border: 1px solid red; */
    }
    .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
        margin-top: 5px;
        margin-bottom: 0px;
        margin-right: 20px;
        margin-left: 10px;
    }
    .details{
        /* border: 1px solid red; */
        margin-top: 10px;
        /* width: 741px; */
        margin: 10px auto;
        height: 206px;
    }
    .el-tabs__item {
        /* padding: 0 10px; */
        /* height: 30px;
        line-height: 30px; */
        background-color: white;
    }
    .el-table{
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
        background-color: #A5C5F4;
    }
    form{
        border: 1px solid #A5C5F4;
        background-color: #D7E7FF;
        height: 100%;
        width: 60%;
    }
    .el-dropdown span,.el-dropdown i{
        background-color: #A5C5F4;
    }
    .el-dropdown-menu{
            background-color: #FFF;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 1px solid black;
    /* border-bottom: none;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box; */
}
    .blue{

    }
</style>