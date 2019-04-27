import { createStore, applyMiddleware, combineReducers } from "redux";

import createSagaMiddleware from "redux-saga";
import sagas from "edist-core/lib/redux-modules/root.saga";
import rootReducer from "edist-core/lib/redux-modules/root.reducer";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagas.forEach(sagaMiddleWare.run);
export default store;
