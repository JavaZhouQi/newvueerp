// 路由守卫
import router from './router'
import { Message } from 'element-ui'

/*router.beforeEach((to, from, next) => {
    //如果是登录路由直接跳转
    if (to.path == "/login") {
        next();
        return;
    }
    let permissions = sessionStorage.getItem("permissions")
    //没有登录直接跳转到登录路由
    if (!permissions) {
        Message.error("还没登录,请先登录")
        next("/login")
        return;
    }
    next();
})*/