import MonsterInfoEncounter from '@/views/MonsterInfoEncounter.vue';
import MonsterInfoList from '@/views/MonsterInfoList.vue';

const MonsterRoute = [
  {
    path: '/monster/info/list',
    component: MonsterInfoList,
  },
  {
    path: '/monster/info/encounter',
    component: MonsterInfoEncounter,
  },
];
