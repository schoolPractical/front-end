<template>
  <div id="ChoseTicket" class="choseTicket">
    <el-input v-model="from" placeholder="" class="choseInput"></el-input>
    <img src="../assets/switch.png" alt="交换" @click="switchCity">
    <el-input v-model="to" placeholder="" class="choseInput"></el-input>
    <el-date-picker
      v-model="timeData"
      type="date"
      placeholder="出发时间"
      class="choseDate">
    </el-date-picker>
    <el-select v-model="humanNumber" placeholder="请选择" class="selectHuman">
      <el-option
        v-for="item in humans"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="seatType" placeholder="请选择" class="selectType">
      <el-option
        v-for="item in seatTypes"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button type="success" class="searchBtn" @click="searchTicket">搜索航班</el-button>
  </div>
</template>

<script>
export default {
  name: 'ChoseTicket',
  data() {
    return {
      from: '重庆',
      to: '北京',
      timeData: '',
      humans: [
        {
          value: 1,
          label: '1 人',
        }, {
          value: 2,
          label: '2 人',
        }, {
          value: 3,
          label: '3 人',
        }, {
          value: 4,
          label: '4 人',
        }],
      humanNumber: 1,
      seatTypes: [
        {
          value: '经济舱',
          label: '经济舱',
        }, {
          value: '头等舱',
          label: '头等舱',
        }, {
          value: '商务舱',
          label: '商务舱',
        }],
      seatType: '经济舱',
    };
  },
  methods: {
    switchCity() {
      let a = this.from;
      this.from = this.to;
      this.to = a;
      a = null;
    },
    searchTicket() {
      const subData = [this.from, this.to, this.timeData, this.humanNumber, this.seatType];
      subData.forEach((item) => {
        if (item.length < 1) {
          this.$alert('所有内容都必须填写', {
            confirmButtonText: '好的',
          });
        }
      });
    },
  },
};
</script>

<style>
.choseTicket {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  padding: 10px;
  margin: 0 auto;
  background: #fff;
}
.choseInput {
  width: 20%;
}
.choseTicket img {
  width: 20px;
  height: 20px;
  padding: 0 5px;
  cursor: pointer;
}
.choseDate {
  width: 20%;
  margin-left: 2%;
}
.selectHuman {
  width: 15%;
  margin-left: 2%;
}
.selectType {
  width: 13%;
  margin-left: 2.5%;
}
.searchBtn {
  width: 13%;
  margin-left: 2.5%;
}
</style>
