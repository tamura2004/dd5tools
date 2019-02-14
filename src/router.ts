import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Monsters from './views/Monsters.vue';
import Players from './views/Players.vue';
import Weapons from './views/Weapons.vue';
import Armors from './views/Armors.vue';
import Spells from './views/Spells.vue';
import SpellForm from './views/SpellForm.vue';
import Places from './views/Places.vue';
import Items from './views/Items.vue';
import Dungeons from './views/Dungeons.vue';
import Npcs from './views/Npcs.vue';
import PlaceForm from './views/PlaceForm.vue';
import ItemForm from './views/ItemForm.vue';
import DungeonForm from './views/DungeonForm.vue';
import NpcForm from './views/NpcForm.vue';
import MonsterShow from './views/MonsterShow.vue';
import PlayerCard from './views/PlayerCard.vue';
import PlayerForm from './views/PlayerForm.vue';
import Games from './views/Games.vue';
import GameCard from './views/GameCard.vue';
import GameForm from './views/GameForm.vue';
import Parties from './views/Parties.vue';
import Floor from './views/Floor.vue';

import Dungeon from './views/Dungeon.vue';
import DungeonFloor from './views/dungeon/Floor.vue';
import DungeonFloorMap from './views/dungeon/floor/Map.vue';
import DungeonFloorPlayers from './views/dungeon/floor/Players.vue';
import DungeonFloorMonsters from './views/dungeon/floor/Monsters.vue';
import DungeonFloors from './views/dungeon/Floors.vue';
import DungeonFloorForm from './views/dungeon/FloorForm.vue';

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
      path: '/dungeon/:dungeonId',
      name: 'dungeon',
      component: Dungeon,
      props: true,
      children: [
        {
          path: 'floors',
          component: DungeonFloors,
          props: true,
        },
        {
          path: 'floor/:id',
          component: DungeonFloor,
          props: true,
          children: [
            {
              path: 'home',
              props: true,
              components: {
                map: DungeonFloorMap,
                monsters: DungeonFloorMonsters,
                players: DungeonFloorPlayers,
              },
            },
          ],
        },
        {
          path: 'floorForm/:id',
          component: DungeonFloorForm,
          props: true,
        },
      ],
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
      path: '/parties',
      name: 'parties',
      component: Parties,
    },
    {
      path: '/monster/:name',
      name: 'monster',
      component: MonsterShow,
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
      path: '/dungeonForm/:id',
      name: 'dungeonForm',
      component: DungeonForm,
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
