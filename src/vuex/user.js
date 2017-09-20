const GET_USER_INFO = 'USER.GET_USER_INFO';
const GET_USER_INIFO_SUC = 'USER.GET_USER_INIFO_SUC';
const GET_USER_INFO_ERR = 'USER.GET_USER_INFO_ERR';

const user = {
  state: {
    loading: false,
    userInfo: null,
  },
  mutactions: {
    GET_USER_INFO: state => {
    	state.loading = true;
    }
  },
  actions: {
  	getUserInfo({ commit }, params) {
  		commit(GET_USER_INFO, params);
  	}
  }
};

export default user;