import React, { Component } from 'react';
import OrderUI from './OrderUI';
import { initListAsync } from './store/actions';
import store from './store/index';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
      console.log(this.state)
    })
  }
  render() {
    return (
      <OrderUI
        list={this.state.list}
        />
    )
  }

  componentDidMount() {
    store.dispatch(initListAsync());
    setTimeout(() => {
      console.log(this.state)
    },1000);
  }

}

export default Order;
