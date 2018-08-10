import { createStore, applyMiddleware, Store, Middleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { routerMiddleware } from "react-router-redux";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { History, createBrowserHistory } from "history";

import reducer from "../reducers";
import saga from "../sagas";

export const history: History = createBrowserHistory();

const sagaMiddleware: SagaMiddleware<Middleware> = createSagaMiddleware();
const middleware: Middleware[] = [ routerMiddleware(history), sagaMiddleware ];

const store: Store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(saga);

export default store;
