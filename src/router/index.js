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
  	component: Home
  }
];

export default new Router({
  routes
});
