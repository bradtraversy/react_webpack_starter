import { createStore, applyMiddleware, Store, Middleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import reducer from "../reducers";
import saga from "../sagas";

const sagaMiddleware: SagaMiddleware<Middleware> = createSagaMiddleware();

const store: Store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);

// const action = type => store.dispatch({type})

export default store;
