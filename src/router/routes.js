const routes = [
  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/welcome",
        component: () => import("pages/welcome.vue"),
        name: "welcome",
      },
      {
        path: "/book",
        component: () => import("pages/book.vue"),
        name: "book",
      },
      {
        path: "/addnewcartoon",
        component: () => import("pages/addnewcartoon.vue"),
        name: "addnewcartoon",
      },
      {
        path: "/category",
        component: () => import("pages/category.vue"),
        name: "category",
      },
      {
        path: "/rank",
        component: () => import("pages/rank.vue"),
        name: "rank",
      },
      { path: "/ads", component: () => import("pages/ads.vue"), name: "ads" },
      {
        path: "/user",
        component: () => import("pages/user.vue"),
        name: "user",
      },
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
