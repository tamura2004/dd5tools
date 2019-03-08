import { RouteConfig } from 'vue-router';

import MasterMonsterinfos from '@/views/MasterMonsterinfos.vue';
import MasterMonsterinfo from '@/views/MasterMonsterinfo.vue';
import MasterMonsterinfoForm from '@/views/MasterMonsterinfoForm.vue';
import MasterMonsterinfoSheet from '@/views/MasterMonsterinfoSheet.vue';

const MasterMonsterinfoRoute: RouteConfig[] = [
  {
    path: 'monsterinfos',
    component: MasterMonsterinfos,
  },
  {
    path: 'monsterinfo/:monsterinfoId',
    component: MasterMonsterinfo,
    props: true,
    children: [
      {
        path: 'sheet',
        component: MasterMonsterinfoSheet,
        props: true,
      },
      {
        path: 'form',
        component: MasterMonsterinfoForm,
        props: true,
      },
    ],
  },
];

export default MasterMonsterinfoRoute;
