import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/web/Home.vue';
import nextFactory from '@/guards/next';
import auth from '@/guards/auth';

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
    component: () => import('../views/web/Register.vue'),
    meta: {
      title: 'Registro',
      middleware: auth,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/web/Login.vue'),
    meta: {
      title: 'Login',
      middleware: auth,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/app/Dashboard.vue'),
    meta: {
      title: 'Dashboard',
      middleware: auth,
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
  if (to.meta.middleware) {

    const middleware = Array.isArray(to.meta.middleware) ? 
      to.meta.middleware : 
      [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };

    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
