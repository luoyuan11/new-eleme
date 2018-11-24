import React,{Fragment} from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { NavLink,Link} from 'react-router-dom';
import './Info.scss'
const userinfoUI = (props)=>{
  console.log(props)
  return(
    <Router>
        <Fragment>

              <div className="mine">{props.header}</div>

            <div className="adress List_shing">
              <span><i className=' iconfont icon-dizhi'></i></span>
              <Link className="my_address " to=''>头像</Link>
              <div className="tou"></div>
            </div>
            <div className="goldShop List_shing">
              <span><i className=' iconfont icon-daizi1'></i></span>
              <Link className="my_goldShop" to=''>用户名</Link>
              <span className='userNum'>{props.title}</span>
            </div>
            <div className='bindPhone'>绑定手机</div>
            <div className="shar List_shing">
              <span><i className=' iconfont icon-shouji-copy'></i></span>
              <Link className="my_share" to=''>手机号</Link>
              <span className='bindNum'>{props.title}</span>
            </div>
            <div className='anquan'>安全设置</div>
            <div className="service List_shing">
              <span><i className=' iconfont icon-kefu'></i></span>
              <Link className="my_service " to=''>登陆密码</Link>
              <Link to='' className='shezhi'>未设置</Link>
            </div>
            <NavLink  to={{pathname:`${props.path}`}}  className="outLogin List_shing" onClick={props.outlogin}>
            退出登录
            </NavLink>
        </Fragment>
      </Router>
  )
}
export  default userinfoUI;
