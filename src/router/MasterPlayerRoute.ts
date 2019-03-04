import { RouteConfig } from 'vue-router';

import MasterPlayers from '@/views/MasterPlayers.vue';
import MasterPlayer from '@/views/MasterPlayer.vue';
import MasterPlayerForm from '@/views/MasterPlayerForm.vue';
import MasterPlayerSheet from '@/views/MasterPlayerSheet.vue';

const MasterPlayerRoute: RouteConfig[] = [
  {
    path: 'players',
    component: MasterPlayers,
  },
  {
    path: 'player/:playerId',
    component: MasterPlayer,
    props: true,
    children: [
      {
        path: 'sheet',
        component: MasterPlayerSheet,
        props: true,
      },
      {
        path: 'form',
        component: MasterPlayerForm,
        props: true,
      },
    ],
  },
];

export default MasterPlayerRoute;
