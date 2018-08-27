import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/Home';
import Shops from '@/view/Shops';
import Shopdetail from '@/view/Shopdetail';
import SecondSkill from '@/view/SecondSkill';
import Order from '@/view/Order';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
    },
    {
      path: '/shops',
      component: Shops,
      name: 'Shops',
    },
    {
      path: '/shopdetail',
      component: Shopdetail,
      name: 'Shopdetail',
    },
    {
      path: '/secondSkill',
      component: SecondSkill,
      name: 'SecondSkill',
    },
    {
      path: '/order',
      component: Order,
      name: 'Order',
    },
  ],
});

