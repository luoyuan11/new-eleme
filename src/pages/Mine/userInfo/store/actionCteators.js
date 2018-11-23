import Cookie from 'react-cookies'

export const outlogin=()=>{
  var username= { userId: Cookie.load('userId') }
  console.log(username)
  return{
    type:'OUTLOGIN',
    value:username.userId,
    path:'/pages/Mine/Mine'
  }


}
