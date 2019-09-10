<!--  -->
<template>
<div class='div'>
  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>供应商：</span></el-col>
    <el-col :span="9"><el-input size="mini"></el-input></el-col>
    <el-col :span="3" :offset="4"><el-button type="primary" size="mini">资料输出</el-button></el-col>
    <el-col :span="4">&nbsp;&nbsp;<el-button type="primary" size="mini" disabled>&nbsp;&nbsp;取&nbsp;回&nbsp;&nbsp;</el-button></el-date-picker></el-col>
  </el-row>

  <div style="width: 100%; margin-top: 40px; margin-bottom: 20px;">
        <template>
          <el-table
            :data="tableData"
            border
            height="200"
            :summary-method="getSummaries"
            show-summary
            style="margin-top: -15px; margin-left: -15px;font-size: 3px;" class="elTable">

            <el-table-column
              prop="id"
              label="（单别）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="name"
              label="（日期）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="amount1"
              label="（单号）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="amount2"
              label="（币别）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（汇率）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（物料编号）"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（物料名称）"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（规格型号）"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（单位）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（数量）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（折扣前单价）"
              width="150">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（折数（%））"
              width="120">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（单价）"
              width="80">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（单价是否含税）"
              width="150">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（金额）"
              width="80">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（备注）"
              width="150">
            </el-table-column>
          </el-table>
        </template>
      </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import request from "@/api/request";
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

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
<style scoped>
.div{
  margin-top: -15px;
  padding-left: 25px;
}
.bj{
  margin-bottom: 5px;
}
</style>