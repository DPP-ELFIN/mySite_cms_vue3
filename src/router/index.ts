import { localCache } from '@/utils/cache';
import { createRouter, createWebHashHistory } from 'vue-router';
import mainChildren from './mainChildren';
import Login from '../view/login/login.vue'
import Main from '../view/main/main.vue'
import NotFound from '../view/404/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      redirect: '/main/overView/tecStack',
      component: Main,
      children: mainChildren
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
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
