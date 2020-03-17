import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeDataAsync } from '../../../redux/actions';
//引入样式文件
import './css/index.less';

@connect(state => ({ homeData: state.homeData }), {
  getHomeDataAsync
})
class HomeContent extends Component {
  componentDidMount() {
    this.props.getHomeDataAsync();
  }
  render() {
    return (
      <div className="homecontent">
        <div className="homeicon">
          <ul className="homeicon_list">
            {this.props.homeData.policyDescList &&
              this.props.homeData.policyDescList.map((item, index) => {
                return (
                  <li key={index}>
                    <img src={item.icon} alt="" />
                    <span>{item.desc}</span>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="home_shopList">
          {this.props.homeData.kingKongModule &&
            this.props.homeData.kingKongModule.kingKongList.map(
              (item, index) => {
                return (
                  <div className="shopList_item" key={index}>
                    <a href="###">
                      <div className="shopList_img">
                        <img src={item.picUrl} alt="" />
                      </div>
                      <span>{item.text}</span>
                    </a>
                  </div>
                );
              }
            )}
        </div>
        <div className="home_yuYue">
          <img
            src="https://yanxuan.nosdn.127.net/35279ed5b692854f2f30c4bd338baad1.png"
            alt=""
          />
          <img
            src="https://yanxuan.nosdn.127.net/3e85cc6a2f4a038ea16704f9dcda9a6f.png"
            alt=""
          />
          <img
            src="https://yanxuan.nosdn.127.net/9f543d859df8d08171733d251c907f2f.png"
            alt=""
          />
        </div>

        {/* <!-- 新人专享礼 --> */}
        <div className="home_person">
          <div className="person_top">
            <span className="top_span"></span>
            <span>新人专享礼</span>
            <span className="top_span"></span>
          </div>
          <div className="person_content">
            <div className="left">
              <p>新人专享礼包</p>
              <img
                src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                alt=""
              ></img>
            </div>
            <div className="right">
              <div className="right_top">
                <div className="top_div">
                  <div>福利社</div>
                  <div className="top_in_div">今日特价</div>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="right_botton">
                <div className="botton_div">
                  <div>新人拼团</div>
                  <div className="botton_in_div">1元起包邮</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 类目热销榜 --> */}
        <div className="home_hot">
          <div className="hot_box">
            <div className="box_top">类目热销榜</div>
            <div className="box_content">
              <div className="box_content_top">
                <div className="top_left">
                  <span>热销榜</span>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/1e1cb6d55b25044cef81cf9c328f5f03.png"
                    alt=""
                  ></img>
                </div>
                <div className="top_right">
                  <span>好评榜</span>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/797a29814fea9f623efb204d96fd3e3e.png"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="box_content_botton">
                <div className="botton_item">
                  <p>居家生活榜</p>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/648eaca3a8208301f1f59669e6bbccf0.png"
                    alt=""
                  ></img>
                </div>
                <div className="botton_item">
                  <p>美食酒水榜</p>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/b050acad30e5ff8eeabaa40df0957225.png"
                    alt=""
                  ></img>
                </div>
                <div className="botton_item">
                  <p>个护清洁榜</p>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/ecef155d279e1a485b4f31f87daa3698.png"
                    alt=""
                  ></img>
                </div>
                <div className="botton_item">
                  <p>服饰鞋包榜</p>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/16b4d581afc5a9cd36e8adc8ed6ceb4f.png"
                    alt=""
                  ></img>
                </div>
                <div className="botton_item">
                  <p>数码家电榜</p>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/a517938254c7d2f480827debf355127a.png"
                    alt=""
                  ></img>
                </div>
                <div className="botton_item">
                  <p>全球特色榜</p>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/fee21ece834e9c2706e53d86e65b8abb.png"
                    alt=""
                  ></img>
                </div>
                <div className="botton_item">
                  <p>母婴亲子榜</p>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png"
                    alt=""
                  ></img>
                </div>
                <div className="botton_item">
                  <p>运动旅行榜</p>
                  <img
                    src="https://yanxuan-item.nosdn.127.net/9bd9a7f5e71a42fc38b54163aab1ecb8.png"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;
