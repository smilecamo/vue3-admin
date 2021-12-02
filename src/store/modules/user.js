import { login, getUserInfo } from "@/api/sys";
import md5 from "md5";
import router from "@/router/index";
import { setItem, getItem, removeAllItem } from "@/utils/storage";
import { TOKEN } from "@/constant";
import { setTimeStamp } from "@/utils/auth";
export default {
  namespaced: true, // 使其成为带命名空间的模块
  state: () => ({
    token: getItem(TOKEN) || "",
    userInfo: {},
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },
    setUserInfo(state, info) {
      state.userInfo = info;
    },
  },
  actions: {
    login(state, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password),
        })
          .then((data) => {
            this.commit("user/setToken", data.token);
            setTimeStamp();
            router.push("/");
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    logout() {
      this.commit("user/setToken", "");
      this.commit("user/setUserInfo", {});
      removeAllItem();
      router.push("/login");
    },
    async getUserInfo() {
      const res = await getUserInfo();
      this.commit("user/setUserInfo", res);
      return res;
    },
  },
};
