import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import State from '@/models/State';
import Party from '@/models/Party';
import Encounter from '@/models/Encounter';
import { Difficulty } from '@/data/DATA';
import { Player } from '@/models/Player';
import { Game } from '@/models/Game';
import API from '@/api';

const CR = [
  Difficulty.Easy,
  Difficulty.Normal,
  Difficulty.Normal,
  Difficulty.Normal,
  Difficulty.Hard,
  Difficulty.Deadly,
];

export default new Vuex.Store({
  state: new State(),
  getters: {
  },
  mutations: {
    setParty(state: State, party: Party) {
      state.party = party;
    },
    setRandomMonsters(state: State) {
      for (let i = 0; i < 6; i++) {
        const enc = new Encounter(state.party, CR[i]);
        state.monsters.splice(i, 1, enc.monster());
      }
    },
    clearPlayers(state: State) {
      state.players = [];
    },
    setPlayers(state: State, data: Array<Partial<Player>>) {
      data.reverse().forEach((init) => state.players.push(new Player(init)));
    },
    clearGames(state: State) {
      state.games = [];
    },
    setGames(state: State, data: Array<Partial<Game>>) {
      data.reverse().forEach((init) => state.games.push(new Game(init)));
    },
  },
  actions: {
    getPlayers({commit}) {
      commit('clearPlayers');
      API.get('/players')
        .then((res) => commit('setPlayers', res.data))
        .catch((e) => alert(e));
    },
    getGames({commit}) {
      commit('clearGames');
      API.get('/games')
        .then((res) => commit('setGames', res.data))
        .catch((e) => alert(e));
    },
  },
});
