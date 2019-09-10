<template>
<div class='div'>
  <div id="fht" v-if="he" style="position: absolute;float: inherit; right: 30px;top: 30px;z-index:100;"><img src="@/static/images/he.png"></div>
  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>请购类型：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity.billStyleName"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>单据日期：</span></el-col>
    <el-col :span="8"><el-date-picker type="date" placeholder="选择日期" size="mini" style="width: 100%;" v-model="entity.billDate" @change="bNo"></el-date-picker></el-col>
  </el-row>

  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>单况：</span></el-col>
    <el-col :span="8">
      <el-select placeholder="请选择" size="mini"  style="width: 100%;" v-model="entity.billStatus">
              <el-option
                v-for="item in billStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
      </el-select>
    </el-col>
    <el-col :span="3" :offset="1"><span>单据号码：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity.billNO" disabled></el-input></el-col>
  </el-row>

  <el-tabs type="border-card" style="width: 95%;margin-top: 20px;box-shadow: 0 0px 0px rgba(0,0,0,0);">
    <el-tab-pane label="内容">
      <div style="height:210px; width: 105%;" @dblclick="addTable">
        <template>
          <vxe-table
            :data.sync="entity.yxrequisitionsdetails"
            height="230"
            border
            show-footer
            show-overflow
            ref="xTable"
            :footer-method="footerMethod"
            style="margin-top: -15px; margin-left: -15px;font-size: 3px;" class="elTable"
            :edit-config="{trigger: 'click', mode: 'cell'}"
            @edit-actived="editActivedEvent"
            @edit-closed="editClosedEvent">
        <vxe-table-column title="">
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="serNO"
              title="（栏号）"
              width="85">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="prodID"
              title="物料编号"
              width="100">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="prodName"
              title="（物料名称）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="prodSize"
              title="（规格型号）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="sunit"
              title="（单位名称）"
              width="110">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="squantity"
              title="数量"
              width="65">
            </vxe-table-column>
        </vxe-table-column>

        <vxe-table-column title="标准进价信息">
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="curr"
              title="（币别）"
              width="85">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="stdPrice"
              title="（标准进价）"
              width="115">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="amount"
              title="（标准进价金额）"
              width="135">
            </vxe-table-column>
        </vxe-table-column>

        <vxe-table-column title="最后一次采购信息">
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="lastestCurr"
              title="（币别）"
              width="85">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="lastestPrice"
              title="（单价）"
              width="85">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="lastestAmount"
              title="（进价金额）"
              width="115">
            </vxe-table-column>
        </vxe-table-column>

        <vxe-table-column title="">
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="preInDate"
              title="需求日期"
              width="120">
              <template v-slot:edit="{ row }">
                <input type="date" v-model="row.amount3" class="custom-input" style="width:95px;">
              </template>
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="suggestPurDate"
              title="（建议采购日期）"
              width="140">
              <template v-slot:edit="{ row }">
                <input type="date" v-model="row.amount3" class="custom-input" style="width:105px;">
              </template>
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="qtyRemain"
              title="（未采购量）"
              width="115">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="itemRemark"
              title="分录备注"
              width="115">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="fromNO"
              title="（来源单别）"
              width="115">
            </vxe-table-column>
            <vxe-table-column
            :edit-render="{name: 'input'}"
              field="tranType"
              title="（来源单号）"
              width="115">
            </vxe-table-column>
        </vxe-table-column>
          </vxe-table>
        </template>
      </div>
    </el-tab-pane>
    <el-tab-pane label="备注">
      <div style="height:150px;">
        <el-row :gutter="20" class="bj">
          <el-col :span="4"><span>请购类型：</span></el-col>
          <el-col :span="7"><el-input size="mini" v-model="entity.salesName"></el-input></el-col>
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
              v-model="entity.remark">
            </el-input>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
  </el-tabs>

  <el-row :gutter="20" class="bj" style="margin-top: 30px;">
    <el-col :span="3"><span>请购人员：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity.salesName"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>制单人员：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity.maker"></el-input></el-col>
  </el-row>

  <el-row :gutter="20" class="bj">
    <el-col :span="3"><span>请购部门：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity.departName"></el-input></el-col>
    <el-col :span="3" :offset="1"><span>复核人员：</span></el-col>
    <el-col :span="8"><el-input size="mini" v-model="entity.permitter"></el-input></el-col>
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
      <el-dropdown-item><a @click="qgStatus">单况状态切换</a></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

  <el-link :underline="false" style="margin-left:445px;" type="primary" @click="shenghe">审核</el-link>
  <el-button style="margin-left:30px;" size="mini" @click="addRD">保存</el-button>
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
    he:false,
    id:this.$route.query.id,
    billStatus:[{"value":"1","label":"未结案"},{"value":"2","label":"已结案"},{"value":"3","label":"无效"}],
    entity:{billNO:"",permitter:"",billStatus:"1",yxrequisitionsdetails :[]}
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
  '$route':function(){
    if(this.$route.query.id==" "){
        this.entity={billNO:"",billStatus:"1",yxrequisitionsdetails :[]}
        this.he=false;
    }else{
      this.getRequisitions();
    }
  }
},
//方法集合
methods: {
      footerMethod ({ columns, data }) {
        return [
          columns.map((column, columnIndex) => {
            if (columnIndex === 0) {
              return '合计：'
            }
            if (['age'].includes(column.property)) {
              return XEUtils.sum(data, column.property)
            }
            return null
          })
        ]
      },
      insertEvent () {
        let record = {
          name: 'New name'
        }
        this.$refs.xTable.insert(record).then(({ row }) => this.$refs.xTable.setActiveCell(row, 'age'))
      },
      getInsertEvent () {
        let insertRecords = this.$refs.xTable.getInsertRecords()
        this.$XModal.alert(insertRecords.length)
      },
      editActivedEvent ({ row, column }, event) {
        console.log(`打开 ${column.title} 列编辑`)
      },
      editClosedEvent ({ row, column }, event) {
        console.log(`关闭 ${column.title} 列编辑`)
      },
      addTable(){
        this.entity.yxrequisitionsdetails.push({});
      },
      shenghe(){
        console.log(this.entity.permitter);
        if(this.he==false){
          //if(this.entity.permitter==undefined || this.entity.permitter==""){
            this.he=true;
            request({
              url: "/yxrequisitions/deleteRDs",
              method: "get",
              params:{
                billNO:this.$route.query.id
              }
            }).then(result => {
                request({
                  url:"/yxrequisitions/insertRDs",
                  method:"post",
                  data:this.entity
                }).then(result=>{
                  console.log(result);
                  this.$message({
                    showClose: true,
                    message: '已审核',
                    type: 'success'
                  });
                });
            });
          //}
        }else{
            this.he=false;
            this.entity.permitter=""
            
            request({
              url: "/yxrequisitions/deleteRDs",
              method: "get",
              params:{
                billNO:this.$route.query.id
              }
            }).then(result => {
                request({
                  url:"/yxrequisitions/insertRDs",
                  method:"post",
                  data:this.entity
                }).then(result=>{
                  console.log(result);
                  this.$message({
                    showClose: true,
                    message: '反审核',
                    type: 'success'
                  });
                });
            });
            
        }
      },
      qgStatus(){
        if(this.entity.billStatus=="1"){
          this.$message({
            showClose: true,
            message: '已结案',
            type: 'success'
          });
          this.entity.billStatus="2"
        }else if(this.entity.billStatus=="2"){
          this.$message({
            showClose: true,
            message: '已失效',
            type: 'success'
          });
          this.entity.billStatus="3"
        }
      },
      bNo(){
        if(this.$route.query.id==" "){
          var time=this.entity.billDate;
          time.setHours(-new Date().getTimezoneOffset()/60);
          request({
            url: "/yxrequisitions/selectLikeBillNO",
            method: "get",
            params:{
              billDate:time
            }
          }).then(result => {
            console.log(result);
            this.entity.billNO=result.data.data;
          });
        }
      },
      addRD(){
        if(this.$route.query.id==" "){
            request({
              url:"/yxrequisitions/insertRDs",
              method:"post",
              data:this.entity
            }).then(result=>{
              Message.success("新增成功")
              console.log(result);
            });
        }else{
          if(this.he==true){
            this.$message({
              showClose: true,
              message: '单据已审核',
              type: 'warning'
            });
          }else{
            request({
              url: "/yxrequisitions/deleteRDs",
              method: "get",
              params:{
                billNO:this.$route.query.id
              }
            }).then(result => {
                request({
                  url:"/yxrequisitions/insertRDs",
                  method:"post",
                  data:this.entity
                }).then(result=>{
                  Message.success("修改成功")
                  console.log(result);
                  
                });
            });
          }
        }
        //this.$emit("a");
                  //this.$parent.a();
      },
      getRequisitions:function(){
        console.log(this.$route.query.id)
        request({
          url:"/yxrequisitions/selectBillNO",
          method:"get",
          params:{
            billNO:this.$route.query.id
          }
        }).then(result=>{
          console.log(result.data.data);
          this.entity=result.data.data;
          
          if(result.data.data.billStatus=="1"){
            this.entity.billStatus="1"
          }else if(result.data.data.billStatus=="2"){
            this.entity.billStatus="2"
          }else if(result.data.data.billStatus=="3"){
            this.entity.billStatus="3"
          }

          if(this.entity.permitter==undefined || this.entity.permitter==""){
            this.he=false;
          }else{
            this.he=true;
          }
        })
      }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    if(this.$route.query.id==" "){
        this.entity={billNO:"",billStatus:"1",yxrequisitionsdetails :[]}
    }else{
        this.getRequisitions();
    };
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
.vxe-table.fixed--left .vxe-body--column, .vxe-table.fixed--right .vxe-body--column, .vxe-table.vxe-editable .vxe-body--column {
    height: 35px;
}
.vxe-table .vxe-default-input{
    height: 30px;
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