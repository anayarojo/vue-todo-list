import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
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
    component: () => import('../views/Register.vue'),
    meta: {
      title: 'Registro',
      middleware: auth,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
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

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

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
  

// router.beforeEach((to, from, next) => {
//   next();
// });

// router.beforeResolve((to, from, next) => {
//   next();
// });

// router.afterEach(() => {
// });

export default router;
