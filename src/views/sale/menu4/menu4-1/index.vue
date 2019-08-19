<!--  -->
<template>
<div class=''> <el-popover  placement="right"  width="500" trigger="click">
  <el-form  size="mini" :label-position="'left'"    label-width="100px" class="demo-ruleForm">
      <el-tabs type="border-card">
      <el-tab-pane label="客户">
            <el-row>
                  <el-form-item label="客户区间"  prop="name"> 
                    <el-col :span="11">
                      <el-input ></el-input>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-input ></el-input>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
                  <el-form-item label="订单日期"  prop="name"> 
                    <el-col :span="11">
                      <el-date-picker type="date"   style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-date-picker   style="width: 100%;"></el-date-picker>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
                  <el-form-item label="预出库日"  prop="name"> 
                    <el-col :span="11">
                      <el-date-picker type="date"   style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-date-picker   style="width: 100%;"></el-date-picker>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
              <el-col :span="18">
                  &nbsp;
              </el-col>
              <el-col :span="6">
                  <el-checkbox >已结案显示</el-checkbox>
              </el-col>
            </el-row>
      </el-tab-pane>
      <el-tab-pane label="物料">
        <el-row>
                  <el-form-item label="物料区间"  prop="name"> 
                    <el-col :span="11">
                      <el-input ></el-input>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-input ></el-input>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
                  <el-form-item label="订单日期"  prop="name"> 
                    <el-col :span="11">
                      <el-date-picker type="date"   style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-date-picker   style="width: 100%;"></el-date-picker>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
                  <el-form-item label="预出库日"  prop="name"> 
                    <el-col :span="11">
                      <el-date-picker type="date"   style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-date-picker   style="width: 100%;"></el-date-picker>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
              <el-col :span="18">
                  &nbsp;
              </el-col>
              <el-col :span="6">
                  <el-checkbox >已结案显示</el-checkbox>
              </el-col>
            </el-row>
      </el-tab-pane>
      <el-tab-pane label="业务员">
        <el-row>
                  <el-form-item label="业务员区间"  prop="name"> 
                    <el-col :span="11">
                      <el-input ></el-input>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-input ></el-input>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
                  <el-form-item label="订单日期"  prop="name"> 
                    <el-col :span="11">
                      <el-date-picker type="date"   style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-date-picker   style="width: 100%;"></el-date-picker>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
                  <el-form-item label="预出库日"  prop="name"> 
                    <el-col :span="11">
                      <el-date-picker type="date"   style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-date-picker   style="width: 100%;"></el-date-picker>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
              <el-col :span="18">
                  &nbsp;
              </el-col>
              <el-col :span="6">
                  <el-checkbox >已结案显示</el-checkbox>
              </el-col>
            </el-row>
      </el-tab-pane>
      <el-tab-pane label="部门">
        <el-row>
                  <el-form-item label="部门区间"  prop="name"> 
                    <el-col :span="11">
                      <el-input ></el-input>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-input ></el-input>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
                  <el-form-item label="订单日期"  prop="name"> 
                    <el-col :span="11">
                      <el-date-picker type="date"   style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-date-picker   style="width: 100%;"></el-date-picker>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
                  <el-form-item label="预出库日"  prop="name"> 
                    <el-col :span="11">
                      <el-date-picker type="date"   style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">To</el-col>
                    <el-col :span="11">
                      <el-date-picker   style="width: 100%;"></el-date-picker>
                    </el-col>
                 </el-form-item>
            </el-row>
            <el-row>
              <el-col :span="18">
                  &nbsp;
              </el-col>
              <el-col :span="6">
                  <el-checkbox >已结案显示</el-checkbox>
              </el-col>
            </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-form>
  <el-button slot="reference">筛选</el-button>
</el-popover>
  
<el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="订单笔数">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="订单本币金额">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="订单本币税率">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="订单本币含税金额">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="实际成本">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="实际毛利">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="实际毛利率">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="标准成本">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="客户编号"
      prop="id">
    </el-table-column>
    <el-table-column
      label="客户简称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="客户类别"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="地区名称"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="订单本币含税金额"
      width="150"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="订单本币金额"
      width="150"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="订单本币税率"
      width="150"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="实际成本"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="实际毛利"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="标准成本"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="标准毛利"
      prop="desc">
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
  tableData:[]
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
</style>