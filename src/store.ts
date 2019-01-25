import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import State from '@/models/State';
import Party from '@/models/Party';
import Encounter from '@/models/Encounter';
import { Difficulty } from '@/data/DATA';
import { Player } from '@/models/Player';
import { Game } from '@/models/Game';
import { db } from '@/plugins/firebase';
// import createEasyFirestore from 'vuex-easy-firestore';

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
    setPlayers(state: State, players: Player[]) {
      state.players = players;
    },
    clearGames(state: State) {
      state.games = [];
    },
    setGames(state: State, games: Game[]) {
      state.games = games;
    },
    // setGames(state: State, data: Array<Partial<Game>>) {
    //   data.reverse().forEach((init) => state.games.push(new Game(init)));
    // },
  },
  actions: {
    listenPlayers({commit}) {
      db.collection('players').onSnapshot((query) => {
        const players: Player[] = [];
        query.forEach((doc) => {
          players.push(new Player({
            id: doc.id,
            ...doc.data(),
          }));
        });
        commit('setPlayers', players);
      });
    },
    listenGames({commit}) {
      db.collection('games').onSnapshot((query) => {
        const games: Game[] = [];
        query.forEach((doc) => {
          games.push(new Game({
            id: doc.id,
            ...doc.data(),
          }));
        });
        commit('setGames', games);
      });
    },
    createGame(context, game: Game) {
      const form = {
        gm: game.gm,
        title: game.title,
        players: game.players.map((player: Player) => ({...player})),
      };
      db.collection('games').add(form)
        .then((doc) => alert('セッションを登録しました'))
        .catch((err) => alert(err));
      },
      updateGame(context, game: Game) {
        db.collection('games').doc(game.id).set({...game})
        .then((doc) => alert('セッションを更新しました'))
        .catch((err) => alert(err));
    },
  },
});
