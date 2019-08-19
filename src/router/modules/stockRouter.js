import Layout from '@/layout'

const stockRouter = {
    path: '/stock',
    component: Layout,
    redirect: '/stock/menu1/menu1-1',
    name: 'stock',
    meta: {
      title: '库存管理', 
      icon: 'el-icon-discount',
      permissions: 'stock'
    },
    children: [
      {
        path: '/stock/menu1',
        component: () => import('@/views/stock/menu1/index'),
        name: 'stockMenu1',
        meta: { title: '基本资料',permissions: 'stockMenu1' },
        redirect: '/stock/menu1/menu1-1',
        children: [
          {
            path: '/stock/menu1/menu1-1',
            component: () => import('@/views/stock/menu1/menu1-1'),
            name: 'stockMenu1-1',
            meta: { title: '入库类型设定',permissions: 'stockMenu1-1' }
          },
          {
            path: '/stock/menu1/menu1-2',
            component: () => import('@/views/stock/menu1/menu1-2'),
            name: 'stockMenu1-2',
            meta: { title: '出库类型设定' ,permissions: 'stockMenu1-2'}
          }
        ]
      },
      {
        path: '/stock/menu2',
        component: () => import('@/views/stock/menu2/index'),
        name: 'stockMenu2',
        meta: { title: '其他出入库作业',permissions: 'stockMenu2' },
        redirect: '/stock/menu2/menu2-1',
        children: [
          {
            path: '/stock/menu2/menu2-1',
            component: () => import('@/views/stock/menu2/menu2-1'),
            name: 'stockMenu2-1',
            meta: { title: '其他入库单' ,permissions: 'stockMenu2-1'}
          },
          {
            path: '/stock/menu2/menu2-2',
            component: () => import('@/views/stock/menu2/menu2-2'),
            name: 'stockMenu2-2',
            meta: { title: '其他出库单',permissions: 'stockMenu2-2' }
          }
        ]
      },
      {
        path: '/stock/menu3',
        component: () => import('@/views/stock/menu3/index'),
        name: 'stockMenu3',
        meta: { title: '调拨盘点作业',permissions: 'stockMenu3' },
        redirect: '/stock/menu3/menu3-1',
        children: [
          {
            path: '/stock/menu3/menu3-1',
            component: () => import('@/views/stock/menu3/menu3-1'),
            name: 'stockMenu3-1',
            meta: { title: '调拨单',permissions: 'stockMenu3-1'  }
          },
          {
            path: '/stock/menu3/menu3-2',
            component: () => import('@/views/stock/menu3/menu3-2'),
            name: 'stockMenu3-2',
            meta: { title: '打印盘点单',permissions: 'stockMenu3-1'  }
          },
          {
            path: '/stock/menu3/menu3-3',
            component: () => import('@/views/stock/menu3/menu3-3'),
            name: 'stockMenu3-3',
            meta: { title: '盘点单' ,permissions: 'stockMenu3-3' }
          }
        ]
      },
      {
        path: '/stock/menu4',
        component: () => import('@/views/stock/menu4/index'),
        name: 'stockMenu4',
        meta: { title: '调价作业',permissions: 'stockMenu4' },
        redirect: '/stock/menu4/menu4-1',
        children: [
          {
            path: '/stock/menu4/menu4-1',
            component: () => import('@/views/stock/menu4/menu4-1'),
            name: 'stockMenu4-1',
            meta: { title: '调价单',permissions: 'stockMenu4-1'  }
          }
        ]
      }
    ]
}

export default stockRouter