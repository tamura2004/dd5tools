import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Dungeons from './views/Dungeons.vue';
import Monsters from './views/Monsters.vue';
import Monster from './views/Monster.vue';
import PlayerForm from './views/PlayerForm.vue';
import Parties from './views/Parties.vue';

Vue.use(Router);

const router = new Router({
  // mode: 'history',
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
    {
      path: '/monsters',
      name: 'monsters',
      component: Monsters,
    },
    {
      path: '/parties',
      name: 'parties',
      component: Parties,
    },
    {
      path: '/monster/:num',
      name: 'monster',
      component: Monster,
      props: true,
    },
    {
      path: '/player',
      name: 'player',
      component: PlayerForm,
      props: true,
    },
  ],
});

export default router;
