import React, { Component } from 'react';
import ShopDetailUI from './ShopDetailUI';
import { connect } from 'react-redux';
import store from '../../store/index';
import { getShopInfoAsync, getFoodInfoAsync } from './store/actionCreators'

class ShopDetail extends Component {
  render() {
    return <ShopDetailUI {...this.props}/>
  }
  componentDidMount() {
    store.dispatch(getFoodInfoAsync());
    store.dispatch(getShopInfoAsync());
  }
}

const mapStateToProps = ({ShopDetail}) => {
  // console.log(ShopDetail)
  return {
    shop_sign_image: ShopDetail.shop_sign_image,
    brandImg: ShopDetail.brandImg,
    name: ShopDetail.name,
    rating: ShopDetail.rating,
    recent_order_num: ShopDetail.recent_order_num,
    moneyValue: ShopDetail.moneyValue,
    activities: ShopDetail.activities,
    promotion_info: ShopDetail.promotion_info,
    recommendTitle: ShopDetail.recommendTitle,
    recommendInfo: ShopDetail.recommendInfo,
    order_lead_time: ShopDetail.order_lead_time,
    menu: ShopDetail.menu,
    list_left_name: ShopDetail.list_left_name,
    tabs: ShopDetail.tabs,
    recommend_banner: ShopDetail.recommend_banner,
    storyBrief: ShopDetail.storyBrief,
    storyImg: ShopDetail.storyImg,
    storyTitle: ShopDetail.storyTitle,
    delivery_people: ShopDetail.delivery_people,
    distance: ShopDetail.distance,
    delivery_fee: ShopDetail.delivery_fee,
    activities_pei: ShopDetail.activities_pei,
    albums: ShopDetail.albums,
    description: ShopDetail.description,
    flavors: ShopDetail.flavors,
    phone: ShopDetail.phone,
    address: ShopDetail.address,
    opening_hours: ShopDetail.opening_hours
  }
};
const mapDisPatchToProps = (dispatch) => {
  return {
    getImg: (imgurl) => {
      if(/png$/.test(imgurl)){
        return 'https://fuss10.elemecdn.com/'+ imgurl + '.png';
      }else if(/jpeg$/.test(imgurl)){
        return 'https://fuss10.elemecdn.com/'+ imgurl + '.jpeg';
      }
    },
  }
};
export default connect(mapStateToProps, mapDisPatchToProps)(ShopDetail);
