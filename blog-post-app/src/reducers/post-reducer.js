import { FETCH_POST } from "../actions/index";
const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  if (action.error) {
    return INITIAL_STATE;
  }
  switch (action.type) {
    case FETCH_POST:
      return action.payload.data;
    default:
      return state;
  }

}
