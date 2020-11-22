import Vue from 'vue';
import uView from 'uview-ui';
import dayjs from 'dayjs';
import App from './App.vue';
import store from './store';

import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

Vue.use(uView);

Vue.prototype.$dayjs = dayjs;

Vue.config.productionTip = false;

const app = new Vue({
  ...App,
  store,
});
app.$mount();
