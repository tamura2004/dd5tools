import 'firebase/firestore';
import firebase from 'firebase/app';
import { Store } from 'vuex';
import State from '@/models/State';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyANamGza96l_HKbG-hsw73WvCFxNv_I_YY',
    authDomain: 'dd5tools.firebaseapp.com',
    databaseURL: 'https://dd5tools.firebaseio.com',
    projectId: 'dd5tools',
    storageBucket: 'dd5tools.appspot.com',
    messagingSenderId: '1096592466642',
});

export const db = firebaseApp.firestore();

export function listen<T>(
  store: Store<State>,
  fn: (new(init: Partial<T>) => T) & { collectionName: string },
) {
  const name = fn.collectionName;
  db.collection(name).onSnapshot((query) => {
    const collection: { [key: string]: T } = {};
    query.forEach((doc: any) => {
      collection[doc.id] = new fn({...doc.data()});
    });
    store.commit({
      type: 'set',
      name,
      collection,
    });
  });
}
