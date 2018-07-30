<template>
  <div id="PagesHeader" class="header">
    <p>首页</p>
    <p>关于我们</p>
    <img src="../assets/logo.png" class="logo">
    <p class="slogan">合纵机票</p>
    <div class="loginStatus">
      <img src="../assets/registered.png" class="headerImg">
      <p>注册</p>
      <img src="../assets/login.jpg" class="headerImg">
      <p @click="showLogin=true">登录</p>
    </div>
    <login v-if="showLogin" @closeLogin="showLogin=false"/>
  </div>
</template>

<script>
import Login from './userHand/Login';

export default {
  name: 'PagesHeader',
  components: {
    Login,
  },
  data() {
    return {
      showLogin: false,
    };
  },
  methods: {
  },
};
</script>

<style>
.header{
  width: 100%;
  min-width: 1000px;
  height: 100px;
  background: white;
  text-align: center;
  line-height: 100px;
  overflow: hidden;
}
.header p{
  margin: 0px 10px;
  font-size: 20px;
  display: inline-block;
  vertical-align: middle;
}
.header p:hover{
  color: #32d093;
}
.logo{
  margin-left: 20%;
  vertical-align: middle;
}
.slogan.slogan{
  font-size: 30px;
  margin-right: 20%;
  vertical-align: middle;
}
.loginStatus{
  display: inline;
}
.headerImg{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
