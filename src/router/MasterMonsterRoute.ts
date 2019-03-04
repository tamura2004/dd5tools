import { RouteConfig } from 'vue-router';

import MasterMonsters from '@/views/MasterMonsters.vue';
import MasterMonster from '@/views/MasterMonster.vue';
import MasterMonsterForm from '@/views/MasterMonsterForm.vue';
import MasterMonsterSheet from '@/views/MasterMonsterSheet.vue';

const MasterMonsterRoute: RouteConfig[] = [
  {
    path: 'monsters',
    component: MasterMonsters,
  },
  {
    path: 'monster/:monsterId',
    component: MasterMonster,
    props: true,
    children: [
      {
        path: 'sheet',
        component: MasterMonsterSheet,
        props: true,
      },
      {
        path: 'form',
        component: MasterMonsterForm,
        props: true,
      },
    ],
  },
];

export default MasterMonsterRoute;
