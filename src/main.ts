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
import Feat from '@/models/Feat';

import uppperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

Vue.config.productionTip = false;

listen(store, Session, () => store.state.sessions);
listen(store, Encounter, () => store.state.encounters);
listen(store, Creature, () => store.state.creatures);
listen(store, Player, () => store.state.players);
listen(store, Dungeon, () => store.state.dungeons);
listen(store, Npc, () => store.state.npcs);
listen(store, Spell, () => store.state.spells);
listen(store, Feat, () => store.state.feats);

const requireComponent = require.context(
  './components',
  false,
  /\w+\.vue$/,
);

requireComponent.keys().forEach((fileName: any) => {
  const componentConfig = requireComponent(fileName);
  const componentName = uppperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, ''),
    ),
  );
  Vue.component(
    componentName,
    componentConfig.default || componentConfig,
  );
});

new Vue({
  data: {
    drawer: false,
    processing: false,
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
