<template>
  <div id="LoopImg" class="loopimg">
    <img src="../assets/leftArr.png" alt="左动" @click="changeLoop('left')">
    <div class="loopimgBOx">
      <img v-if="loopNum===0" src="../assets/loopImg.png" alt="轮播图">
      <img v-if="loopNum===1" src="../assets/loopImg1.jpg" alt="轮播图">
      <img v-if="loopNum===2" src="../assets/loopImg2.jpg" alt="轮播图">
    </div>
    <img src="../assets/rightArr.png" alt="右动" @click="changeLoop('right')">
  </div>
</template>

<script>
export default {
  name: 'LoopImg',
  data() {
    return {
      loopLength: 3, // 循环图数量
      loopNum: 0, // 当前为第几个
    };
  },
  methods: {
    changeLoop(moveWay) {
      if (moveWay === 'left') {
        this.loopNum -= 1;
        if (this.loopNum < 0) {
          this.loopNum = this.loopLength - 1;
        }
      } else {
        this.loopNum += 1;
        if (this.loopNum === this.loopLength) {
          this.loopNum = 0;
        }
      }
    },
  },
};
</script>

<style>
.loopimg {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  padding: 0 10vw;
  margin-top: 20px;
}
.loopimgBOx {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: calc(80vw - 180px);
  padding: 0 20px;
  box-sizing: border-box;
}
.loopimg img {
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
}
</style>
