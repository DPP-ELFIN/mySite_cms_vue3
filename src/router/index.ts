import { localCache } from '@/utils/cache';
import { createRouter, createWebHashHistory } from 'vue-router';
import mainChildren from './mainChildren';

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
      component: import('../view/main/main.vue'),
      children: mainChildren
    },
    {
      path: '/:pathMatch(.*)',
      component: import('../view/404/NotFound.vue')
    }
  ]
});

router.beforeEach((to, form) => {
  const token = localCache.getCache('token');
  if (
    // 检查用户是否已登录
    !token &&
    // ❗️ 避免无限重定向
    to.path !== '/login'
  ) {
    // 将用户重定向到登录页面
    return { path: '/login' };
  }
});

export default router;
