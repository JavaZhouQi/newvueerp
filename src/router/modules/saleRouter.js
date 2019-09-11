import Layout from '@/layout'

const saleRouter = {
    path: '/sale',
    component: Layout,
    redirect: '/sale/menu1/menu1-1',
    name: 'sale',
    meta: {
      title: '销售管理', 
      icon: 'el-icon-ice-cream-round',
      permissions: 'sale'
    },
    children: [
      {
        path: '/sale/menu1',
        component: () => import('@/views/sale/menu1/index'),
        name: 'saleMenu1',
        meta: { title: '基本资料',permissions: 'saleMenu1' },
        redirect: '/sale/menu1/menu1-1',
        children: [
          {
            path: '/sale/menu1/menu1-1',
            component: () => import('@/views/sale/menu1/menu1-1'),
            name: 'saleMenu1-1',
            meta: { title: '销售订单类型设定',permissions: 'saleMenu1-1' }
          },
          {
            path: '/sale/menu1/menu1-2',
            component: () => import('@/views/sale/menu1/menu1-2'),
            name: 'saleMenu1-2',
            meta: { title: '销售出库类型设定' ,permissions: 'saleMenu1-2'}
          }
        ]
      },
      {
        path: '/sale/menu2',
        component: () => import('@/views/sale/menu2/index'),
        name: 'saleMenu2',
        meta: { title: '销售作业',permissions: 'saleMenu2' },
        redirect: '/sale/menu2/menu2-1',
        children: [
          {
            path: '/sale/menu2/menu2-1',
            component: () => import('@/views/sale/menu2/menu2-1/list'),
            name: 'saleMenu2-1',
            meta: { title: '销售报价单',permissions: 'saleMenu2-1'  }
          },
          {
            path: '/sale/menu2/menu2-2',
            component: () => import('@/views/sale/menu2/menu2-2/list'),
            name: 'saleMenu2-2',
            meta: { title: '销售订单',permissions: 'saleMenu2-2' }
          },
          {
            path: '/sale/menu2/menu2-3',
            component: () => import('@/views/sale/menu2/menu2-3'),
            name: 'saleMenu2-3',
            meta: { title: '销售出库单' ,permissions: 'saleMenu2-3' },
          },
          {
            path: '/sale/menu2/menu2-4',
            component: () => import('@/views/sale/menu2/menu2-4'),
            name: 'saleMenu2-4',
            meta: { title: '销售退货单' ,permissions: 'saleMenu2-4' },
            children:[
              {
                path:'/returngoods',
                name:'returngoods',
                component:() => import('@/views/sale/menu2/menu2-4/returngoods')
              }
            ]
          },
          {
            path: '/sale/menu2/menu2-5',
            component: () => import('@/views/sale/menu2/menu2-5'),
            name: 'saleMenu2-5',
            meta: { title: '销售折让确认单',permissions: 'saleMenu2-5'  }
          },
          {
            path: '/sale/menu2/menu2-6',
            component: () => import('@/views/sale/menu2/menu2-6'),
            name: 'saleMenu2-6',
            meta: { title: '销售发票' ,permissions: 'saleMenu2-6' }
          }
        ]
      },
      {
        path: '/sale/menu3',
        component: () => import('@/views/sale/menu3/index'),
        name: 'saleMenu3',
        meta: { title: '金税接口',permissions: 'saleMenu3' },
        redirect: '/sale/menu3/menu3-1',
        children: [
          {
            path: '/sale/menu3/menu3-1',
            component: () => import('@/views/sale/menu3/menu3-1'),
            name: 'saleMenu3-1',
            meta: { title: '销售发票到处',permissions: 'saleMenu3-1'  }
          }
        ]
      },
      {
        path: '/sale/menu4',
        component: () => import('@/views/sale/menu4/index'),
        name: 'saleMenu3',
        meta: { title: '报表',permissions: '这里是权限' },
        redirect: '/sale/menu4/menu4-1',
        children: [
          {
            path: '/sale/menu4/menu4-1',
            component: () => import('@/views/sale/menu4/menu4-1'),
            name: 'saleMenu4-1',
            meta: { title: '销售日报表' }
          }
          ,{
            path: '/sale/menu4/menu4-2',
            component: () => import('@/views/sale/menu4/menu4-2'),
            name: 'saleMenu4-2',
            meta: { title: '销售分析表' }
          }
        ]
      }
    ]
}

export default saleRouter