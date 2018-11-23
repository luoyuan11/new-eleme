import React, { Fragment } from 'react';
import './order.scss';
import Footer from '../../components/Footer';
import { Icon } from 'antd-mobile';

const OrderUI = (props) => {
  console.log(props)
  return (
    <Fragment>
      <header>
        <Icon type="left" color="#fff" />
        <p>订单</p>
      </header>
      <div className="order" style={{ display: `${props.userID.aaa}` }}>
        <ul className="goodsList">
          {
            props.list.map((item, index) => {
              return (
                <li key={index}>
                  <img src={`https://fuss10.elemecdn.com/${item.restaurant_image_hash}`} alt=""/>
                  <div className="goodsInfo">
                    <div className="shopName">
                      <span>{item.restaurant_name}</span>
                      <p>{item.timeline_node.title}</p>
                    </div>
                      <p className="orderTime">{item.formatted_created_at}</p>
                    <div className="goods_price">
                      <span className="goods">{item.basket.group[0][0].name}</span>
                      <p className="price">￥{item.basket.group[0][0].price}</p>
                    </div>
                    <div className="todo">
                      <button>再来一单</button>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="unLogin" style={{ display: `${ props.userID.bbb }` }}>
        <section>
          <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt=""/>
          <h3>登录后查看订单</h3>
          <button>点击登录</button>
        </section>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default OrderUI;
