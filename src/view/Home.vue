<template>
  <div id="Home" class="home">
    <div class="head">
      <img class="headLogo" src="../assets/logo.png" alt="logo">
      <img class="mine" src="../assets/mine.png" alt="个人中心">
    </div>
    <loop-img />
    <chose-ticket />
    <div class="footer">
      <div class="footerIcon">
        <div class="footerLogo">
          <img src="../assets/logo.png" alt="logo">
          <span>合纵机票</span>
        </div>
        <img src="../assets/qq.png" alt="qq">
        <img src="../assets/wb.png" alt="微博">
        <img src="../assets/wx.png" alt="微信">
        <img src="../assets/email.png" alt="邮箱" style="width: 37px;height:28px;">
      </div>
      <span class="aboutMe">关于我们</span>
      <div class="bottom">重庆夏季八整有限责任公司</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #757b9c;
}
.head, .footer, .footerIcon {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.head {
  justify-content: space-between;
  padding: 30px 10vw;
}
.headLogo {
  width: 40px;
  cursor: pointer;
}
.mine {
  width: 20px;
  cursor: pointer;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 22%;
  padding-bottom: 37px;
  font-size: 13px;
  background: #404157;
  box-sizing: border-box;
}
.footerIcon img{
  width: 40px;
  margin-left: 4vw;
  cursor: pointer;
}
.footerLogo {
  display: flex;
  align-items: center;
  font-size: 20px;
}
.footerLogo img {
  margin-right: 10px;
}
.aboutMe{
  cursor: pointer;
  letter-spacing: 1px;
}
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 13px;
  background: #2f2f40;
}
</style>
