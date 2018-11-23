import React, { Component } from 'react';
import { initLIstAsync, bannerIstAsync, shopsIstAsync, PositionAsync ,toggle ,RowClick ,hotsearch,windowOnScroll ,Header} from './store/actionCteators'
import HomeUI from './HomeUI.js';
import { connect } from 'react-redux';
import store from '../../store/index';
// import { SearchBar, Grid, Carousel, WingBlank } from 'antd-mobile';
// import { NavLink } from 'react-router-dom';
import './Home.scss';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer'


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
    store.dispatch(RowClick());

    window.addEventListener('scroll',function(){
      var h=this.window.scrollY;
      if(h>35){
        store.dispatch(windowOnScroll());
      }else{
        store.dispatch(Header())
      }
  })
  }
}

const mapStateToProps = ({ Home }) => {
  return {
    list: Home.HomeList,
    bannerlist: Home.bannerList,
    shopslist: Home.shopsList,
    position: Home.position,
    show:Home.show,
    HomeShow:Home.HomeShow,
    HotSearchList:Home.HotSearchList,
    conentClassName:Home.conentClassName
  }
};

const mapDispatchToProps = (dispatch)=>{
  return{
    toggle:()=>{
      dispatch(toggle())
    },
    hotsearch:()=>{
      dispatch(hotsearch())
    },
    windowOnScroll:()=>{
      dispatch(windowOnScroll());
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
