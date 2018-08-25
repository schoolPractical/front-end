<template>
  <div id="Home" class="home" :class="bgimg[bgNum]">
    <div class="cover"></div>
    <transition name="fade">
      <login v-if="show==='login'" @switch="change" />
    </transition>
    <transition name="fade">
      <Regist v-show="show==='regist'" @switch="change" />
    </transition>
    <transition name="fade">
      <RePassword v-show="show==='repassword'" @switch="change" />
    </transition>
  </div>
</template>

<script>
import Login from '../components/userHand/Login';
import Regist from '../components/userHand/Regist';
import RePassword from '../components/userHand/RePassword';

export default {
  name: 'Home',
  components: {
    Login,
    Regist,
    RePassword,
  },
  computed: {
    // 随机数取背景
    bgNum() {
      return Math.floor(Math.random() * 5);
    },
  },
  data() {
    return {
      show: 'login',
      bgimg: ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'], // 存储背景图名
    };
  },
  methods: {
    change(val) {
      this.show = val;
    },
  },
};
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 20%;
}
.cover{
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter{
  opacity: 0;
  margin-left: 200px;
}
.fade-leave-to{
  opacity: 0;
  margin-left: -200px;
}
</style>
