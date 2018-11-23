import { INIT_LIST, GET_COOKIE } from './actionTypes';
const defaultState = {
  list: [],
  userID: '',
}

export default (state = defaultState, action) => {
  if(action.type === INIT_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list;
    return newState;
  }

  if(action.type === GET_COOKIE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.userID = action.userID;
    return newState;
  }

  return state;
}
