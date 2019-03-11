import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import { listen } from '@/plugins/firebase';
import Session from '@/models/Session';
import Player from '@/models/Player';
import Dungeon from '@/models/Dungeon';
import Npc from '@/models/Npc';

Vue.config.productionTip = false;

listen(store, Session);
listen(store, Player);
listen(store, Dungeon);
listen(store, Npc);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
