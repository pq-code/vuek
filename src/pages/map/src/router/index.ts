import { createRouter, createWebHistory } from 'vue-router';

import map from './branch/map';

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/frontPage/frontPage.vue'),
    name: 'home',
    meta: { hidden: false, title: '首屏' },
  },
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/home.vue'),
    name: 'dashboard',
    redirect: '/map',
    // leaf: true,//只有一个节点
    children: [...map],
    meta: { hidden: false, title: '首页' },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
