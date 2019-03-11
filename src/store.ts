import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_SESSION } from '@/types/MutationTypes';
import { CREATE_SESSION } from '@/types/ActionTypes';
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
    async [CREATE_SESSION]({commit}, session) {
      const docRef: any = await db.collection('sessions').add({...session})
      // commit(ADD_SESSION, { sessionId, session });
      return docRef.id;
    },
  },
});
