import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

store.dispatch('listenPlayers');
store.dispatch('listenSpells');
store.dispatch('listenItems');
store.dispatch('listenNpcs');
store.dispatch('listenPlaces');
store.dispatch('listenDungeons');
store.dispatch('listenGames');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
