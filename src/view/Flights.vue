<template>
  <div id="Flights" class="Flights">
    <pages-header />
    <div class="mainbody">
      <div class="voyage">
        <img src="../assets/plane.png" class="planeIcon">
        <div class="passengerInfo">
          <p >{{from}} - {{to}}</p>
          <p class="gaoshiqing">{{timeData}} | {{passengers}}人</p>
        </div>
        <button class="changeFlight">修改</button>
      </div>
      <div class="filter">
        <p class="filterFont">筛选</p>
        <p>价格</p>
        <div class="price">
          <span>{{lowPrice}} - {{highPrice}}</span>
          <input type="range" class="priceRange price1" min="1" max="5000" value="1000">
          <input type="range" class="priceRange price2" min="1" max="5000" value="4000">
        </div>
        <p>舱型</p>
        <div class="cabinType">
          <input type="checkbox" value="0" v-model="cabinTypes"><span>头等舱</span><br>
          <input type="checkbox" value="1"><span>商务舱</span><br>
          <input type="checkbox" value="2"><span>经济舱</span>
        </div>
        <p>出发时间</p>
        <div class="departureTime">
          <button class="departureTimeChecked">6点之前</button>
          <button>6点-12点</button>
          <button>12点-18点</button>
          <button>18点之后</button>
        </div>
        <p>航空公司</p>
        <div class="airline">
          <input type="checkbox" value="南方航空"><span>南方航空</span><br>
          <input type="checkbox" value="海南航空"><span>海南航空</span><br>
          <input type="checkbox" value="四川航空"><span>四川航空</span><br>
          <input type="checkbox" value="厦门航空"><span>厦门航空</span><br>
          <input type="checkbox" value="吉祥航空"><span>吉祥航空</span><br>
          <input type="checkbox" value="联合航空"><span>联合航空</span>
        </div>
      </div>
      <tickets />
    </div>
    <pages-footer />
  </div>
</template>

<script>
import PagesHeader from '../components/PagesHeader';
import PagesFooter from '../components/PagesFooter';
import Tickets from '../components/Tickets';

export default {
  name: 'Flights',
  data() {
    return {
      from: '重庆',
      to: '北京',
      timeData: '7月18日',
      passengers: 2,
      lowPrice: 1000,
      highPrice: 4000,
      cabinTypes: [
        {
          name: '头等舱',
          value: 0,
        },
        {
          name: '商务舱',
          value: 1,
        },
        {
          name: '经济舱',
          value: 2,
        },
      ],
    };
  },
  components: {
    'pages-header': PagesHeader,
    'pages-footer': PagesFooter,
    tickets: Tickets,
  },
};
</script>

<style>
*{
  margin: 0px;
  border: 0px;
  padding: 0px;
  /* font-size: 0px; */
}
button:focus {
  outline: none;
}
input:focus {
  outline: none;
}
body{
  width: 100%;
  background: #edf2f6;
}
.mainbody{
  width: 1000px;
  margin: 0px auto;
  overflow: auto;
}
.voyage{
  width: 100%;
  height: 80px;
  margin: 50px 0px;
  border-radius: 5px;
  background: #404057;
}
.planeIcon{
  width: 40px;
  height: 40px;
  margin: 20px 0px 0px 30px;
  display: inline-block;
}
.passengerInfo{
  height: 50px;
  margin-left: 20px;
  display: inline-block;
}
.passengerInfo p{
  line-height: 25px;
  font-size: 20px;
  color: white;
}
.gaoshiqing.gaoshiqing{
  font-size: 15px;
  color: #9d9db1;
}
.changeFlight{
  width: 100px;
  height: 40px;
  background: white;
  border-radius: 5px;
  margin: 20px 40px;
  line-height: 40px;
  font-size: 20px;
  color: #404057;
  float: right;
}
.changeFlight:hover{
  background: #32d093;
  color: #ffffff;
}
.filter{
  width: 200px;
  height: 850px;
  background: white;
  border-radius: 5px;
  margin-bottom: 50px;
  float: left;
}
.filterFont.filterFont{
  height: 60px;
  background: #404057;
  border-radius: 5px 5px 0px 0px;
  line-height: 60px;
  font-size: 25px;
  text-indent: 0;
  color: white;
  text-align: center;
}
.filter p{
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-indent: 1em;
  color: #404057;
}
.filter div{
  border-bottom: 1px dashed #f1f5f8;
}
.price{
  text-align: center;
}
.price span{
  margin: 10px;
  line-height: 20px;
  font-size: 15px;
}
.priceRange{
  -webkit-appearance: none;
  width: 180px;
  margin-left: 10px;
}
.priceRange::-webkit-slider-runnable-track {
  height: 3px;
  background: #edf2f6;
}
.priceRange::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  background: white;
}
.price1::-webkit-slider-runnable-track{
  margin-top: 20px;
  border-radius: 3px 3px 0px 0px;
}
.price1::-webkit-slider-thumb{
  margin-top: -10px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #404057;
}
.price2::-webkit-slider-runnable-track{
  margin-bottom: 20px;
  border-radius: 0px 0px 3px 3px;
}
.price2::-webkit-slider-thumb{
  margin-top: 3px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid #404057;
}
.cabinType input{
  margin: 10px 0px 10px 20px;
}
.cabinType span{
  line-height: 20px;
  font-size: 15px;
}
.departureTime{
  text-align: center;
}
.departureTime button{
  width: 150px;
  height: 30px;
  background: #edf2f6;
  margin: 5px;
  border-radius: 5px;
  font-size: 15px;
  color: #404057;
  text-align: center;
}
.departureTime button:hover{
  background: #404057;
  color: #edf2f6;
}
.departureTimeChecked{
  background: #404057 !important;
  color: #edf2f6 !important;
}
.airline input{
  margin: 10px 0px 10px 20px;
}
.airline span{
  line-height: 20px;
  font-size: 15px;
}
</style>
