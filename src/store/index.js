import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import vuexModules from '../vuex';
import { debug } from '../api/api.config';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...vuexModules
  }, 
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

export default store;
