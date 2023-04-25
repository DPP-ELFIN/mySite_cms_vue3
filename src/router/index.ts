import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: import('../view/login/login.vue')
    },
    {
      path: '/main',
      component: import('../view/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: import('../view/404/NotFound.vue')
    }
  ]
});
export default router;
