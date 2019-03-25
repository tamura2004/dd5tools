import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Sessions from '@/views/Sessions.vue';
import SessionForm from '@/views/SessionForm.vue';
import Session from '@/views/Session.vue';
import EncounterForm from '@/views/EncounterForm.vue';
import Encounter from '@/views/Encounter.vue';
import SessionPlayers from '@/views/SessionPlayers.vue';
import SessionEncounters from '@/views/SessionEncounters.vue';
import SessionReward from '@/views/SessionReward.vue';
import EncounterMonster from '@/views/EncounterMonster.vue';
import EncounterBattle from '@/views/EncounterBattle.vue';
import EncounterReward from '@/views/EncounterReward.vue';
import EncounterRest from '@/views/EncounterRest.vue';
import PATH from '@/types/PathTypes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: PATH.HOME,
      component: Home,
      meta: { title: 'マスターツール' },
    },
    {
      path: '/sessions',
      name: PATH.SESSIONS,
      component: Sessions,
    },
    {
      path: '/sessions/new',
      name: PATH.SESSIONS_NEW,
      component: SessionForm,
    },
    {
      path: '/session/:sessionId',
      name: PATH.SESSION,
      component: Session,
      props: true,
      children: [
        {
          path: 'players',
          name: PATH.SESSION_PLAYERS,
          component: SessionPlayers,
          props: true,
        },
        {
          path: 'encounters',
          name: PATH.SESSION_ENCOUNTERS,
          component: SessionEncounters,
          props: true,
        },
        {
          path: 'reward',
          name: PATH.SESSION_REWARD,
          component: SessionReward,
          props: true,
        },
      ],
    },
    {
      path: '/session/:sessionId/edit',
      name: PATH.SESSION_EDIT,
      component: SessionForm,
      props: true,
    },
    {
      path: '/session/:sessionId/encounters/new',
      name: PATH.ENCOUNTERS_NEW,
      component: EncounterForm,
      props: true,
    },
    {
      path: '/session/:sessionId/encounter/:encounterId',
      name: PATH.ENCOUNTER,
      component: Encounter,
      props: true,
      children: [
        {
          path: 'monster',
          name: PATH.ENCOUNTER_MONSTER,
          component: EncounterMonster,
          props: true,
        },
        {
          path: 'battle',
          name: PATH.ENCOUNTER_BATTLE,
          component: EncounterBattle,
          props: true,
        },
        {
          path: 'reward',
          name: PATH.ENCOUNTER_REWARD,
          component: EncounterReward,
          props: true,
        },
        {
          path: 'rest',
          name: PATH.ENCOUNTER_REST,
          component: EncounterRest,
          props: true,
        },
      ],
    },
  ],
});
