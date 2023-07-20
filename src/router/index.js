import VueRouter from "vue-router";
import Vue from "vue";
import app from "../../src/App.vue";
Vue.use(VueRouter);

const routers = [
  {
    path: "/",
    component: app,
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/home/homeView.vue"),
  },
  {
    path: "/category",
    component: () => import("@/views/category/categoryView.vue"),
  },
  {
    path: "/profile",
    component: () => import("@/views/profile/profileView.vue"),
  },
  {
    path: "/shopcar",
    component: () => import("@/views/shopcar/shopcarView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404View",
    component: () => import("@/views/notFoundView.vue"),
  },
];

const router = new VueRouter({
  routes: routers,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
