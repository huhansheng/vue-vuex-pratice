import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Home from '@/pages/home/Home';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/home',
    name: 'Home',
    meta: { requiresAuth: true },
    component: Home
  }
];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 处理跳转验权
    next();
    // if (!auth.loggedIn()) {
    //   next({
    //     path: '/login',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }
  } else {
    next(); // 确保一定要调用 next()
  }
});

export default router;

