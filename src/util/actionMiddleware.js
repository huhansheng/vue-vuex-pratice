// https://github.com/xuchenchenBoy/vue-template-base

import request from '@/util/request';

async function actionMiddleware(store, action) {
	const { type, promise, payload } = action;
	
	const [load, success, error] = type;

	store.commit(load);

	promise.then((results) => {
		if(results.data.feedbackMsg) {
			store.commit(success, { payload, result: results.data});
		}else if(results.data.errorMsg) {
			store.commit(error, {...payload, ...results.data});
		}
	}).catch(() => {
		store.commit(error);
	});
}

export default actionMiddleware;