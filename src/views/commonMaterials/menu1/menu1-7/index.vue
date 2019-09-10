<!--  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="银行编号" value="bankID"></el-option>
            <el-option label="银行名称" value="bankName"></el-option>
            <el-option label="英文名称" value="engName"></el-option>
            <el-option label="备注" value="memo"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button type="primary" @click="addDialog = true;updatebool = false;entity = {}">新增</el-button>
      </div>
    </div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;">
      <el-table-column prop="bankID" label="银行编号" sortable width="160" column-key="date"></el-table-column>
      <el-table-column prop="bankClsID" label="银行类别" width="160"></el-table-column>
      <el-table-column prop="bankName" label="银行名称" width="160"></el-table-column>
      <el-table-column prop="engName" label="英文名称" width="160"></el-table-column>
      <el-table-column prop="memo" label="备注" width="280"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.bankID)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>

    <el-dialog title="编辑银行" :visible.sync="addDialog" width="30%" :before-close="handleClose">
      <span>
        <el-form
          :model="entity"
          label-position="left"
          label-width="80px"
          status-icon
          :rules="rules"
        >
          <el-form-item label="银行编号" prop="bankID">
            <el-input v-model="entity.bankID" :disabled="updatebool"></el-input>
          </el-form-item>
          <el-form-item label="银行类别" prop="bankClsID">
            <el-input v-model="entity.bankClsID" style="width:78%;"></el-input>
            <el-button @click="choiceDialog = true;findByCoumnAndSize()">选择</el-button>
          </el-form-item>
          <el-form-item label="银行名称" prop="bankName">
            <el-input v-model="entity.bankName"></el-input>
          </el-form-item>
          <el-form-item label="英文名称">
            <el-input v-model="entity.engName"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="entity.memo"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveAddition" v-if="!updatebool">保存后新增</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="单选-银行类别设定"
      :visible.sync="choiceDialog"
      width="50%"
      :before-close="choiceClose"
    >
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
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import request from "@/api/request";
import PageHelper from "@/components/PageHelper";
import { Message } from "element-ui";
import { constants } from 'fs';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    PageHelper
  },
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
    // 分页组件触发的事件
    jumpPage(data) {
      this.currentPage = data.currentPage; //当前页
      this.currentSize = data.currentSize; //每页显示条数
      this.findPage();
    },
    //关闭模态框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    choiceClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //分页带条件查询
    findPage() {
      if (this.select != -1) {
        this.findData[this.select] = this.selectValue;
      } else {
        this.findData = {};
      }
      request({
        url:
          "/combank/findPage?current=" +
          this.currentPage +
          "&size=" +
          this.currentSize,
        method: "post",
        data: this.findData
      }).then(result => {
        this.tableData = result.data.data.rows; //查询的数据
        this.pagenumber = result.data.data.total; // 总条数
        this.findData = {};
      });
    },
    // 单个查询
    findOne() {
      request({
        url: "/combank/findOne",
        method: "post"
      }).then(result => {
        console.log(result);
      });
    },
    // 保存
    save() {
      if (!this.updatebool) {
        // 新增
        request({
          url: "/combank/add",
          method: "post",
          data: this.entity
        }).then(result => {
          Message.success(result.data.data);
          //关闭模态框
          this.addDialog = false;
          this.findPage();
          this.entity = {};
        });
      } else {
        // 修改
        request({
          url: "/combank/update",
          method: "post",
          data: this.entity
        }).then(result => {
          Message.success(result.data.data);
          //关闭模态框
          this.addDialog = false;
          this.findPage();
          this.updatebool = false;
          this.entity = {};
        });
      }
    },
    //保存后新增
    saveAddition() {
      var number = this.entity.departID;
    },
    // 修改
    update(entity) {
      this.updatebool = true;
      this.addDialog = true;
      this.entity = entity;
    },
    // 删除
    del(id) {
      request({
        url: "/combank/del?id=" + id,
        method: "get"
      }).then(result => {
        Message.success(result.data.data);
        this.findPage();
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.findPage();
  }
};
</script>
<style lang='scss' scoped>
.el-select .el-input,
.el-select {
  width: 120px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-col {
  border-radius: 4px;
  border: 1px solid #d7dae2;
}
ul {
  padding: 0px;
  margin: 0px;
}
li {
  list-style: none;
  padding: 4px;
  font-size: 14px;
  border: 1px solid #d7dae2;
  text-align: center;
}
</style>

