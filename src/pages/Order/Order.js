import React, { Component } from 'react';
import OrderUI from './OrderUI';
import { initListAsync, haveCookid } from './store/actions';
import { connect } from 'react-redux';
import store from '../../store/index';

class Order extends Component {
  render() {
    return (
      <OrderUI {...this.props}/>
    )
  }

  componentDidMount() {
    store.dispatch(haveCookid());
    store.dispatch(initListAsync());
  }
}

const mapStateToProps = ({ Order }) => {
  return {
    list: Order.list,
    userID: Order.userID,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
