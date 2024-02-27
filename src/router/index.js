import Vue from 'vue';
import VueRouter from 'vue-router';
import { appRoutes } from '@/config';

Vue.use(VueRouter);

const routes = [
  {
    path: appRoutes.HOME,
    name: 'home',
    component: () => import('@/views/HomeView/HomeView.vue'),
  },
  {
    path: appRoutes.ABOUT,
    name: 'about',
    component: () => import('@/views/AboutView/AboutView.vue'),
  },
  {
    path: appRoutes.DEFAULT,
    redirect: appRoutes.HOME,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
