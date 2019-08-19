<template>
<div class='div'>
  <div id="fht" style="position: absolute;float: inherit; right: 30px;top: 30px;z-index:100;"><img src="@/static/images/he.png"></div>
  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>请购类型：</span></el-col>
    <el-col :span="8"><el-input size="mini"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>单据日期：</span></el-col>
    <el-col :span="8"><el-date-picker type="date" placeholder="选择日期" size="mini" style="width: 100%;"></el-date-picker></el-col>
  </el-row>

  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>单况：</span></el-col>
    <el-col :span="8">
      <el-select v-model="value" placeholder="请选择" size="mini"  style="width: 100%;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
      </el-select>
    </el-col>
    <el-col :span="3" :offset="1"><span>单据号码：</span></el-col>
    <el-col :span="8"><el-input size="mini"></el-input></el-col>
  </el-row>

  <el-tabs type="border-card" style="width: 95%;margin-top: 20px;box-shadow: 0 0px 0px rgba(0,0,0,0);">
    <el-tab-pane label="内容">
      <div style="height:210px; width: 105%;">
        <template>
          <el-table
            :data="tableData"
            :height="tableHeight"
            border
            height="230"
            :summary-method="getSummaries"
            show-summary
            style="margin-top: -15px; margin-left: -15px;font-size: 3px;" class="elTable">
        <el-table-column label="">
            <el-table-column
              prop="id"
              label="（栏号）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="name"
              label="物料编号"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount1"
              label="（物料名称）"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount2"
              label="（规格型号）"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（单位名称）"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="数量"
              width="50">
            </el-table-column>
        </el-table-column>

        <el-table-column label="标准进价信息">
            <el-table-column
              prop="amount3"
              label="（币别）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（标准进价）"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（标准进价金额）"
              width="120">
            </el-table-column>
        </el-table-column>

        <el-table-column label="最后一次采购信息">
            <el-table-column
              prop="amount3"
              label="（币别）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（单价）"
              width="70">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（进价金额）"
              width="100">
            </el-table-column>
        </el-table-column>

        <el-table-column label="">
            <el-table-column
              prop="amount3"
              label="需求日期"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（建议采购日期）"
              width="120">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（未采购量）"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="分录备注"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（来源单别）"
              width="100">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="（来源单号）"
              width="100">
            </el-table-column>
        </el-table-column>
          </el-table>
        </template>
      </div>
    </el-tab-pane>
    <el-tab-pane label="备注">
      <div style="height:150px;">
        <el-row :gutter="20" class="bj">
          <el-col :span="4"><span>请购类型：</span></el-col>
          <el-col :span="7"><el-input size="mini"></el-input></el-col>
          <el-col :span="4" :offset="2"><span>单据日期：</span></el-col>
          <el-col :span="7"><el-date-picker type="date" placeholder="选择日期" size="mini" style="width: 100%;"></el-date-picker></el-col>
        </el-row>
        <el-row :gutter="20" class="bj">
          <el-col :span="4"><span>请购类型：</span></el-col>
          <el-col :span="7"><el-input size="mini"></el-input></el-col>
          <el-col :span="4" :offset="2"><span>单据日期：</span></el-col>
          <el-col :span="7"><el-date-picker type="date" placeholder="选择日期" size="mini" style="width: 100%;"></el-date-picker></el-col>
        </el-row>
        <el-row :gutter="20" class="bj">
          <el-col :span="4"><span>备注：</span></el-col>
          <el-col :span="20">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="textarea2">
            </el-input>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
  </el-tabs>

  <el-row :gutter="20" class="bj" style="margin-top: 30px;">
    <el-col :span="3"><span>请购人员：</span></el-col>
    <el-col :span="8"><el-input size="mini"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>制单人员：</span></el-col>
    <el-col :span="8"><el-input size="mini"></el-input></el-col>
  </el-row>

  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>请购部门：</span></el-col>
    <el-col :span="8"><el-input size="mini"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>复核人员：</span></el-col>
    <el-col :span="8"><el-input size="mini"></el-input></el-col>
  </el-row>

  <el-dropdown trigger="click" style="margin-top: 20px;">
    <span class="el-dropdown-link">
      转单
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>销售订单转入</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

  <el-dropdown trigger="click" style="margin-left: 30px;">
    <span class="el-dropdown-link">
      功能
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>单况状态切换</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
        
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import request from "@/api/request";
import { Message } from 'element-ui';
export default {
  props:["addDialog"],
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    tableData: [{
          id: '1',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '2',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '3',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '4',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '5',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
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
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = '';
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
<style scoped>
.div{
  padding-left: 25px;
  margin-top: -20px;
}
.bj{
  margin-bottom: 10px;
}
span{
  size: 15px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
</style>
<style>
.el-dialog__title {
    line-height: 24px;
    font-size: 15px;
    color: #303133;
}
el-table .el-table thead {
    color: #909399;
    font-weight: 500;
}
el-table{
  height: 10px;
}
.elTable th{
  padding: 3px 0!important;
}
.elTable td{
  /*max-height: 1px!important;*/
  padding: 2px 0!important;
  overflow:  auto !important;
}
</style>