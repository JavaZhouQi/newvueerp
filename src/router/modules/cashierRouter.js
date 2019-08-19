import Layout from '@/layout'

const cashierRouter = {
    path: '/cashier',
    component: Layout,
    redirect: '/cashier/menu1/menu1-1',
    name: 'cashier',
    meta: {
      title: '出纳管理', 
      icon: 'el-icon-news',
      permissions: 'cashier'
    },
    children: [
      {
        path: '/cashier/menu1',
        component: () => import('@/views/cashier/menu1/index'),
        name: 'cashierMenu1',
        meta: { title: '期初开账',permissions: 'cashierMenu1' },
        redirect: '/cashier/menu1/menu1-1',
        children: [
          {
            path: '/cashier/menu1/menu1-1',
            component: () => import('@/views/cashier/menu1/menu1-1'),
            name: 'cashierMenu1-1',
            meta: { title: '出纳期初余额录入',permissions: 'cashierMenu1-1'  }
          }
        ]
    },
    {
      path: '/cashier/menu2',
      component: () => import('@/views/cashier/menu2/index'),
      name: 'cashierMenu2',
      meta: { title: '业务管理',permissions: 'cashierMenu2' },
      redirect: '/cashier/menu2/menu2-1',
      children: [
        {
          path: '/cashier/menu2/menu2-1',
          component: () => import('@/views/cashier/menu2/menu2-1'),
          name: 'cashierMenu2-1',
          meta: { title: '现金收款单',permissions: 'cashierMenu2-1'  }
        },
        {
          path: '/cashier/menu2/menu2-2',
          component: () => import('@/views/cashier/menu2/menu2-2'),
          name: 'cashierMenu2-2',
          meta: { title: '现金付款单' ,permissions: 'cashierMenu2-2' }
        },
        {
          path: '/cashier/menu2/menu2-3',
          component: () => import('@/views/cashier/menu2/menu2-3'),
          name: 'cashierMenu2-3',
          meta: { title: '银行存款收款单',permissions: 'cashierMenu2-3'  }
        },
        {
          path: '/cashier/menu2/menu2-4',
          component: () => import('@/views/cashier/menu2/menu2-4'),
          name: 'cashierMenu2-4',
          meta: { title: '银行存款付款单',permissions: 'cashierMenu2-4'  }
        },
        {
          path: '/cashier/menu2/menu2-5',
          component: () => import('@/views/cashier/menu2/menu2-5'),
          name: 'cashierMenu2-5',
          meta: { title: '银行存款对账单' ,permissions: 'cashierMenu2-5' }
        },
        {
          path: '/cashier/menu2/menu2-6',
          component: () => import('@/views/cashier/menu2/menu2-6'),
          name: 'cashierMenu2-6',
          meta: { title: '银行存款对账',permissions: 'cashierMenu2-6'  }
        },
        {
          path: '/cashier/menu2/menu2-7',
          component: () => import('@/views/cashier/menu2/menu2-7'),
          name: 'cashierMenu2-7',
          meta: { title: '调汇单' ,permissions: 'cashierMenu2-7' }
        }
      ]
    },
    {
      path: '/cashier/menu3',
      component: () => import('@/views/cashier/menu3/index'),
      name: 'cashierMenu3',
      meta: { title: '支票管理',permissions: 'cashierMenu3' },
      redirect: '/cashier/menu3/menu3-1',
      children: [
        {
          path: '/cashier/menu3/menu3-1',
          component: () => import('@/views/cashier/menu3/menu3-1'),
          name: 'cashierMenu3-1',
          meta: { title: '支票管理',permissions: 'cashierMenu3-1'  }
        },
        {
          path: '/cashier/menu3/menu3-2',
          component: () => import('@/views/cashier/menu3/menu3-2'),
          name: 'cashierMenu3-2',
          meta: { title: '支票购买',permissions: 'cashierMenu3-2'  }
        },
        {
          path: '/cashier/menu3/menu3-3',
          component: () => import('@/views/cashier/menu3/menu3-3'),
          name: 'cashierMenu3-3',
          meta: { title: '支票领用',permissions: 'cashierMenu3-3'  }
        },
        {
          path: '/cashier/menu3/menu3-4',
          component: () => import('@/views/cashier/menu3/menu3-4'),
          name: 'cashierMenu3-4',
          meta: { title: '支票签发',permissions: 'cashierMenu3-4'  }
        },
        {
          path: '/cashier/menu3/menu3-5',
          component: () => import('@/views/cashier/menu3/menu3-5'),
          name: 'cashierMenu3-5',
          meta: { title: '支票核销' ,permissions: 'cashierMenu3-5' }
        }
      ]
    }
    ]
}

export default cashierRouter