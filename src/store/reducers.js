import { combineReducers } from 'redux';

import HomeReducer from '../pages/Home/store/reducer';
import DiscoverReducer from '../pages/Discover/store/reducer';
import OrderReducer from '../pages/Order/store/reducer';
import MineReducer from '../pages/Mine/store/reducer';
import UserReducer from '../pages/User/store/reducer';
import ShopDetailReducer from '../pages/ShopDetail/store/reducer';

let zongdeReducers = combineReducers({
  Home: HomeReducer,
  Discover:DiscoverReducer,
  Order:OrderReducer,
  Mine:MineReducer,
  User:UserReducer,
  ShopDetail: ShopDetailReducer
})

// console.log(zongdeReducers);

export default zongdeReducers;
