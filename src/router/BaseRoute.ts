import Vue from 'vue';
import Router from 'vue-router';

import MenuTop from '@/views/MenuTop.vue';
import GuildRoute from '@/router/GuildRoute';
import MasterRoute from '@/router/MasterRoute';

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...MasterRoute,
    ...GuildRoute,
    {
      path: '/',
      name: 'menuTop',
      component: MenuTop,
    },
  ],
});

export default router;
