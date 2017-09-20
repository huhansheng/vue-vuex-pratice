const content = require.context('./', false, /\.js$/);
const vuexList = content.filter((item) => items !== './index.js');
const vuexModules = vuexList.reduce((vuexObj, key) => {
	vuexObj[key.replace(/(.*\/)*([^.]+).*/ig, '$2')] = content(key).default;
	return vuexObj;
}, {});

export default vuexModules;