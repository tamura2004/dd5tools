import 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Store } from 'vuex';
import State from '@/models/State';
import _ from 'lodash';

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
  getMap: () => Map<string, T>,
) {
  const name = fn.collectionName;
  db.collection(name).onSnapshot((query) => {
    const collection = _.cloneDeep(getMap());
    query.docChanges().forEach((change: any) => {
      if (change.type === 'added' || change.type === 'modified') {
        collection.set(change.doc.id, new fn({...change.doc.data()}));
      }
    });
    store.commit({
      type: 'set',
      name,
      collection,
    });
  });
}
