import type { RouteRecordRaw } from 'vue-router';

const mainChildren: RouteRecordRaw[] = [
  {
    path: '/main/overView',
    redirect: '/main/overView/tecStack',
    meta: {
      id: 1,
      icon: 'Monitor',
      name: '总览',
      url: '/overView',
      parentId: 0
    },
    children: [
      {
        path: '/main/overView/tecStack',
        component: import('../view/main/overView/tecStack/tecStack.vue'),
        meta: {
          id: 11,
          icon: 'Monitor',
          name: '技术栈',
          url: '/tecStack',
          parentId: 1
        },
        children: []
      }
    ]
  },
  {
    path: '/main/overView',
    // component:import('../view/main/main.vue'),
    redirect: '/main/tecStack',
    meta: {
      id: 2,
      icon: 'Monitor',
      name: '总览',
      url: '/overView',
      parentId: 0
    },
    children: [
      {
        path: '/main/tecStack',
        component: import('../view/main/main.vue'),
        meta: {
          id: 21,
          icon: 'Monitor',
          name: '技术栈',
          url: '/tecStack',
          parentId: 2
        },
        children: []
      }
    ]
  }
];

export default mainChildren;
