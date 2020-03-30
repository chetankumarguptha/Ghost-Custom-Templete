import * as TYPES from "../actions/types";

const initialState = {
  allPosts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_ALL_GHOST_POSTS_SUCCESS:
      return {...state, allPosts: action.payload};
    default:
      return state;
  }
}
