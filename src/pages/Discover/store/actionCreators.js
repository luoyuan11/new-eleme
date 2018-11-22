import axios from 'axios';

/**
 * 初始化发现页上半部分
 * @param {Array} data 初始化发现页上半部分的数据
 */
export const initList = (data) => {
  return {
    type: 'GET_FINDLIST',
    data
  }
}

/**
 * 初始化发现页下半部分
 * @param {Array} data 初始化发现页下半部分的数据
 */
export const initGoodsList = (data) => {
  return {
    type: 'GET_GOODSLIST',
    data
  }
}

/**
 * 得到 上半部分的 一个动作生成器
 */
export const getFindList = () => {
  return (dispatch, getState) => {
    const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
    axios.get(api_proxy+'https://h5.ele.me/restapi/member/v1/discover?platform=2&block_index=0')
      .then(res => {
        dispatch(initList(res.data[1]));
      })
  }
}

/**
 * 得到下半部分列表的一个 动作生成器
 */
export const getGoodsList = () => {
  return (dispatch, getState) => {
    const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
    axios.get(api_proxy+'https://h5.ele.me/restapi/member/gifts/suggest')
      .then(res => {
        // console.log(res.data);
        dispatch(initGoodsList(res.data));
      })
  }
}
