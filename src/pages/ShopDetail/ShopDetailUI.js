import React from 'react';
import './ShopDetail.scss';
import { Tabs } from 'antd-mobile';


const ShopDetailUI = (props) => {
  return (
    <div className="elm-shopDetail">
      <div className="elm-shopDetail_hd">
        <img src={props.getImg(props.shop_sign_image)} alt="" className="bg_hd" />
        <div className="bg_hd_mask"></div>
        <img src={props.getImg(props.brandImg)} alt="" className="brandImg" />
        <i
          className="iconfont icon-zuojiantou"
          onClick={props.history.goBack}
          >
        </i>
      </div>
      <div className="hd_content">
        <h2 className="shopName">{props.name}</h2>
        <p className="shopInfo">
          <span>评价{props.rating}</span>
          <span>月销售{props.recent_order_num}单</span>
          <span>蜂鸟快送约<i>{props.order_lead_time}</i>分钟</span>
        </p>
        <div className="redPacket">
          共<span className="money">￥{props.moneyValue}</span>店铺
          <span className="receive">领取</span>
        </div>
        <div className="activities">
          <ul className="activities_ul">
            {
            props.activities.map((item,index) => {
              return (
                <li
                  className="activities_content"
                  key={index}
                  >
                  <span className="activity_name">{item.name}</span>
                  <span>{item.description}</span>
                </li>
              )
            })
          }
          </ul>
          <span className="activity_discount">{props.activities.length}个优惠</span>
        </div>
        <p className="notice">公告：{props.promotion_info}</p>
      </div>
      <div className="shopDetail_main">
        <Tabs
          tabs={props.tabs}
          initialPage={0}
          animated={false}
          useOnPan={false}>
          <div className="shopRecommend">
            <img src={props.getImg(props.recommend_banner)} alt="" className="recommend_banner" />
            <h2 className="recommendTitle">{props.recommendTitle}</h2>
            <ul className="recommendInfo">
              {
                props.recommendInfo.map((item, index) => {
                  return (
                    <li
                      className=""
                      key={index}
                      >
                      <img src={props.getImg(item.image_path)} alt="" />
                      <p className="foodName">{item.name}</p>
                      <p className="foodSoleInfo">
                        <span>月售{item.month_sales}</span>
                        <span>好评率{item.satisfy_rate}%</span>
                      </p>
                      <div className="addShopCar">
                        <p className="price">￥{item.specfoods[0].price}</p>
                        <span className="addShopCar_add">+</span>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            <div className="foodInfo">
              <Tabs
                tabs={props.list_left_name}
                tabBarPosition={'left'}
                tabDirection={'vertical'}
                renderTabBar={
                  props => <Tabs.DefaultTabBar {...props} page={12} />
                }
                tabBarBackgroundColor={'#F8F8F8'}
                tabBarInactiveTextColor={'#666'}
                tabBarTextStyle={{fontSize: 12}}
                >
                {
                  props.menu.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className='food_type'
                        >
                        <p className="title">
                          <span className="titleName">{item.name}</span>
                          <span className="titleDescription">{item.description}</span>
                        </p>
                        <ul>
                          {
                            item.foods.map((item, index) => {
                              return (
                                <li key={index}>
                                  {/* <span>新品</span> */}
                                  <img src={props.getImg(item.image_path)} alt=""/>
                                  <div style={{width: '140px'}}>
                                    <h3 className="foodName">{item.name}</h3>
                                    <p className="foodDescription">{item.description}</p>
                                    <p className="foodSoleInfo">
                                      <span>月售{item.month_sales}</span>
                                      <span>好评率{item.satisfy_rate}</span>
                                    </p>
                                    <p className="foodPrice">
                                      <span className="price">￥{item.specfoods[0].price}</span>
                                      <span className="add">+</span>
                                    </p>
                                  </div>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </Tabs>
            </div>
          </div>
          <div className="shopComments">
            此内容为评价。。。。。。，，待写，，，程序猿已累崩。。。
          </div>
          <div className="shopStore">
            <div className="shop_story">
              <img src={props.getImg(props.storyImg)} alt=""/>
              <p className="storyTitle">{props.storyTitle}</p>
              <p className="storyBrief">{props.storyBrief}</p>
              <a href="#/" className="brandStory">查看品牌故事</a>
            </div>
            <div className="deliveryInfo">
              <h4>配送信息</h4>
              <span className="delivery_people">由{props.delivery_people}提供配送，</span>
              <span className="order_lead_time">约{props.order_lead_time}分钟送达，</span>
              <span className="distance">距离{props.distance}m</span>
              <p className="delivery_fee">配送费：{props.delivery_fee}</p>
            </div>
            <div className="activity">
              <h4>活动与服务</h4>
              <ul>
              {
                props.activities.map((item,index) => {
                  return (
                    <li
                      className=""
                      key={index}
                      >
                      <span
                        className="icon_name"
                        style={{background: '#'+item.icon_color}}
                        >
                        {item.icon_name}
                      </span>
                      <span>{item.description}</span>
                    </li>
                  )
                })
              }
              {
                props.activities_pei.map((item, index) => {
                  return (
                    <li
                      className=""
                      key={index}
                      >
                      <span
                        className="icon_name"
                        style={{background: '#'+item.icon_color}}
                        >
                        {item.icon_name}
                      </span>
                      <span>{item.description}</span>
                    </li>
                  )
                })
              }
              </ul>
            </div>
            <div className="albums">
              <h4>商家实景</h4>
              <ul>
                {
                  props.albums.map((item, index) => {
                    return (
                      <li key={index}>
                        <img src={props.getImg(item.cover_image_hash)} alt=""/>
                        <p>
                          <span>{item.name}</span>
                          <span>({item.count}张)</span>
                        </p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="shopStoreInfo">
              <h4>商家信息</h4>
              <p>{props.description}</p>
              <ul>
                <li>
                  <span>品类</span>
                  <p>
                    {
                      props.flavors.map((item, index) => {
                        return (
                          <i
                            key={index}
                            style={{marginLeft: '5px'}}
                            >
                          {item.name}
                          </i>
                        );
                      })
                    }
                  </p>
                </li>
                <li>
                  <span>商家电话</span>
                  <p>{props.phone}</p>
                </li>
                <li>
                  <span>地址</span>
                  <p>{props.address}</p>
                </li>
                <li>
                  <span>营业时间</span>
                  <p>{props.opening_hours}</p>
                </li>
              </ul>
            </div>
            <div className="qualifications">
              <h4>营业资质</h4>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
export default ShopDetailUI;
