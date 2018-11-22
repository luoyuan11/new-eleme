import { INIT_LIST } from './actionTypes';
import axios from 'axios';

/**
 * 初始化的一个 动作生成器
 * @param {Array} list 初始化的数据
 */
export const initList = (list) => {
  return {
    type: INIT_LIST,
    list
  }
}

export const initListAsync = () => {
  return (dispatch, getState) => {
    // const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
    // axios.get(api_proxy+'https://h5.ele.me/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=26.263849&longitude=117.639221')
    //   .then(res => {
    //     dispatch(initList(res.data));
    //   })
    axios.get('/api/getList')
      .then(res => {
        dispatch(initList(res.data));
      })
  }
}
