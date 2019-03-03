import Dungeon from '@/views/Dungeon.vue';
import Dungeons from '@/views/Dungeons.vue';
import DungeonForm from '@/views/DungeonForm.vue';

import FloorRoute from '@/router/modules/FloorRoute';

const DungeonRoute = [
  {
    path: '/dungeons',
    name: 'dungeons',
    component: Dungeons,
  },
  {
    path: '/dungeonForm/:dungeonId',
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
      ...FloorRoute,
    ],
  },
];

export default DungeonRoute;
