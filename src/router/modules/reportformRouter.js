import Layout from '@/layout'

const reportformRouter = {
  path: '/reportform',
  component: Layout,
  redirect: '/reportform/menu1/menu1-1',
  name: 'reportform',
  meta: {
    title: '报表管理',
    icon: 'el-icon-document',
    permissions: 'reportform'
  },
  children: [{
    path: '/reportform/menu1',
    component: () => import('@/views/reportform/menu1/index'),
    name: 'reportformMenu1',
    meta: {
      title: '采购报表',
      permissions: 'reportformMenu1'
    },
    redirect: '/reportform/menu1/menu1-1',
    children: [
      {
        path: '/reportform/menu1/menu1-1',
        component: () => import('@/views/reportform/menu1/menu1-1'),
        name: 'reportformMenu1-1',
        meta: {
          title: '采购订单分析表'
          , permissions: 'reportformMenu1-1'
        }
      },
      {
        path: '/reportform/menu1/menu1-2',
        component: () => import('@/views/reportform/menu1/menu1-2'),
        name: 'reportformMenu1-2',
        meta: {
          title: '采购订单分析明细表'
          , permissions: 'reportformMenu1-2'
        }
      },
      {
        path: '/reportform/menu1/menu1-3',
        component: () => import('@/views/reportform/menu1/menu1-3'),
        name: 'reportformMenu1-3',
        meta: {
          title: '采购交易分析表'
          , permissions: 'reportformMenu1-3'
        }
      },
      {
        path: '/reportform/menu1/menu1-4',
        component: () => import('@/views/reportform/menu1/menu1-4'),
        name: 'reportformMenu1-4',
        meta: {
          title: '采购交易分析明细表'
          , permissions: 'reportformMenu1-4' 
        }
      },
      {
        path: '/reportform/menu1/menu1-5',
        component: () => import('@/views/reportform/menu1/menu1-5'),
        name: 'reportformMenu1-5',
        meta: {
          title: '供应商交易明细表'
          , permissions: 'reportformMenu1-5' 
        }
      },
      {
        path: '/reportform/menu1/menu1-6',
        component: () => import('@/views/reportform/menu1/menu1-6'),
        name: 'reportformMenu1-6',
        meta: {
          title: '采购开票状况分析表'
          , permissions: 'reportformMenu1-6' 
        }
      },
      {
        path: '/reportform/menu1/menu1-7',
        component: () => import('@/views/reportform/menu1/menu1-7'),
        name: 'reportformMenu1-7',
        meta: {
          title: '采购分摊明细表'
          , permissions: 'reportformMenu1-7' 
        }
      }
  ]
  },
  {
    path: '/reportform/menu2',
    component: () => import('@/views/reportform/menu2/index'),
    name: 'reportformMenu2',
    meta: {
      title: '销售报表',
      permissions: 'reportformMenu2'
    },
    redirect: '/reportform/menu2/menu2-1',
    children: [{
      path: '/reportform/menu2/menu2-1',
      component: () => import('@/views/reportform/menu2/menu2-1'),
      name: 'reportformMenu2-1',
      meta: {
        title: '销售订单分析表'
        , permissions: 'reportformMenu2-1'
      }
    },
    {
      path: '/reportform/menu2/menu2-2',
      component: () => import('@/views/reportform/menu2/menu2-2'),
      name: 'reportformMenu2-2',
      meta: {
        title: '销售订单分析明细表'
        , permissions: 'reportformMenu2-2'
      }
    },
    {
      path: '/reportform/menu2/menu2-3',
      component: () => import('@/views/reportform/menu2/menu2-3'),
      name: 'reportformMenu2-3',
      meta: {
        title: '销售交易分析表'
        , permissions: 'reportformMenu2-3'
      }
    },
    {
      path: '/reportform/menu2/menu2-4',
      component: () => import('@/views/reportform/menu2/menu2-4'),
      name: 'reportformMenu2-4',
      meta: {
        title: '销售交易分析明细表'
        , permissions: 'reportformMenu2-4'
      }
    },
    {
      path: '/reportform/menu2/menu2-5',
      component: () => import('@/views/reportform/menu2/menu2-5'),
      name: 'reportformMenu2-5',
      meta: {
        title: '客户交易明细表'
        , permissions: 'reportformMenu2-5'
      }
    },
    {
      path: '/reportform/menu2/menu2-6',
      component: () => import('@/views/reportform/menu2/menu2-6'),
      name: 'reportformMenu2-6',
      meta: {
        title: '采购开票状况分析表'
        , permissions: 'reportformMenu2-6'
      }
    }
    ]
  },
  {
    path: '/reportform/menu3',
    component: () => import('@/views/reportform/menu3/index'),
    name: 'reportformMenu3',
    meta: {
      title: '库存报表',
      permissions: 'reportformMenu3'
    },
    redirect: '/reportform/menu3/menu3-1',
    children: [{
      path: '/reportform/menu3/menu3-1',
      component: () => import('@/views/reportform/menu3/menu3-1'),
      name: 'reportformMenu3-1',
      meta: {
        title: '物料清单'
        ,  permissions: 'reportformMenu3-1'
      }
    },
    {
      path: '/reportform/menu3/menu3-2',
      component: () => import('@/views/reportform/menu3/menu3-2'),
      name: 'reportformMenu3-2',
      meta: {
        title: '物料存量预估表'
        ,  permissions: 'reportformMenu3-2'
      }
    },
    {
      path: '/reportform/menu3/menu3-3',
      component: () => import('@/views/reportform/menu3/menu3-3'),
      name: 'reportformMenu3-3',
      meta: {
        title: '物料存量预估明细表'
        ,  permissions: 'reportformMenu3-3'
      }
    },
    {
      path: '/reportform/menu3/menu3-4',
      component: () => import('@/views/reportform/menu3/menu3-4'),
      name: 'reportformMenu3-4',
      meta: {
        title: '库存查询'
        ,  permissions: 'reportformMenu3-4'
      }
    },
    {
      path: '/reportform/menu3/menu3-5',
      component: () => import('@/views/reportform/menu3/menu3-5'),
      name: 'reportformMenu3-5',
      meta: {
        title: '库存台账'
        ,  permissions: 'reportformMenu3-5'
      }
    },
    {
      path: '/reportform/menu3/menu3-6',
      component: () => import('@/views/reportform/menu3/menu3-6'),
      name: 'reportformMenu3-6',
      meta: {
        title: '库存台账明细表'
        ,  permissions: 'reportformMenu3-6'
      }
    },
    {
      path: '/reportform/menu3/menu3-7',
      component: () => import('@/views/reportform/menu3/menu3-7'),
      name: 'reportformMenu3-7',
      meta: {
        title: '批号库交易分析表'
        ,  permissions: 'reportformMenu3-7'
      }
    },
    {
      path: '/reportform/menu3/menu3-8',
      component: () => import('@/views/reportform/menu3/menu3-8'),
      name: 'reportformMenu3-8',
      meta: {
        title: '批号库交易分析明细表'
        ,  permissions: 'reportformMenu3-8'
      }
    },
    {
      path: '/reportform/menu3/menu3-9',
      component: () => import('@/views/reportform/menu3/menu3-9'),
      name: 'reportformMenu3-9',
      meta: {
        title: '库存呆滞分析表'
        ,  permissions: 'reportformMenu3-9'
      }
    }]
  },
  {
    path: '/reportform/menu4',
    component: () => import('@/views/reportform/menu4/index'),
    name: 'reportformMenu4',
    meta: {
      title: '生产报表',
      permissions: 'reportformMenu4'
    },
    redirect: '/reportform/menu4/menu4-1',
    children: [{
      path: '/reportform/menu4/menu4-1',
      component: () => import('@/views/reportform/menu4/menu4-1'),
      name: 'reportformMenu4-1',
      meta: {
        title: '领料明细表'
        , permissions: 'reportformMenu4-1'
      }
    },
    {
      path: '/reportform/menu4/menu4-2',
      component: () => import('@/views/reportform/menu4/menu4-2'),
      name: 'reportformMenu4-2',
      meta: {
        title: '退料明细表'
        , permissions: 'reportformMenu4-2'
      }
    },
    {
      path: '/reportform/menu4/menu4-3',
      component: () => import('@/views/reportform/menu4/menu4-3'),
      name: 'reportformMenu4-3',
      meta: {
        title: '生产登记薄'
        , permissions: 'reportformMenu4-3'
      }
    },
    {
      path: '/reportform/menu4/menu4-4',
      component: () => import('@/views/reportform/menu4/menu4-4'),
      name: 'reportformMenu4-4',
      meta: {
        title: '生产登记薄明细表'
        , permissions: 'reportformMenu4-4'
      }
    },
    {
      path: '/reportform/menu4/menu4-5',
      component: () => import('@/views/reportform/menu4/menu4-5'),
      name: 'reportformMenu4-5',
      meta: {
        title: '生产状况分析表'
        , permissions: 'reportformMenu4-5'
      }
    },
    {
      path: '/reportform/menu4/menu4-6',
      component: () => import('@/views/reportform/menu4/menu4-6'),
      name: 'reportformMenu4-6',
      meta: {
        title: '工单材料用量检核表'
        , permissions: 'reportformMenu4-6'
      }
    }]
  },
  {
    path: '/reportform/menu5',
    component: () => import('@/views/reportform/menu5/index'),
    name: 'reportformMenu5',
    meta: {
      title: '账款报表',
      permissions: 'reportformMenu5'
    },
    redirect: '/reportform/menu5/menu5-1',
    children: [{
      path: '/reportform/menu5/menu5-1',
      component: () => import('@/views/reportform/menu5/menu5-1'),
      name: 'reportformMenu5-1',
      meta: {
        title: '应收款报表'
        ,   permissions: 'reportformMenu5-1'
      }
    },
    {
      path: '/reportform/menu5/menu5-2',
      component: () => import('@/views/reportform/menu5/menu5-2'),
      name: 'reportformMenu5-2',
      meta: {
        title: '应收款明细表'
        ,   permissions: 'reportformMenu5-2'
      }
    },
    {
      path: '/reportform/menu5/menu5-3',
      component: () => import('@/views/reportform/menu5/menu5-3'),
      name: 'reportformMenu5-3',
      meta: {
        title: '应收款账龄分析表'
        ,   permissions: 'reportformMenu5-3'
      }
    },
    {
      path: '/reportform/menu5/menu5-4',
      component: () => import('@/views/reportform/menu5/menu5-4'),
      name: 'reportformMenu5-4',
      meta: {
        title: '应收款账龄明细表'
        ,   permissions: 'reportformMenu5-4'
      }
    },
    {
      path: '/reportform/menu5/menu5-5',
      component: () => import('@/views/reportform/menu5/menu5-5'),
      name: 'reportformMenu5-5',
      meta: {
        title: '应付款报表'
        ,   permissions: 'reportformMenu5-5'
      }
    },
    {
      path: '/reportform/menu5/menu5-6',
      component: () => import('@/views/reportform/menu5/menu5-6'),
      name: 'reportformMenu5-6',
      meta: {
        title: '应付款明细表'
        ,   permissions: 'reportformMenu5-6'
      }
    },
    {
      path: '/reportform/menu5/menu5-7',
      component: () => import('@/views/reportform/menu5/menu5-7'),
      name: 'reportformMenu5-7',
      meta: {
        title: '应付款账龄分析表'
        ,   permissions: 'reportformMenu5-7'
      }
    },
    {
      path: '/reportform/menu5/menu5-8',
      component: () => import('@/views/reportform/menu5/menu5-8'),
      name: 'reportformMenu5-8',
      meta: {
        title: '应付款账龄明细表'
        ,   permissions: 'reportformMenu5-8'
      }
    },
    {
      path: '/reportform/menu5/menu5-9',
      component: () => import('@/views/reportform/menu5/menu5-9'),
      name: 'reportformMenu5-9',
      meta: {
        title: '应付佣金明细表'
        ,   permissions: 'reportformMenu5-9'
      }
    },
    {
      path: '/reportform/menu5/menu5-10',
      component: () => import('@/views/reportform/menu5/menu5-10'),
      name: 'reportformMenu5-10',
      meta: {
        title: '应收账款对账表'
        ,   permissions: 'reportformMenu5-10'
      }
    },
    {
      path: '/reportform/menu5/menu5-11',
      component: () => import('@/views/reportform/menu5/menu5-11'),
      name: 'reportformMenu5-11',
      meta: {
        title: '应付账款对账表'
        ,   permissions: 'reportformMenu5-11'
      }
    }]
  },
  {
    path: '/reportform/menu6',
    component: () => import('@/views/reportform/menu6/index'),
    name: 'reportformMenu6',
    meta: {
      title: '财务报表',
      permissions: 'reportformMenu6'
    },
    redirect: '/reportform/menu6/menu6-1',
    children: [{
      path: '/reportform/menu6/menu6-1',
      component: () => import('@/views/reportform/menu6/menu6-1'),
      name: 'reportformMenu6-1',
      meta: {
        title: '总账'
        , permissions: 'reportformMenu6-1'
      }
    },
    {
      path: '/reportform/menu6/menu6-2',
      component: () => import('@/views/reportform/menu6/menu6-2'),
      name: 'reportformMenu6-2',
      meta: {
        title: '明细表'
        , permissions: 'reportformMenu6-2'
      }
    },
    {
      path: '/reportform/menu6/menu6-3',
      component: () => import('@/views/reportform/menu6/menu6-3'),
      name: 'reportformMenu6-3',
      meta: {
        title: '数量金额总账'
        , permissions: 'reportformMenu6-3'
      }
    },
    {
      path: '/reportform/menu6/menu6-4',
      component: () => import('@/views/reportform/menu6/menu6-4'),
      name: 'reportformMenu6-4',
      meta: {
        title: '数量金额明细表'
        , permissions: 'reportformMenu6-4'
      }
    },
    {
      path: '/reportform/menu6/menu6-5',
      component: () => import('@/views/reportform/menu6/menu6-5'),
      name: 'reportformMenu6-5',
      meta: {
        title: '多栏式明细账'
        , permissions: 'reportformMenu6-5'
      }
    },
    {
      path: '/reportform/menu6/menu6-6',
      component: () => import('@/views/reportform/menu6/menu6-6'),
      name: 'reportformMenu6-6',
      meta: {
        title: '序时账'
        , permissions: 'reportformMenu6-6'
      }
    },
    {
      path: '/reportform/menu6/menu6-7',
      component: () => import('@/views/reportform/menu6/menu6-7'),
      name: 'reportformMenu6-7',
      meta: {
        title: '日记账'
        , permissions: 'reportformMenu6-7'
      }
    },
    {
      path: '/reportform/menu6/menu6-8',
      component: () => import('@/views/reportform/menu6/menu6-8'),
      name: 'reportformMenu6-8',
      meta: {
        title: '核算项目总账'
        , permissions: 'reportformMenu6-8'
      }
    },
    {
      path: '/reportform/menu6/menu6-9',
      component: () => import('@/views/reportform/menu6/menu6-9'),
      name: 'reportformMenu6-9',
      meta: {
        title: '核算项目明细账'
        , permissions: 'reportformMenu6-9'
      }
    },
    {
      path: '/reportform/menu6/menu6-10',
      component: () => import('@/views/reportform/menu6/menu6-10'),
      name: 'reportformMenu6-10',
      meta: {
        title: '科目余额表'
        , permissions: 'reportformMenu6-10'
      }
    },
    {
      path: '/reportform/menu6/menu6-11',
      component: () => import('@/views/reportform/menu6/menu6-11'),
      name: 'reportformMenu6-11',
      meta: {
        title: '试算平衡表'
        , permissions: 'reportformMenu6-11'
      }
    },
    {
      path: '/reportform/menu6/menu6-12',
      component: () => import('@/views/reportform/menu6/menu6-12'),
      name: 'reportformMenu6-12',
      meta: {
        title: '核算项目余额表'
        , permissions: 'reportformMenu6-12'
      }
    },
    {
      path: '/reportform/menu6/menu6-13',
      component: () => import('@/views/reportform/menu6/menu6-13'),
      name: 'reportformMenu6-13',
      meta: {
        title: '科目汇总表'
        , permissions: 'reportformMenu6-13'
      }
    },
    {
      path: '/reportform/menu6/menu6-14',
      component: () => import('@/views/reportform/menu6/menu6-14'),
      name: 'reportformMenu6-14',
      meta: {
        title: '日报表'
        , permissions: 'reportformMenu6-14'
      }
    },
    {
      path: '/reportform/menu6/menu6-15',
      component: () => import('@/views/reportform/menu6/menu6-15'),
      name: 'reportformMenu6-15',
      meta: {
        title: '调汇历史信息表'
        , permissions: 'reportformMenu6-15'
      }
    },
    {
      path: '/reportform/menu6/menu6-16',
      component: () => import('@/views/reportform/menu6/menu6-16'),
      name: 'reportformMenu6-16',
      meta: {
        title: '利润表'
        , permissions: 'reportformMenu6-16'
      }
    },
    {
      path: '/reportform/menu6/menu6-17',
      component: () => import('@/views/reportform/menu6/menu6-17'),
      name: 'reportformMenu6-17',
      meta: {
        title: '利润分配表'
        , permissions: 'reportformMenu6-17'
      }
    },
    {
      path: '/reportform/menu6/menu6-18',
      component: () => import('@/views/reportform/menu6/menu6-18'),
      name: 'reportformMenu6-18',
      meta: {
        title: '两期利润比较表'
        , permissions: 'reportformMenu6-18'
      }
    },
    {
      path: '/reportform/menu6/menu6-19',
      component: () => import('@/views/reportform/menu6/menu6-19'),
      name: 'reportformMenu6-19',
      meta: {
        title: '实际/预算利润表'
        , permissions: 'reportformMenu6-19'
      }
    },
    {
      path: '/reportform/menu6/menu6-20',
      component: () => import('@/views/reportform/menu6/menu6-20'),
      name: 'reportformMenu6-20',
      meta: {
        title: '多部门利润表'
        , permissions: 'reportformMenu6-20'
      }
    },
    {
      path: '/reportform/menu6/menu6-21',
      component: () => import('@/views/reportform/menu6/menu6-21'),
      name: 'reportformMenu6-21',
      meta: {
        title: '多项目利润表'
        , permissions: 'reportformMenu6-21'
      }
    },
    {
      path: '/reportform/menu6/menu6-22',
      component: () => import('@/views/reportform/menu6/menu6-22'),
      name: 'reportformMenu6-22',
      meta: {
        title: '多月份利润表'
        , permissions: 'reportformMenu6-22'
      }
    },
    {
      path: '/reportform/menu6/menu6-23',
      component: () => import('@/views/reportform/menu6/menu6-23'),
      name: 'reportformMenu6-23',
      meta: {
        title: '资产负债表'
        , permissions: 'reportformMenu6-23'
      }
    },
    {
      path: '/reportform/menu6/menu6-24',
      component: () => import('@/views/reportform/menu6/menu6-24'),
      name: 'reportformMenu6-24',
      meta: {
        title: '两期资产负债表'
        , permissions: 'reportformMenu6-24'
      }
    },
    {
      path: '/reportform/menu6/menu6-25',
      component: () => import('@/views/reportform/menu6/menu6-25'),
      name: 'reportformMenu6-25',
      meta: {
        title: '股东权益增减变动表'
        , permissions: 'reportformMenu6-25'
      }
    },
    {
      path: '/reportform/menu6/menu6-26',
      component: () => import('@/views/reportform/menu6/menu6-26'),
      name: 'reportformMenu6-26',
      meta: {
        title: '应交税金明细表'
        , permissions: 'reportformMenu6-26'
      }
    },
    {
      path: '/reportform/menu6/menu6-27',
      component: () => import('@/views/reportform/menu6/menu6-27'),
      name: 'reportformMenu6-27',
      meta: {
        title: '应交税金/利润表'
        , permissions: 'reportformMenu6-27'
      }
    },
    {
      path: '/reportform/menu6/menu6-28',
      component: () => import('@/views/reportform/menu6/menu6-28'),
      name: 'reportformMenu6-28',
      meta: {
        title: '现金流失表'
        , permissions: 'reportformMenu6-28'
      }
    },
    {
      path: '/reportform/menu6/menu6-29',
      component: () => import('@/views/reportform/menu6/menu6-29'),
      name: 'reportformMenu6-29',
      meta: {
        title: '现金流量查询'
        , permissions: 'reportformMenu6-29'
      }
    },
    {
      path: '/reportform/menu6/menu6-30',
      component: () => import('@/views/reportform/menu6/menu6-30'),
      name: 'reportformMenu6-30',
      meta: {
        title: '两期现金流量表'
        , permissions: 'reportformMenu6-30'
      }
    },
    {
      path: '/reportform/menu6/menu6-31',
      component: () => import('@/views/reportform/menu6/menu6-31'),
      name: 'reportformMenu6-31',
      meta: {
        title: '财务比率分析表'
        , permissions: 'reportformMenu6-31'
      }
    },
    {
      path: '/reportform/menu6/menu6-32',
      component: () => import('@/views/reportform/menu6/menu6-32'),
      name: 'reportformMenu6-32',
      meta: {
        title: '两期比率比较表'
        , permissions: 'reportformMenu6-32'
      }
    }]
  },
  {
    path: '/reportform/menu7',
    component: () => import('@/views/reportform/menu7/index'),
    name: 'reportformMenu7',
    meta: {
      title: '出纳报表',
      permissions: 'reportformMenu7'
    },
    redirect: '/reportform/menu7/menu7-1',
    children: [{
      path: '/reportform/menu7/menu7-1',
      component: () => import('@/views/reportform/menu7/menu7-1'),
      name: 'reportformMenu7-1',
      meta: {
        title: '现金日记账'
        , permissions: 'reportformMenu7-1'
      }
    },
    {
      path: '/reportform/menu7/menu7-2',
      component: () => import('@/views/reportform/menu7/menu7-2'),
      name: 'reportformMenu7-2',
      meta: {
        title: '银行存款日记账'
        , permissions: 'reportformMenu7-2'
      }
    },
    {
      path: '/reportform/menu7/menu7-3',
      component: () => import('@/views/reportform/menu7/menu7-3'),
      name: 'reportformMenu7-3',
      meta: {
        title: '出纳账户日记账'
        , permissions: 'reportformMenu7-3'
      }
    },
    {
      path: '/reportform/menu7/menu7-4',
      component: () => import('@/views/reportform/menu7/menu7-4'),
      name: 'reportformMenu7-4',
      meta: {
        title: '资金余额表'
        , permissions: 'reportformMenu7-4'
      }
    },
    {
      path: '/reportform/menu7/menu7-5',
      component: () => import('@/views/reportform/menu7/menu7-5'),
      name: 'reportformMenu7-5',
      meta: {
        title: '银行存款余额调节表'
        , permissions: 'reportformMenu7-5'
      }
    }]
  },
  {
    path: '/reportform/menu8',
    component: () => import('@/views/reportform/menu8/index'),
    name: 'reportformMenu8',
    meta: {
      title: '基本资料',
      permissions: 'reportformMenu8'
    },
    redirect: '/reportform/menu8/menu8-1',
    children: [{
      path: '/reportform/menu8/menu8-1',
      component: () => import('@/views/reportform/menu8/menu8-1'),
      name: 'reportformMenu8-1',
      meta: {
        title: '固定资产清单'
        , permissions: 'reportformMenu8-1'
      }
    },
    {
      path: '/reportform/menu8/menu8-2',
      component: () => import('@/views/reportform/menu8/menu8-2'),
      name: 'reportformMenu8-2',
      meta: {
        title: '折旧明细表'
        , permissions: 'reportformMenu8-2'
      }
    },
    {
      path: '/reportform/menu8/menu8-3',
      component: () => import('@/views/reportform/menu8/menu8-3'),
      name: 'reportformMenu8-3',
      meta: {
        title: '附属设备明细表'
        , permissions: 'reportformMenu8-3'
      }
    },
    {
      path: '/reportform/menu8/menu8-4',
      component: () => import('@/views/reportform/menu8/menu8-4'),
      name: 'reportformMenu8-4',
      meta: {
        title: '减值准备明细表'
        , permissions: 'reportformMenu8-4'
      }
    },
    {
      path: '/reportform/menu8/menu8-5',
      component: () => import('@/views/reportform/menu8/menu8-5'),
      name: 'reportformMenu8-5',
      meta: {
        title: '变动记录表'
        , permissions: 'reportformMenu8-5'
      }
    }]
  },
  {
    path: '/reportform/menu9',
    component: () => import('@/views/reportform/menu9/index'),
    name: 'reportformMenu9',
    meta: {
      title: '基本资料',
      permissions: 'reportformMenu9'
    },
    redirect: '/reportform/menu9/menu9-1',
    children: [{
      path: '/reportform/menu9/menu9-1',
      component: () => import('@/views/reportform/menu9/menu9-1'),
      name: 'reportformMenu9-1',
      meta: {
        title: '商机明细表'
        , permissions: 'reportformMenu9-1'
      }
    },
    {
      path: '/reportform/menu9/menu9-2',
      component: () => import('@/views/reportform/menu9/menu9-2'),
      name: 'reportformMenu9-2',
      meta: {
        title: '商机呆滞分析表'
        , permissions: 'reportformMenu9-2'
      }
    },
    {
      path: '/reportform/menu9/menu9-3',
      component: () => import('@/views/reportform/menu9/menu9-3'),
      name: 'reportformMenu9-3',
      meta: {
        title: '产品需求状况表'
        , permissions: 'reportformMenu9-3'
      }
    },
    {
      path: '/reportform/menu9/menu9-4',
      component: () => import('@/views/reportform/menu9/menu9-4'),
      name: 'reportformMenu9-4',
      meta: {
        title: '市场价格分析表'
        , permissions: 'reportformMenu9-4'
      }
    },
    {
      path: '/reportform/menu9/menu9-5',
      component: () => import('@/views/reportform/menu9/menu9-5'),
      name: 'reportformMenu9-5',
      meta: {
        title: '客诉统计表'
        , permissions: 'reportformMenu9-5'
      }
    },
    {
      path: '/reportform/menu9/menu9-6',
      component: () => import('@/views/reportform/menu9/menu9-6'),
      name: 'reportformMenu9-6',
      meta: {
        title: '逾时处理分析表'
        , permissions: 'reportformMenu9-6'
      }
    }]
  }
  ]
}

export default reportformRouter
