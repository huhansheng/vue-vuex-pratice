import axios from 'axios';

function get (url, params) {
  return axios.get(url, {params});
}

function post (url, params) {
  return axios.post(url, params);
}

export default { post, get };
