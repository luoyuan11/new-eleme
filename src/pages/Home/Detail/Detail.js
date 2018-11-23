import React, { Component,Fragment } from 'react';
import { ListView, Tabs, WhiteSpace } from 'antd-mobile';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Icon } from 'antd-mobile';
import { connect } from 'react-redux';
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Detail extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource,
      isLoading: true,
      list: [],
      foods: []
    };
  }
  componentDidMount() {
    const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      axios.get(api_proxy+'https://h5.ele.me/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=22.543707&longitude=114.061151')
        .then(res => {
          const arr = [];
          const brr = [];
          const reg = /png$/;
          res.data.query_list.map((item, index) => {
            if (reg.test(item.restaurant.image_path)) {
              item.restaurant.image_path += '.png';
            } else {
              item.restaurant.image_path += '.jpeg';
            }
            // arr.push(item.restaurant);
            return arr.push(item);
          })
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
            list: arr,
            foods: brr
          })
        })
  }
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const tabs = [
      { title: '全部' },
      { title: '面食粥点' },
      { title: '简餐便当' },
      { title: '汉堡披萨' },
      { title: '香锅冒菜' },
      { title: '日韩料理' },
      { title: '轻食西餐' },
      { title: '小吃炸串' },
      { title: '地方菜系' },
    ];
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = this.state.list.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = this.state.list.length - 1;
      }
      const obj = this.state.list[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div style={{ display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '65px', marginRight: '15px' }} src={`https://fuss10.elemecdn.com/${obj.restaurant.image_path}`} alt="" />
            <div style={{ lineHeight: 1, color: '#666', fontSize: '12px' }}>
              <div style={{ marginBottom: '5px', fontSize: '15px', color:'#000'}}>{obj.restaurant.name}</div>
              <p>
                <span style={{ color:'yellow' }}> ★★★★★ </span>
                <span>{obj.restaurant.delivery_mode && obj.restaurant.delivery_mode.text}</span>
              </p>
              <p>
                <span>￥20元起送 | 远距离免费配送</span>
                <span>{obj.restaurant.distance/1000}km | {obj.restaurant.order_lead_time}分钟</span>
              </p>
              <div>
                  <p style={{ marginBottom: '5px' }}>
                    <span style={{ border: '1px solid rgb(221, 221, 221)', marginRight: '5px' }}>{obj.restaurant.support_tags[0].text }</span>
                     <span style={{ border: '1px solid rgb(221, 221, 221)' }}>{obj.restaurant.support_tags[1] && obj.restaurant.support_tags[1].text}</span>
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    {/* <span style={{ background: 'rgb(240, 115, 115)', marginRight: '10px', padding: '0 3px', color: '#fff' }}>{obj.foods && obj.foods[0].activities[0].icon_name}</span> */}
                    {/* <span className='reduce-mount'>{obj.foods[0].activities[0].description}</span> */}
                  </p>
                  <p>
                    <span style={{ marginRight: '10px', background: 'rgb(153, 153, 153)', color: '#fff', padding: '0 3px' }}>{obj.restaurant.supports[0] && obj.restaurant.supports[0].icon_name}</span>
                    <span>{obj.restaurant.supports[0] && obj.restaurant.supports[0].description}</span>
                  </p>
                </div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <Fragment>
        <header>
          <div onClick={this.props.history.goBack}>
            <Icon type="left" color="#fff" />
          </div>
          <p>详情</p>
        </header>
        <WhiteSpace />
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
        <Link to="/shopDetail">
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          className="am-list"
          pageSize={4}
          useBodyScroll
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
        </Link>
        </Tabs>
        <WhiteSpace />
      </Fragment>
    );
  }
}

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
