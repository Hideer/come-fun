import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import appConfig from './modules/appConfig'; // 小程序配置
import baseInfo from './modules/baseInfo'; // 业务模块

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    baseInfo,
    appConfig,
  },
  getters,
});
