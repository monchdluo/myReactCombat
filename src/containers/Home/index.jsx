import React, { Component } from 'react';
//引入搜索组件
import Search from '../../components/Search/Search';
//引入头部导航组件
import HomeNav from '../../components/HomeNav/HomeNav';
//引入swiper组件
import Swiper from '../../components/Swiper/Swiper';
//引入homecontent 首页内容组件
import Homecontent from './HomeContent/index';
// 引入api
//引入样式文件
import './css/index.less';
export default class Sort extends Component {
  render() {
    return (
      <div className="homeout">
        <header>
          <img
            src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
            alt=""
          />
          <Search />
          <div className="toLogin">登录</div>
        </header>
        <HomeNav />
        <Swiper />
        <Homecontent />
      </div>
    );
  }
}
