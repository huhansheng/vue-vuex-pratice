import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: {
      path: '/home',
      name: 'Home',
      meta: { requiresAuth: true },
      component: Home
    }
  }
];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // can do authority
    next();
  } else {
    next();
  }
});

export default router;

