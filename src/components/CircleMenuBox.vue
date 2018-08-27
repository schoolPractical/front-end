<template>
  <circle-menu :type="types[userType]" :number='numbers[userType]'
               animate="animated jello" mask='white' circle>
    <img class="menu" src="../assets/menu/menu.svg" slot="item_btn" alt="菜单" title="菜单">
    <a slot="item_1" class="fa fa-twitter fa-lg logout">
      <img src="../assets/menu/out.svg" alt="注销" title="注销">
    </a>
    <a slot="item_3" class="fa fa-weixin fa-lg add" @click="addNewItem">
      <img src="../assets/menu/add.svg" alt="添加" title="添加">
    </a>
    <a slot="item_2" class="fa fa-weibo fa-lg human">
      <img src="../assets/menu/human.svg" alt="个人中心" title="个人中心">
    </a>
  </circle-menu>
</template>

<script>
import CircleMenu from 'vue-circle-menu';
import 'animate.css';

export default {
  name: 'CircleMenuBox',
  components: {
    CircleMenu,
  },
  props: {
    userType: {},
  },
  data() {
    return {
      numbers: [3, 2],
      types: ['top', 'middle-around'],
    };
  },
  methods: {
    addNewItem() {
      this.$emit('beforeAddItem');
    },
  },
};
</script>

<style scoped>
img {
  width: 80%;
  cursor: pointer;
}
.menu {
  margin-top: 4px;
  width: 100%;
}
.human img {
  width: 60%;
  margin-left: 1px;
  margin-top: 7px;
}
.add img {
  margin-left: 2px;
  margin-top: 4px;
}
.logout img {
  margin-left: 3px;
  margin-top: 7px;
}
</style>
