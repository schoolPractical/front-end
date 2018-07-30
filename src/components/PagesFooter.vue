<template>
  <div id="PagesFooter" class="footer">
    <div>合纵机票</div>
    <div>
      <p>重庆市 渝北区 华山南路16号</p>
      <p>重庆互联网学院</p>
    </div>
    <div>
      <p>675880137@qq.com</p>
      <p>15023188960</p>
    </div>
    <div>
      <img src="../assets/qq.png">
      <img src="../assets/wx.png">
      <img src="../assets/wb.png">
      <img src="../assets/email.png">
    </div>
    <div class="last">重庆夏季八整有限责任公司</div>
  </div>
</template>

<script>
export default {
  name: 'PagesFooter',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
.footer{
  width: 100%;
  height: 100px;
  background: #404057;
  text-align: center;
  color: #cccccc;
}
.footer div{
  width: 25%;
  height: 40px;
  padding: 20px 0px;
  float: left;
  font-size: 20px;
  line-height: 40px;
  box-shadow: 1px 1px 1px #535370;
}
.footer p{
  line-height: 20px;
  font-size: 10px;
}
.footer img{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 2%;
}
.footer img:hover{
  background: #32d093;
}
.last.last{
  clear: both;
  width: 100%;
  height: 40px;
  padding: 0px;
  background: #2f2f40;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  padding-color:red;
}
</style>
