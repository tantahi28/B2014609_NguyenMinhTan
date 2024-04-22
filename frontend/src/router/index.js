import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import("@/layouts/Main/Main.vue"),
    children: [
      {
        path: 'login',
        component: () => import("@/views/auth/Login.vue"),
      },
      {
        path: 'register',
        component: () => import("@/views/auth/Register.vue"),
      },
    ],
  },
  {
    path: '/',
    component: () => import("@/layouts/Main/Main.vue"),
    children: [
      {
        path: '',
        component: () => import("@/views/index.vue"),
      },
      {
        path: 'search',
        component: () => import("@/views/index.vue"),
      },
      {
        path: 'cart',
        component: () => import("@/views/Cart.vue"),
      },
      {
        path: 'orders',
        component: () => import("@/views/Order.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
