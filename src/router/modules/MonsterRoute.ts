import MonsterInfoEncounter from '@/views/MonsterInfoEncounter.vue';
import MonsterInfoList from '@/views/MonsterInfoList.vue';
import { RouteConfig } from 'vue-router';

const MonsterRoute: RouteConfig[] = [
  {
    path: '/monster/info/list',
    component: MonsterInfoList,
  },
  {
    path: '/monster/info/encounter',
    component: MonsterInfoEncounter,
  },
];

export default MonsterRoute;
