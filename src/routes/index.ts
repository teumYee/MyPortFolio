import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Intro",
    component: () => import("@pages/Intro.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@pages/Home.vue"),
  },
  {
    path: "/Loading",
    name: "Loading",
    component: () => import("@pages/Loading.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
