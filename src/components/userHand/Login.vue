<template>
  <div id="Login" class="Login">
    <div class="loginBox">
      <div class="loginTitle">登录</div>
      <el-input v-model="userName" placeholder="邮箱地址"></el-input>
      <el-input type="password" v-model="password" placeholder="密码"></el-input>
      <div class="forgot" @click="switchPage('repassword')">忘记密码</div>
      <el-button type="success" @click="loginFun" class="redbtn">登录</el-button>
      <div class="loginFooter">
        <span>没有账号?</span>
        <span class="newCount" @click="switchPage('regist')">创建账号</span>
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
    // 登录操作
    loginFun() {
      if (!this.emial || !this.password) {
        this.$alert('请输入用户名和密码', {
          confirmButtonText: '确定',
        });
      } else {
        this.$ajax.user.signin(this.userName, this.password).then((res) => {
          // console.log(res);
        });
      }
    },
    // 忘记密码
    switchPage(val) {
      this.$emit('switch', val);
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
}
.loginBox {
  position: relative;
  width: 300px;
  height: 400px;
  padding: 30px;
  background: #fff;
}
.loginTitle {
  padding: 50px 30px;
  font-size: 20px;
  text-align: center;
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
  color: rgb(254, 169, 166);
  font-weight: 600;
  cursor: pointer;
}
.forgot {
  position: absolute;
  right: 31px;
  padding: 8px 10px;
  margin-top: -59px;
  background: #fff;
  color: #000;
  cursor: pointer;
}
</style>
