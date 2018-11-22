import React from 'react';
import './order.scss';

const OrderUI = (props) => {
  return (
    <div className="OrderList">
      {/* { props.list } */}
      <section className="noDtata">
        <img src="//fuss10.elemecdn.com/2/50/8019fbaebac2aaa76e2d9b5e5b407gif.gif" alt=""/>
        <h3>购物车是空的</h3>
      </section>
    </div>
  )
}

export default OrderUI;
