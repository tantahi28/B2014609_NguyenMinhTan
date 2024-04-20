import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: '/auth',
        name: 'auth',
        component: () => import("@/layouts/Main/Main.vue"),
        children: [
          {
            path: '/auth/login',
            component: () => import("@/views/auth/Login.vue"),
          },
          {
            path: '/auth/register',
            component: import("@/views/auth/Register.vue"),
          },
        //   {
        //     path: '/auth/register',
        //     component: Register,
        //   },
        //   {
        //     path: '/auth/admin/login',
        //     component: AdminLogin,
        //   },
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