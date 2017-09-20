import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import vuexModules from '../vuex';
import loggerMiddleware from '../middleware/loggerMiddleware';
import debug from '../api/constants';

Vue.use(store);

const store = new Vuex.Store({
	modules: {
		...vuexModules
	},
	strict: debug,
	plugins: debug ? [createLogger(), loggerMiddleware] : []
});

export default store;