import Layout from '@/layout'

const commonMaterialsRouter = {
    path: '/commonMaterials',
    component: Layout,
    redirect: '/commonMaterials/menu1/menu1-1',
    name: 'commonMaterials',
    meta: {
      title: '共用物料', 
      icon: 'el-icon-s-grid',
      permissions: 'commonMaterials'
    },
    children: [
      {
        path: '/commonMaterials/menu1',
        component: () => import('@/views/commonMaterials/menu1/index'),
        name: 'commonMaterialsMenu1',
        meta: { title: '基本资料',permissions: 'commonMaterialsMenu1' },
        redirect: '/commonMaterials/menu1/menu1-1',
        children: [
          {
            path: '/commonMaterials/menu1/menu1-1',
            component: () => import('@/views/commonMaterials/menu1/menu1-1'),
            name: 'commonMaterialsMenu1-1',
            meta: { title: '部门设定' ,permissions: 'commonMaterialsMenu1-1'}
          },
          {
            path: '/commonMaterials/menu1/menu1-2',
            component: () => import('@/views/commonMaterials/menu1/menu1-2'),
            name: 'commonMaterialsMenu1-2',
            meta: { title: '项目设定',permissions: 'commonMaterialsMenu1-2' }
          },
          {
            path: '/commonMaterials/menu1/menu1-3',
            component: () => import('@/views/commonMaterials/menu1/menu1-3'),
            name: 'commonMaterialsMenu1-3',
            meta: { title: '币别设定' ,permissions: 'commonMaterialsMenu1-3'}
          },
          {
            path: '/commonMaterials/menu1/menu1-4',
            component: () => import('@/views/commonMaterials/menu1/menu1-4'),
            name: 'commonMaterialsMenu1-4',
            meta: { title: '地区设定',permissions: 'commonMaterialsMenu1-4' }
          },
          {
            path: '/commonMaterials/menu1/menu1-5',
            component: () => import('@/views/commonMaterials/menu1/menu1-5'),
            name: 'commonMaterialsMenu1-5',
            meta: { title: '学历设定',permissions: 'commonMaterialsMenu1-5' }
          },
          {
            path: '/commonMaterials/menu1/menu1-6',
            component: () => import('@/views/commonMaterials/menu1/menu1-6'),
            name: 'commonMaterialsMenu1-6',
            meta: { title: '银行类别设定',permissions: 'commonMaterialsMenu1-6' }
          },
          {
            path: '/commonMaterials/menu1/menu1-7',
            component: () => import('@/views/commonMaterials/menu1/menu1-7'),
            name: 'commonMaterialsMenu1-7',
            meta: { title: '银行设定',permissions: 'commonMaterialsMenu1-7' }
          },
          {
            path: '/commonMaterials/menu1/menu1-8',
            component: () => import('@/views/commonMaterials/menu1/menu1-8'),
            name: 'commonMaterialsMenu1-8',
            meta: { title: '税目设定',permissions: 'commonMaterialsMenu1-8' }
          },
          {
            path: '/commonMaterials/menu1/menu1-9',
            component: () => import('@/views/commonMaterials/menu1/menu1-9'),
            name: 'commonMaterialsMenu1-9',
            meta: { title: '发票类型设定',permissions: 'commonMaterialsMenu1-9' }
          },
          {
            path: '/commonMaterials/menu1/menu1-10',
            component: () => import('@/views/commonMaterials/menu1/menu1-10'),
            name: 'commonMaterialsMenu1-10',
            meta: { title: '现金账户设定' ,permissions: 'commonMaterialsMenu1-10'}
          },
          {
            path: '/commonMaterials/menu1/menu1-11',
            component: () => import('@/views/commonMaterials/menu1/menu1-11'),
            name: 'commonMaterialsMenu1-11',
            meta: { title: '银行存款账户设定',permissions: 'commonMaterialsMenu1-11' }
          },
          {
            path: '/commonMaterials/menu1/menu1-12',
            component: () => import('@/views/commonMaterials/menu1/menu1-12'),
            name: 'commonMaterialsMenu1-12',
            meta: { title: '结算方式设定',permissions: 'commonMaterialsMenu1-12' }
          },
          {
            path: '/commonMaterials/menu1/menu1-13',
            component: () => import('@/views/commonMaterials/menu1/menu1-13'),
            name: 'commonMaterialsMenu1-13',
            meta: { title: '人员主文件设定',permissions: 'commonMaterialsMenu1-13' }
          },
          {
            path: '/commonMaterials/menu1/menu1-14',
            component: () => import('@/views/commonMaterials/menu1/menu1-14'),
            name: 'commonMaterialsMenu1-14',
            meta: { title: '收入费用类别设定',permissions: 'commonMaterialsMenu1-14'}
          },
          {
            path: '/commonMaterials/menu1/menu1-15',
            component: () => import('@/views/commonMaterials/menu1/menu1-15'),
            name: 'commonMaterialsMenu1-15',
            meta: { title: '节假日设定',permissions: 'commonMaterialsMenu1-15' }
          },
          {
            path: '/commonMaterials/menu1/menu1-16',
            component: () => import('@/views/commonMaterials/menu1/menu1-16'),
            name: 'commonMaterialsMenu1-16',
            meta: { title: '行事历设定',permissions: 'commonMaterialsMenu1-16' }
          }
        ]
      },
      {
        path: '/commonMaterials/menu2',
        component: () => import('@/views/commonMaterials/menu2/index'),
        name: 'commonMaterialsMenu2',
        meta: { title: '物料资料' ,permissions: 'commonMaterialsMenu2'},
        redirect: '/commonMaterials/menu2/menu2-1',
        children: [
          {
            path: '/commonMaterials/menu2/menu2-1',
            component: () => import('@/views/commonMaterials/menu2/menu2-1'),
            name: 'commonMaterialsMenu2-1',
            meta: { title: '仓库设定' ,permissions: 'commonMaterialsMenu2-1' }
          },
          {
            path: '/commonMaterials/menu2/menu2-2',
            component: () => import('@/views/commonMaterials/menu2/menu2-2'),
            name: 'commonMaterialsMenu2-2',
            meta: { title: '物料类别设定',permissions: 'commonMaterialsMenu2-2'  }
          },
          {
            path: '/commonMaterials/menu2/menu2-3',
            component: () => import('@/views/commonMaterials/menu2/menu2-3'),
            name: 'commonMaterialsMenu2-3',
            meta: { title: '计量单位设定',permissions: 'commonMaterialsMenu2-3'  }
          },
          {
            path: '/commonMaterials/menu2/menu2-4',
            component: () => import('@/views/commonMaterials/menu2/menu2-4'),
            name: 'commonMaterialsMenu2-4',
            meta: { title: '物料主文件设定',permissions: 'commonMaterialsMenu2-4'  }
          },
          {
            path: '/commonMaterials/menu2/menu2-5',
            component: () => import('@/views/commonMaterials/menu2/menu2-5'),
            name: 'commonMaterialsMenu2-5',
            meta: { title: '价格批次设定' ,permissions: 'commonMaterialsMenu2-5' }
          },
          {
            path: '/commonMaterials/menu2/menu2-6',
            component: () => import('@/views/commonMaterials/menu2/menu2-6'),
            name: 'commonMaterialsMenu2-6',
            meta: { title: '物料组合一览表' ,permissions: 'commonMaterialsMenu2-6' }
          },
          {
            path: '/commonMaterials/menu2/menu2-7',
            component: () => import('@/views/commonMaterials/menu2/menu2-7'),
            name: 'commonMaterialsMenu2-7',
            meta: { title: '原厂编号查询' ,permissions: 'commonMaterialsMenu2-7' }
          },
          {
            path: '/commonMaterials/menu2/menu2-8',
            component: () => import('@/views/commonMaterials/menu2/menu2-8'),
            name: 'commonMaterialsMenu2-8',
            meta: { title: '子件一览表' ,permissions: 'commonMaterialsMenu2-8' }
          }
        ]
      },
      {
        path: '/commonMaterials/menu3',
        component: () => import('@/views/commonMaterials/menu3/index'),
        name: 'commonMaterialsMenu3',
        meta: { title: '往来资料',permissions: 'commonMaterialsMenu3'  },
        redirect: '/commonMaterials/menu3/menu3-1',
        children: [
          {
            path: '/commonMaterials/menu3/menu3-1',
            component: () => import('@/views/commonMaterials/menu3/menu3-1'),
            name: 'commonMaterialsMenu3-1',
            meta: { title: '客户类别设定',permissions: 'commonMaterialsMenu3-1'   }
          },
          {
            path: '/commonMaterials/menu3/menu3-2',
            component: () => import('@/views/commonMaterials/menu3/menu3-2'),
            name: 'commonMaterialsMenu3-2',
            meta: { title: '客户等级设定' ,permissions: 'commonMaterialsMenu3-2'  }
          },
          {
            path: '/commonMaterials/menu3/menu3-3',
            component: () => import('@/views/commonMaterials/menu3/menu3-3'),
            name: 'commonMaterialsMenu3-3',
            meta: { title: '洽谈阶段设定' ,permissions: 'commonMaterialsMenu3-3'  }
          },
          {
            path: '/commonMaterials/menu3/menu3-4',
            component: () => import('@/views/commonMaterials/menu3/menu3-4'),
            name: 'commonMaterialsMenu3-4',
            meta: { title: '潜在客户主文件设定' ,permissions: 'commonMaterialsMenu3-4'  }
          },
          {
            path: '/commonMaterials/menu3/menu3-5',
            component: () => import('@/views/commonMaterials/menu3/menu3-5'),
            name: 'commonMaterialsMenu3-5',
            meta: { title: '客户主文件设定',permissions: 'commonMaterialsMenu3-5'   }
          },
          {
            path: '/commonMaterials/menu3/menu3-6',
            component: () => import('@/views/commonMaterials/menu3/menu3-6'),
            name: 'commonMaterialsMenu3-6',
            meta: { title: '潜在客户转正式客户',permissions: 'commonMaterialsMenu3-6'   }
          },
          {
            path: '/commonMaterials/menu3/menu3-7',
            component: () => import('@/views/commonMaterials/menu3/menu3-7'),
            name: 'commonMaterialsMenu3-7',
            meta: { title: '供应商类别设定' ,permissions: 'commonMaterialsMenu3-7'  }
          },
          {
            path: '/commonMaterials/menu3/menu3-8',
            component: () => import('@/views/commonMaterials/menu3/menu3-8'),
            name: 'commonMaterialsMenu3-8',
            meta: { title: '供应商主文件设定' ,permissions: 'commonMaterialsMenu3-8'  }
          }
        ]
      },
      {
        path: '/commonMaterials/menu4',
        component: () => import('@/views/commonMaterials/menu4/index'),
        name: 'commonMaterialsMenu4',
        meta: { title: '科目资料',permissions: 'commonMaterialsMenu4'   },
        redirect: '/commonMaterials/menu4/menu4-1',
        children: [
          {
            path: '/commonMaterials/menu4/menu4-1',
            component: () => import('@/views/commonMaterials/menu4/menu4-1'),
            name: 'commonMaterialsMenu4-1',
            meta: { title: '科目总类设定',permissions: 'commonMaterialsMenu4-1'   }
          },
          {
            path: '/commonMaterials/menu4/menu4-2',
            component: () => import('@/views/commonMaterials/menu4/menu4-2'),
            name: 'commonMaterialsMenu4-2',
            meta: { title: '科目类别设定',permissions: 'commonMaterialsMenu4-2' }
          },
          {
            path: '/commonMaterials/menu4/menu4-3',
            component: () => import('@/views/commonMaterials/menu4/menu4-3'),
            name: 'commonMaterialsMenu4-3',
            meta: { title: '会计科目设定' ,permissions: 'commonMaterialsMenu4-3'}
          }
        ]
      }
    ]
  }


export default commonMaterialsRouter
