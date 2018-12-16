import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import State from '@/models/State';
import Floor from '@/models/Floor';
import FloorChart from '@/charts/FloorChart';

export default new Vuex.Store({
  state: new State(),
  getters: {
  },
  mutations: {
    nextFloor(state: State, floor: Floor) {
      for (let i = 0; i < state.floors.length; i++) {
        if (state.floors[i].key === floor.key) {
          Vue.set(state.floors, i, FloorChart.roll(Floor));
        }
      }
    },
  },
  actions: {
  },
});
