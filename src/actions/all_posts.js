/**
 * @Author: Seelamsetty Ramesh <ramesh>
 * @Date:   2018-01-29T08:59:08-08:00
 * @Email:  ramesh@cheerlabs.com
 * @Last modified by:   ramesh
 * @Last modified time: 2019-07-27T06:52:30-07:00
 * @License: Proprietary and confidential. Unauthorized copying of this file, via any medium is strictly prohibited.
 * @Copyright: Copyright (c) 2017-present Cheer Labs Inc. All Rights Reserved.
 */

import {call, put} from "redux-saga/effects";

import * as TYPES from "./types";

const ROOT_URL = `https://blogserver.advisorsapp.com/ghost/api/v3/content/posts`;

const KEY = "?key=bab291ed673a926d34090f27f6"


const api = (url) =>
  fetch(url, {
    method: "get",
  }).then(response => response.json());

  export const fetchAllPostsFromGhostAPIRequest = () => {
    return {type: TYPES.FETCH_ALL_GHOST_POSTS_REQUEST};
  };

  export function* fetchAllPostsFromGhostAPI(action) {
    try {
      const request = yield call(api, `${ROOT_URL}/${KEY}`);
      yield put({type: TYPES.FETCH_ALL_GHOST_POSTS_SUCCESS, payload: request});
    } catch (e) {
      yield put({type: TYPES.FETCH_ALL_GHOST_POSTS_FAILURE, payload: "serror"});
    }
  }

  export const fetchPostByIDFromGhostAPIRequest = (postId) => {
    return {type: TYPES.FETCH_POST_BY_ID_GHOST_REQUEST, data: postId};
  };

  export function* fetchPostByIDFromGhostAPI(action) {
    try {
      const request = yield call(api, `${ROOT_URL}/${action.data}/${KEY}`);
      yield put({type: TYPES.FETCH_POST_BY_ID_GHOST_SUCCESS, payload: request});
    } catch (e) {
      yield put({type: TYPES.FETCH_POST_BY_ID_GHOST_FAILURE, payload: "serror"});
    }
  }
