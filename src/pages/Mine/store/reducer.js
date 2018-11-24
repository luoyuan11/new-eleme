let defaultState ={
  title:'登录注册',
  header:'我的',
  path:'/pages/Login',
  tip:'登录后享受更多'
}


export default  (state=defaultState,action)=>{
  if (action.type === 'COOKIE_TYPE'&& action.value!==undefined) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.title = action.value;
    newState.path=action.path;
    console.log(newState);
    return newState;
  }
  return state
}
