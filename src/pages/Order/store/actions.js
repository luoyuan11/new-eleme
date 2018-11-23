import { INIT_LIST, GET_COOKIE } from './actionTypes';
import axios from 'axios';
import cookie from 'react-cookies';

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
    axios.get('/apigoods/goods.json')
      .then(res => {
        const reg = /png$/;
        res.data.map((item, index) => {
          if (reg.test(item.restaurant_image_hash)) {
            return item.restaurant_image_hash += '.png';
          } else {
           return item.restaurant_image_hash += '.jpeg';
          }
        })
        dispatch(initList(res.data));
      })
  }
}

export const getCookie = (userID) => {
  return {
    type: GET_COOKIE,
    userID,
  }
}

export const haveCookid = () => {
  return (dispatch, getState) => {
    let aaa = '';
    let bbb = '';
    if (cookie.load('userId') !== undefined && cookie.load('userId') !== '') {
      aaa = 'block';
      bbb = 'none';
    } else {
      aaa = 'none';
      bbb = 'block';
    }
    dispatch(getCookie({aaa,bbb}));
  }
}
