<template>
  <div id="Regist" class="Regist">
    <div class="RegistBox">
      <img src="@/assets/btn-close.png" @click="closeRegist">
      <div class="RegistTitle">注册</div>
      <el-input v-model="userName" placeholder="用户名"></el-input>
      <el-input v-model="emial" placeholder="邮箱"></el-input>
      <el-input v-model="phone" placeholder="电话号码"></el-input>
      <el-input v-model="password" placeholder="密码"></el-input>
      <el-input v-model="repassword" placeholder="再次输入密码"></el-input>
      <el-button type="success" @click="RegistFun">注册</el-button>
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
    // 取消登录
    closeRegist() {
      this.$emit('closeRegist');
    },
    // 登录操作
    RegistFun() {
      if (this.repassword !== this.password) {
        alert('两次密码不一样');
      } else if (!this.userName || !this.password || !this.emial || !this.phone) {
        alert('请输入用户名和密码');
      } else {
        // 交互操作
        //
        // this.$ajax.user.register(this.userName, this.password, this.emial, this.phone).then((res) => {
        //   console.log(res);
        // });
      }
    },
    // 创建账号
    switchLogin() {
      this.$emit('switch', 'showLogin');
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
  background: rgba(0, 0, 0, .3);
}
.RegistBox {
  position: relative;
  width: 300px;
  height: 550px;
  padding: 30px;
  background: #fff;
}
.RegistBox img {
  position: absolute;
  top: -15px;
  right: -15px;
  cursor: pointer;
}
.RegistTitle {
  padding: 50px 30px;
  font-size: 20px;
  color: #000;
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
