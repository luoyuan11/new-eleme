import axios from 'axios';

export const getShopInfo = (data) => {
  return {
    type: 'GET_SHOP_INFO',
    data
  }
}
export const getFoodInfo = (data) => {
  return {
    type: 'GET_FOOD_INFO',
    data
  }
}

export const getFoodInfoAsync = () => {
  return (dispatch, action) => {
    axios.get('/api/foodList.json')
      .then(res => {
        // console.log(res.data);
        dispatch(getFoodInfo(res.data));
      })
  }
}
export const getShopInfoAsync = () => {
  return (dispatch, action) => {
    // axios.get('/api/foodList.json')
    const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
    axios.get(api_proxy+'https://h5.ele.me/restapi/shopping/v1/restaurants/E14917498671434421460/brand_story?come_from=app')
      .then(res => {
        // console.log(res.data);
        dispatch(getShopInfo(res.data));
      })
  }
}

//
