import React, { Component } from 'react';
import './css/index.less';

export default class Buy extends Component {
  touchStart = event => {
    document.getElementById('container').style.transition = null;
    this.startX = event.targetTouches[0].clientX;
    this.evelX = this.translateX;
  };
  touchMove = event => {
    this.endX = event.targetTouches[0].clientX;
    this.disX = this.startX - this.endX;
    this.translateX = this.evelX + this.disX;
    document.getElementById('container').style.transform =
      'translateX(' + -this.translateX + 'px)';
  };
  touchEnd = event => {
    document.getElementById('container').style.transition = 'all .5s';
    if (this.translateX < 0) {
      this.active = 0;
      this.translateX = 0;
      document.getElementById('container').style.transform = 'translateX(0)';
    } else if (this.translateX > 88.75 * 4) {
      this.active = 4;
      this.translateX = 88.75 * 4;
      document.getElementById('container').style.transform =
        'translateX(' + -88.75 * 4 + 'px)';
    } else if (this.translateX > 88.75 * 3) {
      this.active = 3;
      this.translateX = 88.75 * 3;
      document.getElementById('container').style.transform =
        'translateX(' + -this.translateX + 'px)';
    } else if (this.translateX > 88.75 * 2) {
      this.active = 2;
      this.translateX = 88.75 * 2;
      document.getElementById('container').style.transform =
        'translateX(' + -this.translateX + 'px)';
    } else if (this.translateX > 88.75) {
      this.active = 1;
      this.translateX = 88.75;
      document.getElementById('container').style.transform =
        'translateX(' + -this.translateX + 'px)';
    } else {
      this.active = 0;
      this.translateX = 0;
      document.getElementById('container').style.transform = 'translateX(0)';
    }
  };
  render() {
    return (
      <div className="main">
        {/* <!-- 头部 --> */}
        <header className="header">
          <a href="###" className="home">
            <i className="iconfont icon-shangcheng"></i>
          </a>
          <h1 className="title">值得买</h1>
          <div className="right">
            <a href="###" className="searchBox">
              <i className="iconfont icon-search"></i>
            </a>
            <a href="###">
              <i className="iconfont icon-gouwuche- gouwuche"></i>
            </a>
          </div>
        </header>
        {/* <!-- nav --> */}
        <div className="nav">
          <div className="nav-top">
            <img
              src="https://yanxuan.nosdn.127.nettopic_logo.c2284970.png?imageView&quality=65&thumbnail=120x120"
              alt=""
              className="login"
            ></img>
            <h2 className="nav-title">严选好物 用心生活</h2>
          </div>
          <div
            className="nav-bottom"
            onClick={this.touchStart}
            onClick={this.touchMove}
            onClick={this.touchEnd}
          >
            <div className="nav-bottom-con" id="container">
              <div className="nav-item">
                <div className="nav-item-con">
                  <a href="###" className="item">
                    <img
                      src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"
                      alt=""
                    />
                    <div>
                      <div className="item-title">123</div>
                      <div className="nav-text">321</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-item-con">
                  <a href="###" className="item">
                    <img
                      src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"
                      alt=""
                    />
                    <div>
                      <div className="item-title">123</div>
                      <div className="nav-text">321</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-item-con">
                  <a href="###" className="item">
                    <img
                      src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"
                      alt=""
                    />
                    <div>
                      <div className="item-title">123</div>
                      <div className="nav-text">321</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-item-con">
                  <a href="###" className="item">
                    <img
                      src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"
                      alt=""
                    />
                    <div>
                      <div className="item-title">123</div>
                      <div className="nav-text">321</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-item-con">
                  <a href="###" className="item">
                    <img
                      src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"
                      alt=""
                    />
                    <div>
                      <div className="item-title">123</div>
                      <div className="nav-text">321</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-item-con">
                  <a href="###" className="item">
                    <img
                      src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"
                      alt=""
                    />
                    <div>
                      <div className="item-title">123</div>
                      <div className="nav-text">321</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-item-con">
                  <a href="###" className="item">
                    <img
                      src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"
                      alt=""
                    />
                    <div>
                      <div className="item-title">123</div>
                      <div className="nav-text">321</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-item-con">
                  <a href="###" className="item">
                    <img
                      src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"
                      alt=""
                    />
                    <div>
                      <div className="item-title">123</div>
                      <div className="nav-text">321</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-item-con">
                  <a href="###" className="item">
                    <img
                      src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"
                      alt=""
                    />
                    <div>
                      <div className="item-title">123</div>
                      <div className="nav-text">321</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-item-con">
                  <a href="###" className="item">
                    <img
                      src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"
                      alt=""
                    />
                    <div>
                      <div className="item-title">123</div>
                      <div className="nav-text">321</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-bar">
            <span
              v-for="index in [0, 1, 2, 3, 4]"
              className="{active: active == index }"
            ></span>
          </div>
        </div>
        {/* <!-- 瀑布流 --> */}
        <div className="waterfall">
          <div className="flow-left">
            <div className="fall-con">
              <img
                alt=""
                src="https://yanxuan.nosdn.127.net/87f3077c32a6946ae644f6a6a8205fc1.png?imageView&thumbnail=345y191.66666666666669&quality=95"
              />
            </div>
            <div className="fall-con">
              <img
                alt=""
                src="https://yanxuan.nosdn.127.net/5b2e1993394e8aefe43f554a2a23a1b7.jpg?imageView&thumbnail=345y345&quality=95"
              />
              <div className="fall-title">3月必买好物，一起来拥抱春天吧</div>
              <div className="fall-bottom">
                <div className="fall-bottom-left">
                  <img
                    alt=""
                    v
                    src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                    className="touxiang"
                  />
                  <span className="fall-text">选妹</span>
                </div>
                <div className="fall-bottom-right">
                  <img src="./imgs/eyes.png" className="eyes" alt="" />
                  <span className="fall-text">119k</span>
                </div>
              </div>
            </div>
            <div className="fall-con">
              <img
                alt=""
                src="https://yanxuan.nosdn.127.net/9ddeeb47160b4af2da78d889f64571dc.jpg?imageView&thumbnail=345y345&quality=95"
              />
              <div className="fall-title">
                带加热功能的饭盒，在公司也能吃上自家饭
              </div>
              <div className="fall-bottom">
                <div className="fall-bottom-left">
                  <img
                    alt=""
                    src="http://yanxuan.nosdn.127.net/3ba7a99d5b4e18db22696f5293b5daed.jpg?imageView&quality=65&thumbnail=48y48"
                    className="touxiang"
                  />
                  <span className="fall-text">网易有道：莉莉</span>
                </div>
                <div className="fall-bottom-right">
                  <img alt="" src="./imgs/eyes.png" className="eyes" />
                  <span className="fall-text">43k</span>
                </div>
              </div>
            </div>
            <div className="fall-con">
              <img
                alt=""
                src="https://yanxuan.nosdn.127.net/fde4127ee9b91a4ddab278cc032ed97b.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
              />
              <div className="fall-title">3月8日，致敬平凡又英勇的自己</div>
              <div className="fall-bottom">
                <div className="fall-bottom-left">
                  <img
                    alt=""
                    src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                    className="touxiang"
                  />
                  <span className="fall-text">选妹</span>
                </div>
                <div className="fall-bottom-right">
                  <img alt="" src="./imgs/eyes.png" className="eyes" />
                  <span className="fall-text">58k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flow-right">
            <div className="fall-con">
              <img
                alt=""
                src="https://yanxuan.nosdn.127.net/805d9c90bff5401197160c64765a9cf5.jpg?imageView&thumbnail=345y345&quality=95"
              />
              <div className="fall-title">
                如期而至的不止春天，还有严选这杯明前头采茶~
              </div>
              <div className="fall-bottom">
                <div className="fall-bottom-left">
                  <img
                    alt=""
                    src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                    className="touxiang"
                  />
                  <span className="fall-text">选妹</span>
                </div>
                <div className="fall-bottom-right">
                  <img alt="" src="./imgs/eyes.png" className="eyes" />
                  <span className="fall-text">59k</span>
                </div>
              </div>
            </div>
            <div className="fall-con">
              <img
                alt=""
                src="https://yanxuan.nosdn.127.net/935bc1902c88eda09aae5d66ff364560.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
              />
              <div className="fall-title">严选明星日 负离子速干吹风机</div>
              <div className="fall-bottom">
                <div className="fall-bottom-left">
                  <img
                    alt=""
                    src="http://yanxuan.nosdn.127.net/9a6bad0f5c8ccf03c7647cc6f6d5ce43.png?imageView&quality=65&thumbnail=48y48"
                    className="touxiang"
                  />
                  <span className="fall-text">明星商品</span>
                </div>
                <div className="fall-bottom-right">
                  <img alt="" src="./imgs/eyes.png" className="eyes" />
                  <span className="fall-text">1563</span>
                </div>
              </div>
            </div>
            <div className="fall-con">
              <img
                alt=""
                src="https://yanxuan.nosdn.127.net/b1cda4e6e4b3d22c97c0390ef3ffa360.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
              />
              <div className="fall-title">宅家必囤刚需品大赏</div>
              <div className="fall-bottom">
                <div className="fall-bottom-left">
                  <img
                    alt=""
                    src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                    className="touxiang"
                  />
                  <span className="fall-text">选妹</span>
                </div>
                <div className="fall-bottom-right">
                  <img alt="" src="./imgs/eyes.png" className="eyes" />
                  <span className="fall-text">193k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
