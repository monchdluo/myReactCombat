//引入axios
import axios from 'axios';
const baseURL = 'http://localhost:3000';
//创建axios的实例
const axiosInstance = axios.create({
  baseURL, //公共的请求路径前缀
  timeout: 20000, //请求超时时间
  headers: {
    //公共请求头参数
  }
});
//请求拦截器
axiosInstance.interceptors.request.use(config => {
  //设置公共的参数
  //处理post请求
  if (config.method === 'post') {
    config.data = Object.keys(config.data)
      .reduce((p, c) => {
        p += `&${c}=${config.data[c]}`;
        return p;
      }, '')
      .slice(1);
    config.headers['content-type'] = 'application/x-www.form-urlencoded';
  }
  return config;
});
//响应拦截器
axiosInstance.interceptors.response.use(
  //成功响应
  response => {
    /**
     *
     * 成功返回成功的project
     * 失败返回失败的promise
     */
    return response.data;
  }
);

export default axiosInstance;
