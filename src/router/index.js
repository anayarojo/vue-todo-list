import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import IsLoggedInGuard from '@/guards/isLoggedIn';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'TODO',
      showProgressBar: true
    },
  },
  {
    path: '/register',
    name: 'Register',
    beforeEnter: IsLoggedInGuard,
    component: () => import('../views/Register.vue'),
    meta: {
      title: 'Registro',
      showProgressBar: true
    },
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: IsLoggedInGuard,
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login',
      showProgressBar: true
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    beforeEnter: IsLoggedInGuard,
    component: () => import('../views/app/Dashboard.vue'),
    meta: {
      title: 'Dashboard',
      showProgressBar: true
    },
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import('../views/errors/404.vue'),
    meta: {
      title: 'No se encontró la página',
      showProgressBar: true
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

router.beforeResolve((to, from, next) => {
  next();
});

router.afterEach(() => {
});

export default router;
