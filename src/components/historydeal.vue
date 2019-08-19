<!--  -->
<template>
<div class=''>

    <el-row :gutter="10">
        <el-form :model="formLabelAlign">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">历史</div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
                <el-form-item label="">
                    <el-input  v-model="formLabelAlign.queryhistory"></el-input>
                </el-form-item>
                </div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="dataoutput">
                <el-form-item label="">
                    <el-input  v-model="formLabelAlign.dataoutput" type="button" ></el-input>
                </el-form-item>
            </div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">
                    <el-form-item label="">
                    <el-input  v-model="formLabelAlign.retrieve" type="button" class="retrieve" disabled="true" ></el-input>
                     </el-form-item>
            </div></el-col>
         </el-form>
    </el-row>

    <!-- 数据渲染框 -->
    <el-table
    :data="tableData"
    border
    stripe
    style="width: 100%"
     :height="tableHeight"
     >
    <el-table-column
      prop="columntype"
      label="（单别）"
      width="150">
    </el-table-column>

    <el-table-column
      prop="historydate"
      label="（日期）"
      width="150">
    </el-table-column>


    <el-table-column
      prop="columnnumber"
      label="（单号）"
      width="150">
    </el-table-column>

    <el-table-column
      prop="currency"
      label="（币别）"
      width="150">
    </el-table-column>

    <el-table-column
      prop="exchangerate"
      label="（汇率）"
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
      label="(单位)"
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
      prop="hastax"
      label="单价是否含税"
      width="120">
    </el-table-column>

    <el-table-column
      prop="amountofmoney"
      label="(金额)"
      width="120">
    </el-table-column>

     <el-table-column
      prop="remark"
      label="备注"
      width="120">
    </el-table-column>


  </el-table>


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
    tableHeight: 600,
    mounted:function(){
        setTimeout(() => {
            this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop;
        },100)
　　　　　//此处需要通过延迟方法来设置值，不然会出现值已更新，但页面没更新的问题
        //this.$refs.table.$el.offsetTop：表格距离浏览器的高度
    },
    formLabelAlign: {
          queryhistory:'',
          dataoutput:'资料输出',
          retrieve:'取回',
        },
    tableData: [{
          columntype: '1',
          historydate: 'C01-W-HP-DC7900-307',
          columnnumber: '上海',
          currency: '普陀区',
          exchangerate: '普陀区',
          materialnumber: '普陀区',
          materialname: '普陀区',
          specificationtype: '普陀区',
          companyname: '普陀区',
          number: '普陀区',
          discountprice: '普陀区',
          foldingnumber: '上海市普陀区金沙江路 1518 弄',
          price: '普陀区',
          hastax: '普陀区',
          amountofmoney : '普陀区',
          remark: '普陀区',
        }]    

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
<style >
    .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>