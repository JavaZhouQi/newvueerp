// 路由守卫
import router from './router'
import { Message } from 'element-ui'

router.beforeEach((to, from, next) => {
    if(to.meta.permissions){
        console.log(to)
        let permissions = sessionStorage.getItem("permissions")
        //没有登录直接跳转到登录路由
        if (!permissions) {
            Message.error("还没登录,请先登录")
            next("/login")
            return;
        }
        if(permissions.indexOf(to.meta.permissions) > -1){
            next();
        }else{
            Message.error("抱歉权限不足");
            next("/");
        }
        
    }else{
        next();
    }

    
})