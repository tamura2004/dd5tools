import firebase from 'firebase/app';
import 'firebase/firestore';
import Vue from 'vue';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyANamGza96l_HKbG-hsw73WvCFxNv_I_YY',
    authDomain: 'dd5tools.firebaseapp.com',
    databaseURL: 'https://dd5tools.firebaseio.com',
    projectId: 'dd5tools',
    storageBucket: 'dd5tools.appspot.com',
    messagingSenderId: '1096592466642',
  });
}

export const db = firebase.firestore();

export class Firestore {
  constructor(name) {
    this.name = name;
  }
  get state() {
    return () => ({
      values: [],
      unsubscribe: null,
    });
  }
  get mutations() {
    return {
      add(state, { id, data }) {
        state.values.push({ id, ...data });
      },
      modify(state, { id , data }) {
        const index = state.values.findIndex((value) => value.id === id);
        const value = { id, ...data };
        Vue.set(state.values, index, value);
      },
      setUnsubscribe(state, unsubscribe) {
        state.unsubscribe = unsubscribe;
      }
    };
  }
  get actions() {
    return {
      add: ({}, { data }) =>
        db.collection(this.name).add({
          ...data,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
      ),
      modify:({}, { id, data }) => {
        db.collection(this.name).doc(id).update({ ...data });
      },
      listen: ({ state, commit }) => {
        if (state.unsubscribe !== null) {
          return;
        }
        const unsubscribe = db.collection(this.name).onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            const id = change.doc.id;
            const data = change.doc.data();
            if (change.type === 'added') {
              commit('add', { id, data });
            } else if (change.type === 'modified') {
              commit('modify', { id, data });
            }
          });
        });
        commit('setUnsubscribe', unsubscribe);
      },
    };
  }
}
