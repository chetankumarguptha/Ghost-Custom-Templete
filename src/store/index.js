import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";

import reducer from "../reducers";

import * as GHOSTAPI from "./ghost_all_posts_sagas";


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([
    GHOSTAPI.GhostAllPostsSaga(),
    GHOSTAPI.GhostPostByIDSaga()
  ]);
}
sagaMiddleware.run(rootSaga);
