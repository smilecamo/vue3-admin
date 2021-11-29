import { createRouter, createWebHashHistory } from "vue-router";

const publicRoutes = [
  {
    path: "/",
    component: () => import("@/layout/index"),
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
});

export default router;
