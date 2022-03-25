const routes = [
  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/book", component: () => import("pages/book.vue") }],
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
