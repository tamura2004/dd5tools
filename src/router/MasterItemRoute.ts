import { RouteConfig } from 'vue-router';

import MasterItems from '@/views/MasterItems.vue';
import MasterItem from '@/views/MasterItem.vue';
import MasterItemForm from '@/views/MasterItemForm.vue';
import MasterItemSheet from '@/views/MasterItemCard.vue';

const MasterItemRoute: RouteConfig[] = [
  {
    path: 'items',
    component: MasterItems,
  },
  {
    path: 'item/:itemId',
    component: MasterItem,
    props: true,
    children: [
      {
        path: 'sheet',
        component: MasterItemSheet,
        props: true,
      },
      {
        path: 'form',
        component: MasterItemForm,
        props: true,
      },
    ],
  },
];

export default MasterItemRoute;
