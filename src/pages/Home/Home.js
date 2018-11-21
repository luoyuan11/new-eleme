import React, { Component } from 'react';
import {initLIstAsync,bannerIstAsync ,shopsIstAsync} from './store/actionCteators'
import HomeUI from './HomeUI.js';
import {connect} from 'react-redux';
import store from '../../store/index';
class Home extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     list:''
  //   }
  // }
  render() {
    return (
      <HomeUI { ...this.props }></HomeUI>
    )
  }
  componentDidMount(){
    store.dispatch(initLIstAsync());
    store.dispatch(bannerIstAsync())
    store.dispatch(shopsIstAsync())
  }
}
const mapStateToProps = ({Home})=>{
  return{
    list:Home.HomeList,
    bannerlist:Home.bannerList,
    shopslist:Home.shopsList
  }
};

const mapDispatchToProps = null;

export default connect(mapStateToProps,mapDispatchToProps)(Home);
