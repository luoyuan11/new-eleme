// import store from './index';
import axios from 'axios';
// import { dispatch } from 'rxjs/internal/observable/pairs';

import { AXIOS_INIT ,BANNER_LIST ,SHOPS_LIST ,LOCATION, ONCLICK,ROWCLICK ,HOTSEARCH ,SCROLLTOP ,HEADER} from './actions'


export const initLIstAsync=()=>{
  const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
  return (dispatch,getStore)=>{
    axios.get(api_proxy+'https://h5.ele.me/restapi/shopping/v2/entries?latitude=22.547&longitude=114.085947&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5')
    .then(res=>{
      dispatch({
        type:AXIOS_INIT,
        data:res.data[0].entries
      })
    })
  }
}

export const bannerIstAsync=()=>{
  const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
  return (dispatch,getStore)=>{
    axios.get(api_proxy+'https://h5.ele.me/restapi/shopping/v2/banners?consumer=1&type=1&latitude=22.533719&longitude=113.936091')
    .then(res=>{
      // console.log(res.data);
      dispatch({
        type:BANNER_LIST,
        data:res.data
      })
    })
  }
}

export const shopsIstAsync=()=>{
  const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
  return (dispatch,getStore)=>{
    axios.get('/api/HomeShopsList.json')
    .then(res=>{
       console.log(res.data.items);
       var content=res.data.items;
       for(var i=0;i<content.length;i++){
        if(/png$/.test(content[i].restaurant.image_path)){
          content[i].restaurant.image_path=content[i].restaurant.image_path+'.png';
        }else if(/jpeg$/.test(content[i].restaurant.image_path)){
          content[i].restaurant.image_path=content[i].restaurant.image_path+'.jpeg';
        }
       }
      dispatch({
        type:SHOPS_LIST,
        data:res.data.items
      })
    })
  }
}

//定位
export const PositionAsync=()=>{
  return (dispatch,getStore)=>{
    axios.get('https://bird.ioliu.cn/v2/?url=https://apis.map.qq.com/ws/location/v1/ip?ip=113.92.93.53&key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU')
    .then(res=>{
      dispatch({
        type:LOCATION,
        location:res.data.result.location,
        city:res.data.result.ad_info.city
      })
    })
  }
}

export const toggle=()=>{
  return {
    type:ONCLICK
  }
}

export const hotsearch=()=>{
  return{
    type:HOTSEARCH
  }
}
export const RowClick=()=>{
  const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
  return(dispatch,getStore)=>{

    axios.get(api_proxy+'https://h5.ele.me/restapi/shopping/v3/hot_search_words?latitude=25.44344&longitude=119.01042')
    .then(res=>{
      // console.log(res);
      dispatch({
        type:ROWCLICK,
         HotSearchList:res.data
      })
    })

  }
}
export const windowOnScroll=()=>{
    return{
      type:SCROLLTOP
    }
}
 export const Header=()=>{
   return {
     type:HEADER
   }
 }
