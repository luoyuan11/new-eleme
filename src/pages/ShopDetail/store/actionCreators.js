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

export const getShopInfoAsync = () => {
  return (dispatch, action) => {
    axios.get('/api/shopList.json')
      .then(res => {
        dispatch(getShopInfo(res.data));
      })
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


