import axios from "axios";
import { ElMessage } from "element-plus";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
// 响应拦截
service.interceptors.response.use(
  (response) => {
    const { data, success, message } = response.data;
    // 判断是否请求成功
    if (success) {
      // 返回成功解析后的数据
      return data;
    } else {
      // 失败（请求成功，业务失败
      ElMessage.error(message);
      return Promise.reject(new Error(message));
    }
  },
  (error) => {
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);
export default service;
