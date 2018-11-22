
let defaultState = {
  title: '发现',
  findList: [1,2],
  goodsList: [1,2]
}

export default (state=defaultState, action) => {
  if(action.type === 'GET_FINDLIST') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.findList = action.data;
    return newState;
  }
  if(action.type === 'GET_GOODSLIST') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.goodsList = action.data;
    return newState;
  }
  return state;
}

