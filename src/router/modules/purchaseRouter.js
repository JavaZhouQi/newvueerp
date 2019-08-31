import Layout from '@/layout'

const purchaseRouter = {
    path: '/purchase',
    component: Layout,
    redirect: '/purchase/menu1/menu1-1',
    name: 'purchase',
    meta: {
        title: '采购管理',
        icon: 'el-icon-s-claim',
        permissions: 'purchase'
    },
    children: [{
            path: '/purchase/menu1',
            component: () =>
                import ('@/views/purchase/menu1/index'),
            name: 'purchaseMenu1',
            meta: { title: '基本资料', permissions: 'purchaseMenu1' },
            redirect: '/purchase/menu1/menu1-1',
            children: [{
                    path: '/purchase/menu1/menu1-1',
                    component: () =>
                        import ('@/views/purchase/menu1/menu1-1'),
                    name: 'purchaseMenu1-1',
                    meta: { title: '采购请购类型设定', permissions: 'purchaseMenu1-1' }
                },
                {
                    path: '/purchase/menu1/menu1-2',
                    component: () =>
                        import ('@/views/purchase/menu1/menu1-2'),
                    name: 'purchaseMenu1-2',
                    meta: { title: '采购入库类型设定', permissions: 'purchaseMenu1-2' }
                },
                {
                    path: '/purchase/menu1/menu1-3',
                    component: () =>
                        import ('@/views/purchase/menu1/menu1-3'),
                    name: 'purchaseMenu1-3',
                    meta: { title: '采购订单类型设定', permissions: 'purchaseMenu1-3' }
                }
            ]
        },
        {
            path: '/purchase/menu2',
            component: () =>
                import ('@/views/purchase/menu2/index'),
            name: 'purchaseMenu2',
            meta: { title: '采购作业', permissions: 'purchaseMenu2' },
            redirect: '/purchase/menu2/menu2-1',
            children: [{
                    path: '/purchase/menu2/menu2-1',
                    component: () =>
                        import ('@/views/purchase/menu2/menu2-1'),
                    name: 'purchaseMenu2-1',
                    meta: { title: '采购请购单', permissions: 'purchaseMenu2-1' },
                    children: [{
                        path: '/operateQg',
                        name: 'operateQg',
                        component: () =>
                            import ('@/views/purchase/menu2/menu2-1/operate')
                    }]
                },
                {
                    path: '/purchase/menu2/menu2-2',
                    component: () =>
                        import ('@/views/purchase/menu2/menu2-2'),
                    name: 'purchaseMenu2-2',
                    meta: { title: '采购询价单', permissions: 'purchaseMenu2-2' },
                    children: [{
                            path: '/operateXj',
                            name: 'operateXj',
                            component: () =>
                                import ('@/views/purchase/menu2/menu2-2/operate')
                        },
                        {
                            path: '/historical',
                            name: 'historical',
                            component: () =>
                                import ('@/views/purchase/menu2/menu2-2/historical')

                        }
                    ]
                },
                {
                    path: '/purchase/menu2/menu2-3',
                    component: () =>
                        import ('@/views/purchase/menu2/menu2-3'),
                    name: 'purchaseMenu2-3',
                    meta: { title: '采购订单', permissions: 'purchaseMenu2-3' },
                    children: [{
                            path: '/operateDd',
                            name: 'operateDd',
                            component: () =>
                                import ('@/views/purchase/menu2/menu2-3/operate')
                        },
                        {
                            path: '/historical',
                            name: 'historical',
                            component: () =>
                                import ('@/views/purchase/menu2/menu2-2/historical')
                        }
                    ]
                },
                {
                    path: '/purchase/menu2/menu2-4',
                    component: () =>
                        import ('@/views/purchase/menu2/menu2-4'),
                    name: 'purchaseMenu2-4',
                    meta: { title: '采购入库单', permissions: 'purchaseMenu2-4' }
                },
                {
                    path: '/purchase/menu2/menu2-5',
                    component: () =>
                        import ('@/views/purchase/menu2/menu2-5'),
                    name: 'purchaseMenu2-5',
                    meta: { title: '采购退货单', permissions: 'purchaseMenu2-5' }
                },
                {
                    path: '/purchase/menu2/menu2-6',
                    component: () =>
                        import ('@/views/purchase/menu2/menu2-6'),
                    name: 'purchaseMenu2-6',
                    meta: { title: '采购折让确认单', permissions: 'purchaseMenu2-6' }
                },
                {
                    path: '/purchase/menu2/menu2-7',
                    component: () =>
                        import ('@/views/purchase/menu2/menu2-7'),
                    name: 'purchaseMenu2-7',
                    meta: { title: '采购发票', permissions: 'purchaseMenu2-7' }
                },
                {
                    path: '/purchase/menu2/menu2-8',
                    component: () =>
                        import ('@/views/purchase/menu2/menu2-8'),
                    name: 'purchaseMenu2-8',
                    meta: { title: '采购历史交易记录', permissions: 'purchaseMenu2-8' }
                }
            ]
        },
        {
            path: '/purchase/menu3',
            component: () =>
                import ('@/views/purchase/menu3/index'),
            name: 'purchaseMenu3',
            meta: { title: '分摊作业', permissions: 'purchaseMenu3' },
            redirect: '/purchase/menu3/menu3-1',
            children: [{
                path: '/purchase/menu3/menu3-1',
                component: () =>
                    import ('@/views/purchase/menu3/menu3-1'),
                name: 'purchaseMenu3-1',
                meta: { title: '采购分摊作业', permissions: 'purchaseMenu3-1' }
            }]
        }
    ]
}

export default purchaseRouter