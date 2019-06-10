import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { Store } from 'vuex';
import State from '@/models/State';
import _ from 'lodash';
import Creature from '@/models/Creature';
import store from '@/store';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyANamGza96l_HKbG-hsw73WvCFxNv_I_YY',
    authDomain: 'dd5tools.firebaseapp.com',
    databaseURL: 'https://dd5tools.firebaseio.com',
    projectId: 'dd5tools',
    storageBucket: 'dd5tools.appspot.com',
    messagingSenderId: '1096592466642',
});

export const db = firebaseApp.firestore();

export function listenCreature(encounterId: string): any {
  const unsubscribe = db.collection('creatures')
  .where('encounterId', '==', encounterId)
  .onSnapshot((query) => {
    const collection = new Map<string, any>();
    query.forEach((doc: any) => {
      collection.set(doc.id, new Creature({...doc.data()}));
    });
    store.commit({
      type: 'set',
      name: 'creatures',
      collection,
    });
  });
  return unsubscribe;
}

export function listen<T>(
  // store: Store<State>,
  fn: (new(init: Partial<T>) => T) & { collectionName: string },
) {
  const name = fn.collectionName;
  db.collection(name).onSnapshot((query) => {
    const collection = new Map<string, any>();
    query.forEach((doc: any) => {
      collection.set(doc.id, new fn({...doc.data()}));
    });
    store.commit({
      type: 'set',
      name,
      collection,
    });
  });
}
