
const defaultState = {
  list: []
}

export default (state = defaultState, action) => {

  if (action.type === 'INIT_LIST') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list;
    return newState;
  }

  return state;
}
