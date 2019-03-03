import Floor from '@/views/Floor.vue';
import FloorMap from '@/views/FloorMap.vue';
import FloorPlayerList from '@/views/FloorPlayerList.vue';
import FloorMonsterList from '@/views/FloorMonsterList.vue';
import FloorList from '@/views/FloorList.vue';
import FloorForm from '@/views/FloorForm.vue';
import MonsterInfoSheet from '@/views/MonsterInfoSheet.vue';

const FloorRoute = [
  {
    path: 'floor/list',
    component: FloorList,
    props: true,
  },
  {
    path: 'floor/:floorId',
    component: Floor,
    props: true,
    children: [
      {
        path: '',
        props: true,
        components: {
          map: FloorMap,
          monsters: FloorMonsterList,
          plFyers: FloorPlayerList,
          sheet: MonsterInfoSheet,
        },
      },
    ],
  },
  {
    path: 'floorForm/:floorId',
    component: FloorForm,
    props: true,
  },
];

export default FloorRoute;
