// 用户模块
const state = {
  tabbar: {
    list: [
      {
        iconPath: 'home',
        selectedIconPath: 'home-fill',
        text: '首页',
        // count: 2,
        isDot: true,
        customIcon: false,
        pagePath: '/pages/layout/home/index',
        activeColor: '#11D183',
        inactiveColor: '#929292',
      },
      // {
      //   iconPath: 'photo',
      //   selectedIconPath: 'photo-fill',
      //   text: '放映厅',
      //   customIcon: false,
      // },
      {
        iconPath: 'https://cdn.uviewui.com/uview/common/min_button.png',
        selectedIconPath: 'https://cdn.uviewui.com/uview/common/min_button_select.png',
        text: '发布',
        midButton: true,
        customIcon: false,
        pagePath: '/pages/layout/fun/index',
        activeColor: '#11D183',
        inactiveColor: '#929292',
      },
      // {
      //   iconPath: 'play-right',
      //   selectedIconPath: 'play-right-fill',
      //   text: '直播',
      //   customIcon: false,
      // },
      {
        iconPath: 'account',
        selectedIconPath: 'account-fill',
        text: '我的',
        // count: 23,
        isDot: false,
        customIcon: false,
        pagePath: '/pages/layout/me/index',
        activeColor: '#11D183',
        inactiveColor: '#929292',
      },
    ],
    // current: 0,
  },
};

const mutations = {
  SET_BASE_INFO: (state: { [x: string]: any }, payload: { [x: string]: any }) => {
    Object.keys(payload).forEach(key => {
      state[key] = payload[key];
    });
  },
};

const actions = {
  setBaseInfo({ commit }: any, data: any) {
    commit('SET_BASE_INFO', data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
