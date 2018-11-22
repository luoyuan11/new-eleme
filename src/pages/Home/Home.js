import React, { Component } from 'react';
import { initLIstAsync, bannerIstAsync, shopsIstAsync, PositionAsync ,toggle} from './store/actionCteators'
import HomeUI from './HomeUI.js';
import { connect } from 'react-redux';
import store from '../../store/index';
import { SearchBar, Grid, Carousel, WingBlank } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
import './Home.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    // this.toggle = this.toggle.bind(this);
  }

  // toggle() {
  //   this.setState({
  //     show: !this.state.show
  //   })
  // }
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
    show:Home.show,
  }
};

const mapDispatchToProps = (dispatch)=>{
  return{
    toggle:()=>{
      dispatch(toggle())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
