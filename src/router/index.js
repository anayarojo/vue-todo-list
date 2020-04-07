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
    },
  },
  {
    path: '/register',
    name: 'Register',
    beforeEnter: IsLoggedInGuard,
    component: () => import('../views/Register.vue'),
    meta: {
      title: 'Registro',
    },
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: IsLoggedInGuard,
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    beforeEnter: IsLoggedInGuard,
    component: () => import('../views/Dashboard.vue'),
    meta: {
      title: 'Dashboard',
    },
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import('../views/errors/404.vue'),
    meta: {
      title: 'No se encontró la página',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
