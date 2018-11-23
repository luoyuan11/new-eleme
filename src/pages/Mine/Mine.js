import store from '../../store/index';
import React, { Component } from 'react';
import { Userlogin } from "./store/actionCteators";
import { connect } from 'react-redux';
import MineUI from './MineUI'


class Mine extends Component{
  render() {
    return (
      <MineUI {...this.props}/>
    )
  }
  componentDidMount() {

      // Userlogin(props){
      //   var username= { userId: Cookie.load('userId') }
      // }
      store.dispatch(Userlogin());
      // store.dispatch(initListAsync());

  }
}

const mapStateToProps=({Mine})=>{

  return {
    title:Mine.title,
    header:Mine.header,
    path:Mine.path
  }
};
const mapDispatchToProps=(dispatch)=>{
      return{
        toggle:()=>{
          dispatch(Userlogin())
        }
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(Mine);

