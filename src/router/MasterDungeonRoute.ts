import { RouteConfig } from 'vue-router';

import MasterDungeons from '@/views/MasterDungeons.vue';
import MasterDungeon from '@/views/MasterDungeon.vue';
import MasterDungeonForm from '@/views/MasterDungeonForm.vue';
import MasterDungeonSheet from '@/views/MasterDungeonSheet.vue';

const MasterDungeonRoute: RouteConfig[] = [
  {
    path: 'dungeons',
    component: MasterDungeons,
  },
  {
    path: 'dungeon/:dungeonId',
    component: MasterDungeon,
    props: true,
    children: [
      {
        path: 'sheet',
        component: MasterDungeonSheet,
        props: true,
      },
      {
        path: 'form',
        component: MasterDungeonForm,
        props: true,
      },
    ],
  },
];

export default MasterDungeonRoute;
