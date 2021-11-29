import { login } from "@/api/sys";
import md5 from "md5";
import router from "@/router/index";
import { setItem, getItem } from "@/utils/storage";
import { TOKEN } from "@/constant";
export default {
  namespaced: true, // 使其成为带命名空间的模块
  state: () => ({
    token: getItem(TOKEN) || "",
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
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
            router.push("/");
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
