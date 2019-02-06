import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// import { Route } from 'vue-router';
import { Difficulty } from '@/data/DATA';

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   if (to.path === '/monsters' && store.state.party.totalExp(Difficulty.Easy) < 25) {
//     next({ path: 'parties'});
//   } else {
//     next();
//   }
// });

store.dispatch('listenPlayers');
store.dispatch('listenGames');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
