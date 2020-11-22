// 字典映射表
const getters = {
  tabbar: (state: any) => state.appConfig.tabbar,
  token: (state: any) => state.baseInfo.token,
  userInfo: (state: any) => state.baseInfo.userInfo,
};
export default getters;
