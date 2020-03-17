import React, { Component } from 'react';
import './css/index.less';
import { Tabs } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { getClassLeftAsync } from '../../redux/actions';
import { connect } from 'react-redux';

@withRouter
@connect(state => ({ classLeft: state.classLeft }), { getClassLeftAsync })
class Classify extends Component {
  goSearch = () => {
    this.props.history.push('/toSearch');
  };
  componentDidMount() {
    this.props.getClassLeftAsync();
  }
  render() {
    {
      this.props.classLeft &&
        this.props.classLeft.classLeftData.categoryL1List.map(
          (item, index) => (tabs = [{ title: `${item.name}`, key: 't1' }])
        );
    }
    // let tabs = [];

    const tabs = [
      { title: '推荐专区', key: 't1' },
      { title: '宅家防护', key: 't2' },
      { title: '爆品专区', key: 't3' },
      { title: '新品专区', key: 't4' },
      { title: '居家生活', key: 't5' },
      { title: '服饰鞋包', key: 't6' },
      { title: '美食酒水', key: 't7' },
      { title: '个护清洁', key: 't8' },
      { title: '母婴亲子', key: 't9' },
      { title: '运动旅行', key: 't10' }
    ];
    const TabExample = () => (
      <div style={{ height: 574 }}>
        <Tabs
          tabs={tabs}
          initialPage={'t1'}
          tabBarPosition="left"
          tabDirection="vertical"
        >
          <div className="classify_right">
            <div className="top_img">
              <img
                src="https://yanxuan.nosdn.127.net/9f4bcf0d57149499584d59478a606e9e.jpg"
                alt=""
              ></img>
            </div>
            <div className="right_content">
              <ul className="content_ul">
                <li className="content_ul_li">
                  <div className="content_li_div">
                    <img
                      src="https://yanxuan.nosdn.127.net/de008a6eb8f4237203c444ed65c47ae8.png?quality=75&type=webp&imageView&thumbnail=144x144"
                      alt=""
                    ></img>
                    <div>充值特惠</div>
                  </div>
                </li>
                <li className="content_ul_li">
                  <div className="content_li_div">
                    <img
                      src="https://yanxuan.nosdn.127.net/cda4a56526a230055bea8221a6b7ab11.png?quality=75&type=webp&imageView&thumbnail=144x144"
                      alt=""
                    ></img>
                    <div>999+好评</div>
                  </div>
                </li>
                <li className="content_ul_li">
                  <div className="content_li_div">
                    <img
                      src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?quality=75&type=webp&imageView&thumbnail=144x144"
                      alt=""
                    ></img>
                    <div>明星商品低至69元</div>
                  </div>
                </li>
                <li className="content_ul_li">
                  <div className="content_li_div">
                    <img
                      src="https://yanxuan.nosdn.127.net/da5ac697d47e43bd6ad9ce8b1e5e0060.png?quality=75&type=webp&imageView&thumbnail=144x144"
                      alt=""
                    ></img>
                    <div>断货补单王39元起</div>
                  </div>
                </li>
                <li className="content_ul_li">
                  <div className="content_li_div">
                    <img
                      src="https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png?quality=75&type=webp&imageView&thumbnail=144x144"
                      alt=""
                    ></img>
                    <div>9.9元超值好物</div>
                  </div>
                </li>
                <li className="content_ul_li">
                  <div className="content_li_div">
                    <img
                      src="https://yanxuan.nosdn.127.net/08c6128ba97448e33084abbbdc53b072.png?quality=75&type=webp&imageView&thumbnail=144x144"
                      alt=""
                    ></img>
                    <div>鲜蔬潮食</div>
                  </div>
                </li>
                <li className="content_ul_li">
                  <div className="content_li_div">
                    <img
                      src="https://yanxuan.nosdn.127.net/9ef8afaee07c03e79347b3ecc296e787.png?quality=75&type=webp&imageView&thumbnail=144x144"
                      alt=""
                    ></img>
                    <div>早春单品</div>
                  </div>
                </li>
                <li className="content_ul_li">
                  <div className="content_li_div">
                    <img
                      src="https://yanxuan.nosdn.127.net/0cb19987ddd873c693272c60352ba6a7.png?quality=75&type=webp&imageView&thumbnail=144x144"
                      alt=""
                    ></img>
                    <div>50元幸福好物</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Tabs>
      </div>
    );
    return (
      <div className="classifyBox">
        <header className="search">
          <div className="search_outer" onClick={this.goSearch}>
            <i className="iconfont icon-search "></i>
            <span>搜索商品, 共23602款好物</span>
          </div>
        </header>
        <TabExample />
      </div>
    );
  }
}

export default Classify;
