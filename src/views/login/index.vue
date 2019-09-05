<template>
  <div>
    <div class="div-login">
      <div class="login" style="display:back">
        <div class="div-login-title">
          <h2>登录「erp」</h2>
        </div>
        <div class="div-login-name">
          <input type="text" placeholder="用户名" v-model="user.username" />
        </div>
        <div class="div-login-password">
          <input type="password" placeholder="密码" v-model="user.password" />
        </div>
        <div class="div-login-sub">
          <button @click="login">登录</button>
        </div>
        <div class="div-login-chage">
          <a href="javascript:void(0)" @click="registerAndLogin">还没有账号去注册</a>
        </div>
      </div>
      <div class="register" style="display:none">
        <div class="div-login-title">
          <h2>注册「erp」</h2>
        </div>
        <div class="div-login-name">
          <input type="text" placeholder="用户名" v-model="user.username" />
        </div>
        <div class="div-login-password">
          <input type="password" placeholder="密码" v-model="user.password" />
        </div>
        <div class="div-login-sub">
          <button @click="register">注册</button>
        </div>
        <div class="div-login-chage">
          <a href="javascript:void(0)" @click="registerAndLogin">已有账号去登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/api/request"
import { Message } from 'element-ui'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      user: {}
    };
  },
  methods: {
    registerAndLogin() {
      $(".login").toggle(500);
      $(".register").toggle(500);
    },
    login() {
      request({
        url: "/sysUsers/login",
        method: "post",
        data: this.user
      }).then(result => {
        console.log(result.data);
        if(result.data.success){
          this.$router.push({ path: '/' }) //登录成功之后重定向到首页
          // 获取sessionId
          sessionStorage.setItem("token",result.data.data.sessionId)
          // 获取permissions对象
          sessionStorage.setItem("permissions",JSON.stringify(result.data.data.permissions))
          sessionStorage.setItem("userId",this.user.username)
          sessionStorage.setItem("session",JSON.stringify(result.data.data.session))
        }else{
          Message.error(result.data.data)
        }
      });
    },
    register() {
      // request({
      //   url: "/user/register",
      //   method: "post",
      //   data: this.user
      // }).then(result => {
      //   alert(result.data.message);
      // });
    }
  }
};
</script>

<style>
  .div-login,
.div-register {
  width: 360px;
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -220px;
  margin-top: -10px;
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0 0 12px #ddd;
  border-radius: 3px;
}
.div-login-title {
  width: 100%;
  height: 40px;
  position: relative;
}
.div-login-title h2 {
  font-weight: 400;
  font-size: 13px;
  color: #777;
}
.div-login-name,
.div-login-password {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  font-size: 14px;
  position: relative;
}
input {
  border-color: #ccc;
  color: #00b4ff;
  width: 100%;
  height: 100%;
  line-height: 20px;
  box-sizing: border-box;
  font-size: 13px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s;
  padding: 8px;
  box-shadow: 0 0 6px #ddd;
}
button {
  display: block;
  position: relative;
  width: 100%;
  height: 38px;
  line-height: 38px;
  border-radius: 30px;
  border: 0;
  background: #00b4ff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
}
.div-login-chage {
  text-align: right;
}
.div-login-chage a {
  font-size: 13px;
  margin-right: 3px;
  color: #777;
}
a:hover {
  color: #00b4ff;
}
</style>