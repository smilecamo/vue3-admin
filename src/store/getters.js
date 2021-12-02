// 快捷访问
import variables from "@/assets/styles/variables.scss";
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  // 判断是否有用户信息
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== "{}";
  },
  cssVar: () => variables,
  sidebarOpened: (state) => state.app.sidebarOpened,
};

export default getters;
