import { Firestore } from '~/plugins/firebase.js';

const firestore = new Firestore('players');
export const state = firestore.state;
export const actions = firestore.actions;
export const mutations = firestore.mutations;
export const getters = {
    players: state => state.values,
    player: state => id => state.values.find(player => player.id === id),
};
