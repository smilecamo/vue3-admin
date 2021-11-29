import { createApp } from "vue";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入 svgIcon
import installIcons from "@/icons";
// 初始化央视
import "@/assets/styles/reset.scss";
import "element-plus/dist/index.css";
const app = createApp(App);
installIcons(app);
app.use(store).use(router).use(ElementPlus).mount("#app");
