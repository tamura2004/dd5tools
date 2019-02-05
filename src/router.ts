import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Dungeons from './views/Dungeons.vue';
import Weapons from './views/Weapons.vue';
import Monsters from './views/Monsters.vue';
import Monster from './views/Monster.vue';
import Players from './views/Players.vue';
import PlayerCard from './views/PlayerCard.vue';
import PlayerForm from './views/PlayerForm.vue';
import Games from './views/Games.vue';
import GameCard from './views/GameCard.vue';
import GameForm from './views/GameForm.vue';
import Parties from './views/Parties.vue';
import Floor from './views/Floor.vue';

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
      path: '/weapons',
      name: 'weapons',
      component: Weapons,
    },
    {
      path: '/floor',
      name: 'floor',
      component: Floor,
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
      path: '/players',
      name: 'players',
      component: Players,
    },
    {
      path: '/playerForm/:id',
      name: 'playerForm',
      component: PlayerForm,
      props: true,
    },
    {
      path: '/player/:id',
      name: 'player',
      component: PlayerCard,
      props: true,
    },
    {
      path: '/games',
      name: 'games',
      component: Games,
    },
    {
      path: '/gameForm/:id',
      name: 'gameForm',
      component: GameForm,
      props: true,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: GameCard,
      props: true,
    },
  ],
});

export default router;
