import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Scoreboard from '../views/Scoreboard';
import Configure from '../views/Configure';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/scoreboard',
    name: 'scoreboard',
    component: Scoreboard
  },
  {
    path: '/configure',
    name: 'configure',
    component: Configure
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isActiveGame = store.get('activeGame');
  if (!isActiveGame && to.path !== '/configure') {
    next('/configure')
  } else if (to.path === '/configure' && isActiveGame) {
    next('/');
  } else {
    next();
  }
})

export default router;
