import React from 'react';
import './ShopDetail.scss';
import { Tabs } from 'antd-mobile';
import './ShopDetail.scss';


const ShopDetailUI = (props) => {
  console.log(props.recommendInfo)
  return (
    <div className="elm-shopDetail">
      <div className="elm-shopDetail_hd">
        <img src={props.getImg(props.shop_sign_image)} alt="" className="bg_hd" />
        <div className="bg_hd_mask"></div>
        <img src={props.getImg(props.brandImg)} alt="" className="brandImg" />
      </div>
      <div className="hd_content">
        <h2 className="shopName">{props.name}</h2>
        <p className="shopInfo">
          <span>评价{props.rating}</span>
          <span>月销售{props.recent_order_num}单</span>
          <span>蜂鸟快送约24分钟</span>
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
                    <li className="">
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
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
      </div>














      <div>
        {/* <WhiteSpace />
        <Tabs
          tabs={props.tabs}
          tabBarPosition={"left"}
          // tabDirection={"vertical"}
          renderTabBar={
            props => <Tabs.DefaultTabBar {...props} page={3}
            />}
            >
          {tab =>(
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '500px',
              backgroundColor: '#fff'
            }}
            >
            <p>Content of {tab.title}</p>
          </div>)}
        </Tabs>
        <WhiteSpace /> */}
      </div>


    </div>
  )
}
export default ShopDetailUI;
