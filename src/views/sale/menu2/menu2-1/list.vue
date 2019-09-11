<!--  -->
<template>
  <div class>
    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="客户名称" value="fullName"></el-option>
            <el-option label="订单单据" value="billNo"></el-option>
            <el-option label="单据日期"  value="billDate"></el-option>
            <el-option label="是否审核" value="auditStatus"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
        <el-button type="primary" @click="add">新增</el-button>
      </div>
    </div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;">
      <el-table-column   width="50"  type="index"></el-table-column>
      <el-table-column prop="billNo" label="订单单据" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="comcustomer.fullName" label="客户名称" width="180"></el-table-column>
      <el-table-column prop="billDate" label="订单日期"  width="280">
          <template slot-scope="scope">
          <span>{{timestampToTime(scope.row.billDate)}}</span>
          </template>
      </el-table-column>
      <el-table-column prop="auditStatus" label="审核状态" width="280" >
        <template slot-scope="scope">
        <span v-if="scope.row.auditStatus==0">未审核</span><span v-if="scope.row.auditStatus==1">已审核</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-search" @click="update(scope.row)" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.row.billNo)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>

    <el-dialog title="销售报价单" :visible.sync="addDialog" width="50%" :before-close="handleClose">
      <router-view ></router-view>
    </el-dialog>
    <el-dialog title="历史交易查询" :visible.sync="dialogTableVisible" >
      <!-- <router-view  :to='{path:"/sale/menu2/menu2-1/lishi"}'></router-view> -->
      <el-row >
        <el-form size="mini" label-width="40px">
          <el-col :span="8">
              <el-form-item label="客户"><el-input size="mini"></el-input></el-form-item>
          </el-col>
          <el-col :span="10">
             &nbsp;
          </el-col>
          <el-col :span="6">
              <el-button type="primary"  size="mini" plain>资料输出</el-button>
              <el-button type="success" size="mini" plain>取回</el-button>
          </el-col>
        </el-form>
      </el-row>
       <vxe-table size="mini" style="margin-top: 10px;"  :data="listData"  border resizable highlight-hover-row class="vxe-table-element" height="180"  >
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
    </el-dialog>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import request from "@/api/request";
import PageHelper from "@/components/PageHelper";
import { Message } from 'element-ui';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    PageHelper
  },
  data() {
    //这里存放数据
    return {
      entity: {},   // 新增and修改的对象
      type:1,       //1是新增    2是修改
      tableData: [],  // 显示数据
      findData: {
      },  // 查询数据
      select: "",   // 查询条件
      selectValue: "",
      dialogTableVisible: false, //历史交易查询
      addDialog: false, // 新增模态
      currentPage: 1,   // 当前页
      currentSize: 10,  // 每页条数
      pagenumber: 0,     // 总条数
      updatebool:false,
      savebtn:true,         //是否保存
      isWriter:false,
      rules: {
        smlordbillmain: [
           { required: true, message: '编号不能为空', trigger: 'blur' },
        ],
        departName: [
           { required: true, message: '名称不能为空', trigger: 'blur' },
        ]
      }
      ,smlordbillmain:{
            flag:"1" ,
            comcustomer:{
                name:""
            },
            hasCheck:0,
            tax:"0",
            auditStatus:0,
            subList:[
                {
                    name:"hahha"
                }
               
            ]
        }
        ,listData:[]
    };
  },
  //监听属性 类似于data概念
  computed: {
  },
  //监控data中的数据变化
  watch: {
    addDialog:function(){
      this.findPage();
    }
  },
  //方法集合
  methods: {
    //时间格式化
      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
       var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
        return Y+M+D;
    },
    add(){
        this.addDialog=true;
        this.type=1;
        this.$router.push({path:"/sale/menu2/menu2-1/index",query:{type:1}});
    },
    
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    // 分页组件触发的事件
    jumpPage(data) {
      this.currentPage = data.currentPage;  //当前页
      this.currentSize = data.currentSize;  //每页显示条数
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
    //关闭模态框
    handleClose2(done) {
     
          done();
        
    },
    //分页带条件查询
    findPage() {
      if(this.select != -1){
        this.findData[this.select] = this.selectValue
      }else{
        this.findData = {}
      }
      this.findData.flag=1;
      request({
        url:
          "/smlordbillmain/findPage?current=" +
          this.currentPage +
          "&size=" +
          this.currentSize,
        method: "post",
        data: this.findData
      }).then(result => {
        // console.log(result.data);
        this.tableData = result.data.data.rows; //查询的数据
        this.pagenumber = result.data.data.total; // 总条数
        this.findData={};
        // this.selectValue="";
      });
    },
    // 单个查询
    findOne() {
      request({
        url: "/comdepartment/findOne",
        method: "post"
      }).then(result => {
        console.log(result);
      });
    },
    // 保存
    save() {
        this.isWriter=true;
        this.savebtn=false;
    },
    //保存后新增
    saveAddition(){
      var number = this.entity.departID
    },
    // 修改
    update(entity){
      this.type=2;
      this.addDialog = true
      this.$router.push({path:"/sale/menu2/menu2-1/index",query:{billNO:entity.billNo,type:2}});
    },
    // 删除
    del(billNo){
      request({
        url: "/smlordbillmain/remove",
        method: "post",
        params:{
          billNo:billNo,
          flag:1
        }
      }).then(result => {
        if(result.data.data=="true"){
          Message.success("删除成功");
        }else{
          Message.error(result.data.data);
        }
        this.findPage()
      });
    }
    ,shenghe(){
        if(this.smlordbillmain.hasCheck==0){
            this.smlordbillmain.hasCheck=1;
            
        }else{

            this.smlordbillmain.hasCheck=0;
            
        }
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
.el-input__inner {
  width: 98%;
}
 .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
        margin-top: 5px;
        margin-bottom: 0px;
        margin-right: 20px;
        margin-left: 10px;
    }
    .details{
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
    .el-table{
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
        background-color: #A5C5F4;
    }
    form{
        // border: 1px solid #A5C5F4;
        background-color: #D7E7FF;
        height: 100%;
        // width: 43%;
    }
    .el-dropdown span,.el-dropdown i{
        background-color: #A5C5F4;
    }
    .el-dropdown-menu{
            background-color: #FFF;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 1px solid black;
    /* border-bottom: none;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box; */
    }
    .shenghe{
        position: absolute;
        top:37px;
        right: 50px;
    }
    .baocun{
        position: absolute;
        top:37px;
        right: 125px;
    }
    .img{
         position: absolute;
        top:90px;
        right: 50px;
        z-index: 100;
    }
</style>
