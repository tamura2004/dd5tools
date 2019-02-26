import GuildTop from '@/views/guild/Top.vue';
import GuildSelectPlayer from '@/views/guild/SelectPlayer.vue';
import GuildMain from '@/views/guild/Main.vue';
import GuildRank from '@/views/guild/Rank.vue';

const GuildRoute = [
  {
    path: '/guild/top',
    name: 'guildTop',
    component: GuildTop,
  },
  {
    path: '/guild/selectPlayer',
    name: 'guildSelectPlayer',
    component: GuildSelectPlayer,
  },
  {
    path: '/guild/:playerId',
    name: 'guildMain',
    component: GuildMain,
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
