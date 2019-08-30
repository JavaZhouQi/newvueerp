<!--  -->
<template>
    <div class="goOut">

    <div style="height:60px;">
      <div style="margin-top: 15px;width:380px;float: left;">
        <el-input placeholder="请输入内容" v-model="selectValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="查询全部" value="-1"></el-option>
            <el-option label="物料名称" value="ProdName"></el-option>
            <el-option label="规格型号" value="ProdSize"></el-option>
            <el-option label="英文名称" value="engName"></el-option>
            <el-option label="备注" value="memo"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="findPage"></el-button>
        </el-input>
      </div>
      <div style="float: right;margin: 15px 300px 0px 0px;">
          
                <el-button type="primary" @click="dialogVisible = true" >新增</el-button>
      </div>
    </div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%;margin-top:10px;">
      <el-table-column prop="ProdID" label="物料编号" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="ProdName" label="物料名称" width="180"></el-table-column>
      <el-table-column prop="ProdSize" label="规格型号" width="280"></el-table-column>
      <el-table-column prop="SQuantity" label="数量" width="200"></el-table-column>
       <el-table-column prop="Sprice" label="单价" width="200"></el-table-column>
        <el-table-column prop="Amount" label="金额" width="200"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="update(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.ProdID)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-helper @jumpPage="jumpPage" :page-number="currentPage" :totalCount="pagenumber"></page-helper>
    

    <el-dialog
  title="采购退货"
  :visible.sync="dialogVisible"
  width="70%"
  :before-close="handleClose">
  
    <el-form :model="formLabelAlign" size="mini" :rules="rules" ref="formLabelAlign" label-width="100px" class="demo-ruleForm">

            <el-row :gutter="10">
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                        <div class="grid-content bg-purple">
                            <el-form-item label="单据日期">
                                <div class="block">
                                        <el-date-picker
                                        v-model="formLabelAlign.documentDate"
                                          align="right"
                                          type="date"
                                          placeholder="选择日期"
                                          :picker-options="pickerOptions">
                                        </el-date-picker>
                                      </div>

                            </el-form-item>
                        </div>
                </el-col>
                 <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                            <div class="grid-content bg-purple">
                                <el-form-item label="单据号码"  prop="documentNumber">

                                    <el-input v-model="formLabelAlign.documentNumber"></el-input>
                                    
                                </el-form-item>
                            </div>
                        </el-col>
            </el-row>
           

                  <el-row :gutter="10">
                       
                      </el-row>
    
                      <el-row :gutter="10">
                            <el-col :xs="4" :sm="6" :md="8" :lg="11" :xl="11">
                                <div class="grid-content bg-purple-light">
                                    <input type="text" style="display: none">
                                </div>
                            </el-col>
                            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                                <div class="grid-content bg-purple">  
                                    <el-form-item label="分摊方式" >
                                    <div style="margin-top: 15px;">
                                      <el-select v-model="formLabelAlign.select" slot="prepend" placeholder="请选择">
                                        <el-option label="按数量" value="1"></el-option>
                                        <el-option label="按金额" value="2"></el-option>
                                      </el-select>
    
                                  </el-input>
                                </div>
                                    </el-form-item>
                                </div>
                            </el-col>
                          </el-row>
                <el-form-item  >
                    
                <el-tabs v-model="activeName">
                    <el-tab-pane label="费用明细" name="first" :key="'first'">
                        <div style="display: inline">
                            <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                            label="栏号"
                              type="index"
                              :index="indexMethod">
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="费用编号"
                            width="180">
                          </el-table-column>
                          <el-table-column
                            prop="NameofMaterial"
                            label="(费用名称)">
                          </el-table-column>
                          <el-table-column
                          prop="Specifications"
                          label="(币别)">
                        </el-table-column>
                        <el-table-column
                        prop="unit"
                        label="(汇率)">
                      </el-table-column>
                      <el-table-column
                      prop="quantity"
                      label="金额">
                    </el-table-column>
                </el-table>
                
                        </div>
                    </el-tab-pane>

                <el-tab-pane label="分摊结果 " name="second" :key="'second'" >
                    <div style="display: inline">
       <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                            label="栏号"
                              type="index"
                              :index="indexMethod">
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="采购入库单号"
                            width="180">
                          </el-table-column>
                          <el-table-column
                            prop="NameofMaterial"
                            label="物料编号">
                          </el-table-column>
                          <el-table-column
                          prop="Specifications"
                          label="(物料名称)">
                        </el-table-column>
                        <el-table-column
                        prop="unit"
                        label="(规格型号)">
                      </el-table-column>
                      <el-table-column
                      prop="quantity"
                      label="采购金额">
                    </el-table-column>
                    <el-table-column
                      prop="quantity"
                      label="数量">
                    </el-table-column>
                    <el-table-column
                      prop="quantity"
                      label="单位">
                    </el-table-column>
                    <el-table-column
                      prop="quantity"
                      label="分摊金额">
                    </el-table-column>
                </el-table>
               
</div>
</el-tab-pane>
</el-tabs>
</el-form-item>

<el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
   
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">  <el-form-item label="制单人员" prop="serial">
            <el-input v-model="formLabelAlign.makingPersonnel"></el-input>
          </el-form-item></div></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">          <el-form-item label="复核人员" prop="serial">
                <el-input v-model="formLabelAlign.reviewingOfficer"></el-input>
              </el-form-item>
         </div></el-col>
  </el-row>

      
    
      <el-row :gutter="10">
 <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">
                <el-form-item>
                        
                        <el-button @click="resetForm('formLabelAlign')">重置</el-button>

                        <el-button type="primary" @click="submitForm('formLabelAlign')">保存</el-button>
                      </el-form-item>
         </div></el-col>
         
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>


    </el-form>
  
      
    

</el-dialog>
</div>
</template>

<script>
    //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
    //例如：import 《组件名称》 from '《组件路径》';

    export default {
        //import引入的组件需要注入到对象中才能使用
        components: {},
        name: "goOut",
        data() {
            //这里存放数据
            return { entity: {},   // 新增and修改的对象
                tableData: [],  // 显示数据
                findData: {},  // 查询数据
                select: "",   // 查询条件
                selectValue: "",
                addDialog: false, // 新增模态框
                currentPage: 1,   // 当前页
                currentSize: 10,  // 每页条数
                pagenumber: 0,     // 总条数
                updatebool:false,
                dialogVisible:false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    NameofMaterial: '日立 日立笔记本硬盘 40GB/5400转',
                    Specifications: '日立 日立笔记本硬盘 40GB/5400转',
                    unit: '块',
                    quantity: '100',
                    price: '1000.00',
                    totalmoney: '1000000.00',
                    BatchNo : '1'



                }],
            
            
                show: "false",
                options: {},
                pickerOptions: {
                    // disabledDate是一个函数,参数是当前选中的日期值,这个函数需要返回一个Boolean值,
                    disabledDate: (time) => {
                        // 如果函数处理比较简单,可以直接在这里写逻辑方法
                        // return time.getTime() < Date.now() - 8.64e7

                        // 如果函数里处理的数据比较麻烦,也可以单独放在一个函数里,避免data数据太臃肿
                        return this.dealDisabledDate(time)
                    },
                    //默认第一个选项卡
                },
                activeName: "first",
                scope: {
                    row: {
                        lists: []
                    }
                },
                formLabelAlign: {
                    select: '',
                    radio: '',
                    Suppliers:'',
                    documentDate: '', //单据日期
                    warehouse: '', //仓库
                    documentNumber: '', //单据号码
                    proofNumber: '', //凭证编号
                    setColumn: '', //自定栏一
                    setTheBar: '', //自定栏二
                    outboundPersonnel: '', //出库人员
                    makingPersonnel: '', //制单人员
                    department: '', //所属部门
                    reviewingOfficer: '', //复核人员
                    remark: '' //备注
                },
                rules: {
                    department: [{
                        required: true, //所属部门
                        message: '请选择部门',
                        trigger: 'blur'
                    }],
                    outboundPersonnel: [{ //出库人员
                        required: true,
                        message: '请选择入库人员',
                        trigger: 'blur'
                    }],
                    documentNumber: [{ //单据号码
                        required: true,
                        message: '单据号码不能为空',
                        trigger: 'blur'
                    }],
                    Suppliers: [{ //供应商
                        required: true,
                        message: '请选择供应商',
                        trigger: 'blur'
                    }],
                    warehouse: [{ //仓库
                        required: true,
                        message: '请选择仓库',
                        trigger: 'blur'
                    }]
                }
            }

        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
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
    //分页带条件查询
    findPage() {
      if(this.select != -1){
        this.findData[this.select] = this.selectValue
      }else{
        this.findData = {}
      }
      request({
        url:"/zwjwarehousingdetail/warehousingdetailquery",
        method: "post",
        data: this.findData
      }).then(result => {
       
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
      if(!this.updatebool){
        // 新增
        request({
          url: "/comdepartment/add",
          method: "post",
          data: this.entity
        }).then(result => {
            Message.success(result.data.data)
            //关闭模态框
            this.addDialog = false
            this.findPage()
            this.entity = {}
        });
      }else{
        // 修改
        request({
          url: "/comdepartment/update",
          method: "post",
          data: this.entity
        }).then(result => {
            Message.success(result.data.data)
            //关闭模态框
            this.addDialog = false
            this.findPage()
            this.updatebool = false
            this.entity = {}
        });
      }
      
    },
    //保存后新增
    saveAddition(){
      var number = this.entity.departID
    },
    // 修改
    update(entity){
      this.updatebool = true
      this.addDialog = true
      this.entity = entity
    },
    // 删除
    del(id){
      request({
        url: "/comdepartment/del?id="+id,
        method: "get"
      }).then(result => {
        Message.success(result.data.data)
        this.findPage()
      });
    },
            submitForm(formLabelAlign) {
                this.$refs[formLabelAlign].validate((valid) => {
                    if (valid) {
                        alert('可以新增');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formLabelAlign) {
                this.$refs[formLabelAlign].resetFields();
            },
            indexMethod(index) {
                console.log(index);
                if (index > 0) {
                    return index * 1 + 1;
                } else {
                    return 1;
                }

            },
            primary(arg) {
                console.log(arg);
                this.show = this.show ? false : true;
                 this.shows = this.shows ? false : true;
            },

            // 单独处理时间的函数
            dealDisabledDate(time) {
                // time.getTime是把选中的时间转化成自1970年1月1日 00:00:00 UTC到当前时间的毫秒数
                // Date.now()是把今天的时间转化成自1970年1月1日 00:00:00 UTC到当前时间的毫秒数,这样比较好比较
                // return的值,true是不可以操作选择,false可以操作选择,比如下面这个判断就只能选择今天之后的时间
                // return time.getTime() < Date.now()

                // 这里减8.64e7的作用是,让今天的日期可以选择,如果不减的话,今天的日期就不可以选择,判断中写<= 也是没用的,一天的毫秒数就是8.64e7
                // return time.getTime() <= Date.now()
                return time.getTime() < Date.now() - 8.64e7
            }
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
            this.primary(true);
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
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
    ul li {
        list-style-type: none;
    }
    
    .ulli {
        border: 1px solid lightblue;
        margin: 0px;
        padding: 0;
        width: 120px;
        background-color: lightblue
    }
</style>