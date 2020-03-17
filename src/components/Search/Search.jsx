import React, { Component } from 'react';
import './css/index.less';
import { withRouter } from 'react-router-dom';

@withRouter
class Search extends Component {
  goSearch = () => {
    this.props.history.push('/toSearch');
  };
  render() {
    return (
      <div className="searchBoxs" onClick={this.goSearch}>
        <i className="iconfont icon-search"></i>
        <input type="text" className="inp" placeholder="搜索商品" />
      </div>
    );
  }
}

export default Search;
