const content = require.context('./', false, /\.js$/);
const vuexList = content.keys().filter((item) => item !== './index.js');
const vuexModules = vuexList.reduce((vuexObj, key) => {
  vuexObj[key.replace(/(.*\/)*([^.]+).*/ig, '$2')] = content(key).default;
  return vuexObj;
}, {});

export default vuexModules;
