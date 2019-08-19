import Layout from '@/layout'

const messageRouter = {
  path: '/message',
  component: Layout,
  redirect: '/message/menu1/menu1-1',
  name: 'message',
  meta: {
    title: '消息管理',
    icon: 'el-icon-chat-dot-square',
    permissions: 'message'
  },
  children: [{
      path: '/message/menu1',
      component: () => import('@/views/message/menu1/index'),
      name: 'messageMenu1',
      meta: {
        title: '发送消息',
        permissions: 'messageMenu1'
      },
      redirect: '/message/menu1/menu1-1',
      children: [{
        path: '/message/menu1/menu1-1',
        component: () => import('@/views/message/menu1/menu1-1'),
        name: 'messageMenu1-1',
        meta: {
          title: '发送消息'
          ,permissions: 'messageMenu1-1'
        }
      }]
    },
    {
      path: '/message/menu2',
      component: () => import('@/views/message/menu2/index'),
      name: 'messageMenu2',
      meta: {
        title: '发送公告',
        permissions: 'messageMenu2'
      },
      redirect: '/message/menu2/menu2-1',
      children: [{
        path: '/message/menu2/menu2-1',
        component: () => import('@/views/message/menu2/menu2-1'),
        name: 'messageMenu2-1',
        meta: {
          title: '发送公告',
          permissions: 'messageMenu2-1'
        }
      }]
    },
    {
      path: '/message/menu3',
      component: () => import('@/views/message/menu3/index'),
      name: 'messageMenu3',
      meta: {
        title: '讯息管理',
        permissions: 'messageMenu3'
      },
      redirect: '/message/menu3/menu3-1',
      children: [{
        path: '/message/menu3/menu3-1',
        component: () => import('@/views/message/menu3/menu3-1'),
        name: 'messageMenu3-1',
        meta: {
          title: '消息管理员',
          permissions: 'messageMenu3-1'
        }
      }]
    }
  ]
}

export default messageRouter
