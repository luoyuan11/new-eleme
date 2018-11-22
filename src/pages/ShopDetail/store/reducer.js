let defaultState = {
  initList: {},
  tabs : [
    { title: '点餐' },
    { title: '评价' },
    { title: '商家' }
  ],
  activities: [],
  recommendInfo: []
}

export default (state = defaultState, action) => {
  if(action.type === 'GET_SHOP_INFO') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.initList = action.data;
    return newState;
  }
  if(action.type === 'GET_FOOD_INFO') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.shop_sign_image = action.data.rst.shop_sign.image_hash;
    newState.brandImg = action.data.rst.image_path;
    newState.name = action.data.rst.name;
    newState.rating = action.data.rst.rating;
    newState.recent_order_num = action.data.rst.recent_order_num;
    newState.moneyValue = action.data.redpack[0].value;
    newState.activities = action.data.rst.activities;
    newState.promotion_info = action.data.rst.promotion_info;
    newState.recommendTitle = action.data.recommend[0].name;
    newState.recommendInfo = action.data.recommend[0].items;
    newState.recommend_banner = action.data.rst.posters[0].image_hash;




    newState.bought_list = action.data.bought_list;
    newState.menu = action.data.menu;
    newState.redpack = action.data.redpack;
    newState.user = action.data.user;
    return newState;
  }
  return state;
}
