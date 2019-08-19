<!--  -->
<template>
<div class='max'>
     <el-row :gutter="20" class="a">
        <el-col :span="2"><div class="grid-content bg-purple">物料区间</div></el-col>
        <el-col :span="9"><div class="grid-content bg-purple"><el-input placeholder="物料区间" v-model="input10" clearable ></el-input></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">To</div></el-col>
        <el-col :span="9"><div class="grid-content bg-purple"><el-input  v-model="input10" clearable ></el-input></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple"><img src="../../../../assets/yxb.png"></div></el-col>
    </el-row>
     <el-row :gutter="20" class="a">
        <el-col :span="2"><div class="grid-content bg-purple">物料区间</div></el-col>
        <el-col :span="9"><div class="grid-content bg-purple"><el-input placeholder="物料区间" v-model="input10" clearable ></el-input></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">To</div></el-col>
        <el-col :span="9"><div class="grid-content bg-purple"><el-input v-model="input10" clearable ></el-input></div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple"><img src="../../../../assets/yxb.png"></div></el-col>
    </el-row>
    <el-row :gutter="20" class="a">
        <el-col :span="2"><div class="grid-content bg-purple">日期选择</div></el-col>
        <el-col :span="9">
        <div class="grid-content bg-purple">
            <template>
                <el-radio v-model="radio" label="1">最近入库日</el-radio>
                <el-radio v-model="radio" label="2">最近出库日</el-radio>
            </template>
        </div>
        </el-col>
    </el-row>
     <el-row :gutter="20" class="a">
        <el-col :span="2"><div class="grid-content bg-purple">单据日期</div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"><el-date-picker v-model="value1" type="datetime" placeholder=" /     / " :picker-options="pickerOptions1" style="width: 100%;"></el-date-picker></div></el-col>
    </el-row>
    <el-tabs type="border-card">
            <template>
  <el-table
    :data="tableData3"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="（区间）"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="（起始天数）"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="（截止天数）"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="（区间说明）"
      width="120">
    </el-table-column>
  </el-table>
</template>
    </el-tabs>
   <el-row :gutter="20" class="a">
        <el-button type="primary">确定</el-button>
        <el-button type="primary">取消</el-button>
        <el-button type="primary">固定报表</el-button>
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
 }
</style>