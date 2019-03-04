import GuildReception from '@/views/GuildReception.vue';
import GuildMenu from '@/views/GuildMenu.vue';
import GuildPlayers from '@/views/GuildPlayers.vue';
import Guild from '@/views/Guild.vue';
import GuildPlayer from '@/views/GuildPlayer.vue';
import GuildPlayerRank from '@/views/GuildPlayerRank.vue';
import PlayerForm from '@/views/PlayerForm.vue';
import GuildPlayerQuests from '@/views/GuildPlayerQuests.vue';
import GuildPlayerQuest from '@/views/GuildPlayerQuest.vue';

import { RouteConfig } from 'vue-router';

const GuildRoute: RouteConfig[] = [
  {
    path: '/guild',
    component: Guild,
    children: [
      {
        path: 'reception', // 受付
        component: GuildReception,
      },
      {
        path: 'players',
        component: GuildPlayers,
      },
      {
        path: 'player/:playerId',
        component: GuildPlayer,
        props: true,
        children: [
          {
            path: 'menu',
            component: GuildMenu,
          },
          {
            path: 'form',
            component: PlayerForm,
            props: true,
          },
          {
            path: 'rank',
            component: GuildPlayerRank,
            props: true,
          },
          {
            path: 'quests',
            component: GuildPlayerQuests,
          },
          {
            path: 'quest/:questId',
            component: GuildPlayerQuest,
            props: true,
          }
        ],
      },
    ],
  },
];

export default GuildRoute;
