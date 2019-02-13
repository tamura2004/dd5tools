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
import Spell from '@/models/Spell';
import Npc from '@/models/Npc';
import Place from '@/models/Place';
import Item from '@/models/Item';
import Dungeon from '@/models/Dungeon';
import Floor from '@/models/Floor';
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
    setSpells(state: State, spells: { [key: string]: Spell} ) {
      state.spells = spells;
    },
    setItems(state: State, items: { [key: string]: Item} ) {
      state.items = items;
    },
    setNpcs(state: State, npcs: { [key: string]: Npc} ) {
      state.npcs = npcs;
    },
    setPlaces(state: State, places: { [key: string]: Place} ) {
      state.places = places;
    },
    setDungeons(state: State, dungeons: { [key: string]: Dungeon} ) {
      state.dungeons = dungeons;
    },
    setFloors(state: State, floors: { [key: string]: Floor} ) {
      state.floors = floors;
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
    listenSpells({commit}) {
      db.collection('spells').onSnapshot((query) => {
        const spells: { [key: string]: Spell } = {};
        query.forEach((doc) => {
          spells[doc.id] = new Spell({
            ...doc.data(),
          });
        });
        commit('setSpells', spells);
      });
    },
    listenNpcs({commit}) {
      db.collection('npcs').onSnapshot((query) => {
        const collection: { [key: string]: Npc } = {};
        query.forEach((doc) => {
          collection[doc.id] = new Npc({
            ...doc.data(),
          });
        });
        commit('setNpcs', collection);
      });
    },
    listenItems({commit}) {
      db.collection('items').onSnapshot((query) => {
        const collection: { [key: string]: Item } = {};
        query.forEach((doc) => {
          collection[doc.id] = new Item({
            ...doc.data(),
          });
        });
        commit('setItems', collection);
      });
    },
    listenPlaces({commit}) {
      db.collection('places').onSnapshot((query) => {
        const collection: { [key: string]: Place } = {};
        query.forEach((doc) => {
          collection[doc.id] = new Place({
            ...doc.data(),
          });
        });
        commit('setPlaces', collection);
      });
    },
    listenDungeons({commit}) {
      db.collection('dungeons').onSnapshot((query) => {
        const collection: { [key: string]: Dungeon } = {};
        query.forEach((doc) => {
          collection[doc.id] = new Dungeon({
            ...doc.data(),
          });
        });
        commit('setDungeons', collection);
      });
    },
    listenFloors({commit}) {
      db.collection('floors').orderBy('level').onSnapshot((query) => {
        const collection: { [key: string]: Floor } = {};
        query.forEach((doc) => {
          collection[doc.id] = new Floor({
            ...doc.data(),
          });
        });
        commit('setFloors', collection);
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
    addWeapon({state}, weapon: Weapon) {
      const id = state.current.playerId;
      const player = state.players[id];
      player.weapon.push(weapon.name);
      db.collection('players').doc(id).set({...player})
      .then()
      .catch((err) => alert(err));
    },
    deleteWeapon({state}, index: number) {
      const id = state.current.playerId;
      const player = state.players[id];
      player.weapon.splice(index, 1);
      db.collection('players').doc(id).set({...player})
      .then()
      .catch((err) => alert(err));
    },
    addSpell({state}, spellId: string) {
      const id = state.current.playerId;
      const player = state.players[id];
      if (!player.spells.includes(spellId)) {
        player.spells.push(spellId);
        db.collection('players').doc(id).set({...player})
        .then()
        .catch((err) => alert(err));
      }
    },
    deleteSpell({state}, spellId: string) {
      const id = state.current.playerId;
      const player = state.players[id];
      player.spells = player.spells.filter((i) => i !== spellId);
      db.collection('players').doc(id).set({...player})
        .then()
        .catch((err) => alert(err));
    },
  },
});
