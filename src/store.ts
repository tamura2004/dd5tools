import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_SESSION } from '@/types/MutationTypes';
import { CREATE_SESSION, UPDATE_SESSION_PLAYERS } from '@/types/ActionTypes';
import { db } from '@/plugins/firebase';
import State from '@/models/State';
import Session from '@/models/Session';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new State(),
  getters: {
    session(state) {
      return (sessionId: string) => state.sessions.get(sessionId);
    },
    dungeon(state) {
      return (dungeonId: string) => state.dungeons.get(dungeonId);
    },
    npc(state) {
      return (npcId: string) => state.npcs.get(npcId);
    },
  },
  mutations: {
    [ADD_SESSION](state, { sessionId, session }) {
      Vue.set(state.sessions, sessionId, new Session(session));
    },
    set(state, { name, collection }) {
      Vue.set(state, name, collection);
    },
  },
  actions: {
    async [CREATE_SESSION]({}, session) {
      const docRef: any = await db.collection('sessions').add({...session});
      return docRef.id;
    },
    async [UPDATE_SESSION_PLAYERS]({}, {sessionId, playerIds}) {
      await db.collection('sessions').doc(sessionId).update({ playerIds });
    },
  },
});
