import GuildReception from '@/views/GuildReception.vue';
import GuildSelectPlayer from '@/views/GuildSelectPlayer.vue';
import GuildBase from '@/views/GuildBase.vue';
import GuildRank from '@/views/GuildRank.vue';

const GuildRoute = [
  {
    path: '/guild/reception',
    component: GuildReception,
  },
  {
    path: '/guild/selectPlayer',
    component: GuildSelectPlayer,
  },
  {
    path: '/guild/:playerId',
    component: GuildBase,
    props: true,
    children: [
      {
        path: 'rank',
        component: GuildRank,
        props: true,
      },
    ],
  },
];

export default GuildRoute;
