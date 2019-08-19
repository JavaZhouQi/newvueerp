import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'


// 每次请求携带cookies信息
axios.defaults.withCredentials = true

// 创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:8080/', // api的base_url
    timeout: 5000 // 请求超时时间
})

//requset拦截器
service.interceptors.request.use(config => {
    if(config.url.indexOf("login")!=-1){
        return config
    }
    config.headers.token = sessionStorage.getItem("token");
    return config
})

//response拦截器
service.interceptors.response.use(config => {
    if(config.data.code != 10000){
        Message.error("出现错误")
    }
    return config
},function(error){
    if(error && error.response){
        if(error.response.status=="405"){
            Message.error("请求错误或权限不够，请联系管理员");
            return error;
        }
    }else{
        Message.error("网络超时，请重新登录");
        return error;
    }
})

export default service