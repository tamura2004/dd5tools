import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import { listen } from '@/plugins/firebase';
import Session from '@/models/Session';
import Encounter from '@/models/Encounter';
import Creature from '@/models/Creature';
import Player from '@/models/Player';
import Dungeon from '@/models/Dungeon';
import Npc from '@/models/Npc';
import Spell from '@/models/Spell';
import Reward from '@/models/Reward';
import Log from '@/models/Log';

Vue.config.productionTip = false;

listen(store, Session);
listen(store, Encounter);
listen(store, Creature);
listen(store, Player);
listen(store, Dungeon);
listen(store, Npc);
listen(store, Spell);
listen(store, Reward);
listen(store, Log);

new Vue({
  data: {
    drawer: false,
    processing: false,
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
