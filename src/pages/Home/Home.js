import React, { Component } from 'react';
import { initLIstAsync, bannerIstAsync, shopsIstAsync, PositionAsync } from './store/actionCteators'
import HomeUI from './HomeUI.js';
import { connect } from 'react-redux';
import store from '../../store/index';
class Home extends Component {

  render() {
    return (
      <HomeUI {...this.props}></HomeUI>
    )
  }
  componentDidMount() {
    store.dispatch(initLIstAsync());
    store.dispatch(bannerIstAsync())
    store.dispatch(shopsIstAsync());
    store.dispatch(PositionAsync());
  }
}

const mapStateToProps = ({ Home }) => {
  return {
    list: Home.HomeList,
    bannerlist: Home.bannerList,
    shopslist: Home.shopsList,
    position: Home.position,
  }
};

const mapDispatchToProps = (dispatch)=>{
  return{
    Search:()=>{
      console.log(11111);
      var obj=document.getElementById("position");
      obj.style.display='block';
      obj.setAttribute('className','p_banner')
      console.log(obj);

    },
    positions:()=>{
      console.log('这里是定位');
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
