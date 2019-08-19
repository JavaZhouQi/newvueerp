import Layout from '@/layout'

const billRouter = {
  path: '/bill',
  component: Layout,
  redirect: '/bill/menu1/menu1-1',
  name: 'bill',
  meta: {
    title: '账款管理',
    icon: 'el-icon-notebook-1',
    permissions: 'bill'
  },
  children: [{
      path: '/bill/menu1',
      component: () => import('@/views/bill/menu1/index'),
      name: 'billMenu1',
      meta: {
        title: '其他应收付作业',
        permissions: 'billMenu1'
      },
      redirect: '/bill/menu1/menu1-1',
      children: [{
          path: '/bill/menu1/menu1-1',
          component: () => import('@/views/bill/menu1/menu1-1'),
          name: 'billMenu1-1',
          meta: {
            title: '其他应收单'
            ,permissions: 'billMenu1-1'
          }
        },
        {
          path: '/bill/menu1/menu1-2',
          component: () => import('@/views/bill/menu1/menu1-2'),
          name: 'billMenu1-2',
          meta: {
            title: '其他应付单'
            ,permissions: 'billMenu1-2'
          }
        }
      ]
    },
    {
      path: '/bill/menu2',
      component: () => import('@/views/bill/menu2/index'),
      name: 'billMenu2',
      meta: {
        title: '冲款作业',
        permissions: 'billMenu2'
      },
      redirect: '/bill/menu2/menu2-1',
      children: [{
          path: '/bill/menu2/menu2-1',
          component: () => import('@/views/bill/menu2/menu2-1'),
          name: 'billMenu2-1',
          meta: {
            title: '应收冲款单'
            ,  permissions: 'billMenu2-1'
          }
        },
        {
          path: '/bill/menu2/menu2-2',
          component: () => import('@/views/bill/menu2/menu2-2'),
          name: 'billMenu2-2',
          meta: {
            title: '应付冲款单'
            ,permissions: 'billMenu2-2'
          }
        }
      ]
    }
  ]
}

export default billRouter
