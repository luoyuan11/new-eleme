import Cookie from 'react-cookies'
let defaultState ={
  title:Cookie.load('userId'),
  header:'账户信息',
  path:'/pages/userInfo'
}


export default  (state=defaultState,action)=>{
  if (action.type === 'OUTLOGIN'&& action.value===undefined) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.path=action.path;
    console.log(newState);
    return newState;
  }
  return state
}
