// import store from './index';
import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/pairs';

import { AXIOS_INIT ,BANNER_LIST ,SHOPS_LIST} from './actions'
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
    axios.get(api_proxy+'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.53199&longitude=114.11768&offset=0&limit=80&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5')
    .then(res=>{
       console.log(res.data.items);
      dispatch({
        type:SHOPS_LIST,
        data:res.data.items
      })
    })
  }
}
