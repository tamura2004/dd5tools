import Vue from 'vue';
import './plugins/vuetify';
import './registerServiceWorker';
import router from './router';
import store from './store';
import App from './App.vue';

import { Player } from '@/models/Player';
import Spell from '@/models/Spell';
import Item from '@/models/Item';
import Npc from '@/models/Npc';
import Place from '@/models/Place';
import Dungeon from '@/models/Dungeon';
import Floor from '@/models/Floor';

import { listen } from '@/plugins/firebase';

Vue.config.productionTip = false;

listen(store, Player);
listen(store, Spell);
listen(store, Item);
listen(store, Npc);
listen(store, Place);
listen(store, Dungeon);
listen(store, Floor);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
