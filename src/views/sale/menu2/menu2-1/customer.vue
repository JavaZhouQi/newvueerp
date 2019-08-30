<!--  -->
<template>
<div class=''>
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
      <el-table-column prop="departID"  width="50"  type="index"></el-table-column>
      <el-table-column prop="departID" label="订单单据" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="departName" label="客户名称" width="180"></el-table-column>
      <el-table-column prop="engName" label="订单日期" width="280"></el-table-column>
      <el-table-column prop="memo" label="审核状态" width="280"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-search" @click="update(scope.row)" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.row.departID)"></el-button>
        </template>
      </el-table-column>
    </el-table>
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
    tableData:[],
    formData:{}
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    findPage(){

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
<style  scoped>

</style>