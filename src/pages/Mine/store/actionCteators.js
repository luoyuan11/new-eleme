import Cookie from 'react-cookies'

export const Userlogin=()=>{
  var username= { userId: Cookie.load('userId') }
  console.log(username)
  return{
    type:'COOKIE_TYPE',
    value:username.userId,
    path:'/pages/userInfo'
  }


}
