import Layout from '@/layout'

const stystemRouter = {
    path: '/stystem',
    component: Layout,
    redirect: '/stystem/menu1/menu1-1',
    name: 'stystem',
    meta: {
      title: '系统管理', 
      icon: 'el-icon-discount',
      permissions: 'stystem'
    },
    children: [
      {
        path: '/stystem/menu1',
        component: () => import('@/views/stystem/menu1/index'),
        name: 'stystemMenu1',
        meta: { title: '权限管理',permissions: 'stystemMenu1' },
        redirect: '/stystem/menu1/menu1-1',
        children: [
          {
            path: '/stystem/menu1/menu1-1',
            component: () => import('@/views/stystem/menu1/menu1-1'),
            name: 'stystemMenu1-1',
            meta: { title: '用户设定',permissions: 'stystemMenu1-1' }
          },
          {
            path: '/stystem/menu1/menu1-2',
            component: () => import('@/views/stystem/menu1/menu1-2'),
            name: 'stystemMenu1-2',
            meta: { title: '角色设定',permissions: 'stystemMenu1-2' }
          },
          {
            path: '/stystem/menu1/menu1-3',
            component: () => import('@/views/stystem/menu1/menu1-3'),
            name: 'stystemMenu1-3',
            meta: { title: '权限设定',permissions: 'stystemMenu1-3' }
          }
        ]
      }
    ]
}

export default stystemRouter