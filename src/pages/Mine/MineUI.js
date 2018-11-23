import React,{Fragment} from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { NavLink,Link} from 'react-router-dom';
import Footer from '../../components/Footer'
import './Mine.scss'
const MineUI = (props)=>{
  console.log(props)
  return(
    <Router>
        <Fragment>
            <div className="user">
              <div className="mine">{props.header}</div>
              <Link className='User_p' to={{pathname:`${props.path}`}}>
                  <div className="uesrTou">
                    <img src="" alt=""/>
                  </div>
                  <div className='user_login'>
                    <span>{props.title}</span>
                    <p><i className=' iconfont icon-shouji-copy'></i><span>登录后享受更多特权</span></p>
                  </div>
                  <span className='more'>&gt;</span>
              </Link>
            </div>
            <div className='user_money'>
                  <ul className='userMoneyList'>
                    <li>
                        <NavLink to="">
                          <span><i className=' iconfont icon-qianbao'></i></span>
                          <span className="wallet">钱包</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                          <span><i className=' iconfont icon-entireEredWrap'></i></span>
                          <span className="redpacket">红包</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                          <span><i className=' iconfont icon-tubiao207'></i></span>
                          <span className="gold">金币</span>
                        </NavLink>
                    </li>
                  </ul>
            </div>
            <div className="address List_shing">
              <span><i className=' iconfont icon-dizhi'></i></span>
              <Link className="my_address " to=''>我的地址</Link>
            </div>
            <div className="goldShop List_shing">
              <span><i className=' iconfont icon-daizi1'></i></span>
              <Link className="my_goldShop" to=''>金币商城</Link>
            </div>
            <div className="share List_shing">
              <span><i className=' iconfont icon-liwuhuodong'></i></span>
              <Link className="my_share" to=''>分享活得大礼包</Link>
            </div>
            <div className="service List_shing">
              <span><i className=' iconfont icon-kefu'></i></span>
              <Link className="my_service " to=''>客户服务</Link>
            </div>
            <div className="download List_shing">
              <span><i className=' iconfont icon-changyonglogo41' style={{fontSize:'20px'}}></i></span>
              <Link className="downloadApp" to=''>下载饿了么App</Link>
            </div>
            <Footer/>
        </Fragment>
      </Router>
  )
}
export  default MineUI;
