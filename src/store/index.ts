import { createStore, applyMiddleware, Store, Middleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

import reducer from "../reducers";
import saga from "../sagas";

const sagaMiddleware: SagaMiddleware<Middleware> = createSagaMiddleware();

const store: Store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

// const action = type => store.dispatch({type})

export default store;
