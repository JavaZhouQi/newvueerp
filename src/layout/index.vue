<template>
  <div class="app">
    <el-container>
      <el-aside
        class="app-side app-side-left"
        :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'"
      >
        <div class="app-side-logo" style="height:50px;">
          <img src="@/assets/logo.png" :width="isCollapse ? '60' : '60'" height="60" />
        </div>
        <div>
          <!-- 我是样例菜单 -->
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            :collapse="isCollapse"
            :router="router"
            :unique-opened="router"
          >
            <template v-for="(item,index) in menuList">
              <!-- 三级菜单 -->
              <el-submenu :index="index+''">
                <template slot="title">
                  <i :class="item.meta.icon"></i>
                  <span slot="title">{{item.meta.title}}</span>
                </template>
                <el-submenu
                  v-for="child in item.children"
                  :index="child.path"
                  :key="child.path"
                  style="padding-left: 20px;"
                >
                  <span slot="title">
                    <span>{{child.meta.title}}</span>
                  </span>
                  <el-menu-item-group>
                    <el-menu-item
                      v-for="childThree in child.children"
                      :index="childThree.path"
                      :key="childThree.path"
                    >
                      <span slot="title">
                        <span>{{childThree.meta.title}}</span>
                      </span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-submenu>
            </template>
          </el-menu>
        </div>
      </el-aside>

      <el-container>
        <el-header class="app-header">
          <div style="width: 60px; cursor: pointer;" @click.prevent="toggleSideBar">
            <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
            <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
          </div>
          <!-- 我是样例菜单 -->
          <el-menu
            default-active="1"
            class="el-menu-demo tab-page"
            mode="horizontal"
            active-text-color="#409EFF"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">
              <a href="#">订单管理</a>
            </el-menu-item>
          </el-menu>
          <div class="app-header-userinfo">
            <el-dropdown trigger="hover" :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main class="app-body" style="padding: 0px;background-color:#f4f4f5">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item
              v-for="entity,index in levelList"
              :key="index"
              :to="entity.path"
            >{{entity.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view />
        </el-main>
      </el-container>
    </el-container>

    <!-- 弹框 公用资料-->
    <div
      role="alert"
      v-show="show"
      class="el-notification right"
      style="top: 16px; z-index: 2013; width:25%;  height:  300px ;"
    >
      <div class="el-notification__group">
        <h2 class="el-notification__title">&nbsp;&nbsp;共用资料</h2>
        <div class="el-notification__content"></div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close"></div>
        <div class="all">
          <div class="ce1">
            <img class="leftImg" src="@/static/images/gyzl/ck.png" />
            <p class="pp">
              <router-link to="/commonMaterials/menu2/menu2-1">&nbsp;&nbsp;&nbsp;仓库管理</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/zwj.png" />
            <p class="pp">
              <router-link to="/commonMaterials/menu2/menu2-2">&nbsp;&nbsp;&nbsp;物料类别</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/wllb.png" />
            <p class="pp">
              <router-link to="/commonMaterials/menu2/menu2-4">&nbsp;&nbsp;物料主文件</router-link>
            </p>
          </div>
          <div class="ce2">
            <img class="leftImg" src="@/static/images/gyzl/khlb.png" />
            <p class="pp">
              <router-link to="/commonMaterials/menu3/menu3-1">&nbsp;&nbsp;&nbsp;客户类别</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/khzwj.png" />
            <p class="pp">
              <router-link to="/commonMaterials/menu3/menu3-5">&nbsp;&nbsp;客户主文件</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/gyslb.png" />
            <p class="pp">
              <router-link to="/commonMaterials/menu3/menu3-7">&nbsp;&nbsp;供应商类别</router-link>
            </p>
          </div>
          <div class="ce3">
            <img class="leftImg" src="@/static/images/gyzl/qzkh.png" />
            <p class="pp">
              <router-link to="/commonMaterials/menu3/menu3-4">潜在客户文件</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/kjkm.png" />
            <p class="pp">
              <router-link to="/commonMaterials/menu4/menu4-3">&nbsp;&nbsp;会计科目</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/gyszwj.png" />
            <p class="pp">
              <router-link to="/commonMaterials/menu3/menu3-8">供应商主文件</router-link>
            </p>
          </div>
          <div class="ce4">
            <img class="leftImg" src="@/static/images/gyzl/bm.png" />
            <p class="pp">
              <router-link
                to="/commonMaterials/menu1/menu1-1"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部门</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/xl.png" />
            <p class="pp">
              <router-link
                to="/commonMaterials/menu1/menu1-5"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学历</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/ryzwj.png" />
            <p class="pp">
              <router-link to="/commonMaterials/menu1/menu1-13">&nbsp;&nbsp;人员主文件</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹框 采购管理-->
    <div
      role="alert"
      v-show="show2"
      class="el-notification right"
      style="top: 16px; z-index: 2013; width:25%;  height:  300px ;"
    >
      <div class="el-notification__group">
        <h2 class="el-notification__title">&nbsp;&nbsp;采购管理</h2>
        <div class="el-notification__content"></div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close"></div>
        <div class="all">
          <div class="ce1">
            <img class="leftImg" src="@/static/images/gyzl/ck.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-1">&nbsp;&nbsp;采购请购单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/zwj.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-3">&nbsp;&nbsp;&nbsp;采购订单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/wllb.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-2">&nbsp;&nbsp;采购询价单</router-link>
            </p>
          </div>
          <div class="ce2">
            <img class="leftImg" src="@/static/images/gyzl/khlb.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-5">&nbsp;&nbsp;采购退货单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/khzwj.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-4">&nbsp;&nbsp;采购入库单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/gyslb.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-6">&nbsp;&nbsp;采购折让单</router-link>
            </p>
          </div>
          <div class="ce3">
            <img class="leftImg" src="@/static/images/gyzl/qzkh.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-7">&nbsp;&nbsp;&nbsp;采购发票</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/kjkm.png" />
            <p class="pp">
              <router-link to="/purchase/menu3/menu3-1">采购分摊作业</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/lsjl.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-8">历史交易记录</router-link>
            </p>
          </div>
          <div class="ce4">
            <img class="leftImg" src="@/static/images/gyzl/sd1.png" />
            <p class="pp">
              <router-link to="/purchase/menu1/menu1-1">请购类型设定</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/sd2.png" />
            <p class="pp">
              <router-link to="/purchase/menu1/menu1-2">入库类型设定</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/sd3.png" />
            <p class="pp">
              <router-link to="/purchase/menu1/menu1-3">订单类型设定</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹框 采购管理-->
    <div
      role="alert"
      v-show="show2"
      class="el-notification right"
      style="top: 16px; z-index: 2013; width:25%;  height:  300px ;"
    >
      <div class="el-notification__group">
        <h2 class="el-notification__title">&nbsp;&nbsp;采购管理</h2>
        <div class="el-notification__content"></div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close"></div>
        <div class="all">
          <div class="ce1">
            <img class="leftImg" src="@/static/images/gyzl/ck.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-1">&nbsp;&nbsp;采购请购单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/zwj.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-3">&nbsp;&nbsp;&nbsp;采购订单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/wllb.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-2">&nbsp;&nbsp;采购询价单</router-link>
            </p>
          </div>
          <div class="ce2">
            <img class="leftImg" src="@/static/images/gyzl/khlb.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-5">&nbsp;&nbsp;采购退货单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/khzwj.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-4">&nbsp;&nbsp;采购入库单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/gyslb.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-6">&nbsp;&nbsp;采购折让单</router-link>
            </p>
          </div>
          <div class="ce3">
            <img class="leftImg" src="@/static/images/gyzl/qzkh.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-7">&nbsp;&nbsp;&nbsp;采购发票</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/kjkm.png" />
            <p class="pp">
              <router-link to="/purchase/menu3/menu3-1">采购分摊作业</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/lsjl.png" />
            <p class="pp">
              <router-link to="/purchase/menu2/menu2-8">历史交易记录</router-link>
            </p>
          </div>
          <div class="ce4">
            <img class="leftImg" src="@/static/images/gyzl/sd1.png" />
            <p class="pp">
              <router-link to="/purchase/menu1/menu1-1">请购类型设定</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/sd2.png" />
            <p class="pp">
              <router-link to="/purchase/menu1/menu1-2">入库类型设定</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/sd3.png" />
            <p class="pp">
              <router-link to="/purchase/menu1/menu1-3">订单类型设定</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹框 销售-->
    <div
      role="alert"
      v-show="show3"
      class="el-notification right"
      style="top: 16px; z-index: 2013; width:25%;  height:  300px ;"
    >
      <div class="el-notification__group">
        <h2 class="el-notification__title">&nbsp;&nbsp;销售管理</h2>
        <div class="el-notification__content"></div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close"></div>
        <div class="all">
          <div class="ce1">
            <img class="leftImg" src="@/static/images/gyzl/xsbj.png" />
            <p class="pp">
              <router-link to="/sale/menu2/menu2-1">&nbsp;&nbsp;销售报价单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/xsdd.png" />
            <p class="pp">
              <router-link to="/sale/menu2/menu2-2">&nbsp;&nbsp;&nbsp;销售订单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/xsck.png" />
            <p class="pp">
              <router-link to="/sale/menu2/menu2-3">&nbsp;&nbsp;销售出库单</router-link>
            </p>
          </div>
          <div class="ce2">
            <img class="leftImg" src="@/static/images/gyzl/xsth.png" />
            <p class="pp">
              <router-link to="/sale/menu2/menu2-4">&nbsp;&nbsp;销售退货单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/xszr.png" />
            <p class="pp">
              <router-link to="/sale/menu2/menu2-5">&nbsp;&nbsp;销售折让单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/xsfp.png" />
            <p class="pp">
              <router-link to="/sale/menu2/menu2-6">&nbsp;&nbsp;&nbsp;销售发票</router-link>
            </p>
          </div>
          <div class="ce3">
            <img class="leftImg" src="@/static/images/gyzl/xs1.png" />
            <p class="pp">
              <router-link to="/sale/menu4/menu4-1">&nbsp;&nbsp;销售日报表</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/xs5.png" />
            <p class="pp">
              <router-link to="/sale/menu4/menu4-2">&nbsp;&nbsp;销售分析表</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/xs3.png" />
            <p class="pp">
              <router-link to="/sale/menu3/menu3-1">销售发票到处</router-link>
            </p>
          </div>
          <div class="ce4">
            <img class="leftImg" src="@/static/images/gyzl/sd2.png" />
            <p class="pp">
              <router-link to="/sale/menu1/menu1-1">订单类型设定</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/sd3.png" />
            <p class="pp">
              <router-link to="/sale/menu1/menu1-2">出库类型设定</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹框 库存-->
    <div
      role="alert"
      v-show="show4"
      class="el-notification right"
      style="top: 16px; z-index: 2013; width:20%;  height:  300px ;"
    >
      <div class="el-notification__group">
        <h2 class="el-notification__title">&nbsp;&nbsp;库存管理</h2>
        <div class="el-notification__content"></div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close"></div>
        <div class="all">
          <div class="ce1">
            <img class="leftImg" src="@/static/images/gyzl/qtrk.png" />
            <p class="pp">
              <router-link to="/stock/menu2/menu2-1">&nbsp;&nbsp;其他入库单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/qtck.png" />
            <p class="pp">
              <router-link to="/stock/menu2/menu2-2">&nbsp;&nbsp;&nbsp;其他出库单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/db.png" />
            <p class="pp">
              <router-link to="/stock/menu3/menu3-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;调拨单</router-link>
            </p>
          </div>
          <div class="ce2">
            <img class="leftImg" src="@/static/images/gyzl/pd1.png" />
            <p class="pp">
              <router-link to="/stock/menu3/menu3-2">&nbsp;&nbsp;打印盘点单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/pd2.png" />
            <p class="pp">
              <router-link to="/stock/menu3/menu3-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;盘点单</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/dj.png" />
            <p class="pp">
              <router-link to="/stock/menu4/menu4-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;调价单</router-link>
            </p>
          </div>
          <div class="ce3">
            <img class="leftImg" src="@/static/images/gyzl/sd2.png" />
            <p class="pp">
              <router-link to="/stock/menu1/menu1-1">&nbsp;入库类型设定</router-link>
            </p>
            <img class="leftImg" src="@/static/images/gyzl/sd3.png" />
            <p class="pp">
              <router-link to="/stock/menu1/menu1-2">&nbsp;出库类型设定</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>

     <!-- 弹框 公用资料-->
        <div role="alert"  v-show="show" class="el-notification right" style="top: 16px; z-index: 2013; width:30%;  height:  300px ;">
      <div class="el-notification__group">
        <h2 class="el-notification__title">&nbsp;&nbsp;共用资料</h2>
        <div class="el-notification__content">
        </div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close" ></div>
          <div class="all" >
             <div class="ce1">
                <img class="leftImg" src="@/static/images/gyzl/ck.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu1/menu1-1">&nbsp;&nbsp;&nbsp;仓库管理</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/zwj.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu2/menu2-2">&nbsp;&nbsp;&nbsp;物料类别</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/wllb.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu2/menu2-4">&nbsp;&nbsp;物料主文件</router-link></p> 
             </div>
             <div class="ce2">
                <img class="leftImg" src="@/static/images/gyzl/khlb.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu3/menu3-1">&nbsp;&nbsp;&nbsp;客户类别</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/khzwj.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu3/menu3-5">&nbsp;&nbsp;客户主文件</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/gyslb.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu3/menu3-7">&nbsp;&nbsp;供应商类别</router-link></p> 
             </div>
             <div class="ce3">
                 <img class="leftImg" src="@/static/images/gyzl/qzkh.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu3/menu3-4">潜在客户文件</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/kjkm.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu4/menu4-3">&nbsp;&nbsp;会计科目</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/gyszwj.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu3/menu3-8">供应商主文件</router-link></p> 
             </div>
             <div class="ce4">
                 <img class="leftImg" src="@/static/images/gyzl/bm.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu1/menu1-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部门</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/xl.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu1/menu1-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学历</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/ryzwj.png" > 
                <p class="pp">  <router-link to="/commonMaterials/menu1/menu1-13">&nbsp;&nbsp;人员主文件</router-link></p> 
             </div>
          </div>
      </div>
    </div>

  <!-- 弹框 采购管理-->
     <div role="alert"  v-show="show2" class="el-notification right" style="top: 16px; :z-index 2013; width:30%;  height:  300px ;">
      <div class="el-notification__group">
        <h2 class="el-notification__title">&nbsp;&nbsp;采购管理</h2>
        <div class="el-notification__content">
        </div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close" ></div>
          <div class="all" >
             <div class="ce1">
                <img class="leftImg" src="@/static/images/gyzl/ck.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-1">&nbsp;&nbsp;采购请购单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/zwj.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-3">&nbsp;&nbsp;&nbsp;采购订单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/wllb.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-2">&nbsp;&nbsp;采购询价单</router-link></p> 
             </div>
             <div class="ce2">
                <img class="leftImg" src="@/static/images/gyzl/khlb.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-5">&nbsp;&nbsp;采购退货单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/khzwj.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-4">&nbsp;&nbsp;采购入库单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/gyslb.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-6">&nbsp;&nbsp;采购折让单</router-link></p> 
             </div>
             <div class="ce3">
                 <img class="leftImg" src="@/static/images/gyzl/qzkh.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-7">&nbsp;&nbsp;&nbsp;采购发票</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/kjkm.png" > 
                <p class="pp">  <router-link to="/purchase/menu3/menu3-1">采购分摊作业</router-link></p>
               <img class="leftImg" src="@/static/images/gyzl/lsjl.png" > 
               <p class="pp">  <router-link to="/purchase/menu2/menu2-8">历史交易记录</router-link></p>  
             </div>
              <div class="ce4">
                 <img class="leftImg" src="@/static/images/gyzl/sd1.png" > 
                <p class="pp">  <router-link to="/purchase/menu1/menu1-1">请购类型设定</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/sd2.png" > 
                <p class="pp">  <router-link to="/purchase/menu1/menu1-2">入库类型设定</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/sd3.png" > 
                <p class="pp">  <router-link to="/purchase/menu1/menu1-3">订单类型设定</router-link></p> 
             </div>  
          </div>
      </div>
    </div>

    
 
   <!-- 弹框 采购管理-->
     <div role="alert"  v-show="show2" class="el-notification right" style="top: 16px; z-index: 2013; width:30%;  height:  300px ;">
      <div class="el-notification__group">
        <h2 class="el-notification__title">&nbsp;&nbsp;采购管理</h2>
        <div class="el-notification__content">
        </div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close" ></div>
          <div class="all" >
             <div class="ce1">
                <img class="leftImg" src="@/static/images/gyzl/ck.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-1">&nbsp;&nbsp;采购请购单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/zwj.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-3">&nbsp;&nbsp;&nbsp;采购订单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/wllb.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-2">&nbsp;&nbsp;采购询价单</router-link></p> 
             </div>
             <div class="ce2">
                <img class="leftImg" src="@/static/images/gyzl/khlb.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-5">&nbsp;&nbsp;采购退货单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/khzwj.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-4">&nbsp;&nbsp;采购入库单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/gyslb.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-6">&nbsp;&nbsp;采购折让单</router-link></p> 
             </div>
             <div class="ce3">
                 <img class="leftImg" src="@/static/images/gyzl/qzkh.png" > 
                <p class="pp">  <router-link to="/purchase/menu2/menu2-7">&nbsp;&nbsp;&nbsp;采购发票</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/kjkm.png" > 
                <p class="pp">  <router-link to="/purchase/menu3/menu3-1">采购分摊作业</router-link></p>
               <img class="leftImg" src="@/static/images/gyzl/lsjl.png" > 
               <p class="pp">  <router-link to="/purchase/menu2/menu2-8">历史交易记录</router-link></p>  
             </div>
              <div class="ce4">
                 <img class="leftImg" src="@/static/images/gyzl/sd1.png" > 
                <p class="pp">  <router-link to="/purchase/menu1/menu1-1">请购类型设定</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/sd2.png" > 
                <p class="pp">  <router-link to="/purchase/menu1/menu1-2">入库类型设定</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/sd3.png" > 
                <p class="pp">  <router-link to="/purchase/menu1/menu1-3">订单类型设定</router-link></p> 
             </div>  
          </div>
      </div>
    </div>
 
 
  <!-- 弹框 销售-->
     <div role="alert"  v-show="show3" class="el-notification right" style="top: 16px; z-index: 2013; width:30%;  height:  300px ;">
      <div class="el-notification__group">
        <h2 class="el-notification__title">&nbsp;&nbsp;销售管理</h2>
        <div class="el-notification__content">
        </div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close" ></div>
          <div class="all" >
             <div class="ce1">
                <img class="leftImg" src="@/static/images/gyzl/xsbj.png" > 
                <p class="pp">  <router-link to="/sale/menu2/menu2-1">&nbsp;&nbsp;销售报价单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/xsdd.png" > 
                <p class="pp">  <router-link to="/sale/menu2/menu2-2">&nbsp;&nbsp;&nbsp;销售订单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/xsck.png" > 
                <p class="pp">  <router-link to="/sale/menu2/menu2-3">&nbsp;&nbsp;销售出库单</router-link></p> 
             </div>
             <div class="ce2">
                <img class="leftImg" src="@/static/images/gyzl/xsth.png" > 
                <p class="pp">  <router-link to="/sale/menu2/menu2-4">&nbsp;&nbsp;销售退货单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/xszr.png" > 
                <p class="pp">  <router-link to="/sale/menu2/menu2-5">&nbsp;&nbsp;销售折让单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/xsfp.png" > 
                <p class="pp">  <router-link to="/sale/menu2/menu2-6">&nbsp;&nbsp;&nbsp;销售发票</router-link></p> 
             </div>
             <div class="ce3">
                 <img class="leftImg" src="@/static/images/gyzl/xs1.png" > 
                <p class="pp">  <router-link to="/sale/menu4/menu4-1">&nbsp;&nbsp;销售日报表</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/xs5.png" > 
                <p class="pp">  <router-link to="/sale/menu4/menu4-2">&nbsp;&nbsp;销售分析表</router-link></p>
               <img class="leftImg" src="@/static/images/gyzl/xs3.png" > 
               <p class="pp">  <router-link to="/sale/menu3/menu3-1">销售发票到处</router-link></p>  
             </div>
              <div class="ce4">
                 <img class="leftImg" src="@/static/images/gyzl/sd2.png" > 
                <p class="pp">  <router-link to="/sale/menu1/menu1-1">订单类型设定</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/sd3.png" > 
                <p class="pp">  <router-link to="/sale/menu1/menu1-2">出库类型设定</router-link></p>
             </div>  
          </div>
      </div>
    </div>

 <!-- 弹框 库存-->
     <div role="alert"  v-show="show4" class="el-notification right" style="top: 16px; z-index: 2013; width:25%;  height:  300px ;">
      <div class="el-notification__group">
        <h2 class="el-notification__title">&nbsp;&nbsp;库存管理</h2>
        <div class="el-notification__content">
        </div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close" ></div>
          <div class="all" >
             <div class="ce1">
                <img class="leftImg" src="@/static/images/gyzl/qtrk.png" > 
                <p class="pp">  <router-link to="/stock/menu2/menu2-1">&nbsp;&nbsp;其他入库单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/qtck.png" > 
                <p class="pp">  <router-link to="/stock/menu2/menu2-2">&nbsp;&nbsp;&nbsp;其他出库单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/db.png" > 
                <p class="pp">  <router-link to="/stock/menu3/menu3-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;调拨单</router-link></p> 
             </div>
             <div class="ce2">
                <img class="leftImg" src="@/static/images/gyzl/pd1.png" > 
                <p class="pp">  <router-link to="/stock/menu3/menu3-2">&nbsp;&nbsp;打印盘点单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/pd2.png" > 
                <p class="pp">  <router-link to="/stock/menu3/menu3-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;盘点单</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/dj.png" > 
                <p class="pp">  <router-link to="/stock/menu4/menu4-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;调价单</router-link></p> 
             </div>
             <div class="ce3">
                 <img class="leftImg" src="@/static/images/gyzl/sd2.png" > 
                <p class="pp">  <router-link to="/stock/menu1/menu1-1">&nbsp;入库类型设定</router-link></p>
                <img class="leftImg" src="@/static/images/gyzl/sd3.png" > 
                <p class="pp">  <router-link to="/stock/menu1/menu1-2">&nbsp;出库类型设定</router-link></p>
          
             </div>
          </div>
      </div>
    </div>

 <!-- 弹框 报表-->
     <div role="alert"  v-show="show5" class="el-notification right" style="top: 16px; z-index: 2013; width:34%;  height:  300px ;">
      <div class="el-notification__group">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">  
          <el-tab-pane label="采购报表" name="first"> 
             <div class="bb1">
               <div  class="b1">
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/cgdd5.png" >
                <p class="pp1">  <router-link to="/reportform/menu1/menu1-1">采购订单分析</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/cgdd6.png" > 
                <p class="pp1">  <router-link to="/reportform/menu1/menu1-2">订单分析明细</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/cgdd3.png" > 
                <p class="pp1">  <router-link to="/reportform/menu1/menu1-3">采购交易分析</router-link></p> 
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/cgdd4.png" > 
                <p class="pp1">  <router-link to="/reportform/menu1/menu1-4">交易分析明细</router-link></p>
                </div>
               </div>
                <div class="bb2">
               <div  class="b1">
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/kp.png" >
                <p class="pp1">  <router-link to="/reportform/menu1/menu1-6">开票状况分析</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/cgdd7.png" > 
                <p class="pp1">  <router-link to="/reportform/menu1/menu1-7">采购分摊明细</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/gysmx.png" > 
                <p class="pp1">  <router-link to="/reportform/menu1/menu1-5">&nbsp;供应商明细</router-link></p>
                </div>
               </div>
            </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="销售报表" name="second">
               <div class="bb1">
               <div  class="b1">
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/xsdd1.png" >
                <p class="pp1">  <router-link to="/reportform/menu2/menu2-1">销售订单分析</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/xsdd2.png" > 
                <p class="pp1">  <router-link to="/reportform/menu2/menu2-2">订单分析明细</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/ddfx1.png" > 
                <p class="pp1">  <router-link to="/reportform/menu2/menu2-3">销售交易分析</router-link></p> 
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/ddfx2.png" > 
                <p class="pp1">  <router-link to="/reportform/menu2/menu2-4">交易分析明细</router-link></p>
                </div>
               </div>
                <div class="bb2">
               <div  class="b1">
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/khjy.png" >
                <p class="pp1">  <router-link to="/reportform/menu2/menu2-5">客户交易明细</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/kpzk.png" > 
                <p class="pp1">  <router-link to="/reportform/menu2/menu2-6">开票状况分析</router-link></p>
                </div>
               </div>
            </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="库存报表" name="third">
             <div class="bb1">
               <div  class="b1">
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/wlqd.png" >
                <p class="pp1">  <router-link to="/reportform/menu3/menu3-1">&nbsp;&nbsp;&nbsp;物料清单</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/kcgl.png" > 
                <p class="pp1">  <router-link to="/reportform/menu3/menu3-2">物料库存估量</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/kcgl1.png" > 
                <p class="pp1">  <router-link to="/reportform/menu3/menu3-3">库存估量明细</router-link></p> 
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/kccx.png" > 
                <p class="pp1">  <router-link to="/reportform/menu3/menu3-4">&nbsp;&nbsp;&nbsp;库存查询</router-link></p>
                </div>
               </div>
                <div class="bb2">
               <div  class="b1">
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/kctz1.png" >
                <p class="pp1">  <router-link to="/reportform/menu3/menu3-5">&nbsp;&nbsp;&nbsp;库存台账</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/kctz2.png" > 
                <p class="pp1">  <router-link to="/reportform/menu3/menu3-6">库存台账明细</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/jy1.png" > 
                <p class="pp1">  <router-link to="/reportform/menu3/menu3-7">批号库交易分析</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/jy2.png" > 
                <p class="pp1">  <router-link to="/reportform/menu3/menu3-8">批号库交易分析明细</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/dz.png" > 
                <p class="pp1">  <router-link to="/reportform/menu3/menu3-9">库存呆滞分析</router-link></p>
                </div>
               </div>
            </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="账款报表" name="fourth">        <div class="bb1">
               <div  class="b1">
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/yszk2.png" >
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-1">&nbsp;应收款报表</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/yfzk.png" > 
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-2">应收款明细表</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/dzk.png" > 
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-3">应收款账龄分析</router-link></p> 
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/zkcs.png" > 
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-4">应收款账龄明细</router-link></p>
                </div>
               </div>
                <div class="bb2">
               <div  class="b1">
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/yfk5.png" >
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-5">&nbsp;应付款报表</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/yfk2.png" > 
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-6">应付款明细表</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/yfk3.png" > 
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-7">应付款账龄分析</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/yfk4.png" > 
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-8">应付款账龄明细</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/yfk6.png" > 
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-9">应付佣金明细</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/yfk7.png" > 
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-10">应收账款对账</router-link></p>
                </div>
                <div class="tw">
                <img class="leftImg1" src="@/static/images/gyzl/yfk8.png" > 
                <p class="pp1">  <router-link to="/reportform/menu5/menu5-11">应付账款对账</router-link></p>
                </div>
               </div>
            </div>
            </div></el-tab-pane>
     
         </el-tabs>
        <div class="el-notification__content">
        </div>
        <div class="el-notification__closeBtn el-icon-close" v-on:click="close" ></div>
          <div class="all" >
          
          </div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "Container",
  components: {},
  data() {
    return {
      username: "",
      isCollapse: false,
      router: true,
      menuList: [],
      levelList: [],
      show: false,
      show2: false,
      show3: false,
      show4: false,
      activeName: 'first'
    };
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      this.levelList = matched;
    },
    toggleSideBar() {
      this.isCollapse = !this.isCollapse;
    },
    logout: function() {
      this.$confirm("确认退出?", "提示", {})
        .then(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("permissions");
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      if(key==0){
      var that =this;
      that.show =true;
      that.show2 =false;
      that.show3 =false;
      that.show4 =false;
      that.show5 =false;
      }
      if(key==1){
      var that =this;
      that.show2 =true;
      that.show =false;
      that.show3 =false;
      that.show4 =false;
      that.show5 =false;
      }
      if(key==2){
      var that =this;
      that.show2 =true;
      that.show =false;
      that.show3 =true;
      that.show4 =false;
      that.show5 =false;
      }
      if(key==3){
      var that =this;
      that.show2 =false;
      that.show =false;
      that.show3 =false;
      that.show4 =true;
      that.show5 =false;
      }
       if(key==11){
      var that =this;
      that.show2 =false;
      that.show =false;
      that.show3 =false;
      that.show4 =false;
      that.show5 =true;
      }
    },
    close(){
      var that = this;
      that.show = false;
      that.show2 = false;
      that.show3 = false;
      that.show4 = false;
      that.show5 = false;
    },
      handleClick(tab, event) {
        console.log(tab, event);
      }
  },
  mounted: function() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.username = user;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //  获取路由
    this.$router.options.routes.forEach(element => {
      if (element.meta) {
        let permissions = sessionStorage.getItem("permissions");
        if(permissions.indexOf(element.meta.permissions) > -1){
          this.menuList.push(element);
        }
      }
    });
  }
};
</script>

<style>
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
.el-notification__title{
  font-family:Microsoft JhengHei;
}
.el-breadcrumb{
  background-color: white;
  padding: 10px;
}
.ce1{
      height: 230px ;
      width: 80px;
      float:left;
}
.ce2{
      height: 230px ;
      width: 80px;
       float:left;
}
.ce3{
      height: 230px ;
      width: 80px;
       float:left;
}
.ce4{
      height: 230px ;
      width: 80px;
       float:left;
}
 .leftImg{
    height:  35px ;
    width: 35px;
    display: block;
    margin-left: 15px;
    margin-top: 20px;
} 
.pp{
    color: #C28D57;
    display: block;
    margin-top: 5px; 
    text-decoration:none;
    font-size: 12px;
  }  
  .ce4{
      height: 230px ;
      width: 80px;
       float:left;
}
.b1{
       height: 60px ;
       width: 417px;
  }
.bb1{
       height: 230px ;
       width: 417px;
}
.bb2{
       height: 230px ;
       width: 417px;
}
.tw{
    height:  65px ;
    width: 100px;
    float:left;
}
 .leftImg1{
    height:  35px ;
    width: 35px;
    margin-left: 15px;
} 
.pp1{
    color: #C28D57;
    margin-top: 4px; 
    text-decoration:none;
    font-size: 12px;
  }
</style>