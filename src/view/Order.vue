<template>
<div class="order">
	<div class="mainBody">
		<p>秒到商品</p>
		<table>
			<tr>
				<th>商品名称</th>
				<th>成交日期</th>
			</tr>
			<tr v-for="order in orders">
				<td>{{order.productName}}</td>
				<td>{{order.createTime}}</td>
			</tr>
		</table>
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
export default {
  name: 'Order',
  data() {
    return {
      orders: [],
    };
  },
  created: function(){
    this.$ajax.order.getOrder().then((res) => {
      let jsonData = JSON.parse(res.data);
      this.orders = jsonData.data;
    });
  },
  methods: {
    goback(){
      this.$router.push({ path: '/shops'});
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
.order{
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
	overflow: hidden;
}
.mainBody p{
	height: 200px;
	line-height: 200px;
	text-align: center;
	font-size: 60px;
}
.mainBody table{
	width: 100%;
	margin-top: 50px;
	text-align: center;
}
.mainBody th,td{
	width: 50%;
}
.mainBody th{
	line-height: 60px;
	font-size: 40px;
}
.mainBody td{
	line-height: 50px;
	font-size: 25px;
}
</style>
