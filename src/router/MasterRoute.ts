import { RouteConfig } from 'vue-router';

import Master from '@/views/Master.vue';
import MasterMenu from '@/views/MasterMenu.vue';
import MasterPlayerRoute from '@/router/MasterPlayerRoute';

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
    ],
  },
];

export default MasterRoute;
