import { Firestore } from "~/plugins/firebase.js";

const firestore = new Firestore("players");
export const state = firestore.state;
export const mutations = firestore.mutations;
export const actions = firestore.actions;
export const getters = firestore.getters;
