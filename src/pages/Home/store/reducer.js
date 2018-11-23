
 import { AXIOS_INIT ,BANNER_LIST ,SHOPS_LIST ,LOCATION,ONCLICK ,ROWCLICK ,HOTSEARCH ,SCROLLTOP ,HEADER} from './actions';
const defaultState = {
  HomeList:[],
  bannerList:[],
  shopsList:[],
  position:{
    location:'',
    city:'',

  },
  HotSearchList:[],
  show:false,
  HomeShow:false,
  conentClassName:false
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

    if(action.type===ONCLICK){
      let newposition =Object.assign({},state);
      newposition.show=!newposition.show
      return newposition;
    }

    if(action.type===ROWCLICK){
      let newposition =Object.assign({},state);
      newposition.HotSearchList=action.HotSearchList;
      newposition.conentClassName=false;

      return newposition;
    }

    if(action.type===HOTSEARCH){
      console.log(11111111111111111);
      let newposition = Object.assign({},state);
      newposition.HomeShow=!newposition.HomeShow;
      return newposition;
    }
    if(action.type ===SCROLLTOP){
      let newposition = Object.assign({},state);
      newposition.conentClassName=true
      return newposition;
    }
    if(action.type===HEADER){
      let newposition = Object.assign({},state);
      newposition.conentClassName=false;
      return newposition;
    }
    return state;
}
