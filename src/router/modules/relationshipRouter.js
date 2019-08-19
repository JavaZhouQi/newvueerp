import Layout from '@/layout'

const relationshipRouter = {
  path: '/relationship',
  component: Layout,
  redirect: '/relationship/menu1/menu1-1',
  name: 'relationship',
  meta: {
    title: '客户关系管理',
    icon: 'el-icon-copy-document',
    permissions: 'relationship'
  },
  children: [{
      path: '/relationship/menu1',
      component: () => import('@/views/relationship/menu1/index'),
      name: 'relationshipMenu1',
      meta: {
        title: '业务管理',
        permissions: 'relationshipMenu1'
      },
      redirect: '/relationship/menu1/menu1-1',
      children: [{
          path: '/relationship/menu1/menu1-1',
          component: () => import('@/views/relationship/menu1/menu1-1'),
          name: 'relationshipMenu1-1',
          meta: {
            title: '联系人类别设定'
            ,permissions: 'relationshipMenu1-1'
          }
        },
        {
          path: '/relationship/menu1/menu1-2',
          component: () => import('@/views/relationship/menu1/menu1-2'),
          name: 'relationshipMenu1-2',
          meta: {
            title: '联系人主文件'
            ,permissions: 'relationshipMenu1-2'
          }
        },
        {
          path: '/relationship/menu1/menu1-3',
          component: () => import('@/views/relationship/menu1/menu1-3'),
          name: 'relationshipMenu1-3',
          meta: {
            title: '拜访记录单'
            ,permissions: 'relationshipMenu1-3'
          }
        },
        {
          path: '/relationship/menu1/menu1-4',
          component: () => import('@/views/relationship/menu1/menu1-4'),
          name: 'relationshipMenu1-4',
          meta: {
            title: '竞争对手主文件'
            ,permissions: 'relationshipMenu1-4'
          }
        }
      ]
    },
    {
      path: '/relationship/menu2',
      component: () => import('@/views/relationship/menu2/index'),
      name: 'relationshipMenu2',
      meta: {
        title: '客户服务',
        permissions: 'relationshipMenu2'
      },
      redirect: '/relationship/menu2/menu2-1',
      children: [{
          path: '/relationship/menu2/menu2-1',
          component: () => import('@/views/relationship/menu2/menu2-1'),
          name: 'relationshipMenu2-1',
          meta: {
            title: '问题类别设定'
            ,  permissions: 'relationshipMenu2-1'
          }
        },
        {
          path: '/relationship/menu2/menu2-2',
          component: () => import('@/views/relationship/menu2/menu2-2'),
          name: 'relationshipMenu2-2',
          meta: {
            title: '处理方式设定'
            ,  permissions: 'relationshipMenu2-2'
          }
        },
        {
          path: '/relationship/menu2/menu2-3',
          component: () => import('@/views/relationship/menu2/menu2-3'),
          name: 'relationshipMenu2-3',
          meta: {
            title: '客服记录查询'
            ,  permissions: 'relationshipMenu2-3'
          }
        },
        {
          path: '/relationship/menu2/menu2-4',
          component: () => import('@/views/relationship/menu2/menu2-4'),
          name: 'relationshipMenu2-4',
          meta: {
            title: '客诉单'
            ,  permissions: 'relationshipMenu2-4'
          }
        },
        {
          path: '/relationship/menu2/menu2-5',
          component: () => import('@/views/relationship/menu2/menu2-5'),
          name: 'relationshipMenu2-5',
          meta: {
            title: '客诉处理单'
            ,  permissions: 'relationshipMenu2-5'
          }
        }
      ]
    },
    {
      path: '/relationship/menu3',
      component: () => import('@/views/relationship/menu3/index'),
      name: 'relationshipMenu3',
      meta: {
        title: '移动商务',
        permissions: 'relationshipMenu3'
      },
      redirect: '/relationship/menu3/menu3-1',
      children: [{
          path: '/relationship/menu3/menu3-1',
          component: () => import('@/views/relationship/menu3/menu3-1'),
          name: 'relationshipMenu3-1',
          meta: {
            title: '通信设置'
            ,permissions: 'relationshipMenu3-1'
          }
        },
        {
          path: '/relationship/menu3/menu3-2',
          component: () => import('@/views/relationship/menu3/menu3-2'),
          name: 'relationshipMenu3-2',
          meta: {
            title: '短语类别设定'
           , permissions: 'relationshipMenu3-2'
          }
        },
        {
          path: '/relationship/menu3/menu3-3',
          component: () => import('@/views/relationship/menu3/menu3-3'),
          name: 'relationshipMenu3-3',
          meta: {
            title: '常用短语设定'
          ,  permissions: 'relationshipMenu3-3'
          }
        },
        {
          path: '/relationship/menu3/menu3-4',
          component: () => import('@/views/relationship/menu3/menu3-4'),
          name: 'relationshipMenu3-4',
          meta: {
            title: '发送短信',
            permissions: 'relationshipMenu3-4'
          }
        },
        {
          path: '/relationship/menu3/menu3-5',
          component: () => import('@/views/relationship/menu3/menu3-5'),
          name: 'relationshipMenu3-5',
          meta: {
            title: '个人短信管理'
            ,  permissions: 'relationshipMenu3-5'
          }
        },
        {
          path: '/relationship/menu3/menu3-6',
          component: () => import('@/views/relationship/menu3/menu3-6'),
          name: 'relationshipMenu3-6',
          meta: {
            title: '系统短信管理'
            ,  permissions: 'relationshipMenu3-6'
          }
        }
      ]
    }
  ]
}

export default relationshipRouter
