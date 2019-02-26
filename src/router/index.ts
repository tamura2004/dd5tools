import Vue from 'vue';

import Armors from '@/views/Armors.vue';
import Floor from '@/views/Floor.vue';
import GameCard from '@/views/GameCard.vue';
import GameForm from '@/views/GameForm.vue';
import Games from '@/views/Games.vue';
import ItemForm from '@/views/ItemForm.vue';
import Items from '@/views/Items.vue';
import MenuTop from '@/views/menu/Top.vue';
import MonsterInfoSheet from '@/views/MonsterInfoSheet.vue';
import Monsters from '@/views/Monsters.vue';
import NpcForm from '@/views/NpcForm.vue';
import Npcs from '@/views/Npcs.vue';
import PlaceForm from '@/views/PlaceForm.vue';
import Places from '@/views/Places.vue';
import PlayerCard from '@/views/PlayerCard.vue';
import PlayerForm from '@/views/PlayerForm.vue';
import Players from '@/views/Players.vue';
import Router from 'vue-router';
import SpellForm from '@/views/SpellForm.vue';
import Spells from '@/views/Spells.vue';
import Weapons from '@/views/Weapons.vue';


import DungeonRoute from '@/router/modules/dungeon';
import GuildRoute from '@/router/modules/guild';

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...DungeonRoute,
    ...GuildRoute,
    {
      path: '/',
      name: 'menuTop',
      component: MenuTop,
    },
    {
      path: '/monsters',
      name: 'monsters',
      component: Monsters,
    },
    {
      path: '/players',
      name: 'players',
      component: Players,
    },
    {
      path: '/npcs',
      name: 'npcs',
      component: Npcs,
    },
    {
      path: '/weapons',
      name: 'weapons',
      component: Weapons,
    },
    {
      path: '/armors',
      name: 'armors',
      component: Armors,
    },
    {
      path: '/places',
      name: 'places',
      component: Places,
    },
    {
      path: '/items',
      name: 'items',
      component: Items,
    },
    {
      path: '/floor',
      name: 'floor',
      component: Floor,
    },
    {
      path: '/monster/:id',
      name: 'monster',
      component: MonsterInfoSheet,
      props: true,
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
    {
      path: '/spells',
      name: 'spells',
      component: Spells,
    },
    {
      path: '/spellForm/:id',
      name: 'spellForm',
      component: SpellForm,
      props: true,
    },
    {
      path: '/itemForm/:id',
      name: 'itemForm',
      component: ItemForm,
      props: true,
    },
    {
      path: '/npcForm/:id',
      name: 'npcForm',
      component: NpcForm,
      props: true,
    },
    {
      path: '/placeForm/:id',
      name: 'placeForm',
      component: PlaceForm,
      props: true,
    },
  ],
});

export default router;
