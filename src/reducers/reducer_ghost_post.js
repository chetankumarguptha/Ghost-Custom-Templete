import * as TYPES from "../actions/types";

const initialState = {
  post: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_POST_BY_ID_GHOST_SUCCESS:
      return {...state, post: action.payload};
    default:
      return state;
  }
}
