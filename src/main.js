// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// 导入element-ui
import { Tabs, TabPane } from 'element-ui';

import API from '@/api/index';
import App from './App';
import router from './router';

import components from './components';

Vue.use(Tabs);
Vue.use(TabPane);

Vue.config.productionTip = false;

// 配置api
Vue.prototype.$ajax = API;

/** 加载自定义组件 */
Object.values(components)
  .forEach((component) => {
    Vue.component(component.name, component);
  });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
