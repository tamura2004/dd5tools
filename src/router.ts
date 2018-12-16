import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Dungeons from './views/Dungeons.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/dungeons',
      name: 'dungeons',
      component: Dungeons,
    },
  ],
});

export default router;
