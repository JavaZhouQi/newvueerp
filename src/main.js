// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/permissions'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/erpcss.scss'
import store from './store'

import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

import {hasPermission} from "@/api/hasPermission"

Vue.use(VXETable)
// import { from } from '_array-flatten@2.1.2@array-flatten';
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.hasPerm = hasPermission


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
