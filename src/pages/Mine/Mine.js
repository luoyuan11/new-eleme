import React,{Component,Fragment} from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { NavLink,Link} from 'react-router-dom';
// import Login from './Login/Login'
// import Register from './Register/Register'
import './Mine.scss'
class Mine extends Component {
  render(){
    return(
      <Router>
        <Fragment>
            <div className="user">
              <NavLink to='/pages/User'>
                  <div className="uesrTou">
                    <img src="" alt=""/>
                  </div>
                  <div className='user_login'>
                    <span>登录/注册</span>
                    <p><i className='icon-tubiao207'></i>登录后享受更多特权</p>
                  </div>
                  <span className='more'>&gt;</span>
              </NavLink>
            </div>
            <div className='user_money'>
                  <ul className='userMoneyList'>
                    <li>
                        <NavLink to="">
                          <span>2</span>
                          <span className="wallet">钱包</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                          <span>1</span>
                          <span className="redpacket">红包</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                          <span>3</span>
                          <span className="gold">金币</span>
                        </NavLink>
                    </li>
                  </ul>
            </div>
            <div className="address List_shing">
              <span></span>
              <Link className="my_address " to=''>我的地址</Link>
            </div>
            <div className="goldShop List_shing">
              <span></span>
              <Link className="my_goldShop" to=''>金币商城</Link>
            </div>
            <div className="share List_shing">
              <span></span>
              <Link className="my_share" to=''>分享活得大礼包</Link>
            </div>
            <div className="service List_shing">
              <span></span>
              <Link className="my_service " to=''>客户服务</Link>
            </div>
            <div className="download List_shing">
              <span></span>
              <Link className="downloadApp" to=''>下载饿了么App</Link>
            </div>
        </Fragment>
      </Router>

    )
  }
}

export  default Mine;
