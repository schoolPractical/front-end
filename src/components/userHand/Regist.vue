<template>
  <div id="Regist" class="Regist">
    <div class="RegistBox">
      <img src="../../assets/logo.png" class="logo">
      <div class="RegistTitle">注册</div>
      <el-input v-model="userName" placeholder="用户名"></el-input>
      <el-input v-model="emial" placeholder="邮箱"></el-input>
      <el-input v-model="phone" placeholder="电话号码"></el-input>
      <el-input v-model="password" placeholder="密码"></el-input>
      <el-input v-model="repassword" placeholder="再次输入密码"></el-input>
      <el-button type="success" @click="RegistFun" class="redbtn">注册</el-button>
      <div class="RegistFooter">
        <span>已经拥有账号?</span>
        <span class="newCount" @click="switchLogin">登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Regist',
  data() {
    return {
      userName: '',
      emial: '',
      phone: '',
      password: '',
      repassword: '',
    };
  },
  methods: {
    // 登录操作
    RegistFun() {
      if (this.repassword !== this.password) {
        this.$alert('两次密码不一样', {
          confirmButtonText: '确定',
        });
      } else if (!this.userName || !this.password || !this.emial || !this.phone) {
        this.$alert('请填写完整内容', {
          confirmButtonText: '确定',
        });
      } else {
        // 123
      }
    },
    // 创建账号
    switchLogin() {
      this.$emit('switch', 'login');
    },
  },
};
</script>

<style scoped>
.Regist * {
  line-height: normal;
}
.Regist{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
}
.RegistBox {
  position: relative;
  width: 300px;
  height: 550px;
  padding: 30px;
  background: #fff;
}
.RegistTitle {
  padding: 40px 30px;
  padding-top: 20px;
  font-size: 20px;
  color: #000;
  text-align: center;
}
.RegistBox .el-input {
  margin-bottom: 20px;
}
.Regist .el-button {
  width: 100%;
  background:  rgb(50, 208, 147);
}
.RegistFooter {
  position: absolute;
  bottom: 30px;
  margin-left: 80px;
  font-weight: 600;
  color: rgb(181, 181, 192);
}
.newCount {
  color: rgb(254, 169, 166);
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
