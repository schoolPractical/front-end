import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/Home';
import Flights from '@/view/Flights';

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
      path: '/flights',
      component: Flights,
      name: 'Flights',
    },
  ],
});

