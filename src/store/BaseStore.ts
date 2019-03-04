import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import BaseState from '@/store/BaseState';
import LayoutStore from '@/store/LayoutStore';

export default new Vuex.Store({
  modules: {
    layout: LayoutStore,
  },
  state: new BaseState(),
  getters: {
  },
  mutations: {
    set(state: BaseState, {name, collection}) {
      Vue.set(state, name, collection);
    },
    setCurrentPlayerId(state: BaseState, id: string) {
      state.current.playerId = id;
    },
  },
  actions: {
  },
});
