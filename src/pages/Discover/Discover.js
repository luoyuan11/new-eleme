import React, { Component } from 'react';
import { connect } from 'react-redux';
import DiscoverUI from './DiscoverUI';
import { getFindList, getGoodsList } from './store/actionCreators';
import store from '../../store/index';

class Discover extends Component {
  render() {
    return (
      <DiscoverUI {...this.props}/>
    )
  }
  componentDidMount() {
    store.dispatch(getFindList());
    store.dispatch(getGoodsList());
  }
}

const mapStateToProps = ({Discover}) => {
  return {
    title: Discover.title,
    findList: Discover.findList,
    goodsList: Discover.goodsList
  }
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
