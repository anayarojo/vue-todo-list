import Vue from 'vue';
import Vuex from 'vuex';
import session from '@/store/modules/session';
import tasks from '@/store/modules/tasks';
import plugins from '@/store/plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    tasks,
  },
  plugins,
});
