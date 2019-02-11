import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import State from '@/models/State';
import Party from '@/models/Party';
import { Weapon } from '@/models/Weapon';
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
      state.players = {};
    },
    setPlayers(state: State, players: { [key: string]: Player} ) {
      state.players = players;
    },
    setCurrentPlayerId(state: State, id: string) {
      state.current.playerId = id;
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
        const players: { [key: string]: Player } = {};
        query.forEach((doc) => {
          players[doc.id] = new Player({
            ...doc.data(),
          });
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
    addWeapon({commit, state}, weapon: Weapon) {
      const id = state.current.playerId;
      const player = state.players[id];
      player.weapon.push(weapon.name);
      db.collection('players').doc(id).set({...player})
      .then()
      .catch((err) => alert(err));
    },
    deleteWeapon({commit, state}, i: number) {
      const id = state.current.playerId;
      const player = state.players[id];
      player.weapon.splice(i, 1);
      db.collection('players').doc(id).set({...player})
      .then()
      .catch((err) => alert(err));
    }
  },
});
