import Dungeon from '@/views/Dungeon.vue';
import Dungeons from '@/views/Dungeons.vue';
import DungeonFloor from '@/views/dungeon/Floor.vue';
import DungeonFloorMap from '@/views/dungeon/floor/Map.vue';
import DungeonFloorPlayers from '@/views/dungeon/floor/Players.vue';
import DungeonFloorMonsters from '@/views/dungeon/floor/Monsters.vue';
import DungeonFloors from '@/views/dungeon/Floors.vue';
import DungeonFloorForm from '@/views/dungeon/FloorForm.vue';
import DungeonForm from '@/views/DungeonForm.vue';
import MonsterInfoSheet from '@/views/MonsterInfoSheet.vue';

const DungeonRoute = [
  {
    path: '/dungeons',
    name: 'dungeons',
    component: Dungeons,
  },
  {
    path: '/dungeonForm/:id',
    name: 'dungeonForm',
    component: DungeonForm,
    props: true,
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
            path: '',
            props: true,
            components: {
              map: DungeonFloorMap,
              monsters: DungeonFloorMonsters,
              players: DungeonFloorPlayers,
              sheet: MonsterInfoSheet,
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
];

export default DungeonRoute;
