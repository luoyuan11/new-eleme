
 import { AXIOS_INIT ,BANNER_LIST ,SHOPS_LIST} from './actions';
const defaultState = {
  HomeList:[],
  bannerList:[],
  shopsList:[],
}

export default (state = defaultState,action) =>{
    //  console.log('home页面中的reducers');
     if(action.type===AXIOS_INIT){
       let newHomeList =Object.assign({},state);
       newHomeList.HomeList=action.data;
       return newHomeList;
        // console.log(newHomeList);
     }
     if(action.type===BANNER_LIST){
      let newBannerList =Object.assign({},state);
      newBannerList.bannerList=action.data;
      return newBannerList;
       // console.log(newHomeList);
    }

    if(action.type===SHOPS_LIST){
      let newShopList =Object.assign({},state);
      newShopList.shopsList=action.data;
      return newShopList;
    }
     return state;
}
