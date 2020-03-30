import {takeLatest} from "redux-saga/effects";

import * as TYPES from '../actions/types';

import {fetchAllPostsFromGhostAPI, fetchPostByIDFromGhostAPI} from "../actions/all_posts";

export function* GhostAllPostsSaga() {
  yield takeLatest(TYPES.FETCH_ALL_GHOST_POSTS_REQUEST, fetchAllPostsFromGhostAPI)
}


export function* GhostPostByIDSaga() {
  yield takeLatest(TYPES.FETCH_POST_BY_ID_GHOST_REQUEST, fetchPostByIDFromGhostAPI)
}
