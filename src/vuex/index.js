
// use webpack require other modules
const content = require.context('./', false, /\.js$/);
const list = content.keys().filter((item) => item !== './index.js');
const vuexModules = list.reduce((obj, key) => {
  obj[key.replace(/(.*\/)*([^.]+).*/ig, '$2')] = content(key).default;
  return obj;
}, {});

export default vuexModules;
