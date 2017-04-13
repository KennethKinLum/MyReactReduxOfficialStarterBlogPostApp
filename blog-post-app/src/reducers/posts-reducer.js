import { FETCH_POSTS } from "../actions/index";

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  console.log("inside reducer, action is", action, action.type, "HM", FETCH_POSTS);
  if (action.error) {
    return state;
  }
  switch(action.type) {
    case FETCH_POSTS:
      console.log("this is the data", action.payload.data)
      return action.payload.data;
    default:
      return state;
  }
return state;
}
