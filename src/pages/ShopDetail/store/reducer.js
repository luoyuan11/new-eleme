let defaultState = {
  tabs : [
    { title: '点餐' },
    { title: '评价' },
    { title: '商家' }
  ],
  activities: [],
  recommendInfo: [],
  menu: [],
  list_left_name: [],
  activities_pei: [],
  flavors: [],
  opening_hours: [],
  albums: []
}

export default (state = defaultState, action) => {
  if(action.type === 'GET_SHOP_INFO') {
    let newState = JSON.parse(JSON.stringify(state));
    // newState.shopList = action.data;
    newState.storyBrief = action.data.brand_intros[0].brief;
    newState.storyImg = action.data.header_image;
    newState.storyTitle = action.data.title;
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
    newState.order_lead_time = action.data.rst.order_lead_time;
    newState.menu = action.data.menu;
    action.data.menu.map(item => {
      return  newState.list_left_name.push({title: item.name});
    })
    newState.delivery_people = action.data.rst.delivery_mode.text;
    // newState.distance = Math.ceil(action.data.rst.distance/1000);
    newState.distance = action.data.rst.distance;
    newState.delivery_fee = action.data.rst.piecewise_agent_fee.description;
    newState.activities_pei = action.data.rst.supports;
    newState.albums = action.data.rst.albums;
    newState.description = action.data.rst.description;
    newState.flavors = action.data.rst.flavors;
    newState.phone = action.data.rst.phone;
    newState.address = action.data.rst.address;
    newState.opening_hours = action.data.rst.opening_hours;
    return newState;
  }
  return state;
}
