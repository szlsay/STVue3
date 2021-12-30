import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes:RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/login/index.vue")
  }
]
const route = createRouter({
  history: createWebHashHistory(), 
  routes
})

export default route