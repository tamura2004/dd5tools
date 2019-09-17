import { Firestore } from "~/plugins/firebase.js";
const firestore = new Firestore("players");

export const { state, getters, mutations, actions } = firestore;
