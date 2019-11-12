import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Scoreboard from '../views/Scoreboard';
import Configure from '../views/Configure';
import ConfigureNames from '../views/Names';
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
  },
  {
    path: '/configure/names',
    name: 'configure-names',
    component: ConfigureNames
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const path = to.path;
  const activeGame = store.get('activeGame');

  if (path.startsWith('/configure') && activeGame) {
    next('/');
  } else if (!activeGame && !path.startsWith('/configure')) {
    next('/configure')
  } else {
    next();
  }
});

export default router;
