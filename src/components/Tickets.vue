<template>
  <div id="Tickets" class="Tickets">
    <ul class="flights">
      <li class="flight">
        <div class="flightInfo">
          <img src="../assets/南方航空.jpg">
          <div>
            <p>南方航空 KN5991</p>
            <p>空客A320</p>
          </div>
          <div>
            <p>09:45</p>
            <p>江北机场T3</p>
          </div>
          <div>
            <p>31小时10分钟</p>
            <p>——————</p>
          </div>
          <div>
            <p>12:55</p>
            <p>首都机场T2</p>
          </div>
        </div>
        <div class="flightPrice">
          <p>￥583</p>
          <button>预定</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tickets',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
.Tickets{}
.flights{
  width: 750px;
  height: 850px;
  border-radius: 5px;
  float: right;
  overflow-x: hidden;
  overflow-y: auto;
}
.flight{
  width: 750px;
  height: 100px;
  margin: 25px 0px;
}
.flightInfo{
  width: 600px;
  height: 100px;
  background: white;
  border-right: 1px dashed #edf2f6;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
}
.flightInfo img{
  width: 60px;
  display: inline-block;
  vertical-align: middle;
}
.flightInfo div{
  width: 130px;
  height: 60px;
  padding: 20px 0px;
  display: inline-block;
  vertical-align: middle;
}
.flightInfo p{
  line-height: 30px;
  font-size: 15px;
}
.flightPrice{
  width: 120px;
  height: 60px;
  background: white;
  border-radius: 5px;
  padding: 20px 0px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
.flightPrice p{
  line-height: 30px;
  font-size: 20px;
}
.flightPrice button{
  width: 60px;
  height: 30px;
  background: #32d093;
  border-radius: 5px;
  line-height: 30px;
  font-size: 15px;
  color: white;
}
</style>
