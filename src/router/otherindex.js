import VueRouter from "vue-router";
import Vue from "vue";
import app from "../../src/App.vue";

const aboutview = () => import("@/views/practice/aboutView.vue");

Vue.use(VueRouter);

const routers = [
  {
    path: "",
    redirect: "/index",
    component: app,
    children: [
      {
        path: "/index",
        component: () => import("@/views/practice/indexView.vue"),
        meta: { title: '主页' }
      },
      {
        path: "/about",
        component: aboutview,   
        children: [
          {
            path: "",
            redirect: "message",
          },
          {
            path: "message",
            component: () => import("@/views/practice/mainviews/messageView"),
            meta: { title: '消息' }
          },
          {
            path: "news",
            component: () => import("@/views/practice/mainviews/newsView"),
            meta: { title: '新闻' }
          },
        ],
      },
      {
        path: "/user/:userID",
        component: () => import("@/views/practice/userView.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "404View",
        component: () => import("@/views/notFoundView.vue"),
      },
    ],
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

export default router;