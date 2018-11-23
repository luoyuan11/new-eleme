import React from 'react';
import { SearchBar, Grid, Carousel, WingBlank } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
import './Home.scss';
// import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { CSSTransition } from 'react-transition-group';
const HomeUI = (props) => {

  const data = props.list.map((item, index) => ({
    icon: `https://fuss10.elemecdn.com/${item.image_hash}.jpeg`,
    text: item.name,
  }));
  // console.log(props)
  return (
    <div className='All-Home'>
      <div>
        <div className="elm-head">
          <div className='elm-head-content' onClick={props.toggle}>
            <i className='iconfont icon-dingwei'></i>
            <span href="##">{props.position.city}</span>
            <i className=' iconfont icon-drop-down'></i>
          </div>

        </div>
      </div>
      <div className='home-header' onClick={props.hotsearch} id={props.conentClassName=== true ? 'fiexed' : 'cancel'}>
        <SearchBar placeholder="搜索饿了么商家,商品名称" className="searchInput"  />
      </div>


      <div className='content'>
        <div className='content-list'>
          <NavLink to='/pages/Home/Detail' exact>
            <WingBlank style={{ 'touchAction': 'none' ,'border':'none'}}>
              <Grid data={data} isCarousel={true} infinite={true} dots={true} columnNum={5} hasLine={false} />
            </WingBlank>
          </NavLink>
        </div>
        <div className='VIP-Coustom'>
          <div className='VIP-Coustom-left'>
            <img src='https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/' />
            <span className='superVIP'>超级会员</span>
            <span className="EveryMonth"><b>.</b>每月领9元红包</span>
          </div>
          <div>
            <div className='VIP-Coustom-right' id="box">立即开通 ></div>
          </div>
        </div>
        {/* l轮播图 */}
        <div className='Home-banner'>
          <WingBlank style={{ 'touchAction': 'none' }}>
            <Carousel
              autoplay={true}
              infinite={true}
              autoplayInterval={1000}

 /*              renderItem={dataItem => (
                <div></div>
              )} */
            >
              {props.bannerlist.map((item, index) => (
                <img
                  key={index}
                  src={`https://fuss10.elemecdn.com//${item.image_hash}.jpeg`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
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
        <div id='recommand_header_list' id='list'>
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
                return (
                  <NavLink to='/shopDetail'  key={index}>
                    <li>
                    <div className='shops_list_head'>
                      <div className='shops_list_left'>
                        <img src={`https://fuss10.elemecdn.com//${item.restaurant.image_path}`} />
                      </div>
                      <div className='shops_list_right'>
                        <h4 className='foot_name'>{item.restaurant.name}</h4>
                        <p className='start_Mount'>

                          <span className="shopnum">
                            <span style={{ "width": item.restaurant.rating * 12, "display": "inline-block", "overflow": "hidden" }}><svg width="60" height="10" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" y2="50%" id="a"><stop stopColor="#FFDE00" offset="0%" /><stop stopColor="#FFB000" offset="100%" /></linearGradient></defs><path d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z" fill="url(#a)" fillRule="evenodd" /></svg></span>
                            {item.restaurant.rating}
                            <span></span>月售{item.restaurant.recent_order_num}单 </span>

                          <span className="BirdPost" style={{"background":`#${item.restaurant.delivery_mode && item.restaurant.delivery_mode.color }` || '#fff'}}>{item.restaurant.delivery_mode && item.restaurant.delivery_mode.text}</span>
                        </p>
                        <p>
                          <span>￥20元起送 | 远距离免费配送</span>
                          <span>{item.restaurant.distance / 1000}km | {item.restaurant.order_lead_time}分钟</span>
                        </p>
                      </div>
                    </div>
                    <div className='shops_list_foot'>
                      <p className='shops_list_foot_Good'>
                        <span>{item.restaurant.support_tags[0].text}</span>
                        <span>{item.restaurant.support_tags[1] && item.restaurant.support_tags[1].text}</span>
                      </p>
                      <p>
                        <span className='reduce_price'>减</span>
                        <span className='reduce-mount'>{item.restaurant.activities[0] && item.restaurant.activities[0].description}</span>
                      </p>
                      <p>
                        <span className='new'>新</span>
                        <span className='reduce-mount'>单品定价</span>
                      </p>
                    </div>
                  </li>
                  </NavLink>
                )
              })
            }
          </ul>
        </div>
      </div>
      <Footer />
      <CSSTransition
        in={props.show}
        timeout={100}
        classNames="fade"
        unmountOnExit
      >
        <div id="position">
          <div className='p_banner'>
            <div className="p_Header">
              <span className='p_headRow' onClick={props.toggle}><i className=" iconfont icon-zuojiantou"></i></span>
              <span>选择收货地址</span>
              <span>新增地址</span>
            </div>
            <div className='location_search'>
              <span>{props.position.city}<i className=' iconfont icon-drop-down'></i></span>
              <SearchBar placeholder="请输入地址" className="searchInput" />
            </div>
            <div className='currentAddress'>
              <p>当前地址</p>
              <p className='address'>{props.position.city}</p>
              <p>收货地址</p>
              <p className='address'>杭州市航江区</p>
            </div>
            <Footer />
          </div>

        </div>
      </CSSTransition>
          <CSSTransition
           in={props.HomeShow}
           timeout={100}
           classNames="fade"
           unmountOnExit
          >
            <div className='p_banner new'>
              <div className='hotSearch'>
              <i className=" iconfont icon-zuojiantou" onClick={props.hotsearch}></i>
                <input type='text' placeholder='输入商家，商品名称'/>
                <span>搜索</span>
            </div>
            <h3>热门搜索</h3>
            <ul>
              {
                props.HotSearchList.map((item,index)=>(
                  <li key={index}>{item.search_word}</li>
                ))
              }
            </ul>
            </div>
          </CSSTransition>


    </div>
  )
}

export default HomeUI;
