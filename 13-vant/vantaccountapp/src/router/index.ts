import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/user",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/bill/index.vue"),
  },
];
const route = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default route;
