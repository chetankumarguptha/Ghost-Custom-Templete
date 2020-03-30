import {combineReducers} from 'redux';

import AllPosts from './reducer_all_ghost_posts';
import Post from './reducer_ghost_post';

const rootReducer = combineReducers({
  allPosts: AllPosts,
  post: Post,
})

export default rootReducer;
