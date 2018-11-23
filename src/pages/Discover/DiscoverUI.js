import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/index';
import './discover.scss';
import { NavBar, Icon } from 'antd-mobile';


const DiscoverUI = (props) => {
  return (
    <Fragment>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
      >
      发现
      </NavBar>
      <div className="elm-discover">
        {/* discover 上半部分 */}
        <ul className="discover_hd">
          {
            props.findList.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`findList${index}`}
                  >
                  <Link to='/'>
                    <div className="list_left">
                      <span className={`title${index} title`}>{item.title}</span>
                      <span className="subtitle">{item.subtitle}</span>
                    </div>
                    <img src={`https://fuss10.elemecdn.com/${item.main_pic_hash}.jpeg`} alt=""/>
                  </Link>
                </li>
              )
            })
          }
        </ul>
        {/* discover 下半部分 */}
        <div className="discover_bd">
          <div className="goodsTitle">
            <div className="line"></div>
            <h2 className="title">
              <i className="iconfont icon-alarm"></i>
              限时好礼
            </h2>
            <p>金币换豪礼</p>
          </div>
          <ul className="goodsList">
            {
              props.goodsList.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to="/">
                      <span className="corner_marker">{item.corner_marker}</span>
                      <img src={`https://fuss10.elemecdn.com/${item.image_hash}.jpeg`} alt=""/>
                      <p className="title">{item.title}</p>
                      <div>
                        <span className="points_required">{item.points_required}金币</span>
                        <del>￥{item.original_price}</del>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <p className="more">
            <a href="#/" className="moreGoodsList">查看更多  ></a>
          </p>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default DiscoverUI;
