// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// 导入element-ui
import { Input, Button, Alert, MessageBox, Table, TableColumn, Icon, Dialog, Notification, Radio } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import API from '@/api/index';
import App from './App';
import router from './router';

import components from './components';

import './style/style.css';

Vue.use(Input);
Vue.use(Button);
Vue.use(Alert);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Radio);
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notify = Notification;

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
