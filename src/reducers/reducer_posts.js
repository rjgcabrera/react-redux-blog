import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_POST:
    // const post = action.payload.data;
    // // const newState = { ...state };
    // const newState = Object.assign({}, state);
    // newState[post.id] = post;
    // return newState;

    return { ...state, [action.payload.data.id]: action.payload.data };
    // above line is syntactic sugar for line below
    // return Object.assign({[post.id]: post}, state);
  case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}
