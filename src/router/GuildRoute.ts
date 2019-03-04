import GuildReception from '@/views/GuildReception.vue';
import GuildMenu from '@/views/GuildMenu.vue';
import GuildPlayers from '@/views/GuildPlayers.vue';
import Guild from '@/views/Guild.vue';
import GuildPlayer from '@/views/GuildPlayer.vue';
import GuildPlayerRank from '@/views/GuildPlayerRank.vue';
import PlayerForm from '@/views/PlayerForm.vue';
import Quests from '@/views/Quests';
import Quest from '@/views/Quest';

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
        children: [
          {
            path: 'menu',
            component: GuildMenu,
          },
          {
            path: 'form',
            component: PlayerForm,
          },
          {
            path: 'rank',
            component: GuildPlayerRank,
            props: true,
          },
          {
            path: 'quests',
            component: Quests,
          },
          {
            path: 'quest/:questId',
            component: Quest,
          }
        ],
      },
    ],
  },
];

export default GuildRoute;
