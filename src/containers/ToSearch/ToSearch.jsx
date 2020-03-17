import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import './css/index.less';

@withRouter
class ToSearch extends Component {
  goHome = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div class="searchBox">
        <header class="search_header">
          <SearchBar
            placeholder="搜索商品"
            maxLength={8}
            className="search_in"
          />
          <span className="fanH" onClick={this.goHome}>
            返回
          </span>
        </header>
        {/* <!-- 内容 --> */}
        <div class="search_content">
          <header class="hot">热门搜索</header>
          <nav class="content_nav">
            <a href="javascript:">省钱卡充9得45</a>
            <a href="javascript:">停课不停学</a>
            <a href="javascript:">口罩</a>
            <a href="javascript:">酒精湿巾</a>
            <a href="javascript:">手机壳</a>
            <a href="javascript:">酒精棉片</a>
            <a href="javascript:">无骨鸡爪</a>
            <a href="javascript:">咖啡</a>
            <a href="javascript:">四件套</a>
            <a href="javascript:">抽纸</a>
            <a href="javascript:">洗衣液</a>
            <a href="javascript:">收纳</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default ToSearch;
