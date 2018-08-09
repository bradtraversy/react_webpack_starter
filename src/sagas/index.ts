import { SagaIterator } from "redux-saga";
import { put, takeEvery, all, call, take } from "redux-saga/effects";

import { startFetchingData, fetchDataSuccess, fetchDataError } from "../actions/MainActions";
import { FETCH_DATA } from "../actions/MainActions/MainTypes";

function* watchFetchData(): SagaIterator {
    while (true) {
        yield take(FETCH_DATA);
        yield put(startFetchingData());
        yield put(fetchDataSuccess([]));
    }
}

// TODO: Define type
function* rootSaga(): any {
    yield all([
        watchFetchData(),
    ]);
}

export default rootSaga;
