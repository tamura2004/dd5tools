import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Sessions from '@/views/Sessions.vue';
import SessionForm from '@/views/SessionForm.vue';
import Session from '@/views/Session.vue';
import Encounters from '@/views/Encounters.vue';
import EncounterForm from '@/views/EncounterForm.vue';
import Encounter from '@/views/Encounter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: Sessions,
    },
    {
      path: '/sessions/new',
      name: 'sessions/new',
      component: SessionForm,
    },
    {
      path: '/session/:sessionId',
      name: 'session',
      component: Session,
      props: true,
    },
    {
      path: '/session/:sessionId/edit',
      name: 'session/edit',
      component: SessionForm,
    },
    {
      path: '/encounters',
      name: 'encounters',
      component: Encounters,
    },
    {
      path: '/encounters/new',
      name: 'encounters/new',
      component: EncounterForm,
    },
    {
      path: '/encounter/:encounterId',
      name: 'encounter',
      component: Encounter,
    },
    {
      path: '/encounter/:encounterId/edit',
      name: 'encounter/edit',
      component: EncounterForm,
    },
  ],
});
