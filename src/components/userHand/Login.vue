<template>
  <div id="Login" class="Login">
    <div class="loginBox">
      <img src="@/assets/btn-close.png" @click="closeLogin">
      <div class="loginTitle">登录</div>
      <el-input v-model="userName" placeholder="用户名"></el-input>
      <el-input v-model="password" placeholder="密码"></el-input>
      <div class="forgot" @click="forgotPass">忘记密码</div>
      <el-button type="success" @click="loginFun">登录</el-button>
      <div class="loginFooter">
        <span>没有账号?</span>
        <span class="newCount" @click="creatNewCount">创建账号</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userName: '',
      password: '',
    };
  },
  methods: {
    // 取消登录
    closeLogin() {
      this.$emit('closeLogin');
    },
    // 登录操作
    loginFun() {
      if (!this.emial || !this.password) {
        alert('请输入用户名和密码');
      } else {
        // 交互操作
        //
        // this.$ajax.user.signin(this.userName, this.password).then((res) => {
        //   console.log(res);
        // });
      }
    },
    // 忘记密码
    forgotPass() {

    },
    // 创建账号
    creatNewCount() {

    },
  },
};
</script>

<style scoped>
.Login * {
  line-height: normal;
}
.Login{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, .3);
}
.loginBox {
  position: relative;
  width: 300px;
  height: 400px;
  padding: 30px;
  background: #fff;
}
.loginBox img {
  position: absolute;
  top: -15px;
  right: -15px;
  cursor: pointer;
}
.loginTitle {
  padding: 50px 30px;
  font-size: 20px;
  color: #000;
}
.loginBox .el-input {
  margin-bottom: 20px;
}
.Login .el-button {
  width: 100%;
  background:  rgb(50, 208, 147);
}
.loginFooter {
  position: absolute;
  bottom: 30px;
  margin-left: 80px;
  font-weight: 600;
  color: rgb(181, 181, 192);
}
.newCount {
  color: rgb(50, 208, 147);
  cursor: pointer;
}
.forgot {
  position: absolute;
  right: 30px;
  padding: 10px;
  margin-top: -60px;
  background: #fff;
  cursor: pointer;
}
</style>
