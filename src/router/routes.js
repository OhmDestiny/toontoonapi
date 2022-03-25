const routes = [
  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/welcome", component: () => import("pages/welcome.vue") },
      { path: "/book", component: () => import("pages/book.vue") },
      { path: "/category", component: () => import("pages/category.vue") },
      { path: "/rank", component: () => import("pages/rank.vue") },
      { path: "/ads", component: () => import("pages/ads.vue") },
      { path: "/user", component: () => import("pages/user.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("../pages/login.vue"),
    name: "login",
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
