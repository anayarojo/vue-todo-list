import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { VueSpinners } from '@saeris/vue-spinners';

import '@/plugins/element.js';
import '@/assets/css/tailwind.css';
import '@/assets/scss/style.scss';

Vue.use(VueSpinners);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
