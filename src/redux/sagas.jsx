import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_DATA_SUCCESS } from './action';

function* fetchData() {
	return fetch('https://dummyjson.com/products/1').then((response) =>
		response.json()
	);
}

function* fetchDataFromAPI() {
	const res = yield call(fetchData);
	yield put({ type: FETCH_DATA_SUCCESS, res });
}

function* mySaga() {
	yield takeEvery('FETCH_DATA_SUCCESS', fetchDataFromAPI);
}

export default mySaga;
