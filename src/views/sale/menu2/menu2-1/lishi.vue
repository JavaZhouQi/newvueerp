<!--  -->
<template>
<div class=''>
        <el-row >
        <el-form size="mini" label-width="40px">
          <el-col :span="12">
              <el-form-item label="客户"><el-input size="mini"></el-input></el-form-item>
          </el-col>
          <el-col :span="6">
             &nbsp;
          </el-col>
          <el-col :span="6">
              <el-button type="primary"  size="mini" plain>资料输出</el-button>
              <el-button type="success" size="mini" plain>取回</el-button>
          </el-col>
        </el-form>
      </el-row>
       <vxe-table size="mini"  :data="listData"  border resizable highlight-hover-row class="vxe-table-element" height="180"  >
        <vxe-table-column title="删除">
          <template v-slot="{ row }" style="padding:10px;">
            <i class="el-icon-remove"
            ></i>
          </template>
        </vxe-table-column>
        <vxe-table-column field="id" title="单别" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="address" title="日期"  width="140" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="zipCode" title="单号" width="140" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="linkMan" title="币别" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="linkManProf" title="汇率" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="telephone" title="物料编号" width="140" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="faxNo" title="物料名称" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="walkAddr" title="规格型号" width="100"  :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="memo" title="单位" width="100"  :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="zipCode" title="数量" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="linkMan" title="折扣前单价" width="130" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="linkManProf" title="折数(%)" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="telephone" title="单价" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="faxNo" title="单价是否含税" width="140" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="walkAddr" title="金额" width="100"  :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="memo" title="备注" width="180"  :edit-render="{name: 'input'}"></vxe-table-column>
      </vxe-table>

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
    listData:[]
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

</style>