import { createRouter, createWebHashHistory } from "vue-router";
import layout from "@/layout/index";
/**
 * 私有有路由表
 */
export const privateRoutes = [
  {
    path: "/user",
    component: layout,
    redirect: "/user/manage",
    name: "userManage",
    meta: {
      title: "user",
      icon: "personnel",
    },
    children: [
      {
        path: "/user/manage",
        component: () => import("@/views/user-manage/index"),
        meta: {
          title: "userManage",
          icon: "personnel-manage",
        },
      },
      {
        path: "/user/info/:id",
        name: "userInfo",
        component: () => import("@/views/user-info/index"),
        props: true,
        meta: {
          title: "userInfo",
        },
      },
      {
        path: "/user/import",
        name: "import",
        component: () => import("@/views/import/index"),
        meta: {
          title: "excelImport",
        },
      },
    ],
  },
  {
    path: "/article",
    component: layout,
    redirect: "/article/ranking",
    name: "articleRanking",
    meta: { title: "article", icon: "article" },
    children: [
      {
        path: "/article/ranking",
        component: () => import("@/views/article-ranking/index"),
        meta: {
          title: "articleRanking",
          icon: "article-ranking",
        },
      },
      {
        path: "/article/:id",
        component: () => import("@/views/article-detail/index"),
        meta: {
          title: "articleDetail",
        },
      },
      {
        path: "/article/create",
        component: () => import("@/views/article-create/index"),
        meta: {
          title: "articleCreate",
          icon: "article-create",
        },
      },
      {
        path: "/article/editor/:id",
        component: () => import("@/views/article-create/index"),
        meta: {
          title: "articleEditor",
        },
      },
    ],
  },
];
/**
 * 公有路由表
 */
const publicRoutes = [
  {
    path: "/",
    component: layout,
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error-page/404"),
  },
  // 401
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/error-page/401"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes],
});

export default router;
