import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout'
import commonMaterialsRouter from '@/router/modules/commonMaterialsRouter'
import purchaseRouter from '@/router/modules/purchaseRouter'
import saleRouter from '@/router/modules/saleRouter'
import stockRouter from '@/router/modules/stockRouter'
import productionRouter from '@/router/modules/productionRouter'
import billRouter from '@/router/modules/billRouter'
import financeRouter from '@/router/modules/financeRouter'
import cashierRouter from '@/router/modules/cashierRouter'
import solidcapitalRouter from '@/router/modules/solidcapitalRouter'
import messageRouter from '@/router/modules/messageRouter'
import relationshipRouter from '@/router/modules/relationshipRouter'
import reportformRouter from '@/router/modules/reportformRouter'
import stystemRouter from '@/router/modules/stystemRouter'

Vue.use(Router)

export const constantRoutes = [
  {
    path:'/login',
    name:'login',
    component:() => import('@/views/login/index')
  },
  {
    path:'/',
    name:'layout',
    component:layout
  },
  commonMaterialsRouter,
  purchaseRouter,
  saleRouter,
  stockRouter,
  productionRouter,
  billRouter,
  financeRouter,
  cashierRouter,
  solidcapitalRouter,
  messageRouter,
  relationshipRouter,
  reportformRouter,
  stystemRouter,
  {
    path: "/404",
    name: "notFound",
    component: () => import('@/views/error/404')
  }, 
  {
    path: "*", // 此处需特别注意置于最底部
    redirect: "/404"
  }
]

const createRouter = () => new Router({
   mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

