
 import { AXIOS_INIT ,BANNER_LIST ,SHOPS_LIST ,LOCATION} from './actions';
const defaultState = {
  HomeList:[],
  bannerList:[],
  shopsList:[],
  position:{
    location:'',
    city:'',
  }
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

    if(action.type===LOCATION){
      console.log(action.location)
      let newposition =Object.assign({},state);
      newposition.position.location=action.location;
      newposition.position.city=action.city
      console.log(newposition);
      return newposition;
    }
    return state;
}
