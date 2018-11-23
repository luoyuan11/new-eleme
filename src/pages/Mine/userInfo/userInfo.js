import store from '../../../store/index';
import React, { Component } from 'react';
import { outlogin } from "./store/actionCteators";
import { connect } from 'react-redux';
import UserinfoUI from './userInfoUI'


class userInfo extends Component{
  render() {
    return (
      <UserinfoUI {...this.props}/>
    )
  }
  componentDidMount() {

      // Userlogin(props){
      //   var username= { userId: Cookie.load('userId') }
      // }
      store.dispatch(outlogin());
      // store.dispatch(initListAsync());

  }
}

const mapStateToProps=({userInfo})=>{

  return {
    title:userInfo.title,
    header:userInfo.header,
    path:userInfo.path
  }
};
const mapDispatchToProps=(dispatch)=>{
      return{
        outlogin:()=>{
          dispatch(outlogin())
        }
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(userInfo);
