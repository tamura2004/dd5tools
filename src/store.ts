import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import State from '@/models/State';

export default new Vuex.Store({
  state: new State(),
  getters: {
  },
  mutations: {
    set(state: State, {name, collection}) {
      Vue.set(state, name, collection);
    },
    setCurrentPlayerId(state: State, id: string) {
      state.current.playerId = id;
    },
  },
  actions: {
  },
});
