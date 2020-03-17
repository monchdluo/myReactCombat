import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import './css/index.less';
// import { connect } from 'react-redux';
// import { getHomeDataAsync } from '../../redux/actions';

// @connect(state => ({ homeData: state.homeData }), { getHomeDataAsync })
class HomeNav extends Component {
  // componentDidMount() {
  //   this.props.getHomeDataAsync();
  // }
  render() {
    const tabs = [
      { title: '推荐' },
      { title: '居家生活' },
      { title: '服饰鞋包' },
      { title: '美食酒水' },
      { title: '个护清洁' },
      { title: '个护清洁' },
      { title: '个护清洁' },
      { title: '个护清洁' },
      { title: '个护清洁' }
    ];

    return (
      <div className="HomeNav">
        <div className="NavBox">
          {/* {this.props.homeData.kingKongModule} */}
          <Tabs
            tabs={tabs}
            renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}
            useOnPan
          ></Tabs>
        </div>
      </div>
    );
  }
}

export default HomeNav;
