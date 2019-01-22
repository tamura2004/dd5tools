import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire);

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyANamGza96l_HKbG-hsw73WvCFxNv_I_YY',
    authDomain: 'dd5tools.firebaseapp.com',
    databaseURL: 'https://dd5tools.firebaseio.com',
    projectId: 'dd5tools',
    storageBucket: 'dd5tools.appspot.com',
    messagingSenderId: '1096592466642',
});

export const db = firebaseApp.firestore();
