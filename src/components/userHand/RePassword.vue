<template>
  <div id="RePassword" class="RePassword">
    <div class="RePasswordBox">
      <div class="RePasswordTitle">忘记密码</div>
      <el-input v-model="userName" placeholder="用户名"></el-input>
      <el-input v-model="emial" placeholder="邮箱"></el-input>
      <el-input v-model="phone" placeholder="电话号码"></el-input>
      <el-input v-model="password" placeholder="新密码"></el-input>
      <el-button type="success" @click="RePasswordFun" class="redbtn">修改密码</el-button>
      <el-button type="success" @click="switchLogin" class="return">返回登录</el-button>
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
    // 修改密码
    RePasswordFun() {

    },
    // 创建账号
    switchLogin() {
      this.$emit('switch', 'login');
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
}
.RePasswordBox {
  position: relative;
  width: 300px;
  height: 500px;
  padding: 30px;
  background: #fff;
}
.RePasswordTitle {
  padding: 50px 30px;
  font-size: 20px;
  color: #000;
  text-align: center;
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
.return {
  margin-left: 0;
  margin-top: 15px;
}
</style>
