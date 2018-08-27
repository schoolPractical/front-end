<template>
<div class="SecondSkill">
	<div class="mainBody">
		<img class="logo" src="../assets/picture.png">
		<p class="info">{{status}}</p>
		<p class="countdown">
			<span>{{hour}}</span>:<span>{{minute}}</span>:<span>{{second}}</span>
		</p>
		<p class="commodity">{{productName}}</p>
		<div class="click" @click="secondSkill()"></div>
	</div>
	<div class="back" @click="goback()">
		<div style="width: 4px;height: 4px"></div>
		<div style="width: 8px;height: 8px"></div>
		<div style="width: 12px;height: 12px"></div>
		其他可秒
		<div style="width: 12px;height: 12px"></div>
		<div style="width: 8px;height: 8px"></div>
		<div style="width: 4px;height: 4px"></div>
	</div>
</div>
</template>

<script>
var timer;
export default {
  name: 'SecondSkill',
  data() {
    return {
      productId: null,
      productName: null,
      beginTime: null,
      endTime: null,
      hour: null,
      minute: null,
      second: null,
      status: null
    };
  },
  created: function(){
    this.productId = this.$route.query.id;
    this.productName = this.$route.query.name;
    this.beginTime = this.$route.query.beginTime;
    this.endTime = this.$route.query.endTime;
    let d1 = new Date();
    let d2 = new Date(this.beginTime);
    let d3 = new Date(this.endTime);
    if(d1 < d2) {
      this.status = "未开始";
      if(parseInt((d2 - d1) / 1000 / 60 /60) > 99){
        this.hour = "??";
        this.minute = "??";
        this.second = "??";
        return;
      }
      this.timeCount(this.beginTime);
    }
    else if(d1 < d3) {
      this.status = "剩余时间";
      this.timeCount(this.endTime);
    }
    else {
      this.status = "已结束";
      this.second = "00";
      this.minute = "00";
      this.hour = "00";
    }
  },
  methods: {
    secondSkill() {
      this.$ajax.product.seckill(this.productId).then((res) => {
        let jsonData = JSON.parse(res.data);
        alert(jsonData.meta.message);
      });
    },
    goback() {
      this.$router.push({ path: '/shops'});
    },
    timeCount(time) {
      let d1 = new Date();
      let d2 = new Date(time);
      this.hour = parseInt((d2 - d1) / 1000 / 60 /60);
      this.minute = parseInt((d2 - d1) / 1000 / 60) % 60;
      this.second = parseInt((d2 - d1) / 1000) % 60;
      if(this.hour < 10){
        this.hour = "0" + this.hour;
      }
      if(this.minute < 10){
        this.minute = "0" + this.minute;
      }
      if(this.second < 10){
        this.second = "0" + this.second;
      }
      timer = setTimeout(this.timeCount(time),1000);
    },
  },
};
</script>

<style scoped>
*{
	margin: 0px;
	border: 0px;
	padding: 0px;
	font-size: 0px;
}
.SecondSkill{
	width: 750px;
	height: 1205px;
	margin: 0px auto;
	padding-top: 1px;
	background-image: url("../assets/bargain_bg.png");
}
.back{
	width: 100%;
	height: 120px;
	text-align: center;
	line-height: 120px;
	font-size: 35px;
	color: white;
	font-family: "STXingkai";
}
.back div{
	margin: -8px 8px 0px 8px;
	border-radius: 50%;
	background: white;
	display: inline-block;
	vertical-align: middle;
}
.mainBody{
	width: 680px;
	height: 1050px;
	margin: 40px 35px 0px 35px;
	border-radius: 15px;
	background: white;
}
.logo{
	width: 680px;
	height: 247px;
	margin: 60px 0px;
}
.info{
	lline-height: 100px;
	font-size: 80px;
	font-weight: 900;
	color: red;
	text-align: center;
}
.countdown{
	line-height: 100px;
	font-size: 80px;
	font-weight: 900;
	color: red;
	text-align: center;
}
.countdown span{
	width: 65px;
	height: 65px;
	display: inline-block;
	border: 5px solid red;
	border-radius: 5px;
	vertical-align: middle;
	line-height: 65px;
	font-size: 40px;
	font-weight: 900;
	font-family: "微软雅黑";
	color: black;
}
.commodity{
	margin-top: 50px;
	line-height: 150px;
	text-align: center;
	font-size: 50px;
	font-family: "STXingkai";
	color: red;
}
.click{
	width: 221px;
	height: 160px;
	margin: 50px auto;
	background-image: url("../assets/按钮1.png");
}
.click:active{
	animation: change 0.1s;
	background-image: url("../assets/按钮4.png");
}
@keyframes change
{
0% {background-image: url("../assets/按钮1.png");}
25% {background-image: url("../assets/按钮2.png");}
50% {background-image: url("../assets/按钮3.png");}
100% {background-image: url("../assets/按钮4.png");}
}
</style>