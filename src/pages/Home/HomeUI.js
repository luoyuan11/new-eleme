import React, { Fragment } from 'react';
import { SearchBar, Grid, Carousel, WingBlank } from 'antd-mobile';
import './Home.scss';
import Header from '../../components/Header';



const HomeUI = (props) => {
  const data = props.list.map((item, index) => ({
    icon: `https://fuss10.elemecdn.com/${item.image_hash}.jpeg`,
    text: item.name,
  }));

  // console.log(props.bannerlist)
  console.log(props.shopslist)
  return (
    <div className='All-Home'>
      <Header />
      <div className='home-header'>
        <SearchBar placeholder="搜索饿了么商家,商品名称" className="searchInput" />
      </div>
      <div className='content-list'>
        <Grid data={data} isCarousel={true} infinite={true} dots={true} columnNum={5} />
      </div>
      <div className='VIP-Coustom'>
        <div className='VIP-Coustom-left'>
          <img src='https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/' />
          <span className='superVIP'>超级会员</span>
          <span className="EveryMonth"><b>.</b>每月领9元红包</span>
        </div>
        <div className='VIP-Coustom-right'>立即开通 ></div>
      </div>
      {/* l轮播图 */}
      <div className='Home-banner'>
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite={true}
            autoplayInterval={500}
            dotActiveStyle={{ background: '#ccc' }}
            resetAutoplay={false}
            dragging={false}
          >
            {props.bannerlist.map((item, index) => (
              <img
                src={`https://fuss10.elemecdn.com//${item.image_hash}.jpeg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  // this.setState({ imgHeight: 'auto' });
                }}
              />
            ))}
          </Carousel>
        </WingBlank>
      </div>
      <div className='Recom_Shops'>
        <h5>
          推荐商家
          </h5>
      </div>
      {/* t推荐导航 */}
      <div className='recommand_header_list'>
        <ul className='recommand_list'>
          <li>综合排序 <i className='iconfont icon-plus-select-down'></i></li>
          <li>距离最近</li>
          <li>品质联盟</li>
          <li>筛选<i className='iconfont icon-shaixuan'></i></li>
        </ul>
      </div>
      {/* s商家列表 */}
      <div className='total_shops_list'>
         <ul className='shops_list'>
          {
            props.shopslist.map((item, index) => {
              return(
                <li>
                <div className='shops_list_head'>
                  <div className='shops_list_left'>
                    <img src={`https://fuss10.elemecdn.com//${item.restaurant.image_path}.png`} />
                  </div>
                  <div className='shops_list_right'>
                    <h4 className='foot_name'>{item.restaurant.name}</h4>
                    <p className='start_Mount'>
                      <span className="stars"> ★★★★★地方肯定会 </span>
                      <span className="BirdPost">蜂鸟专送</span>
                    </p>
                    <p>
                      <span>￥20元起送 | 远距离免费配送</span>
                      <span>2.6km | 35分钟</span>
                    </p>
                  </div>
                </div>
                <div className='shops_list_foot'>
                  <p className='shops_list_foot_Good'>
                    <span>{item.restaurant.support_tags[0].text}</span>
                    <span>{item.restaurant.support_tags[1].text}</span>
                  </p>
                  <p>
                    <span className='reduce_price'>减</span>
                    <span className='reduce-mount'>满25减20</span>
                  </p>
                  <p>
                    <span className='reduce_price'>新</span>
                    <span className='reduce-mount'>单品定价</span>
                  </p>
                </div>
              </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default HomeUI;
