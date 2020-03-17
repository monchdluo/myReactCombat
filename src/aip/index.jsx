// 写接口
// 引入axios
import axiosInstance from './requese';

// 首页
export const reqHome = () =>
  axiosInstance({
    method: 'GET',
    url: '/home'
  });

// 分类左侧
export const reqClassLeft = () => {
  return axiosInstance({
    method: 'GET',
    url: '/classify'
  });
};
