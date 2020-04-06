import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
import '@/plugins/element.js';
import '@/assets/css/tailwind.css';
import '@/assets/scss/style.scss';

import { VueSpinners } from '@saeris/vue-spinners';
Vue.use(VueSpinners);
Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
