import Vue from 'vue';
import Router from 'vue-router';
import PATH from '@/types/PathTypes';

import Encounter from '@/views/Encounter.vue';
import EncounterBattle from '@/views/EncounterBattle.vue';
import EncounterForm from '@/views/EncounterForm.vue';
import EncounterMonster from '@/views/EncounterMonster.vue';
import EncounterRest from '@/views/EncounterRest.vue';
import EncounterReward from '@/views/EncounterReward.vue';
import Home from '@/views/Home.vue';
import NpcForm from '@/views/NpcForm.vue';
import NpcIndex from '@/views/NpcIndex.vue';
import Session from '@/views/Session.vue';
import SessionEncounters from '@/views/SessionEncounters.vue';
import SessionForm from '@/views/SessionForm.vue';
import SessionPlayers from '@/views/SessionPlayers.vue';
import SessionReward from '@/views/SessionReward.vue';
import Sessions from '@/views/Sessions.vue';
import Signin from '@/views/Signin.vue';
import Signup from '@/views/Signup.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: PATH.HOME,
      component: Home,
    },
    {
      path: '/npcs',
      name: PATH.NPCS_INDEX,
      component: NpcIndex,
    },
    {
      path: '/npcs/new',
      name: PATH.NPCS_NEW,
      component: NpcForm,
    },
    {
      path: '/signin',
      name: PATH.SIGNIN,
      component: Signin,
    },
    {
      path: '/signup',
      name: PATH.SIGNUP,
      component: Signup,
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
