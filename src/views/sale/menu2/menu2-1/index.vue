<!--  -->
<template>
  <div class>
    <el-button class="baocun" type="success" @click="save" size="small">保存</el-button>
    <el-button type="primary" class="shenghe" @click="shenghe" size="small " :disabled="savebtn">审核</el-button>
    <img src="@/assets/he.png" width="80px" class="img" v-if="smlordbillmain.hasCheck==1" />
    <el-form
      :model="smlordbillmain"
      size="mini"
      :label-position="'left'"
      ref="smlordbillmain"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="正式客户" prop="name">
            <el-input v-model="smlordbillmain.comcustomer.fullName" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单据日期" prop="name">
            <el-date-picker
              v-model="smlordbillmain.billDate"
              type="datetime"
              placeholder="选择日期时间"
              :disabled="isWriter"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="送货地址" prop="name">
            <el-col :span="11">
              <el-input v-model="smlordbillmain.name" :disabled="isWriter"></el-input>
            </el-col>
            <el-col class="line" :span="2">&nbsp;&nbsp;</el-col>
            <el-col :span="11">
              <el-input v-model="smlordbillmain.custAddres" :disabled="isWriter"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单据号码" prop="name">
            <el-input v-model="smlordbillmain.billNo" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="有效日期" prop="name">
            <el-date-picker
              v-model="smlordbillmain.validDate"
              type="datetime"
              placeholder="选择日期时间"
              :disabled="isWriter"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="币别" prop="name">
            <el-input v-model="smlordbillmain.currID" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="单价是否含税" prop="name">
            <el-select v-model="smlordbillmain.priceOfTax">
              <el-option label="未税" value="0" :disabled="isWriter"></el-option>
              <el-option label="含税" value="1" :disabled="isWriter"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="汇率" prop="name">
            <el-input v-model="smlordbillmain.exchrRate" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="details">
        <el-tabs type="card">
          <el-tab-pane label="内容">
            <vxe-table
              :data="smlordbillmain.subList"
              border
              resizable
              highlight-hover-row
              class="vxe-table-element"
              height="160"
            >
              <vxe-table-column title>
                <template v-slot="{ row }" style="padding:10px;">
                  <i class="el-icon-remove"></i>
                </template>
              </vxe-table-column>
              <vxe-table-column field="rowNO" title="栏号" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
              <vxe-table-column
                field="prodID"
                title="物料编号"
                width="140"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="prod.name"
                title="物料名称"
                width="140"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="prod.prodSize"
                title="规格型号"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="unit"
                title="单位名称"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="quantity"
                title="数量"
                width="140"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="oldPrice"
                title="折扣前单价"
                width="110"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="discount"
                title="折数(%)"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column field="price" title="单价" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
              <vxe-table-column
                field="amount"
                title="金额"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="taxRate"
                title="税率(%)"
                width="130"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="taxAmt"
                title="税额"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="telephone"
                title="含税金额"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="isGift"
                title="赠品"
                width="140"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
              <vxe-table-column
                field="itemRemark"
                title="分录备注"
                width="100"
                :edit-render="{name: 'input'}"
              ></vxe-table-column>
            </vxe-table>
          </el-tab-pane>
          <el-tab-pane label="备注">
            <el-row>
              <el-col :span="12">
                <el-form-item label="表头条文" prop="name">
                  <el-input v-model="smlordbillmain.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="自定义栏一" prop="name">
                  <el-input v-model="smlordbillmain.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="表尾条文" prop="name">
                  <el-input v-model="smlordbillmain.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="自定义栏二" prop="name">
                  <el-input v-model="smlordbillmain.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="备注" prop="name">
                  <el-input type="textarea" :rows="4"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="业务人员" prop="name">
            <el-input v-model="smlordbillmain.name" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="制单人员" prop="name">
            <el-input v-model="smlordbillmain.name" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="所属部门" prop="name">
            <el-input v-model="smlordbillmain.name" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="复核人员" prop="name">
            <el-input v-model="smlordbillmain.name" :disabled="isWriter"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              查询
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" split-button="true">
              <el-dropdown-item @click.native="lishi">历史交易查询</el-dropdown-item>
              <el-dropdown-item>利润预估查询</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              功能
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :disabled="isWriter">批次变更单价</el-dropdown-item>
              <el-dropdown-item>发送Email</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="18">&nbsp;</el-col>
      </el-row>
    </el-form>
    <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveAddition" v-if="!updatebool">保存后新增</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
    </span>-->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  mode: "history", //去掉路径中的#
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      dialogTableVisible: false, //历史交易查询
      isWriter: false,
      savebtn: true, //是否保存
      smlordbillmain: {
        comcustomer: {
          name: ""
        },
        hasCheck: 0,
        tax: "0",
        subList: [
          {
            name: "hahha"
          }
        ]
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 保存
    save() {
      this.isWriter = true;
      this.savebtn = false;
    },
    //保存后新增
    saveAddition() {
      var number = this.entity.departID;
    },
    shenghe() {
      if (this.smlordbillmain.hasCheck == 0) {
        this.smlordbillmain.hasCheck = 1;
      } else {
        this.smlordbillmain.hasCheck = 0;
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
* {
}

.el-select .el-input,
.el-select {
  width: 120px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input__inner {
  width: 98%;
}
.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-top: 5px;
  margin-bottom: 0px;
  margin-right: 20px;
  margin-left: 10px;
}
.details {
  /* border: 1px solid red; */
  margin-top: 10px;
  width: 100%;
  margin: 10px auto;
  height: 206px;
}
.el-tabs__item {
  /* padding: 0 10px; */
  /* height: 30px;
        line-height: 30px; */
  background-color: white;
}
.el-table {
  margin: 0px auto;
}
.el-dropdown {
  display: inline-block;
  /* position: relative;
        color: #606266; */
  /* font-size: 14px; */
  /* height: 30px;
        line-height: 30px; */
  padding: 0px 10px;
  /* height: 30px; */
  margin: 5px 5px;
  border: 1px solid black;
  background-color: #a5c5f4;
}
form {
  // border: 1px solid #A5C5F4;
  background-color: #d7e7ff;
  height: 100%;
  // width: 43%;
}
.el-dropdown span,
.el-dropdown i {
  background-color: #a5c5f4;
}
.el-dropdown-menu {
  background-color: #fff;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: 1px solid black;
  /* border-bottom: none;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box; */
}
.shenghe {
  position: absolute;
  top: 37px;
  right: 50px;
}
.baocun {
  position: absolute;
  top: 37px;
  right: 125px;
}
.img {
  position: absolute;
  top: 90px;
  right: 50px;
  z-index: 100;
}
</style>