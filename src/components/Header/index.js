
import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index.scss';
class Header extends Component {
  render() {
    return (
     <div className="elm-head">
      <div className='elm-head-content'>
          <i className='iconfont icon-dingwei'></i>
          <span href="##">{this.props.position}</span>
          <i className=' iconfont icon-drop-down'></i>
      </div>
     </div>
    )
  }
}


export default Header;
