import type { RouteRecordRaw } from 'vue-router';
import TecStack from '../view/main/overView/tecStack/tecStack.vue'
import NuxtFront from '../view/project/nuxt-front/nuxt-front.vue'
import Vue3Cms from '../view/project/vue3-cms/vue3-cms.vue'
import ServerNode from '../view/project/server-node/server-node.vue'


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
        component: TecStack,
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
        component: TecStack,
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
  },
  {
    path: '/main/project',
    // component:import('../view/main/main.vue'),
    redirect: '/main/project/nuxt_front',
    meta: {
      id: 3,
      icon: 'Monitor',
      name: '项目管理',
      url: '/project',
      parentId: 0
    },
    children: [
      {
        path: '/main/project/nuxt_front',
        component: NuxtFront,
        meta: {
          id: 31,
          icon: 'Monitor',
          name: '前端页面',
          url: '/nuxt_front',
          parentId: 3
        },
        children: []
      },
      {
        path: '/main/project/vue3_cms',
        component: Vue3Cms,
        meta: {
          id: 32,
          icon: 'Monitor',
          name: '后台管理系统',
          url: '/vue3_cms',
          parentId: 3
        },
        children: []
      },
      {
        path: '/main/project/server_node',
        component: ServerNode,
        meta: {
          id: 33,
          icon: 'Monitor',
          name: '服务端接口',
          url: '/server_node',
          parentId: 3
        },
        children: []
      }
    ]
  }
];

export default mainChildren;
