import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

export default class Swiper extends Component {
  state = {
    data: ['1', '2', '3', '4', '5'],
    imgHeight: 185
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          '31e77563da87061c9225cc5c7501ff24',
          'bb870899ca5123429639e5e29567e069',
          '1c7a4c411a418792722defad273aa4fa',
          '42ad3b25dedc0ed434f1b7974b4c8ae3',
          '17eeabe4eb21cec7a18ab12fd86876b5'
        ]
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel autoplay={false} infinite>
          {this.state.data.map(val => (
            <a
              key={val}
              href="###"
              style={{
                display: 'inline-block',
                width: '100%',
                height: this.state.imgHeight
              }}
            >
              <img
                src={`https://yanxuan.nosdn.127.net/${val}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
