import Layout from '@/layout'

const solidcapitalRouter = {
    path: '/solidcapital',
    component: Layout,
    redirect: '/solidcapital/menu1/menu1-1',
    name: 'solidcapital',
    meta: {
      title: '固资管理', 
      icon: 'el-icon-bank-card',
      permissions: 'solidcapital'
    },
    children: [
      {
        path: '/solidcapital/menu1',
        component: () => import('@/views/solidcapital/menu1/index'),
        name: 'solidcapitalMenu1',
        meta: { title: '基本资料',permissions: 'solidcapitalMenu1' },
        redirect: '/solidcapital/menu1/menu1-1',
        children: [
          {
            path: '/solidcapital/menu1/menu1-1',
            component: () => import('@/views/solidcapital/menu1/menu1-1'),
            name: 'solidcapitalMenu1-1',
            meta: { title: '使用状态设定',permissions: 'solidcapitalMenu1-1'  }
          },
          {
            path: '/solidcapital/menu1/menu1-2',
            component: () => import('@/views/solidcapital/menu1/menu1-2'),
            name: 'solidcapitalMenu1-2',
            meta: { title: '资产来源设定',permissions: 'solidcapitalMenu1-2' }
          },
          {
            path: '/solidcapital/menu1/menu1-3',
            component: () => import('@/views/solidcapital/menu1/menu1-3'),
            name: 'solidcapitalMenu1-3',
            meta: { title: '资产处置方式设定',permissions: 'solidcapitalMenu1-3'  }
          },
          {
            path: '/solidcapital/menu1/menu1-4',
            component: () => import('@/views/solidcapital/menu1/menu1-4'),
            name: 'solidcapitalMenu1-4',
            meta: { title: '资产类别设定',permissions: 'solidcapitalMenu1-4'  }
          },
          {
            path: '/solidcapital/menu1/menu1-5',
            component: () => import('@/views/solidcapital/menu1/menu1-5'),
            name: 'solidcapitalMenu1-5',
            meta: { title: '存放位置设定' ,permissions: 'solidcapitalMenu1-5' }
          }
        ]
    },
    {
      path: '/solidcapital/menu2',
      component: () => import('@/views/solidcapital/menu2/index'),
      name: 'solidcapitalMenu2',
      meta: { title: '业务处理',permissions: 'solidcapitalMenu2' },
      redirect: '/solidcapital/menu2/menu2-1',
      children: [
        {
          path: '/solidcapital/menu2/menu2-1',
          component: () => import('@/views/solidcapital/menu2/menu2-1'),
          name: 'solidcapitalMenu2-1',
          meta: { title: '固定资产新增单' ,permissions: 'solidcapitalMenu2-1' }
        },
        {
          path: '/solidcapital/menu2/menu2-2',
          component: () => import('@/views/solidcapital/menu2/menu2-2'),
          name: 'solidcapitalMenu2-2',
          meta: { title: '固定资产卡片',permissions: 'solidcapitalMenu2-2'  }
        },
        {
          path: '/solidcapital/menu2/menu2-3',
          component: () => import('@/views/solidcapital/menu2/menu2-3'),
          name: 'solidcapitalMenu2-3',
          meta: { title: '固定资产处置单' ,permissions: 'solidcapitalMenu2-3' }
        },
        {
          path: '/solidcapital/menu2/menu2-4',
          component: () => import('@/views/solidcapital/menu2/menu2-4'),
          name: 'solidcapitalMenu2-4',
          meta: { title: '固定资产调整单',permissions: 'solidcapitalMenu2-4'  }
        },
        {
          path: '/solidcapital/menu2/menu2-5',
          component: () => import('@/views/solidcapital/menu2/menu2-5'),
          name: 'solidcapitalMenu2-5',
          meta: { title: '固定资产工作量录入单' ,permissions: 'solidcapitalMenu2-5' }
        },
        {
          path: '/solidcapital/menu2/menu2-6',
          component: () => import('@/views/solidcapital/menu2/menu2-6'),
          name: 'solidcapitalMenu2-6',
          meta: { title: '固定资产批次减值单',permissions: 'solidcapitalMenu2-6'  }
        },
        {
          path: '/solidcapital/menu2/menu2-7',
          component: () => import('@/views/solidcapital/menu2/menu2-7'),
          name: 'solidcapitalMenu2-7',
          meta: { title: '固定资产折旧单',permissions: 'solidcapitalMenu2-7'  }
        }
      ]
  }
    ]
}

export default solidcapitalRouter