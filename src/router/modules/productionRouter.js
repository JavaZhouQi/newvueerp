import Layout from '@/layout'

const productionRouter = {
  path: '/production',
  component: Layout,
  redirect: '/production/menu1/menu1-1',
  name: 'production',
  meta: {
    title: '生产管理',
    icon: 'el-icon-files',
    permissions: 'production'
  },
  children: [{
      path: '/production/menu1',
      component: () => import('@/views/production/menu1/index'),
      name: 'productionMenu1',
      meta: {
        title: '基本资料',
        permissions: 'productionMenu1'
      },
      redirect: '/production/menu1/menu1-1',
      children: [{
          path: '/production/menu1/menu1-1',
          component: () => import('@/views/production/menu1/menu1-1'),
          name: 'productionMenu1-1',
          meta: {
            title: 'BOM设定'
            ,permissions: 'productionMenu1-1'
          }
        },
        {
          path: '/production/menu1/menu1-2',
          component: () => import('@/views/production/menu1/menu1-2'),
          name: 'productionMenu1-2',
          meta: {
            title: '生产单位设定'
            ,permissions: 'productionMenu1-2'
          }
        }
      ]
    },
    {
      path: '/production/menu2',
      component: () => import('@/views/production/menu2/index'),
      name: 'productionMenu2',
      meta: {
        title: '生产排程作业',
        permissions: 'productionMenu2'
      },
      redirect: '/production/menu2/menu2-1',
      children: [{
          path: '/production/menu2/menu2-1',
          component: () => import('@/views/production/menu2/menu2-1'),
          name: 'productionMenu2-1',
          meta: {
            title: '计划生产单'
            ,permissions: 'productionMenu2-1'
          }
        },
        {
          path: '/production/menu2/menu2-2',
          component: () => import('@/views/production/menu2/menu2-2'),
          name: 'productionMenu2-2',
          meta: {
            title: 'MRP'
            ,permissions: 'productionMenu2-2'
          }
        },
        {
          path: '/production/menu2/menu2-3',
          component: () => import('@/views/production/menu2/menu2-3'),
          name: 'productionMenu2-3',
          meta: {
            title: '生产排程调整'
            ,permissions: 'productionMenu2-3'
          }
        }
      ]
    },
    {
      path: '/production/menu3',
      component: () => import('@/views/production/menu3/index'),
      name: 'productionMenu3',
      meta: {
        title: '厂内生产作业',
        permissions: 'productionMenu3'
      },
      redirect: '/production/menu3/menu3-1',
      children: [{
          path: '/production/menu3/menu3-1',
          component: () => import('@/views/production/menu3/menu3-1'),
          name: 'productionMenu3-1',
          meta: {
            title: '厂内生产工单'
           , permissions: 'productionMenu3-1'
          }
        },
        {
          path: '/production/menu3/menu3-2',
          component: () => import('@/views/production/menu3/menu3-2'),
          name: 'productionMenu3-2',
          meta: {
            title: '厂内生产领料单'
            , permissions: 'productionMenu3-2'
          }
        },
        {
          path: '/production/menu3/menu3-3',
          component: () => import('@/views/production/menu3/menu3-3'),
          name: 'productionMenu3-3',
          meta: {
            title: '厂内生产退料单'
            , permissions: 'productionMenu3-3'
          }
        },
        {
          path: '/production/menu3/menu3-4',
          component: () => import('@/views/production/menu3/menu3-4'),
          name: 'productionMenu3-4',
          meta: {
            title: '厂内生产入库单'
            , permissions: 'productionMenu3-4'
          }
        }
      ]
    },
    {
      path: '/production/menu4',
      component: () => import('@/views/production/menu4/index'),
      name: 'productionMenu4',
      meta: {
        title: '委外生产作业',
        permissions: 'productionMenu4'
      },
      redirect: '/production/menu4/menu4-1',
      children: [{
          path: '/production/menu4/menu4-1',
          component: () => import('@/views/production/menu4/menu4-1'),
          name: 'productionMenu4-1',
          meta: {
            title: '委外生产工单'
            ,   permissions: 'productionMenu4-1'
          }
        },
        {
          path: '/production/menu4/menu4-2',
          component: () => import('@/views/production/menu4/menu4-2'),
          name: 'productionMenu4-2',
          meta: {
            title: '委外生产领料单'
            ,permissions: 'productionMenu4-2'
          }
        },
        {
          path: '/production/menu4/menu4-3',
          component: () => import('@/views/production/menu4/menu4-3'),
          name: 'productionMenu4-3',
          meta: {
            title: '委外生产退料单'
            ,permissions: 'productionMenu4-3'
          }
        },
        {
          path: '/production/menu4/menu4-4',
          component: () => import('@/views/production/menu4/menu4-4'),
          name: 'productionMenu4-4',
          meta: {
            title: '委外生产入库单'
            ,permissions: 'productionMenu4-4'
          }
        },
        {
          path: '/production/menu4/menu4-5',
          component: () => import('@/views/production/menu4/menu4-5'),
          name: 'productionMenu4-5',
          meta: {
            title: '委外加工送货单'
            ,permissions: 'productionMenu4-5'
          }
        }
      ]
    },
    {
      path: '/production/menu5',
      component: () => import('@/views/production/menu5/index'),
      name: 'productionMenu5',
      meta: {
        title: '生产成本作业',
        permissions: 'productionMenu5'
      },
      redirect: '/production/menu5/menu5-1',
      children: [{
        path: '/production/menu5/menu5-1',
        component: () => import('@/views/production/menu5/menu5-1'),
        name: 'productionMenu5-1',
        meta: {
          title: '生产成本确认单'
          ,permissions: 'productionMenu5-1'
        }
      }]
    }
  ]
}

export default productionRouter
