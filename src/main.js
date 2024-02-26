/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { dbClient } from './lib/db';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  setup() {
    provide(DefaultApolloClient, dbClient);
  },
}).$mount('#app');
