<template>
  <div id="RePassword" class="RePassword">
    <div class="RePasswordBox">
      <img src="@/assets/btn-close.png" @click="closeRePassword">
      <div class="RePasswordTitle">忘记密码</div>
      <el-input v-model="userName" placeholder="用户名"></el-input>
      <el-input v-model="emial" placeholder="邮箱"></el-input>
      <el-input v-model="phone" placeholder="电话号码"></el-input>
      <el-input v-model="password" placeholder="新密码"></el-input>
      <el-button type="success" @click="RePasswordFun">修改密码</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RePassword',
  data() {
    return {
      userName: '',
      emial: '',
      phone: '',
      password: '',
    };
  },
  methods: {
    // 取消登录
    closeRePassword() {
      this.$emit('closeRePassword');
    },
    // 登录操作
    RePasswordFun() {
      // 交互操作
      //
      // this.$ajax.user.repassword(this.userName, this.password, this.emial, this.phone).then((res) => {
      //   console.log(res);
      // });
    },
  },
};
</script>

<style scoped>
.RePassword * {
  line-height: normal;
}
.RePassword{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, .3);
}
.RePasswordBox {
  position: relative;
  width: 300px;
  height: 450px;
  padding: 30px;
  background: #fff;
}
.RePasswordBox img {
  position: absolute;
  top: -15px;
  right: -15px;
  cursor: pointer;
}
.RePasswordTitle {
  padding: 50px 30px;
  font-size: 20px;
  color: #000;
}
.RePasswordBox .el-input {
  margin-bottom: 20px;
}
.RePassword .el-button {
  width: 100%;
  background:  rgb(50, 208, 147);
}
.RePasswordFooter {
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
