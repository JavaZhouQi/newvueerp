import Layout from '@/layout'

const financeRouter = {
  path: '/finance',
  component: Layout,
  redirect: '/finance/menu1/menu1-1',
  name: 'finance',
  meta: {
    title: '财务管理',
    icon: 'el-icon-tickets',
    permissions: 'finance'
  },
  children: [{
    path: '/finance/menu1',
    component: () => import('@/views/finance/menu1/index'),
    name: 'financeMenu1',
    meta: {
      title: '期初开账',
      permissions: 'financeMenu1'
    },
    redirect: '/finance/menu1/menu1-1',
    children: [{
      path: '/finance/menu1/menu1-1',
      component: () => import('@/views/finance/menu1/menu1-1'),
      name: 'financeMenu1-1',
      meta: {
        title: '期初余额录入',
        permissions: 'financeMenu1-1'
      }
    }]
  },
  {
    path: '/finance/menu2',
    component: () => import('@/views/finance/menu2/index'),
    name: 'financeMenu2',
    meta: {
      title: '凭证作业',
      permissions: 'financeMenu2'
    },
    redirect: '/finance/menu2/menu2-1',
    children: [{
      path: '/finance/menu2/menu2-1',
      component: () => import('@/views/finance/menu2/menu2-1'),
      name: 'financeMenu2-1',
      meta: {
        title: '记账凭证'
        , permissions: 'financeMenu2-1'
      }
    },
    {
      path: '/finance/menu2/menu2-2',
      component: () => import('@/views/finance/menu2/menu2-2'),
      name: 'financeMenu2-2',
      meta: {
        title: '凭证常用分录设定'
        , permissions: 'financeMenu2-2'
      }
    }, {
      path: '/finance/menu2/menu2-3',
      component: () => import('@/views/finance/menu2/menu2-3'),
      name: 'financeMenu2-3',
      meta: {
        title: '现金流量项目设定'
        , permissions: 'financeMenu2-3'
      }
    }, {
      path: '/finance/menu2/menu2-4',
      component: () => import('@/views/finance/menu2/menu2-4'),
      name: 'financeMenu2-4',
      meta: {
        title: '历史记账凭证'
        , permissions: 'financeMenu2-4'
      }
    }
    ]
  },
  {
    path: '/finance/menu3',
    component: () => import('@/views/finance/menu3/index'),
    name: 'financeMenu3',
    meta: {
      title: '财务公式',
      permissions: 'financeMenu3'
    },
    redirect: '/finance/menu3/menu3-1',
    children: [{
      path: '/finance/menu3/menu3-1',
      component: () => import('@/views/finance/menu3/menu3-1'),
      name: 'financeMenu3-1',
      meta: {
        title: '利润公式设定'
        ,permissions: 'financeMenu3-1'
      }
    },
    {
      path: '/finance/menu3/menu3-2',
      component: () => import('@/views/finance/menu3/menu3-2'),
      name: 'financeMenu3-2',
      meta: {
        title: '现金流量公式设定'
        ,permissions: 'financeMenu3-2'
      }
    }, {
      path: '/finance/menu3/menu3-3',
      component: () => import('@/views/finance/menu3/menu3-3'),
      name: 'financeMenu3-3',
      meta: {
        title: '利润分配公式设定'
        ,permissions: 'financeMenu3-3'
      }
    }, {
      path: '/finance/menu3/menu3-4',
      component: () => import('@/views/finance/menu3/menu3-4'),
      name: 'financeMenu3-4',
      meta: {
        title: '资产负债表公式设定'
        ,permissions: 'financeMenu3-4'
      }
    }, {
      path: '/finance/menu3/menu3-5',
      component: () => import('@/views/finance/menu3/menu3-5'),
      name: 'financeMenu3-5',
      meta: {
        title: '财务比率公式设定'
        ,permissions: 'financeMenu3-5'
      }
    }, {
      path: '/finance/menu3/menu3-6',
      component: () => import('@/views/finance/menu3/menu3-6'),
      name: 'financeMenu3-6',
      meta: {
        title: '应交税公式设定'
        ,permissions: 'financeMenu3-6'
      }
    }, {
      path: '/finance/menu3/menu3-7',
      component: () => import('@/views/finance/menu3/menu3-7'),
      name: 'financeMenu3-7',
      meta: {
        title: '股东权益增减变动公式设定'
        ,permissions: 'financeMenu3-7'
      }
    }
    ]
  },
  {
    path: '/finance/menu4',
    component: () => import('@/views/finance/menu4/index'),
    name: 'financeMenu4',
    meta: {
      title: '特殊作业',
      permissions: 'financeMenu4'
    },
    redirect: '/finance/menu4/menu4-1',
    children: [{
      path: '/finance/menu4/menu4-1',
      component: () => import('@/views/finance/menu4/menu4-1'),
      name: 'financeMenu4-1',
      meta: {
        title: '预算实时查询'
        , permissions: 'financeMenu4-1'
      }
    },
    {
      path: '/finance/menu4/menu4-2',
      component: () => import('@/views/finance/menu4/menu4-2'),
      name: 'financeMenu4-2',
      meta: {
        title: '多栏式明细账设定'
        ,permissions: 'financeMenu4-2'
      }
    }, {
      path: '/finance/menu4/menu4-3',
      component: () => import('@/views/finance/menu4/menu4-3'),
      name: 'financeMenu4-3',
      meta: {
        title: '财务数据导出'
        ,permissions: 'financeMenu4-3'
      }
    }, {
      path: '/finance/menu4/menu4-4',
      component: () => import('@/views/finance/menu4/menu4-4'),
      name: 'financeMenu4-4',
      meta: {
        title: '凭证分录科目对调'
        ,permissions: 'financeMenu4-4'
      }
    }
    ]
  },
  {
    path: '/finance/menu5',
    component: () => import('@/views/finance/menu5/index'),
    name: 'financeMenu5',
    meta: {
      title: '传输作业',
      permissions: 'financeMenu5'
    },
    redirect: '/finance/menu5/menu5-1',
    children: [{
      path: '/finance/menu5/menu5-1',
      component: () => import('@/views/finance/menu5/menu5-1'),
      name: 'financeMenu5-1',
      meta: {
        title: '采购传输作业'
        ,permissions: 'financeMenu5-1'
      }
    },
    {
      path: '/finance/menu5/menu5-2',
      component: () => import('@/views/finance/menu5/menu5-2'),
      name: 'financeMenu5-2',
      meta: {
        title: '销售传输作业'
        ,permissions: 'financeMenu5-2'
      }
    }, {
      path: '/finance/menu5/menu5-3',
      component: () => import('@/views/finance/menu5/menu5-3'),
      name: 'financeMenu5-3',
      meta: {
        title: '库存传输作业'
        ,permissions: 'financeMenu5-3'
      }
    }, {
      path: '/finance/menu5/menu5-4',
      component: () => import('@/views/finance/menu5/menu5-4'),
      name: 'financeMenu5-4',
      meta: {
        title: '账款传输作业'
        ,permissions: 'financeMenu5-4'
      }
    }, {
      path: '/finance/menu5/menu5-5',
      component: () => import('@/views/finance/menu5/menu5-5'),
      name: 'financeMenu5-5',
      meta: {
        title: '生产传输作业'
        ,permissions: 'financeMenu5-5'
      }
    }, {
      path: '/finance/menu5/menu5-6',
      component: () => import('@/views/finance/menu5/menu5-6'),
      name: 'financeMenu5-6',
      meta: {
        title: '固资传输作业'
        ,permissions: 'financeMenu5-6'
      }
    }
    ]
  },
  {
    path: '/finance/menu6',
    component: () => import('@/views/finance/menu6/index'),
    name: 'financeMenu6',
    meta: {
      title: '期末处理',
      permissions: 'financeMenu6'
    },
    redirect: '/finance/menu6/menu6-1',
    children: [{
      path: '/finance/menu6/menu6-1',
      component: () => import('@/views/finance/menu6/menu6-1'),
      name: 'financeMenu6-1',
      meta: {
        title: '自动转账设定'
        ,permissions: 'financeMenu6-1'
      }
    },
    {
      path: '/finance/menu6/menu6-2',
      component: () => import('@/views/finance/menu6/menu6-2'),
      name: 'financeMenu6-2',
      meta: {
        title: '自动转账'
        ,permissions: 'financeMenu6-2'
      }
    }, {
      path: '/finance/menu6/menu6-3',
      component: () => import('@/views/finance/menu6/menu6-3'),
      name: 'financeMenu6-3',
      meta: {
        title: '期末调汇'
        ,permissions: 'financeMenu6-3'
      }
    }, {
      path: '/finance/menu6/menu6-4',
      component: () => import('@/views/finance/menu6/menu6-4'),
      name: 'financeMenu6-4',
      meta: {
        title: '结转损益'
        ,permissions: 'financeMenu6-4'
      }
    }
    ]
  }
  ]
}

export default financeRouter
