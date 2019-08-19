<!--  -->
<template>
<div class='max'>
    <el-row :gutter="20" class="a">
        <el-col :span="2"><div class="grid-content bg-purple" style="color: blue;">单据日期</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions1" style="width: 100%;"></el-date-picker></div></el-col>
         <el-col :span="2"><div class="grid-content bg-purple" style="color: blue;">单据号码</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input placeholder="单据号码" v-model="input10" clearable ></el-input></div></el-col>
    </el-row>
    <el-row :gutter="20" class="a">
        <el-col :span="2"><div class="grid-content bg-purple">增值科目</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input placeholder="增值科目" v-model="input10" clearable ></el-input></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">凭证编号</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input placeholder="凭证编号" v-model="input10" clearable ></el-input></div></el-col>
    </el-row>
    <el-row :gutter="20" class="a">
        <el-col :span="2"><div class="grid-content bg-purple">减值科目</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input placeholder="减值科目" v-model="input10" clearable ></el-input></div></el-col>
    </el-row>
    <el-tabs type="border-card">
        <el-tab-pane label="内容">
            <template>
  <el-table
    :data="tableData3"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="（栏号）"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="物料编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="（物料名称）"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="（规格型号）"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="（单位）"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="（库存量）"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="（平均成本）"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="（单价）"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="（调价金额）"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="（分录备注）"
      width="120">
    </el-table-column>
  </el-table>
</template>
        </el-tab-pane>
        <el-tab-pane label="备注">
            <el-row :gutter="20" class="a">
                <el-col :span="2"><div class="grid-content bg-purple">自定栏一</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple"><el-input v-model="input10" clearable ></el-input></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple">自定栏二</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple"><el-input v-model="input10" clearable ></el-input></div></el-col>
            </el-row>
             <el-row :gutter="20" class="a">
                <el-col :span="2"><div class="grid-content bg-purple">备注</div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple"><el-input type="textarea" class="bz"></el-input></div></el-col>
            </el-row>
        </el-tab-pane>
    </el-tabs>
    <el-row :gutter="20" class="b">
        <el-col :span="2"><div class="grid-content bg-purple">制单人员</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input  v-model="input10" clearable ></el-input></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">复核人员</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-input  v-model="input10" clearable ></el-input></div></el-col>
    </el-row>
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
     pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
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
<style scoped>
 .a{
    margin: 15px;
 }
 .b{
     margin: 15px;
 }
 .max{
     margin: 15px;
     width: 1200px;
 }
</style>