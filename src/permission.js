import router from "@/router";
import store from "@/store";
const whiteList = ["/login"];
router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    // 1. 用户登录 不允许进入login
    if (to.path === "/login") {
      next("/");
    } else {
      if (!store.getters.hasUserInfo) {
        await store.dispatch("user/getUserInfo");
      }
      next();
    }
  } else {
    // 2. 用户没有登录 只允许进入login
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next("/login");
    }
  }
});
