<!--  -->
<template>
<div class=''>
    <span>
        <el-row :gutter="10">
          <el-col :span="24" style="padding:3px;height:48px;margin-bottom: 5px;">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item>
                <el-select v-model="union.coumn">
                  <el-option
                    v-for="entity,index in union.coumnList"
                    :label="entity.name"
                    :value="entity.value"
                    :key="index"
                  ></el-option>
                </el-select>
                <el-input-number v-model="union.num" :min="1" :max="10" style="width:130px;"></el-input-number>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="5" style="height:260px;">
            <div>
              <ul style="height:260px;">
                <li v-for="coumn in union.list" @click="selectCoumn(coumn)">{{ coumn }}</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="19" style="padding:3px;height:260px;">
            <el-table
              ref="singleTable"
              :data="union.tableData"
              highlight-current-row
              @current-change="handleCurrentChange"
              style="width: 100%"
              height="250"
            >
              <el-table-column v-for="entity in union.coumnList" :property="entity.value" :label="entity.name" width="120" :key="entity.value"></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="choiceDialog = false">取 消</el-button>
        <el-button type="primary" @click="choiceDialog = false">确 定</el-button>
      </span>
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
      entity: {}, // 新增and修改的对象
      tableData: [], // 显示数据
      findData: {}, // 查询数据
      select: "", // 查询条件
      selectValue: "",
      addDialog: false, // 新增模态框
      choiceDialog: false,
      currentPage: 1, // 当前页
      currentSize: 10, // 每页条数
      pagenumber: 0, // 总条数
      updatebool: false,
      rules: {
        bankID: [{ required: true, message: "编号不能为空", trigger: "blur" }],
        bankName: [
          { required: true, message: "名称不能为空", trigger: "blur" }
        ],
        bankClsID: [
          { required: true, message: "类型不能为空", trigger: "blur" }
        ]
      },
      union: {
        // 列名
        coumnList: [
          {
            name: "编号",
            value: "wareHouseID"
          },
          {
            name: "名称",
            value: "wareHouseName"
          },
          {
            name: "英文名",
            value: "engName"
          }
        ],
        // 查询的条件
        selectName: {},
        tableName: "comwarehouse", // 表名
        num: 1, // 截取数量
        list: [],
        coumn: "wareHouseName", // 查询的列名 写name（名称）就可以了
        tableData:[]
      }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
   "union.coumn": function() {
      this.findByCoumnAndSize();
    },
    "union.num": function() {
      this.findByCoumnAndSize();
    }
},
//方法集合
methods: {
    // 联合查询方法
    findByCoumnAndSize() {
      request({
        url:
          "/currency/find?coumn=" +
          this.union.coumn +
          "&size=" +
          this.union.num +
          "&table=" +
          this.union.tableName,
        method: "get"
      }).then(result => {
        this.union.list = result.data.data;
        this.union.selectName[this.union.coumn] = result.data.data[0];
        this.findTable();
      });
    },
    // 查询条件
    selectCoumn(coumn) {
      this.union.selectName[this.union.coumn] =coumn;
      this.findTable();
    },
    // 查询数据详情
    findTable() {
      request({
        url:
          "/"+this.union.tableName+"/findByTable",
        method: "post",
        data:this.union.selectName
      }).then(result => {
        this.union.tableData = result.data.data;
        this.union.selectName = {}
      });
    },
    // 获取选中的数据
    handleCurrentChange(val) {
      this.entity.bankClsID = val.wareHouseID;
      console.log(val);
    },
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