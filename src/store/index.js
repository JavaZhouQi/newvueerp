import Vue from 'vue'
import Vuex from 'vuex'

//使用vue
Vue.use(Vuex);

//创建Vuex实例
const store=new Vuex.Store({
    state:{
    //销售报价单取回的客户对象
    saleCustomer:{},
    //销售报价单取回的物料集合
    saleComproduct:[],
    }
})

export default store    //导出store