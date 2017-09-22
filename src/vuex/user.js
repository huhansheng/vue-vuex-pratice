
import actionMiddleware from '@/util/actionMiddleware';
import request from '@/util/request';

const GET_USER_INFO = 'USER.GET_USER_INFO';
const GET_USER_INFO_LOAD = 'USER.GET_USER_INFO_LOAD';
const GET_USER_INIFO_SUC = 'USER.GET_USER_INIFO_SUC';
const GET_USER_INFO_ERR = 'USER.GET_USER_INFO_ERR';

const user = {
  state: {
    loading: false,
    result: '',
    userInfo: {}
  },
  getter () {

  },
  mutations: {
    [GET_USER_INFO] (state, payload) {
      state.userInfo = payload;
    },
    [GET_USER_INFO_LOAD] (state) {
      state.loading = true;
    },
    [GET_USER_INIFO_SUC] (state, action) {
      state.loading = false;
      state.result = action.result;
      state.userInfo = action.payload;
    },
    [GET_USER_INFO_ERR] (state) {
      state.loading = false;
    }
  },
  actions: {
    getUserInfo ({ commit }, payload) {
      commit(GET_USER_INFO, payload);
    },
    getUser (store, payload) {
      const action = {
        type: [GET_USER_INFO_LOAD, GET_USER_INIFO_SUC, GET_USER_INFO_ERR],
        promise: request.get('http://localhost:3000/server', payload),
        payload
      };
      actionMiddleware(store, action);
    }
  }
};

export default user;
