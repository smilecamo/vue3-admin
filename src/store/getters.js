// 快捷访问
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  // 判断是否有用户信息
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== "{}";
  },
};

export default getters;
