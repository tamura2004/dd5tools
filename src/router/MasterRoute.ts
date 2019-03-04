import { RouteConfig } from 'vue-router';

import Master from '@/views/Master.vue';
import MasterMenu from '@/views/MasterMenu.vue';
import MasterPlayerRoute from '@/router/MasterPlayerRoute';
import MasterDungeonRoute from '@/router/MasterDungeonRoute';
import MasterMonsterRoute from '@/router/MasterMonsterRoute';
import MasterItemRoute from '@/router/MasterItemRoute';

const MasterRoute: RouteConfig[] = [
  {
    path: 'master',
    component: Master,
    children: [
      {
        path: 'menu',
        component: MasterMenu,
      },
      ...MasterPlayerRoute,
      ...MasterDungeonRoute,
      ...MasterMonsterRoute,
      ...MasterItemRoute,
    ],
  },
];

export default MasterRoute;
